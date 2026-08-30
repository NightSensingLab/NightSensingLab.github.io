# Sustainability Fisheries News and Publication Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 新增一篇开放基金成果新闻和一个完整的论文成果详情，并提供可检查的本地预览。

**Architecture:** 两个 Markdown 条目共享同一组论文原图，复用现有内容集合、列表和详情模板。此任务只更新相互关联的编辑内容，不改应用代码，不发布到远端。

**Tech Stack:** Astro 4、Markdown/YAML frontmatter、Poppler PDF 文本及原图提取。

---

### Task 1: 核对与素材准备

**Files:** `public/images/papers/2026-chenl-sustainability/Fig.1.jpg`、`Fig.2.jpg`、`Fig.4.jpg`、`README.md`。

- [x] 读取正式版 PDF 第 1、6、12–20 页，核对作者、发表日期、图注、统计量、基金和结论边界。
- [x] 用 `pdfimages -f 3 -l 3 -j`、`-f 6 -l 6 -j`、`-f 13 -l 13 -j` 提取完整 JPEG；检查三张图后复制到上述目录，记录来源及许可。

### Task 2: 两个内容条目

**Files:** `src/content/news/2026-08-30-sustainability-fisheries-open-fund.md`、`src/content/publications/2026-chenl-sustainability.md`。

- [x] 新闻采用成果概况、研究问题、主要发现、基金与意义、期刊和论文信息结构；写明完整合作机构及三项基金编号，配原图并链接论文详情。
- [x] Publications 遵循 `src/content/config.ts`，录入九位作者、2026-08-30、Sustainability、10.3390/su18178881、官方 PDF、八个原文关键词、摘要概述和完整引用。正文解释方法、结果与局限，并链接新闻。
- [x] 逐句核对：Spearman rs = 0.890 与 Geodetector q = 7.8% 不混淆；SST/SSS 贡献不解释为因果；不声称数据、代码已全部开放。

### Task 3: 验证和交付

- [x] 运行 `npm run build`，退出码 0，生成 `/news/2026-08-30-sustainability-fisheries-open-fund/` 和 `/publications/2026-chenl-sustainability/`。
- [x] 检查生成 HTML 的站内链接、图片路径、基金编号和作者数；所有目标文件存在。
- [x] 启动本地预览，检查新闻、论文详情及列表；三张原图能加载，标题与正文可读。
- [x] 运行 `git diff --check` 和 `git status --short`，不混入已有生成文件改动；交付本地预览链接，不提交或推送。

## 验证记录

- 2026-08-31：生产构建成功，共生成 57 个页面；仅有既存浏览器兼容数据库过期提示，没有构建错误。
- 两个详情页及所有三张图片的本地 HTTP 请求均返回 200；元数据、内部链接、基金和关键统计量断言通过。
- 浏览器验证两个详情页图片加载、首屏排版、新闻到论文的跳转；新论文按日期排列在列表首位，标题搜索只显示该论文，Cite 弹窗正确展示完整引用。
- 修正中文括号与加粗结束标记相邻造成的 Markdown 解析问题，最终 HTML 不含未渲染的双星号。
- 独立只读审查无 Critical、Important 或 Minor 问题，确认三张图片与正式版 PDF 内嵌 JPEG 逐字节相同。
- 本地服务：`http://127.0.0.1:4321/`；所有内容保持未提交状态。
