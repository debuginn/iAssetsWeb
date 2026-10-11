#!/usr/bin/env python3
"""Validate institution coverage and exercise the real Hugo localization partial.

Requires Python 3.11+ and Hugo >= 0.147.1. Use --data-only to skip rendering.
All render fixtures live in a temporary directory; the site is not modified.
"""
from __future__ import annotations

import argparse
import copy
import json
import shutil
import subprocess
import tempfile
import tomllib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CATALOG = ROOT / "data/trust_institutions.json"
PARTIAL = ROOT / "layouts/partials/trust/localize.html"
LANGUAGES = ("en", "zh", "zh-hant", "ja", "ko")
ALIASES = {
    "zh-CN": "zh", "zh_Hans": "zh", "zh-Hans-CN": "zh",
    "zh-TW": "zh-hant", "zh-HK": "zh-hant", "zh-MO": "zh-hant",
    "zh-Hant-TW": "zh-hant", "zh-Hant-HK": "zh-hant", "zh-Hant-MO": "zh-hant",
    "tw": "zh-hant", "hk": "zh-hant", "mo": "zh-hant", "sg": "zh-hant",
    "en-US": "en", "en-GB": "en", "ja-JP": "ja", "ko_KR": "ko",
    "fr": "en", "zh-unknown": "en",
}


def validate_data(catalog: dict) -> int:
    if not catalog:
        raise ValueError("The institution catalog must not be empty")
    for src, names in catalog.items():
        if not isinstance(names, dict) or not isinstance(names.get("en"), str) or not names["en"].strip():
            raise ValueError(f"{src}: a nonblank English name is required")
        for lang, name in names.items():
            if lang not in LANGUAGES or (name is not None and not isinstance(name, str)):
                raise ValueError(f"{src}: invalid translation {lang!r}")
    pages = sorted((ROOT / "content").glob("*/_index.md"))
    if not pages:
        raise ValueError("No homepage content found; run this script from a complete checkout")
    count = 0
    for page in pages:
        raw = page.read_text(encoding="utf-8")
        if not raw.startswith("+++\n") or "\n+++" not in raw[4:]:
            raise ValueError(f"{page}: expected TOML front matter")
        home = tomllib.loads(raw[4:].split("\n+++", 1)[0]).get("home", {})
        for items in home.get("trust", {}).get("tracks", {}).values():
            for item in items:
                src = item.get("src", "")
                if src not in catalog:
                    raise ValueError(f"{page}: {src!r} is missing from {CATALOG.name}")
                count += 1
    return count


def fixtures(catalog: dict) -> list[dict]:
    # Deliberately use wrong original names and a different order in each row.
    # This catches index-based matching and accidental fallback to front matter.
    items = [dict(src=src, name="旧名称", alt="Old logo", width=56,
                  href="#unchanged", custom={"keep": True}) for src in catalog]
    trust = {"title": "Keep title", "description": "Keep description", "disabled": False,
             "actions": [{"href": "#unchanged", "label": "Keep action"}],
             "tracks": {"primary": items[::2], "secondary": list(reversed(items[1::2]))}}
    cases = []
    for requested, canonical in {**{x: x for x in LANGUAGES}, **ALIASES}.items():
        expected = copy.deepcopy(trust)
        for row in expected["tracks"].values():
            for item in row:
                names = catalog[item["src"]]
                name = (names.get(canonical) or "").strip() or names["en"].strip()
                item.update(name=name, alt=name)
        cases.append(dict(label=requested, lang=requested, trust=trust,
                          institutions=catalog, expected=expected))
    for missing in (None, "", " \t\n\u3000"):
        cases.append(dict(label=f"blank translation {missing!r}", lang="ja",
                          institutions={"/fixture": {"en": " English Name ", "ja": missing}},
                          trust={"tracks": {"primary": [{"src": "/fixture", "name": "不要回退中文"}]}},
                          expected={"tracks": {"primary": [{"src": "/fixture", "name": "English Name", "alt": "English Name"}]}}))
    for trust in ({}, {"title": "No tracks"}, {"tracks": {}}, {"tracks": {"primary": []}}):
        cases.append(dict(label="empty tracks", lang="zh", trust=trust,
                          institutions=catalog, expected=trust))
    return cases


def run_hugo(hugo: str, cases: list[dict], expected_error: bool = False) -> None:
    with tempfile.TemporaryDirectory(prefix="iassets-trust-i18n-") as directory:
        root = Path(directory)
        for path in ("content", "data", "layouts/partials/trust"):
            (root / path).mkdir(parents=True, exist_ok=True)
        (root / "hugo.toml").write_text('baseURL = "https://example.org/"\ndefaultContentLanguage = "en"\n', encoding="utf-8")
        (root / "content/_index.md").write_text('+++\ntitle = "Test"\n+++\n', encoding="utf-8")
        (root / "data/cases.json").write_text(json.dumps(cases, ensure_ascii=False), encoding="utf-8")
        shutil.copyfile(PARTIAL, root / "layouts/partials/trust/localize.html")
        (root / "layouts/index.html").write_text('''{{- range site.Data.cases -}}
  {{- $before := jsonify .trust -}}
  {{- $actual := partial "trust/localize.html" . -}}
  {{- if ne (jsonify $actual) (jsonify .expected) -}}
    {{- errorf "Institution localization fixture failed: %s" .label -}}
  {{- end -}}
  {{- if ne $before (jsonify .trust) -}}
    {{- errorf "Localization mutated its input: %s" .label -}}
  {{- end -}}
{{- end -}}
<!doctype html><html><body>Institution i18n fixtures passed.</body></html>
''', encoding="utf-8")
        result = subprocess.run([hugo, "--source", str(root), "--quiet"],
                                capture_output=True, text=True, timeout=60)
        output = result.stdout + result.stderr
        if expected_error:
            if result.returncode == 0 or "requires an English name" not in output:
                raise RuntimeError(f"Missing English fallback did not fail as expected:\n{output}")
        elif result.returncode:
            raise RuntimeError(f"Hugo localization fixtures failed:\n{output}")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--data-only", action="store_true", help="Validate catalog and homepage coverage without Hugo")
    args = parser.parse_args()
    catalog = json.loads(CATALOG.read_text(encoding="utf-8"))
    count = validate_data(catalog)
    print(f"Catalog and front matter: {len(catalog)} institutions, {count} homepage entries checked")
    if args.data_only:
        return
    hugo = shutil.which("hugo")
    if not hugo:
        raise SystemExit("Hugo is required for render tests. Install Hugo >= 0.147.1 or use --data-only.")
    cases = fixtures(catalog)
    run_hugo(hugo, cases)
    for names in ({}, {"en": ""}, {"en": " \t"}):
        run_hugo(hugo, [dict(label="missing English", lang="zh", institutions={"/fixture": names},
                            trust={"tracks": {"primary": [{"src": "/fixture"}]}}, expected={})], expected_error=True)
    print(f"Hugo render tests: {len(cases)} positive fixtures and 3 missing-English cases passed")


if __name__ == "__main__":
    main()
