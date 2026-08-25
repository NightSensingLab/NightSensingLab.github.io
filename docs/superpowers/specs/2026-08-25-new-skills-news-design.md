# 两项新 Skill 合并新闻设计

## 目标

在 NightSensingLab 官网发布一篇合并新闻，介绍 2026 年 8 月新增的两个 skill：

- `GEE Tile Temporal Mosaic`（2026-08-10）
- `PPT Screenshot to Editable PPTX`（2026-08-25）

文章需要让读者快速理解两个工具分别解决什么问题、适合哪些研究工作流，以及如何获取和使用；同时通过技术示意图提升可读性。

## 内容结构

新闻使用现有 `news` 内容集合，不修改内容 schema 或页面组件。Frontmatter 约定如下：

- 标题：`夜感实验室发布两项新 skill：从遥感影像镶嵌到可编辑 PPTX 重建`
- 日期：`2026-08-25`
- `featured: true`
- 标签包含：`Skill 发布`、`Google Earth Engine`、`遥感影像`、`PPTX`、`科研工作流`
- `pictures` 按总览图、GEE 示意图、PPT 示意图顺序排列

正文结构：

1. 发布概况：说明两个 skill 的发布时间和互补关系。
2. GEE Tile Temporal Mosaic：介绍最少 tile 集合、局部云量与覆盖率、日期协调、重叠处理、可追溯输出，以及 JavaScript/Python-geemap 后端。
3. PPT Screenshot to Editable PPTX：介绍批量输入清点、主要文字原生可编辑、复杂视觉资产保真、16:9 输出、逐页渲染和交付验证。
4. 从数据到表达的工作流：用一个遥感研究流程串联“影像选择与镶嵌”到“成果汇报重建”。
5. 获取方式：分别给出 GitHub 仓库、源码下载地址、安装命令和 MIT 许可证说明。

语气保持事实性和技术新闻风格，不夸大自动化能力，不暗示仓库包含 Earth Engine 凭证、私有数据或用户输入素材。

## 配图方案

在 `public/images/news/2026-08-25-new-skills/` 下提供三张 SVG 技术插图：

1. `skills-workflow-overview.svg`：展示“研究问题 → GEE 影像选择 → 时间协调镶嵌 → PPT 分层重建 → 可复用成果”的总览流程，作为新闻列表首图。
2. `gee-tile-temporal-mosaic.svg`：展示研究区与 tile footprint、候选场景、日期协调和质量排序的关系。
3. `ppt-screenshot-to-editable-pptx.svg`：展示背景视觉层、原生文字层、结构验证和最终渲染之间的分层流程。

图形应使用清晰的中文/英文短标签、有限的颜色和足够的留白，保证在新闻列表裁切缩略图和详情页放大查看时都能辨识。图片只承载辅助说明，关键事实必须同时出现在正文中。

## 验收标准

- `src/content/news/` 新增一篇合并新闻，frontmatter 通过现有 `news` schema。
- 三张图片均能从新闻详情页和新闻列表页正常加载，列表首图为总览图。
- 文章准确区分两个 skill 的职责、输入输出和安装位置，仓库链接与文件名可点击。
- 不修改现有新闻、数据产品或公共页面行为。
- `npm run build` 成功完成，Astro 内容校验无错误。
- 生产构建后新闻详情页包含标题、日期、摘要、标签、三张配图和完整正文。
