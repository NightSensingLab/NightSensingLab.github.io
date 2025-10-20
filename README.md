# NightSensingLab Website

这是 NightSensingLab 实验室的官方网站，使用 Astro 构建并部署在 GitHub Pages 上。

## 技术栈

- **框架**: Astro 4.x
- **样式**: Tailwind CSS
- **内容管理**: Astro Content Collections
- **部署**: GitHub Pages + GitHub Actions
- **图标**: Lucide Static

## 功能特性

- 🌙 深色/浅色主题切换
- 📱 响应式设计
- 🔍 内容搜索和过滤
- 📊 论文、项目、人员管理
- 📈 数据产品展示
- 📰 新闻动态发布
- 🎨 现代化UI设计

## 本地开发

### 环境要求

- Node.js 18+ 
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:4321` 查看网站。

### 构建生产版本

```bash
npm run build
```

构建文件将输出到 `dist/` 目录。

## 内容管理

### 添加论文

在 `src/content/publications/` 目录下创建新的 Markdown 文件：

```markdown
---
title: "论文标题"
authors: ["作者1", "作者2"]
year: 2024
venue: "期刊名称"
doi: "10.xxx/xxx"
pdf: "/papers/paper.pdf"
code: "https://github.com/xxx"
tags: ["标签1", "标签2"]
featured: true
abstract: "论文摘要"
bibtex: "@article{...}"
---
```

### 添加项目

在 `src/content/projects/` 目录下创建新的 Markdown 文件：

```markdown
---
title: "项目名称"
description: "项目描述"
status: "ongoing" # 或 "completed"
startDate: "2024-01-01"
endDate: "2024-12-31" # 可选
members: ["成员1", "成员2"]
tags: ["标签1", "标签2"]
cover: "/images/projects/project.jpg" # 可选
links:
  paper: "/publications/related-paper"
  code: "https://github.com/xxx"
  demo: "https://demo.example.com"
---
```

### 添加人员

在 `src/content/people/` 目录下创建新的 Markdown 文件：

```markdown
---
name: "姓名"
role: "PI" # PI, Postdoc, PhD, Master, Alumni
affiliation: "所属机构"
avatar: "/images/people/name.jpg" # 可选
bio: "个人简介"
researchInterests: ["研究方向1", "研究方向2"]
links:
  orcid: "0000-0000-0000-0000"
  scholar: "https://scholar.google.com/xxx"
  github: "https://github.com/xxx"
  website: "https://xxx.com"
---
```

### 添加数据产品

在 `src/content/data-products/` 目录下创建新的 Markdown 文件：

```markdown
---
title: "产品名称"
description: "产品描述"
type: "dataset" # dataset, model, tool, indicator
tags: ["标签1", "标签2"]
version: "v1.0"
lastUpdated: "2024-12-01"
downloadUrl: "https://data.example.com/download"
citation: "引用格式"
license: "MIT"
documentation: "https://docs.example.com"
---
```

### 添加新闻

在 `src/content/news/` 目录下创建新的 Markdown 文件：

```markdown
---
title: "新闻标题"
date: "2024-12-01"
excerpt: "新闻摘要"
featured: true
tags: ["标签1", "标签2"]
---
```

## 部署

### GitHub Pages 部署

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 "GitHub Actions" 作为部署源
4. 每次推送到 `main` 分支时，GitHub Actions 会自动构建和部署

### 自定义域名

如需使用自定义域名：

1. 在 `astro.config.mjs` 中修改 `site` 配置
2. 在仓库根目录创建 `CNAME` 文件，内容为你的域名
3. 在域名服务商处配置 CNAME 记录指向 `nightsensinglab.github.io`

## 目录结构

```
src/
├── components/          # 可复用组件
│   ├── SiteHeader.astro
│   ├── SiteFooter.astro
│   └── ThemeToggle.astro
├── content/            # 内容集合
│   ├── config.ts       # 内容集合配置
│   ├── publications/   # 论文
│   ├── projects/       # 项目
│   ├── people/         # 人员
│   ├── data-products/  # 数据产品
│   └── news/           # 新闻
├── layouts/            # 页面布局
│   └── BaseLayout.astro
├── pages/              # 页面路由
│   ├── index.astro     # 首页
│   ├── about.astro     # 关于页面
│   ├── publications/   # 论文页面
│   ├── projects/       # 项目页面
│   ├── people/         # 人员页面
│   ├── data-products/  # 数据产品页面
│   └── news/           # 新闻页面
└── styles/             # 全局样式
    └── global.css
```

## 自定义配置

### 修改主题色彩

编辑 `tailwind.config.cjs` 中的 `brand` 颜色配置：

```javascript
colors: {
  brand: {
    50: '#f2f6ff',
    // ... 其他颜色
    900: '#112d79'
  }
}
```

### 修改网站信息

编辑 `src/layouts/BaseLayout.astro` 中的网站标题和描述。

### 修改导航菜单

编辑 `src/components/SiteHeader.astro` 中的 `nav` 数组。

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request 来改进网站。

## 联系方式

- 邮箱: contact@nightsensinglab.org
- 网站: https://nightsensinglab.github.io
