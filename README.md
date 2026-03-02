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
