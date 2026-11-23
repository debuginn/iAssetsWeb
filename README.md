# iAssetsWeb

iAssets 官网落地页（SparkMemos 风格蓝白渐变版）。

## 预览

在当前目录执行：

```bash
python3 -m http.server 8080
```

然后访问：

- `http://localhost:8080/`
- `http://localhost:8080/zh`
- `http://localhost:8080/zh-hant`
- `http://localhost:8080/en`
- `http://localhost:8080/ja`
- `http://localhost:8080/ko`

## 多语言

与 iAssets App 保持一致：

- `zh-Hans`（简体中文）
- `zh-Hant`（繁體中文）
- `en`
- `ja`
- `ko`

页面支持：

- 浏览器语言自动匹配
- 导航栏手动切换
- URL `?lang=` 参数与语言目录入口

## 官网价格排期

价格表由 Pebble 主题渲染。官网的常规价格放在 `config/_default/languages.toml`（中国大陆构建的中文覆盖在 `config/cn/languages.toml`），排期放在 `data/pricing_schedule.toml`。价格与各语言页面现有的 App Store 链接地区对应。

排期表名由官网语言代码和方案组成，例如 `[[zh.lifetime]]`（简中终身）或 `[[en.yearly]]`（英文年付）。按现有方案币种填入不带币种符号的金额。导入 App Store Connect 排期时，按 Apple 生效时刻表把日期转换成对应商店的 UTC 时刻。

```toml
[[zh.lifetime]]
starts_at = "2027-01-01T00:00:00+08:00"
ends_at = "2027-01-08T00:00:00+08:00"
price = "38"
original_price = "68"
```

开始时间包含在时段内，结束时间不包含。省略 `ends_at` 表示持续生效。同一语言的同一方案时段可以紧邻，不能重叠。省略 `original_price` 会在该时段隐藏划线价。时段外使用语言配置中的价格和划线价。

排期随网站发布，之后浏览器按设备时间自动更新价目表。关闭 JavaScript 时使用语言配置中的价格。未来价格包含在静态页面数据中，请在价格可公开时发布排期。全球站和中国大陆站共用这份配置，实际扣款以 App 内购买页面为准。
