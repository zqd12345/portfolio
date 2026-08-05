# 朱启东 · 个人简历作品集网站

## 🌐 线上地址

**https://zqd12345.github.io/portfolio/**

（任何人打开这个链接即可查看；更新内容后 push 到 main 分支，网站会自动更新）

一个纯静态、离线可用的个人简历作品集网站。深色电影感设计，暖金色点缀，适配手机与电脑。

## 快速开始

1. 直接双击打开 `index.html` 即可在浏览器中浏览（无需安装任何软件、无需联网）。
2. 视频、剧本、图片均为本地文件，离线也能播放与查看。
3. 视频已压缩为 720P 网页版（7 个视频共约 78MB），加载快，适合直接部署上线。

## 目录结构

```
portfolio/
├── index.html            # 网站首页（所有内容在一个页面）
├── css/style.css         # 样式
├── js/main.js            # 交互逻辑 + 作品数据
└── assets/
    ├── videos/           # 7 个 AI 视频作品（720P 压缩版）
    ├── scripts/          # 3 个分镜剧本（docx）
    ├── posters/          # 视频封面图
    └── images/
        ├── ai/           # AI 概念图 / 分镜资产（WebP 优化版）
        └── design/       # 视觉设计作品（VI、广告、文创，WebP 优化版）
```

## 如何更新内容

所有作品数据都在 `js/main.js` 顶部的 `WORKS` 数组里，按需增删即可：

| 类型 | 说明 |
| --- | --- |
| `video` | AI 视频作品，`file` 指向 `assets/videos/` 下的视频，`poster` 指向封面图 |
| `script` | 分镜剧本，`file` 指向 `assets/scripts/` 下的 docx |
| `image`（`cat:"asset"`） | AI 概念图 / 分镜资产 |
| `image`（`cat:"design"`） | 视觉设计作品 |

新增文件后，把文件放进对应 `assets` 子目录，再在 `WORKS` 里加一条记录即可。

简历正文（个人概述、技能、工作经历、项目、教育等）直接编辑 `index.html` 里对应区块。

## 部署到 GitHub Pages（免费）

### 第一步：把网站上传到 GitHub

方式 A：GitHub Desktop（最简单，推荐）
1. 下载并安装 GitHub Desktop（https://desktop.github.com），登录你的 GitHub 账号。
2. 菜单 File → Add local repository → 选择本文件夹（`D:\codex工作文件夹\portfolio`）。
3. 点 Publish repository，仓库名可写 `portfolio`，选 Public（公开，免费 Pages 必需）。
4. 点 Publish 完成上传。

方式 B：命令行
```
cd D:\codex工作文件夹\portfolio
git add -A
git commit -m "简历作品集网站"
git remote add origin https://github.com/你的用户名/portfolio.git
git branch -M main
git push -u origin main
```
（需要先在 GitHub 网页上新建一个空的 Public 仓库，名字叫 portfolio）

### 第二步：开启 Pages 服务
1. 打开仓库页面 → 点 Settings（设置）。
2. 左侧找到 Pages（页面）。
3. Source 选 "Deploy from a branch"，分支选 `main`，目录选 `/ (root)`，点 Save。
4. 等 1~2 分钟，出现网址：`https://你的用户名.github.io/portfolio/`

### 第三步：分享
把这个网址发给别人，手机电脑直接点开就能看。

> 提示：以后每次更新内容，把新文件复制到文件夹里，在 GitHub Desktop 里 Commit + Push 即可自动更新网站。

## 部署到腾讯云 COS / 阿里云 OSS（国内访问更快，可选）

如果希望国内朋友打开更流畅，可把整个 `portfolio` 文件夹上传到对象存储并开启"静态网站托管"：
- 注册腾讯云 / 阿里云账号 → 开通对象存储（COS/OSS）→ 创建 Bucket（地域选离你近的，如上海）→ 权限设为"公有读" → 上传整个文件夹 → 开启"静态网站托管"功能。
- 完成后会得到默认访问网址（形如 `https://xxxx.cos-website.ap-shanghai.myqcloud.com`），无需备案即可分享；若绑定自己的域名才需要 ICP 备案。
- 费用很低（约几元/月），适合访问量不大的作品集。

## 联系方式

- 电话：17630571207
- 邮箱：1433805257@qq.com
- QQ：1433805257