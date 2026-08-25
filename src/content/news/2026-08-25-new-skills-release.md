---
title: "夜感实验室发布两项新 skill：从遥感影像镶嵌到可编辑 PPTX 重建"
date: "2026-08-25"
excerpt: "夜感实验室近期发布 GEE Tile Temporal Mosaic 与 PPT Screenshot to Editable PPTX 两项新 skill，分别面向研究级遥感影像镶嵌和图片版幻灯片可编辑重建，覆盖科研工作流中的数据准备与成果表达环节。"
featured: true
tags: ["Skill 发布", "Google Earth Engine", "遥感影像", "PPTX", "科研工作流"]
pictures: [
  "/images/news/2026-08-25-new-skills/skills-workflow-overview.svg",
  "/images/news/2026-08-25-new-skills/gee-tile-temporal-mosaic.svg",
  "/images/news/2026-08-25-new-skills/ppt-screenshot-to-editable-pptx.svg"
]
---

## 两项 skill 面向同一条研究链路

2026 年 8 月，夜感实验室连续发布两项面向科研工作流的新 skill：**GEE Tile Temporal Mosaic** 和 **PPT Screenshot to Editable PPTX**。两项工具分别处理研究数据生产与成果表达中的高频问题：前者帮助研究者从 Sentinel-2 或 Landsat 影像中构建空间完整、低云量、日期尽量协调的研究区镶嵌结果；后者帮助研究者将高清 PPT 截图、扫描版幻灯片或整页图片还原为主要文字可编辑的 16:9 PPTX。

它们并不是同一种工具的两个版本，而是覆盖相邻环节的两个专业化 skill。前者关注“选哪景影像、为什么这样选以及结果能否追溯”，后者关注“如何保留原始视觉效果，同时让标题、正文、关键数字和页码可以继续修改”。从数据准备到成果汇报，两个 skill 共同组成了一条更完整的科研生产链路。

![两个 skill 串联研究数据与成果表达的工作流总览](/images/news/2026-08-25-new-skills/skills-workflow-overview.svg)

## GEE Tile Temporal Mosaic：让影像镶嵌更可解释

在 Google Earth Engine 中处理较大研究区时，研究区可能跨越多个 Sentinel-2 或 Landsat tile。简单地对影像集合执行跨日期 `median` 或 `qualityMosaic`，虽然能够快速得到一幅结果，却容易把不同日期的像元混在一起，也难以解释每个区域最终来自哪一景影像。对于需要控制云量、覆盖率和时间一致性的研究，这种隐式的逐像元选择并不理想。

**GEE Tile Temporal Mosaic** 从研究区所需的最少几何 tile 集合出发，为每个 tile 保留多景日期候选，再联合评估不同 tile 的组合。它在研究区与 tile 的相交范围内计算局部云量、清晰比例、云影比例和 footprint 覆盖率，并使用日期差、云量和覆盖率等条件对组合进行可解释的质量排序。

### 核心能力

- 根据 tile footprint 的增量覆盖面积确定尽可能少的 tile 集合，减少重复计算和不必要的影像拼接。
- 在局部研究区范围内评估云量、云影和覆盖率，而不是只依赖整景影像的元数据。
- 保留多个基础 tile 的日期候选，联合评估影像组合，避免先贪心固定单一日期。
- 支持 `priority_mosaic` 与 `exclusive_tile` 两种重叠处理模式，明确 tile 优先级和 masked 区域语义。
- 输出预览图、选景报告和 handoff 脚本，记录 scene ID、日期、局部云量、覆盖率以及 fallback/status。

![GEE Tile Temporal Mosaic 选景与日期协调示意图](/images/news/2026-08-25-new-skills/gee-tile-temporal-mosaic.svg)

该 skill 同时支持 **GEE Code Editor JavaScript** 和 **Python/geemap** 后端。两种后端共享同一套 tile 选择、scene ID、掩膜和优先级逻辑，研究者可以根据已有代码环境选择输出形式。工具不会静默扩大时间范围：如果没有满足约束的组合，会明确返回 `incomplete_masked` 或 `no_solution`，便于后续调整研究条件。

使用时需要提供 ROI、数据集、时间范围、覆盖率和云量阈值，并说明需要的代码后端。仓库不包含 Earth Engine 凭证、Cloud Project ID、ROI asset 或其他私有数据。

## PPT Screenshot to Editable PPTX：保留视觉，也保留编辑能力

图片版或扫描版幻灯片经常包含复杂地图、遥感影像、图表和纹理。把整页截图直接放进 PowerPoint，视觉上很容易保持一致，但标题、正文、页码和关键数字都会失去编辑能力；如果完全依靠人工重画，又会带来大量排版和对照成本。

**PPT Screenshot to Editable PPTX** 采用“复杂视觉保真 + 主要文字可编辑”的分层策略。标题、正文、关键数字、结论、注释、页脚和页码使用 PowerPoint 原生文本框；地图、遥感影像、照片、复杂图标、纹理和复杂图表主体则使用源图裁切，以保持原始页面的视觉一致性，并在不可编辑元素清单中登记。

### 从输入清点到交付验证

- 对全部输入页面进行自然顺序清点，按预期页数检查输入完整性。
- 为整批页面建立结构计划，区分可编辑信息层与需要保真的复杂视觉资产层。
- 将所有页面写入同一个 16:9 PPTX，避免只生成第一页或拆分为多个独立文件。
- 使用验证脚本检查页数、原生文本、XML 结构、媒体关系和整页图片候选。
- 从最终保存的 PPTX 全量渲染页面，生成逐页对照图、总览、QA 报告及可编辑/不可编辑元素清单。
- 在交付前核对输入页数、PPTX 页数和渲染页数，确保交付的是最新、完整且经过验证的版本。

![PPT Screenshot to Editable PPTX 分层重建示意图](/images/news/2026-08-25-new-skills/ppt-screenshot-to-editable-pptx.svg)

该 skill 可用于还原包含地图、遥感影像、复杂图表或密集技术汇报版式的页面，适合需要在保持原稿视觉风格的基础上继续修改、复用和协作的场景。它支持 **OpenAI Codex**、**Claude Code** 和项目级 `.agents/skills` 安装；PPT 渲染可使用 LibreOffice、Microsoft PowerPoint 或可用的演示文稿渲染运行时。

输入截图、生成的 PPTX 和私有素材均由使用者提供，仓库只包含还原规范、验证脚本和相关工具文件。

## 从影像选择到成果表达

两个 skill 的共同点，是把原本依赖经验或重复点击的步骤拆成可检查的中间结果。GEE Tile Temporal Mosaic 将 tile 集合、scene 候选、日期差和质量指标保留下来，使研究者能够解释镶嵌结果的来源；PPT Screenshot to Editable PPTX 则将页面结构、文字层、视觉资产和渲染结果分别验证，使交付的 PPTX 不只是“看起来像”，也能继续编辑和复用。

对于一个典型的遥感研究项目，可以先用 GEE Tile Temporal Mosaic 生成满足空间覆盖、低云量和时间协调要求的影像产品，再将研究结果或既有汇报截图交给 PPT Screenshot to Editable PPTX，获得可编辑、可复核的演示文稿。两个 skill 不会替代研究者对数据和结论的判断，但可以把关键的准备、重建和质检步骤变得更清晰。

## 获取与安装

### GEE Tile Temporal Mosaic

- [GitHub 仓库](https://github.com/NightSensingLab/gee-tile-temporal-mosaic)
- [下载源码](https://github.com/NightSensingLab/gee-tile-temporal-mosaic/archive/refs/heads/main.zip)
- MIT License

安装为 Codex skill：

```bash
git clone https://github.com/NightSensingLab/gee-tile-temporal-mosaic.git \
  ~/.codex/skills/gee-tile-temporal-mosaic
```

安装完成后，在任务中显式调用 `$gee-tile-temporal-mosaic`。

### PPT Screenshot to Editable PPTX

- [GitHub 仓库](https://github.com/NightSensingLab/ppt-screenshot-to-editable-pptx)
- [下载源码](https://github.com/NightSensingLab/ppt-screenshot-to-editable-pptx/archive/refs/heads/main.zip)
- MIT License

OpenAI Codex 安装方式：

```bash
git clone https://github.com/NightSensingLab/ppt-screenshot-to-editable-pptx.git \
  ~/.codex/skills/ppt-screenshot-to-editable-pptx
```

Claude Code 可安装到 `~/.claude/skills/ppt-screenshot-to-editable-pptx`；需要固定项目版本时，也可以安装到项目的 `.agents/skills` 目录。使用时提供输入截图目录、预期页数、目标文件名和输出目录，skill 会先完成环境预检和输入清点，再进行整批重建、结构验证、全量渲染与交付验证。
