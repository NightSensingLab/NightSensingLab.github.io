---
title: "MacCtrlCVA"
description: "Lightweight macOS menu bar utility that remaps Windows-style Ctrl shortcuts to native macOS Command shortcuts, helping users keep common editing, app switching, and input source switching habits when moving between Windows and macOS."
type: "tool"
tags: ["macOS", "Menu Bar", "Keyboard Shortcuts", "Accessibility", "Swift"]
version: "2.0.0"
lastUpdated: "2026-05-22"
downloadUrl: "https://github.com/NightSensingLab/MacCtrlCVA/releases/latest"
documentation: "https://github.com/NightSensingLab/MacCtrlCVA"
---

## Tool Overview

MacCtrlCVA is a lightweight macOS menu bar app for users who frequently switch between Windows and macOS. It maps familiar Windows-style shortcut habits to native macOS commands, so common editing operations can continue to feel natural on a Mac.

The app runs in the macOS menu bar and works system-wide after Accessibility permission is granted.

## Key Features

- Remaps `Control + C/V/X/A/Z` to native macOS editing shortcuts.
- Supports configurable `Fn + C/V/X/A/Z` mappings in v2.0.0.
- Supports choosing shortcut mappings from the menu bar.
- Remaps `Option + Tab` to `Command + Tab` for Windows-style app switching.
- Uses `Control + Shift` to switch to the next enabled input source.
- Uses physical key codes, helping shortcuts work across input methods such as English and Chinese Pinyin.
- Supports enable / disable controls and launch-at-login from the menu bar.

## Installation

1. Download the latest `.dmg` from the GitHub Releases page.
2. Open the DMG and drag `MacCtrlCVA.app` into `Applications`.
3. Launch the app.
4. If macOS blocks first launch, right-click `MacCtrlCVA.app`, choose **Open**, and confirm the security prompt.
5. Grant Accessibility permission in **System Settings > Privacy & Security > Accessibility**.

## Technical Notes

MacCtrlCVA uses a global Quartz Event Tap to listen for keyboard events system-wide. When a supported shortcut is detected, the original event is suppressed and a synthetic event with the corresponding macOS modifier is posted.

For input source switching, the app uses macOS input source APIs directly instead of simulating characters, making `Control + Shift` switching more reliable across keyboard layouts and input methods.

## Links

- **GitHub Repository**: https://github.com/NightSensingLab/MacCtrlCVA
- **Latest Release**: https://github.com/NightSensingLab/MacCtrlCVA/releases/latest
