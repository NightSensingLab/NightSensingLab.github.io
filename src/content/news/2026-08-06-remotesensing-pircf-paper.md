---
title: "团队论文在 Remote Sensing 发表：以残差级联框架评估建筑单体垂直光暴露"
date: "2026-08-06"
excerpt: "团队最新研究提出物理信息残差级联框架（PIRCF），利用二维多源地理空间数据实现可扩展的建筑单体垂直光暴露评估，并在广州和上海验证了模型性能与跨城市迁移潜力。"
featured: true
tags: ["论文发表", "Remote Sensing", "夜间灯光遥感", "光暴露", "图神经网络"]
pictures: [
  "/images/news/2026-08-06-remotesensing-pircf-paper/paper-cover.png",
  "/images/papers/2026-shixh-rs/Fig.4.png",
  "/images/papers/2026-shixh-rs/Fig.6.png",
  "/images/papers/2026-shixh-rs/Fig.11.png"
]
---

## 成果概况

2026 年 8 月 6 日，团队论文 **“Assessing Individual-Building Vertical Light Exposure in Urban Environments with a Residual Cascade Framework”** 在国际期刊 **Remote Sensing** 正式发表。

论文由史湘华、凌振翔、郑子豪、陈应标、钱庆兰、吴志峰、王晋年和高峰共同完成，郑子豪为通讯作者。研究面向高密度城市中建筑立面夜间光暴露难以大范围精细评估的问题，提出了物理信息残差级联框架（Physics-Informed Residual Cascade Framework，PIRCF）。

## 研究背景

传统二维夜间灯光遥感主要观测道路、屋顶等水平表面的上行辐亮度，难以直接刻画建筑立面及不同楼层受到的夜间光照。三维城市模型和视域分析能够补足这一垂直维度，但详细三维数据与重复几何计算带来的高成本，限制了其在城市尺度上的推广。

因此，研究需要在二维观测的可扩展性和三维模拟的精细度之间建立一条更高效的技术路径。

## 方法创新

PIRCF 利用 SDGSAT-1 多光谱夜间灯光数据及建筑、道路、地形、人口和地表环境等多源地理空间信息，将与光暴露相关的几何特征、距离衰减、空间拓扑和环境遮挡作为模型的归纳偏置。

框架首先通过图神经网络学习相邻建筑之间的空间关系，再利用 XGBoost 对局部残差进行校正，从而兼顾城市尺度的空间关联和局地环境差异。论文中的“物理信息”并非在损失函数中直接求解物理控制方程，而是将光传播相关知识融入特征与模型结构。

![PIRCF 技术框架](/images/papers/2026-shixh-rs/Fig.4.png)

## 主要结果

- 在广州测试区，模型对全色光暴露和蓝光暴露的 R² 分别达到 **0.78** 和 **0.85**，优于所选统计基线模型。
- 将广州训练的模型直接迁移到上海、且不进行额外训练或参数调整时，两类光暴露的 R² 仍达到 **0.70** 和 **0.73**。
- 全色光暴露呈现与道路网络相关的连续梯度，蓝光暴露则在商业节点和高强度垂直开发区域附近表现出更为碎片化的局部聚集。

![PIRCF 在广州测试区的模型表现](/images/papers/2026-shixh-rs/Fig.6.png)

![PIRCF 在上海中心城区的零样本迁移评估](/images/papers/2026-shixh-rs/Fig.11.png)

## 研究意义

该研究为建筑尺度的城市垂直光暴露评估提供了可扩展方案，可用于大范围快速筛查并识别需要进一步开展现场调查或精细三维模拟的重点区域，为城市照明评估、光污染治理和精细化夜间环境管理提供技术支持。

论文信息：*Remote Sensing*, 2026, 18(15), 2621。DOI：[10.3390/rs18152621](https://doi.org/10.3390/rs18152621)。

[查看论文详情](/publications/2026-shixh-rs/) · [访问期刊页面](https://www.mdpi.com/2072-4292/18/15/2621)
