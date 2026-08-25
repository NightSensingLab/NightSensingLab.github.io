# 两项新 Skill 合并新闻 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在现有 Astro 新闻集合中发布一篇介绍 `GEE Tile Temporal Mosaic` 与 `PPT Screenshot to Editable PPTX` 的合并新闻，并配套三张可缩放的技术示意图。

**Architecture:** 复用 `src/content/news` 的 Markdown 内容模型，不改动 schema、新闻列表页或详情页。三张独立 SVG 放入新闻专属图片目录，由 frontmatter 的 `pictures` 字段提供列表首图与详情页图库，正文内按章节再次引用对应图示并配说明。

**Tech Stack:** Astro content collections, Markdown, inline SVG assets, npm build.

---

### Task 1: Create the technical illustrations

**Files:**
- Create: `public/images/news/2026-08-25-new-skills/skills-workflow-overview.svg`
- Create: `public/images/news/2026-08-25-new-skills/gee-tile-temporal-mosaic.svg`
- Create: `public/images/news/2026-08-25-new-skills/ppt-screenshot-to-editable-pptx.svg`

- [x] **Step 1: Add the overview workflow SVG**

  Create a 1400x680 SVG with a neutral background, five connected stages, and concise labels: “研究问题”, “Tile / Scene 选择”, “日期协调镶嵌”, “分层 PPTX 重建”, “可复用成果”. Use blue/green accents for the geospatial stages and amber/red accents for the presentation stages. Include the two skill names as small labels under their corresponding stages.

- [x] **Step 2: Add the GEE decision SVG**

  Create a 1400x760 SVG showing an ROI polygon crossed by three tile footprints, four candidate scene cards with date/cloud/coverage values, and a final selected combination. Add arrows and labels for “局部云量”, “日期差”, “覆盖率”, and “质量排序”; include a small note that tile/scene/date provenance is retained.

- [x] **Step 3: Add the PPT reconstruction SVG**

  Create a 1400x760 SVG showing an input slide screenshot entering a three-layer reconstruction stack: “复杂视觉资产”, “原生可编辑文字”, “结构与渲染 QA”, then a final editable 16:9 PPTX output. Use a clear layer diagram and callouts for title/body/page number editability and full-batch page-count verification.

- [x] **Step 4: Check the SVG assets**

  Run `file public/images/news/2026-08-25-new-skills/*.svg` and inspect the first 20 lines of each file. Expected: all three files are valid SVG documents with `viewBox` dimensions and no external image references.

### Task 2: Write the combined news item

**Files:**
- Create: `src/content/news/2026-08-25-new-skills-release.md`

- [x] **Step 1: Add frontmatter matching the news schema**

  Set `title`, `date: "2026-08-25"`, `excerpt`, `featured: true`, five tags, and `pictures` in the order overview, GEE diagram, PPT diagram. Use absolute site paths beginning with `/images/news/2026-08-25-new-skills/`.

- [x] **Step 2: Write the article body**

  Add sections for release overview, each skill’s problem and capabilities, the end-to-end “data to expression” workflow, and access instructions. Link the two GitHub repositories and source archives, include the exact `git clone` commands from their data-product pages, and state the MIT license. Keep claims aligned with the existing data-product Markdown and explicitly note that Earth Engine credentials, private assets, and user screenshots are not bundled.

- [x] **Step 3: Embed the three diagrams in the matching sections**

  Place the overview diagram after the release overview, the GEE diagram after its capability section, and the PPT diagram after its capability section. Give each image a descriptive Chinese alt-style caption in the Markdown preceding line.

- [x] **Step 4: Validate content links and paths**

  Run `rg -n "GEE Tile Temporal Mosaic|PPT Screenshot to Editable PPTX|2026-08-25-new-skills" src/content/news/2026-08-25-new-skills-release.md` and confirm both repository links and all three image paths are present.

### Task 3: Build and verify the news page

**Files:**
- Modify: generated Astro content metadata only if the build updates it; do not manually edit generated files.

- [x] **Step 1: Run the production build**

  Run `npm run build` from `NightSensingLab.github.io/`. Expected: Astro completes content validation and static generation without errors.

- [x] **Step 2: Verify generated routes and assets**

  Check that `dist/news/2026-08-25-new-skills-release/index.html` exists and that all three SVGs exist under `dist/images/news/2026-08-25-new-skills/`.

- [x] **Step 3: Inspect the generated page references**

  Run `rg -n "夜感实验室发布两项新 skill|skills-workflow-overview|gee-tile-temporal-mosaic|ppt-screenshot-to-editable-pptx" dist/news/2026-08-25-new-skills-release/index.html`. Expected: title and all three asset paths are present.

- [x] **Step 4: Commit the implementation**

  Run `git add src/content/news/2026-08-25-new-skills-release.md public/images/news/2026-08-25-new-skills docs/superpowers/plans/2026-08-25-new-skills-news.md && git commit -m "feat: publish new skills news article"`.
