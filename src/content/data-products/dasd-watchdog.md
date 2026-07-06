---
title: "dasd Watchdog"
description: "面向 macOS beta dasd 内存泄漏问题的菜单栏工具与后台 LaunchDaemon，可实时显示 dasd 内存占用、设置阈值，并在持续超限时自动终止进程。"
type: "tool"
tags: ["macOS", "Menu Bar App", "LaunchDaemon", "Memory Monitor", "Swift"]
version: "0.1.0"
lastUpdated: "2026-07-05"
downloadUrl: "https://github.com/NightSensingLab/dasd-watchdog/releases/download/v0.1.0/DasdWatchdogMenu.dmg"
documentation: "https://github.com/NightSensingLab/dasd-watchdog"
license: "MIT"
---

## 工具简介

dasd Watchdog 是一款面向 macOS 的菜单栏工具与后台守护程序组合，用于监测 macOS beta 版本中 `dasd` 进程可能出现的内存泄漏问题。菜单栏应用可以显示实时 `dasd` 内存占用，并允许用户设置自动处理阈值；后台 watchdog 以 root LaunchDaemon 形式运行，用于读取更接近 Activity Monitor 的 `phys_footprint` 内存指标，并在进程持续超过阈值时执行终止操作。

该工具主要作为临时缓解方案使用，适合在 macOS beta 测试环境中观察、控制 `dasd` 异常内存占用，待 Apple 修复相关问题后可卸载 LaunchDaemon。

## 主要功能

- 在 macOS 菜单栏中显示 `dasd` 实时内存占用
- 区分 `Activity Monitor footprint` 与 `RSS fallback` 数据来源
- 支持用户自定义内存终止阈值
- 通过 root LaunchDaemon 在后台监控 `dasd`
- 当 `dasd` 连续多次超过阈值时自动终止进程
- 使用共享 JSON 配置与状态文件，便于菜单栏应用读取后台状态

## 安装方法

1. 从 GitHub Releases 下载 `DasdWatchdogMenu.dmg`。
2. 打开 DMG 并运行 `Dasd Watchdog Menu.app`。
3. 在菜单栏应用中选择 **Install/Update Background Watchdog...**。
4. 按 macOS 提示输入管理员密码，安装后台 LaunchDaemon。

也可以从源码目录通过命令行安装：

```sh
cd scripts
sudo ./install.sh
```

## 配置说明

阈值配置保存在：

```text
~/Library/Application Support/DasdWatchdog/config.json
```

示例配置：

```json
{
  "threshold_mb": 4096
}
```

后台 watchdog 状态保存在：

```text
~/Library/Application Support/DasdWatchdog/status.json
```

当 root watchdog 未安装或状态过期时，菜单栏应用会回退到 RSS 指标，并用 `~` 标记该读数。

## 卸载方法

```sh
cd scripts
sudo ./uninstall.sh
```

如果需要同时移除日志与保存的配置：

```sh
sudo REMOVE_LOGS=1 REMOVE_CONFIG=1 ./uninstall.sh
```

## 技术信息

- **版本**: 0.1.0
- **平台**: macOS
- **类型**: Menu bar utility + LaunchDaemon
- **主要语言**: Swift / Shell / Python
- **源码仓库**: https://github.com/NightSensingLab/dasd-watchdog
