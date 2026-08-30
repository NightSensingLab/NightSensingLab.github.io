---
title: "Uneven Fisheries Observability Across the Western Pacific: Implications of Nighttime Light–AIS Integration for Sustainable Fisheries Monitoring"
authors: ["Lei Chen", "Chun Wang", "Guangyuan Liu", "Zhenxiang Ling", "Zheng Cao", "Qifei Zhang", "Zhifeng Wu", "Zhicheng Yang", "Zihao Zheng*"]
year: 2026
publishedDate: "2026-08-30"
venue: "Sustainability"
doi: "10.3390/su18178881"
pdf: "https://mdpi-res.com/d_attachment/sustainability/sustainability-18-08881/article_deploy/sustainability-18-08881.pdf"
tags: ["nighttime-light remote sensing", "VIIRS–DNB", "Automatic Identification System (AIS)", "fishing-light intensity", "light-attracted fisheries", "fisheries monitoring", "coastal surveillance", "oceanographic variables"]
featured: true
abstract: "Integrates monthly VIIRS–DNB observations, AIS-derived fishing effort, and oceanographic variables for 2017–2020 to compare fisheries observability across East Asian and Southeast Asian coastal waters. Regional differences in fishing-light patterns, AIS correspondence, and model-inferred environmental associations show why optical and vessel-tracking observations should be interpreted together, with explicit attention to coverage and modeling uncertainty."
citation: |
  Chen, L., Wang, C., Liu, G., Ling, Z., Cao, Z., Zhang, Q., Wu, Z., Yang, Z., & Zheng, Z. (2026). Uneven fisheries observability across the western Pacific: Implications of nighttime light–AIS integration for sustainable fisheries monitoring. Sustainability, 18(17), 8881. https://doi.org/10.3390/su18178881
---

## 论文概况

本研究由自然资源部南海遥感测绘协同应用技术创新中心、广州大学地理科学与遥感学院和德国奥尔登堡大学相关研究人员共同完成。Lei Chen 为第一作者，[郑子豪老师](/people/zhengzihao/)为通讯作者（作者列表中以 * 标注）。论文发表于 *Sustainability*, 18(17), 8881，发表日期为 2026 年 8 月 30 日。

论文是自然资源部南海遥感测绘协同应用技术创新中心开放研究基金 **RSSMCA-2024-B007** 支持的成果之一。

## 摘要概述

公开 AIS 数据对不同近海区域灯光捕捞活动的记录可能并不均衡，VIIRS–DNB 夜间灯光遥感则提供了互补的光学观测。本研究将 2017—2020 年的月度夜间灯光、AIS 捕捞努力量和海洋环境数据统一到区域比较框架中，分析东亚与东南亚近海的捕捞灯光格局、两类观测之间的时空对应关系及模型推断的环境关联。

结果表明，东亚呈现连续的高强度捕捞灯光带和夏秋季峰值，东南亚则更为碎片化且春季峰值更突出。东南亚鱿钓活动与灯光强度在时间上高度同步，但空间解释力有限。所选环境变量中，海表温度和海表盐度分别在东亚、东南亚模型中的贡献最高。研究建议结合光学与船舶追踪观测，并明确报告数据覆盖、灯光检测、空间采样和模型假设带来的不确定性。

## 研究区与数据

研究以西太平洋东亚、东南亚近海为比较区域，包括日本海、黄海、东海、南海及印度尼西亚群岛周边海域。两类观测关注的对象并不相同：VIIRS–DNB 测量海上光源辐亮度，AIS 则记录配备并传输相应信号的船舶活动。

![西太平洋东亚与东南亚近海研究范围（原文 Figure 1）](/images/papers/2026-chenl-sustainability/Fig.1.jpg)

研究数据覆盖 **2017—2020 年**，主要包括：

- **VIIRS–DNB：** 48 期月度夜间灯光合成影像，用于提取捕捞相关灯光，分析空间分布和季节、年际变化。
- **Global Fishing Watch AIS 数据：** 按渔具类型分类的捕捞努力量记录，用于比较刺网、延绳钓、围网、鱿钓和拖网等类别与灯光观测的对应关系。
- **CMEMS 海洋环境数据：** 海表温度、海表高度、海表盐度、东西向与南北向表层流速、溶解氧、混合层深度及叶绿素 a 浓度，共八类变量。

## 分析框架

研究首先通过近岸缓冲、固定海上光源剔除及滤波等处理，减少沿岸城市、港口和海上设施灯光的干扰，再分析捕捞灯光的密度分布、时空热点与重心迁移。

随后，研究结合空间差异指数、空间误差模型、Spearman 秩相关和地理探测器，从空间对应、局部关联、时间同步和空间解释力等不同维度比较 AIS 与 VIIRS 观测。最后，使用 MaxEnt 模型，按区域及高峰、非高峰时段分析环境关联与灯光出现的相对潜势。

![灯光时空格局、AIS 对应关系与环境关联的三阶段分析框架（原文 Figure 2）](/images/papers/2026-chenl-sustainability/Fig.2.jpg)

## 主要发现

### 灯光格局与季节变化存在区域差异

东亚近海呈现较为连续的高强度捕捞灯光带，峰值主要在夏秋季；东南亚近海呈现更为分散、碎片化的空间格局，春季峰值更突出。两区域的季节错位属于研究期内的描述性比较，并非对所有年份或全部捕捞活动的普遍判断。

![东亚与东南亚捕捞灯光的月度序列、季节周期、年度强度及面积（原文 Figure 4）](/images/papers/2026-chenl-sustainability/Fig.4.jpg)

### 时间同步不等于空间完整对应

东南亚鱿钓活动与 VIIRS 捕捞灯光强度的月度序列高度同步，Spearman **rs = 0.890（p < 0.001）**；但鱿钓活动密度分层对灯光空间异质性的解释力有限，Geodetector **q = 7.8%（p < 0.001）**。两个指标分别衡量时间共同变化与空间差异解释能力，不能相互替代，也不能将 q 值理解为 AIS 的船舶覆盖率。

AIS 与灯光观测的差异可能反映潜在覆盖缺口，也可能来自船队构成、灯光强度、时空聚合及实际作业差异。研究不能单独确定其中哪种原因占主导，更不据此识别非法捕捞。

### 环境关联随区域而不同

在所选环境变量集合中，海表温度（SST）对东亚 MaxEnt 模型的贡献最高；海表盐度（SSS）对东南亚模型的贡献最高。四种区域与时段组合的平均 AUC 约为 **0.78**，表明模型具有中等程度的出现点与背景区分能力，适合比较区域环境关联，而不应据此宣称实现了精确的单点预测。

## 研究意义与适用边界

该框架将渔业“可观测性”作为多源观测之间的比较问题，为识别 AIS 记录与卫星灯光之间的潜在差异提供方法参考，可服务于南海及周边海域的监测评估。

需要注意，灯光强度并非渔获量或船舶数量的直接测量，环境变量的模型贡献也不代表因果效应。研究仍受 AIS 覆盖不均、灯光检测阈值与残余干扰、空间自相关、变量相关性及随机训练验证划分等因素影响；2017—2020 年的结果不能直接说明 2020 年之后的变化。

## 基金支持

- **自然资源部南海遥感测绘协同应用技术创新中心开放研究基金：RSSMCA-2024-B007。**
- **国家自然科学基金：42401432、42571537。**

## 数据可用性

原始输入数据来自 Earth Observation Group、Global Fishing Watch 和 Copernicus Marine Service 的公开数据源。按照论文声明，研究生成的处理后数据目前未公开共享，因其仍用于后续研究，可向通讯作者提出合理请求。

## 原文与相关报道

本页配图为 Chen 等（2026）论文的 Figure 1、2、4，直接提取自正式发表版 PDF，未作修改，按 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 许可使用。

[期刊原文](https://www.mdpi.com/2071-1050/18/17/8881) · [开放获取 PDF](https://mdpi-res.com/d_attachment/sustainability/sustainability-18-08881/article_deploy/sustainability-18-08881.pdf) · [团队新闻：开放基金成果](/news/2026-08-30-sustainability-fisheries-open-fund/)
