---
title: "DDolomitesWpaper"
description: "轻量级 Windows 托盘应用，可自动从多洛米蒂山或其他地区的网络摄像头更新桌面壁纸。支持自定义摄像头源、更新间隔和壁纸样式，包含交互式地图浏览功能。"
type: "tool"
tags: ["Windows", "壁纸", "网络摄像头", "桌面工具", "Python"]
version: "v1.1"
lastUpdated: "2025-11-08"
downloadUrl: "https://github.com/zhengzihao/DDolomitesWpaper/releases"
documentation: "https://github.com/zhengzihao/DDolomitesWpaper"
license: "MIT"
---

## 工具简介

DDolomitesWpaper 是一款轻量级 Windows 托盘应用，可以自动从多洛米蒂山或其他地区的网络摄像头获取实时图像并更新为桌面壁纸。程序在后台静默运行，通过系统托盘图标进行控制。

## 主要功能

### 🖼️ 自动更新壁纸
- 每隔设定时间自动获取最新的摄像头图像（默认每小时第 01 分，罗马时间）
- 自动更新桌面壁纸，无需手动操作

### ⚙️ 可自定义设置
- **自定义摄像头地址**：支持从 megacam.at 或 foto-webcam.eu 等平台选择摄像头
- **更新间隔**：可选择 10 分钟、30 分钟、1 小时或自定义间隔
- **壁纸样式**：支持填充、拉伸或平铺三种显示方式

### 🗺️ 交互式摄像头浏览（v1.1 新增）
- 在交互式地图上浏览可用摄像头
- 支持多种地图图层：标准地图、卫星图、地形图、深色/浅色主题
- 点击摄像头标记查看详情，一键复制或使用摄像头 URL

### 🪟 Windows 托盘集成
- 后台静默运行，系统托盘显示图标
- 右键菜单提供快速操作：
  - 立即更新壁纸
  - 打开最新图片
  - 打开日志文件夹
  - 设置（更改 URL、设置间隔、浏览摄像头、壁纸样式）
  - 关于和退出

### 📦 轻量便携
- 单一 `.exe` 文件，无需安装
- 优化的构建过程，文件体积小
- 即下即用，绿色软件

## 摄像头数据源

支持从以下平台选择摄像头：

- **Megacam**: https://www.megacam.at/
- **Foto-Webcam**: https://www.foto-webcam.eu/

## 使用方法

1. 下载并运行 `DDolomitesWpaper.exe`
2. 程序会在系统托盘中显示图标
3. 右键点击图标打开菜单
4. 在设置中配置摄像头 URL、更新间隔和壁纸样式
5. 使用"浏览摄像头"功能在地图上选择摄像头
6. 壁纸将按照设定的时间间隔自动刷新

## 技术信息

- **开发语言**: Python
- **主要依赖**: pystray, PIL, win32api
- **打包工具**: PyInstaller
- **许可证**: MIT License
- **开发者**: Maguamale (zhengzh@email.com)

## 版本历史

### Version 1.1
- 大幅减小可执行文件体积
- 新增交互式摄像头浏览功能
- 支持多种地图图层和主题

## 相关链接

- **GitHub 仓库**: https://github.com/zhengzihao/DDolomitesWpaper
- **下载地址**: https://github.com/zhengzihao/DDolomitesWpaper/releases
- **问题反馈**: 通过 GitHub Issues 提交
