# Information Geography 青年编委新闻设计

## 目标

在 NightSensingLab 官网发布一篇中文新闻，报道郑子豪老师入选《Information Geography（信息地理学）》第三届青年编委，并用附件所示信息对期刊作简要、准确的介绍。

## 事实边界

- 任职事实来自 2026 年 8 月 17 日发布的第三届青年编委名单：名单共 22 人，郑子豪列名其中，单位为广州大学。
- 期刊资料来自附件中的期刊介绍页及官方 ISSN/ScienceDirect 信息：Information Geography 为英文、开放获取、同行评审期刊，eISSN 3050-5208，2023 年创刊，南京师范大学主办、Elsevier 出版，关注信息地理学、环境与可持续发展交叉研究。
- 不把附件中的二维码、投稿广告、版面费说明、投稿指南和页面装饰作为新闻事实。
- 不在稿件中声称期刊已被某个数据库收录，除非在官方来源中能明确核实。

## 内容结构

1. 标题聚焦郑子豪老师入选第三届青年编委。
2. 开头交代名单发布时间、入选身份和 22 人名单背景。
3. 期刊简介说明创刊背景、出版模式、主办/出版单位、ISSN 和研究范围。
4. 结合郑子豪老师的夜间灯光遥感、城市环境感知和地理信息研究方向，说明该任职与团队研究工作的关联，但不夸大任职带来的实际成果。
5. 结尾写团队将继续参与学术交流、服务青年学者成长和推进信息地理学交叉研究。

## 页面实现

- 新增 `src/content/news/2026-08-17-information-geography-youth-editorial-board.md`。
- 新增附件配图到 `public/images/news/2026-08-17-information-geography-youth-editorial-board/`：青年编委名单截图、期刊封面/介绍截图。
- 复用现有 `news` schema 和新闻详情页，不修改组件和数据结构。
- `pictures` 首图使用青年编委名单截图，正文中再展示期刊介绍图。

## 验收标准

- 新闻 frontmatter 通过 Astro `news` schema，日期为 `2026-08-17`，标签包含“青年编委”“Information Geography”“期刊动态”。
- 正文准确写出郑子豪、广州大学、第三届青年编委、22 人名单、eISSN 3050-5208、2023 年创刊、南京师范大学主办和 Elsevier 出版等可核实信息。
- 新闻页和新闻列表页能加载两张图片，图片无外部依赖。
- `npm run build` 成功，生成 `/news/2026-08-17-information-geography-youth-editorial-board/` 路由。
