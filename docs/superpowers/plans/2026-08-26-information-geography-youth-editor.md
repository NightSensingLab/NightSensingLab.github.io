# Information Geography 青年编委新闻 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在 Astro 新闻集合中发布郑子豪老师入选《Information Geography》第三届青年编委的中文新闻，并附上附件中的名单与期刊介绍图片。

**Architecture:** 复用现有 `news` Markdown schema；从用户提供的 PDF 截图中提取两张 JPEG，存放在新闻专属目录，由 frontmatter 的 `pictures` 字段驱动新闻列表和详情页展示。正文只写附件与官方来源可核实的信息，不修改页面组件。

**Tech Stack:** Astro content collections, Markdown, Poppler/pdfimages, JPEG assets, npm build.

---

### Task 1: Prepare source images

**Files:**
- Create: `public/images/news/2026-08-17-information-geography-youth-editorial-board/editorial-board-announcement.jpg`
- Create: `public/images/news/2026-08-17-information-geography-youth-editorial-board/journal-profile.jpg`

- [x] **Step 1: Extract the PDF screenshot images**

  Use `pdfimages -j` on both attachments. Copy the full first PDF screenshot to `editorial-board-announcement.jpg`; use the first journal-introduction screenshot segment containing the journal title, cover, and founding information as `journal-profile.jpg`.

- [x] **Step 2: Verify image dimensions and visual content**

  Run `file public/images/news/2026-08-17-information-geography-youth-editorial-board/*.jpg` and inspect both images with the image viewer. Expected: readable JPEG images with no clipping; the first shows the 22-person list and Zheng Zihao/Guangzhou University, the second shows the Information Geography cover and profile text.

### Task 2: Write the news article

**Files:**
- Create: `src/content/news/2026-08-17-information-geography-youth-editorial-board.md`

- [x] **Step 1: Add news frontmatter**

  Set title, `date: "2026-08-17"`, excerpt, `featured: true`, tags `青年编委`, `Information Geography`, `期刊动态`, `学术服务`, and the two image paths, with the editorial-board image first.

- [x] **Step 2: Write fact-grounded sections**

  Add sections for the appointment announcement, the journal profile, the connection with Zheng Zihao's research, and the team's outlook. State that the third board includes 22 scholars and that Zheng Zihao is listed with Guangzhou University. For the journal, state eISSN 3050-5208, 2023 founding, open access, Nanjing Normal University as host, Elsevier as publisher, and the information geography/environment/sustainability scope. Do not include QR codes, fee promotions, or unsupported indexing claims.

- [x] **Step 3: Link official references**

  Link the [ScienceDirect journal page](https://www.sciencedirect.com/journal/information-geography) and the [ISSN record](https://portal.issn.org/resource/ISSN-L/3050-5208) in a reference paragraph.

### Task 3: Validate and commit

**Files:**
- Modify: generated Astro metadata only if `npm run build` updates it; do not manually edit generated files.

- [x] **Step 1: Run targeted content checks**

  Run `rg -n "郑子豪|第三届青年编委|22|3050-5208|Information Geography|2026-08-17" src/content/news/2026-08-17-information-geography-youth-editorial-board.md` and confirm both image paths and official links are present.

- [x] **Step 2: Build the site**

  Run `npm run build`. Expected: Astro content validation passes and `/news/2026-08-17-information-geography-youth-editorial-board/index.html` is generated.

- [x] **Step 3: Verify generated assets**

  Check that the news route and both JPEGs exist under `dist/`, then inspect the generated HTML for the title and image paths.

- [x] **Step 4: Commit only task files**

  Run `git add docs/superpowers/plans/2026-08-26-information-geography-youth-editor.md src/content/news/2026-08-17-information-geography-youth-editorial-board.md public/images/news/2026-08-17-information-geography-youth-editorial-board && git commit -m "feat: publish Information Geography youth editor news"`.
