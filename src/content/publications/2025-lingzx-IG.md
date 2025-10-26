---
title: "A dual-perspective evaluation framework for urban light exposure: integrating top-down visibility and bottom-up occlusion"
authors: ["Zhengxiang Ling", "Xianxin Meng", "Zihao Zheng*", "Zheng Cao","Zhongwen Hu","Benyan Jiang","Guanhua Guo","Yingbiao Chen","Zhifeng Wu"]
year: 2025
venue: "Information Geography"
doi: "10.1016/j.infgeo.2025.100031"
pdf: "/public/papers/2025-LingZX-IG.pdf"
tags: ["dual-perspective", "light pollution", "SDGSAT-1"]
featured: true
abstract: "Proposes a dual-perspective framework to quantify street lighting exposure level."
citation: |
  Ling, Z., Meng, X., Zheng, Z., Cao, Z., Hu, Z., Jiang, B., ... & Wu, Z. (2025). A dual-perspective evaluation framework for urban light exposure: integrating top-down visibility and bottom-up occlusion. Information Geography, 100031.
---

## 研究背景

城市光污染评估是城市规划和环境管理的重要环节。传统的城市光污染评估方法主要基于卫星遥感数据的自上而下视角，但这种方法无法准确反映地面行人的实际光暴露水平。城市中的建筑物、树木等遮挡物会显著影响光线的传播和分布，因此需要结合自下而上的遮挡分析来更准确地评估城市光暴露水平。

## 研究方法

本研究提出了一个双视角的城市光暴露评估框架，整合了自上而下的可见性分析和自下而上的遮挡分析：

1. **自上而下视角**：基于SDGSAT-1卫星数据分析城市夜间灯光分布
2. **自下而上视角**：考虑地面遮挡物对光线传播的影响
3. **双视角融合**：将两种视角的分析结果进行融合，得到更准确的光暴露评估
4. **量化指标**：建立了城市光暴露水平的量化评估指标体系
![双视角评估示意图](/images/papers/2025-lingzx-ig/Fig.4.png)
![双视角评估技术路线图](/images/papers/2025-lingzx-ig/Fig.2.png)


## 主要发现

- **遮挡效应显著**：城市遮挡物对光暴露评估结果产生显著影响
- **空间异质性**：不同区域的光暴露水平存在明显的空间异质性
- **评估精度提升**：双视角框架相比单一视角方法显著提高了评估精度
- **实用性验证**：方法在实际城市区域得到了验证和应用
![DBLEI指数分布](/images/papers/2025-lingzx-ig/Fig.8.png)
![暴露水平&人口的热力分布](/images/papers/2025-lingzx-ig/Fig.12.png)
## 研究意义

本研究为城市光污染评估提供了一种新的方法，具有以下重要意义：

- **科学准确性**：更准确地反映城市居民的实际光暴露水平
- **规划指导**：为城市照明规划和光污染防控提供科学依据
- **政策支持**：为制定城市光污染管理政策提供技术支撑
- **方法创新**：为遥感在城市环境监测中的应用提供了新思路

## 技术特点

- **多源数据融合**：整合卫星遥感和地面观测数据
- **三维建模**：考虑城市三维结构对光线传播的影响
- **自动化处理**：实现了评估过程的自动化和批量化
- **可扩展性**：框架设计具有良好的可扩展性和适应性

## 应用前景

该框架可广泛应用于：

- 城市照明规划和管理
- 光污染监测和评估
- 城市环境质量评价
- 健康影响评估研究