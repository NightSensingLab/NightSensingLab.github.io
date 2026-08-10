---
title: "GEE Tile Temporal Mosaic"
description: "面向 Google Earth Engine 的研究型影像合成 skill，可用尽可能少的 Sentinel-2 或 Landsat tile 构建空间完整、低云量且日期协调的研究区镶嵌结果。"
type: "tool"
tags: ["Google Earth Engine", "Sentinel-2", "Landsat", "Remote Sensing", "Codex Skill"]
lastUpdated: "2026-08-10"
downloadUrl: "https://github.com/NightSensingLab/gee-tile-temporal-mosaic/archive/refs/heads/main.zip"
documentation: "https://github.com/NightSensingLab/gee-tile-temporal-mosaic"
license: "MIT"
---

## 工具简介

GEE Tile Temporal Mosaic 是一个面向 Google Earth Engine 的研究型工作流 skill。它从研究区所需的最少影像 tile 集合出发，为每个 tile 选择一景符合条件的影像，再协调不同 tile 的获取日期，构建空间完整、低云量和时间尽量一致的镶嵌结果。

该工具不是普通的 `qualityMosaic` 教程，也不会默认使用跨日期 `median` 或逐像元自由挑选日期。每个像元都保留明确的 tile、影像和获取日期来源，适合需要可追溯影像选择和研究级质量诊断的遥感工作流。

## 核心能力

- 根据 tile footprint 与研究区的增量覆盖面积确定最少几何 tile 集合，避免重复计算重叠面积。
- 在研究区与 tile 的相交范围内计算局部云量、清晰比例、云影比例和 footprint 覆盖率。
- 保留多个基础 tile 日期候选，联合评估不同 tile 的影像组合，而不是先贪心固定单一日期。
- 使用日期差、云量和覆盖率等硬约束，对最终组合进行可解释的质量排序。
- 支持 `priority_mosaic` 和 `exclusive_tile` 两种重叠处理模式，明确 tile 的优先级与 masked 区域语义。
- 输出预览图、选景报告和可直接复制的 handoff 脚本，包含 scene ID、日期、局部云量、覆盖率和 fallback/status。

## 支持后端

- **GEE Code Editor JavaScript**：输出带有 `Map.addLayer` 和 `print` 的可运行脚本。
- **Python/geemap**：输出 Python 代码、地图预览和相同选景结果的 handoff 代码。
- **两种后端**：保持 tile 选择、scene ID、掩膜和优先级完全一致。

在执行 Earth Engine 查询或生成代码前，工具会先确认使用 GEE Code Editor JavaScript、Python/geemap，还是两者都要。仓库本身不包含 Earth Engine 凭证、Cloud Project ID、ROI asset 或其他私有数据。

## 安装与使用

将仓库安装为 Codex skill：

```bash
git clone https://github.com/NightSensingLab/gee-tile-temporal-mosaic.git \
  ~/.codex/skills/gee-tile-temporal-mosaic
```

然后在任务中显式调用：

```text
$gee-tile-temporal-mosaic
```

使用时需要提供研究区 ROI、数据集、时间范围、覆盖率和云量阈值等条件，并说明期望的代码后端。工具会在满足约束的情况下输出最终 tile/scene 组合；如果没有合格组合，则明确返回 `incomplete_masked` 或 `no_solution`，不会静默扩大时间范围。

## 相关链接

- **GitHub 仓库**: https://github.com/NightSensingLab/gee-tile-temporal-mosaic
- **下载源码**: https://github.com/NightSensingLab/gee-tile-temporal-mosaic/archive/refs/heads/main.zip
- **许可证**: MIT
