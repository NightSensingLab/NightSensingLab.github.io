# Node.js 安装指南

## 问题诊断

您的系统未检测到 Node.js 和 npm，需要先安装 Node.js。

## 安装步骤

### 方法1：从官网下载安装（推荐）

1. **访问 Node.js 官网**
   - 打开浏览器，访问：https://nodejs.org/
   - 或直接访问中文站：https://nodejs.org/zh-cn/

2. **下载 LTS 版本**
   - 选择 **LTS（长期支持版本）**，推荐版本：v20.x 或 v18.x
   - 点击下载 Windows Installer (.msi) 64位版本

3. **运行安装程序**
   - 双击下载的 `.msi` 文件
   - 按照安装向导完成安装
   - **重要**：确保勾选 "Add to PATH" 选项（通常默认已勾选）

4. **验证安装**
   - 关闭当前 PowerShell 窗口
   - 重新打开 PowerShell
   - 运行以下命令验证：
   ```powershell
   node --version
   npm --version
   ```

### 方法2：使用包管理器安装

#### 使用 Chocolatey（如果已安装）

```powershell
choco install nodejs-lts
```

#### 使用 Winget（Windows 10/11 自带）

```powershell
winget install OpenJS.NodeJS.LTS
```

## 安装后验证

安装完成后，**请重新打开 PowerShell**，然后运行：

```powershell
# 检查 Node.js 版本
node --version

# 检查 npm 版本
npm --version

# 如果都显示版本号，说明安装成功
```

## 开始使用项目

安装成功后，在项目目录下运行：

```powershell
# 进入项目目录（如果还没在的话）
cd C:\Users\zheng\Documents\GitHub\NightSensingLab.github.io

# 安装项目依赖
npm install

# 启动开发服务器
npm run dev
```

## 常见问题

### 问题1：安装后仍然提示找不到命令

**解决方案：**
1. 关闭所有 PowerShell 窗口
2. 重新打开 PowerShell
3. 如果还是不行，检查环境变量：
   ```powershell
   $env:PATH
   ```
   应该包含类似 `C:\Program Files\nodejs` 的路径

### 问题2：权限问题

如果遇到权限错误，可以：
1. 以管理员身份运行 PowerShell
2. 或者使用用户目录安装（安装时选择仅当前用户）

### 问题3：版本不兼容

项目要求 Node.js 18+，如果安装的是旧版本，请升级到 LTS 版本。

## 快速检查脚本

运行以下 PowerShell 命令检查 Node.js 是否已正确安装：

```powershell
# 检查 Node.js
if (Get-Command node -ErrorAction SilentlyContinue) {
    Write-Host "✓ Node.js 已安装: $(node --version)" -ForegroundColor Green
} else {
    Write-Host "✗ Node.js 未安装或未添加到 PATH" -ForegroundColor Red
}

# 检查 npm
if (Get-Command npm -ErrorAction SilentlyContinue) {
    Write-Host "✓ npm 已安装: $(npm --version)" -ForegroundColor Green
} else {
    Write-Host "✗ npm 未安装或未添加到 PATH" -ForegroundColor Red
}
```

## 下一步

安装完成后，您就可以：
1. 运行 `npm install` 安装项目依赖
2. 运行 `npm run dev` 启动开发服务器
3. 在浏览器中访问 `http://localhost:4321` 查看网站
4. 查看页脚中间位置的访问统计插件效果

