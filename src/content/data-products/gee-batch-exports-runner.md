---
title: "GEE Batch Exports Runner"
description: "面向 Google Earth Engine Code Editor 的 Chrome 扩展，可一键批量运行当前可见且尚未提交的导出任务，并逐个确认导出弹窗。"
type: "tool"
tags: ["Google Earth Engine", "Chrome Extension", "Batch Export", "Remote Sensing", "JavaScript"]
version: "1.0.0"
lastUpdated: "2026-05-15"
downloadUrl: "https://github.com/NightSensingLab/GEE-batch-exports/releases/download/v1.0.0/gee-batch-exports-runner-1.0.0.zip"
documentation: "https://github.com/NightSensingLab/GEE-batch-exports"
---

![GEE Batch Exports Runner 宣传图](/images/data-products/gee-batch-exports-runner/marquee-promo-tile-1400x560.png)

## 工具简介

GEE Batch Exports Runner 是一款用于 Google Earth Engine Code Editor 的 Chrome 扩展。它通过浏览器扩展弹窗触发批量操作，可以自动点击 Tasks 面板中当前可见、尚未提交的 `RUN` 任务，并在每个导出配置弹窗中完成确认。

该工具适合需要在 Google Earth Engine 中一次性提交多项影像、表格或矢量导出任务的遥感研究工作流，可减少重复点击操作，提高批量导出时的效率。

## 主要功能

- 一键运行 Google Earth Engine Tasks 面板中可见的未提交导出任务
- 自动识别并确认 Earth Engine 导出配置弹窗
- 通过 Chrome 扩展弹窗触发，不向 Earth Engine 页面注入可见按钮或样式
- 支持设置每次确认后的等待时间，默认延迟为 `1500` ms
- 当确认弹窗未找到时自动停止，避免继续误触后续任务

## 使用场景

在 Google Earth Engine 中进行批量遥感数据生产时，常常需要反复点击多个导出任务的 `RUN` 按钮，并逐个确认导出配置。GEE Batch Exports Runner 将这一过程封装到浏览器扩展中，适合夜间灯光、土地覆盖、生态环境指标等多任务批量导出场景。

## 安装方法

1. 下载并解压扩展压缩包。
2. 打开 Chrome 浏览器，进入 `chrome://extensions/`。
3. 开启右上角的 **Developer mode**。
4. 点击 **Load unpacked**。
5. 选择解压后的 `gee-batch-exports-runner` 文件夹。

## 使用方法

1. 打开 [Google Earth Engine Code Editor](https://code.earthengine.google.com/)。
2. 运行脚本，使导出任务出现在 **Tasks** 面板中。
3. 点击浏览器工具栏中的扩展图标。
4. 在 `GEE Batch Run` 弹窗中点击 **Run all**。
5. 保持 Earth Engine 标签页打开，等待任务逐个提交完成。

如果 Earth Engine 响应较慢，可将延迟参数从默认 `1500` ms 调整为 `2000` 或 `3000` ms。

![扩展弹窗界面](/images/data-products/gee-batch-exports-runner/screenshot-1.png)

![批量运行状态界面](/images/data-products/gee-batch-exports-runner/screenshot-2.png)

## 技术说明

当前版本适配 2021 年之后的 Earth Engine Code Editor 任务面板结构。扩展从 `ee-task-pane.shadowRoot` 中读取任务按钮，并从导出配置弹窗的 shadow root 中读取确认按钮。

如果 Google Earth Engine 后续调整界面结构或按钮标签，可能需要更新源码中的 `CONFIRM_LABELS` 配置。

## 版本信息

- **版本**: 1.0.0
- **类型**: Chrome Extension
- **适用平台**: Google Chrome / Chromium-based browsers
