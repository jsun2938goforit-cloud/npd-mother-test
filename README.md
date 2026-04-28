# NPD 母亲匿名自测网站

这是一个纯静态网站，可以直接部署到 GitHub Pages、Netlify、Vercel 或任何静态托管服务。

## 隐私说明

- 不需要登录
- 不收集姓名、电话、微信、邮箱
- 不使用数据库
- 不上传用户答案
- 不保存测试结果
- 不内置统计脚本

所有分数都只在当前浏览器页面里临时计算，刷新页面后就会消失。

## 后续指南交互

结果页的「查看后续指南」不会跳到空链接，而是弹出联系店家的提示。你可以在 `index.html` 的 `guideTemplate` 里把提示文案改成你自己的店铺名称、领取方式或客服话术。

## 本地预览

直接打开 `index.html` 即可预览。

如果你想用本地服务预览，也可以在这个文件夹里运行：

```bash
python3 -m http.server 8080
```

然后打开 `http://localhost:8080`。

## GitHub Pages 部署

1. 新建一个 GitHub 仓库。
2. 把本文件夹里的 `index.html`、`styles.css`、`app.js`、`README.md` 上传到仓库根目录。
3. 在仓库里进入 `Settings` → `Pages`。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待 GitHub 生成访问链接。
