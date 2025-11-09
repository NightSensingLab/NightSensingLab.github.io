# 访问统计插件使用说明

## 功能说明

访问统计插件已添加到网站页脚中间位置，支持两种模式：

### 模式1：简单客户端统计（当前默认）

**特点：**
- ✅ 无需注册，开箱即用
- ✅ 显示当前访问者的地理位置（城市和国家）
- ✅ 显示访问次数（基于localStorage，仅统计当前用户）
- ⚠️ 注意：访问次数只统计当前浏览器，无法跨用户统计

**显示内容：**
- 🌍 访问来源：显示访问者的城市和国家（如：北京, 中国）
- 👁️ 访问次数：显示当前浏览器访问该网站的次数

### 模式2：51.la 统计（推荐用于生产环境）

**特点：**
- ✅ 专业的访问统计服务
- ✅ 支持真实的访问量统计（跨用户）
- ✅ 支持IP来源显示
- ✅ 提供详细的数据分析后台
- ✅ 免费使用

**使用步骤：**

1. 访问 [51.la 官网](https://www.51.la) 注册账号
2. 添加网站，获取站点ID
3. 在 `src/components/SiteFooter.astro` 中修改配置：

```astro
const visitStatsMode = '51la'; // 改为 '51la'
const visitStatsSiteId = '你的站点ID'; // 填写你的51.la站点ID
```

## 配置位置

配置文件：`src/components/SiteFooter.astro`

```astro
// 访问统计配置
const visitStatsMode = 'simple'; // '51la' 或 'simple'
const visitStatsSiteId = ''; // 51.la 站点ID
```

## 其他统计服务选项

如果需要使用其他统计服务，可以修改 `VisitStats.astro` 组件：

### Google Analytics
```astro
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### 百度统计
```astro
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?你的统计代码";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>
```

### 不蒜子统计（简单访问量）
```astro
<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
<span id="busuanzi_container_site_pv">
  本站总访问量 <span id="busuanzi_value_site_pv"></span> 次
</span>
```

## 注意事项

1. **简单模式限制**：当前简单模式使用localStorage，只能统计单个浏览器的访问，无法统计全站真实访问量
2. **IP API限制**：简单模式使用的 `ipapi.co` 免费API有请求频率限制，如果访问量大可能需要使用付费版本
3. **隐私考虑**：显示访问者IP来源信息时，请注意隐私保护相关法规
4. **性能影响**：统计脚本应尽量异步加载，避免影响页面加载速度

## 自定义样式

如果需要调整统计信息的样式，可以修改 `src/components/VisitStats.astro` 中的样式类。

## 故障排查

1. **无法显示访问来源**：检查网络连接，确保可以访问 `ipapi.co` API
2. **51.la 不工作**：确认站点ID是否正确，检查浏览器控制台是否有错误
3. **访问次数不更新**：清除浏览器localStorage后重新访问

