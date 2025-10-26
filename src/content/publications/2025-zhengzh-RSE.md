---
title: "Logic combination and diagnostic rule-based method for consistency assessment and its application to cross-sensor calibrated nighttime light image products"
authors: ["Zihao Zheng", "Qiming Zheng", "Zhifeng Wu*", "Zheng Cao","Hong Zhu","Yingbiao Chen","Benyan Jiang","Yingfeng Guo","Dong Xu", "Francesco Marinello"]
year: 2025
venue: "Remote Sensing of Environment"
doi: "10.1016/j.rse.2025.114598"
pdf: "/public/papers/2025-ZhengZH-RSE.pdf"
tags: ["logic diagnosis", "extended NTL", "temporal consistency"]
featured: true
abstract: "Developed a temporal consistency verification framework for extended NTL products based on logical linking rules"
citation: |
  Zheng, Z., Zheng, Q., Wu, Z., Cao, Z., Zhu, H., Chen, Y., ... & Marinello, F. (2025). Logic combination and diagnostic rule-based method for consistency assessment and its application to cross-sensor calibrated nighttime light image products. Remote Sensing of Environment, 318, 114598.
---

## 研究背景

夜间灯光（NTL）遥感数据在城市化监测、经济发展评估、能源消耗分析等领域具有重要应用价值。然而，不同传感器获取的NTL数据存在系统差异，需要进行跨传感器校准以构建长时间序列数据集。传统的校准方法往往缺乏对数据一致性的有效验证机制，导致校准后的数据在时间序列分析中可能出现不一致性。

## 研究方法

本研究提出了一种基于逻辑组合和诊断规则的跨传感器校准NTL产品一致性评估方法。该方法包括：

1. **逻辑诊断框架**：构建了基于逻辑链接规则的时间一致性验证框架
2. **诊断规则设计**：设计了多层次的诊断规则来识别数据异常
3. **一致性评估**：建立了量化的数据一致性评估指标体系
4. **校准优化**：基于诊断结果优化跨传感器校准参数

![研究方法流程图](/images/papers/2025-zhengzh-rse/Fig.1.png)
![研究方法流情景示意图](/images/papers/2025-zhengzh-rse/Fig.2.png)
![研究方法逻辑链接规则图](/images/papers/2025-zhengzh-rse/Fig.3.png)
## 主要发现

- 成功构建了跨传感器NTL数据的时间一致性验证框架
- 提出的诊断规则能够有效识别数据中的异常和不一致性问题
- 校准后的NTL产品在时间序列上表现出更好的一致性
- 方法在多个典型城市区域得到了验证和应用
![研究结果SNIDfp结果](/images/papers/2025-zhengzh-rse/Fig.6.png)
![研究结果ENTL产品的检测结果](/images/papers/2025-zhengzh-rse/Fig.8.png)

## 研究意义

本研究为NTL遥感数据的质量控制提供了一种新的方法，有助于提高长时间序列NTL数据的可靠性和可用性。该方法不仅适用于NTL数据，还可以扩展到其他类型的遥感数据产品的一致性评估。

## 技术特点

- **逻辑推理**：基于逻辑组合规则进行数据一致性诊断
- **自动化处理**：实现了诊断过程的自动化和批量化处理
- **可扩展性**：框架设计具有良好的可扩展性，可适应不同的数据源和传感器
- **实用性**：方法在实际应用中表现出良好的效果和稳定性