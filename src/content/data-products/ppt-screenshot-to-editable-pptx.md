---
title: "PPT Screenshot to Editable PPTX"
description: "将高清 PPT 截图、扫描版或图片版幻灯片高保真还原为 16:9 PPTX，同时把标题、正文、关键数字和页码等主要文字保留为 PowerPoint 原生文本框。"
type: "tool"
tags: ["PowerPoint", "PPTX", "Presentation", "Codex Skill", "Python"]
lastUpdated: "2026-08-25"
downloadUrl: "https://github.com/NightSensingLab/ppt-screenshot-to-editable-pptx/archive/refs/heads/main.zip"
documentation: "https://github.com/NightSensingLab/ppt-screenshot-to-editable-pptx"
license: "MIT"
---

## 工具简介

PPT Screenshot to Editable PPTX 是一个面向 OpenAI Codex 和 Claude Code 的演示文稿重建 skill。它将高清 PPT 截图、扫描版幻灯片或整页图片还原为一个完整的 16:9 PPTX，并保留主要文字的可编辑性。

工具采用“复杂视觉保真 + 主要文字可编辑”的混合策略：标题、正文、关键数字、结论、注释、页脚和页码使用 PowerPoint 原生文本框；地图、遥感影像、照片、复杂图标、纹理和复杂图表主体使用源图裁切，以保持视觉一致性，并在不可编辑元素清单中登记。

## 适用场景

- 将按页编号的高清 PPT 截图转换成一个完整的可编辑 PPTX。
- 还原扫描版、图片版或整页图片版幻灯片，避免把所有文字压成背景图。
- 重建包含地图、遥感影像、复杂图表或密集技术汇报版式的页面。
- 在交付前逐页渲染、对照，并检查 PPTX 结构、原生文字和交付文件新鲜度。

## 核心功能

- 对全部输入页面进行自然顺序清点，并按预期页数检查输入完整性。
- 为整批页面建立结构计划，区分可编辑信息层与需要保真的复杂视觉资产层。
- 将所有页面写入同一个 16:9 PPTX，避免只生成第一页或拆分成多个独立文件。
- 使用内置验证脚本检查实际页数、原生文本、XML 结构、媒体关系和整页图片候选。
- 从最终保存的 PPTX 全量渲染页面，生成逐页对照图、总览、QA 报告及可编辑/不可编辑元素清单。
- 通过最终交付验证，确保输入页数、PPTX 页数和渲染页数一致，并只交付最新完整的验证版本。

## 支持后端与运行环境

- **OpenAI Codex**：安装到 `~/.codex/skills` 后显式调用。
- **Claude Code**：安装到 `~/.claude/skills` 后显式调用。
- **项目级使用**：需要固定版本时，可安装到项目的 `.agents/skills` 目录。
- **PPT 渲染后端**：支持 LibreOffice、Microsoft PowerPoint 或可用的演示文稿渲染运行时。
- **脚本运行环境**：需要 Python 3；创建 PPTX 使用本地 Presentations runtime 中的 `@oai/artifact-tool`。

该仓库不包含用户截图、凭证、私有素材或生成的 PPTX 文件。宿主项目如果有额外规则，应在项目根目录提供 `AGENTS.md`。

## 安装与使用

### OpenAI Codex

```bash
git clone https://github.com/NightSensingLab/ppt-screenshot-to-editable-pptx.git \
  ~/.codex/skills/ppt-screenshot-to-editable-pptx
```

在任务中显式调用：

```text
$ppt-screenshot-to-editable-pptx
```

### Claude Code

```bash
git clone https://github.com/NightSensingLab/ppt-screenshot-to-editable-pptx.git \
  ~/.claude/skills/ppt-screenshot-to-editable-pptx
```

使用时提供输入截图目录、预期页数、目标文件名和输出目录。skill 会先运行环境预检和输入清点，再完成整批重建、PPTX 结构验证、全量渲染和交付验证。只有全部自动与人工验收门槛通过后，才会交付最新的 `verified_pptx_path`。

## 目录结构

```text
SKILL.md                         核心还原规范
agents/openai.yaml               Codex 界面元数据
references/batch-contract.md     输入、输出、命名和版本契约
references/reconstruction-policy.md
                                 分层、可编辑性、裁切和真实性策略
references/qa-gates.md           渲染、视觉和交付验收门槛
scripts/preflight.py             环境预检
scripts/inventory_inputs.py      输入图片清点
scripts/verify_pptx.py           PPTX 结构与原生文字检查
scripts/verify_delivery.py       最终交付与新鲜度检查
scripts/test_verification.py     验证脚本测试
```

## 许可证与链接

- **GitHub 仓库**: https://github.com/NightSensingLab/ppt-screenshot-to-editable-pptx
- **下载源码**: https://github.com/NightSensingLab/ppt-screenshot-to-editable-pptx/archive/refs/heads/main.zip
- **许可证**: MIT
