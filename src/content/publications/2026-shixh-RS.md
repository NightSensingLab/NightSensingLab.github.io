---
title: "Assessing Individual-Building Vertical Light Exposure in Urban Environments with a Residual Cascade Framework"
authors: ["Xianghua Shi", "Zhenxiang Ling", "Zihao Zheng*", "Yingbiao Chen", "Qinglan Qian", "Zhifeng Wu", "Jinnian Wang", "Feng Gao"]
year: 2026
publishedDate: "2026-08-06"
venue: "Remote Sensing"
doi: "10.3390/rs18152621"
pdf: "https://www.mdpi.com/2072-4292/18/15/2621/pdf"
tags: ["artificial light at night", "vertical light exposure", "graph neural networks", "SDGSAT-1", "urban environment"]
featured: true
abstract: "A physics-informed residual cascade framework for scalable individual-building vertical light-exposure assessment from two-dimensional multisource geospatial data, validated in Guangzhou and transferred to Shanghai without retraining."
citation: |
  Shi, X., Ling, Z., Zheng, Z., Chen, Y., Qian, Q., Wu, Z., Wang, J., & Gao, F. (2026). Assessing individual-building vertical light exposure in urban environments with a residual cascade framework. Remote Sensing, 18(15), 2621. https://doi.org/10.3390/rs18152621
---

## Research Challenge

Conventional two-dimensional nighttime-light imagery primarily characterizes upward radiance from horizontal surfaces and cannot directly represent illumination on building facades. Detailed three-dimensional simulations can address this vertical blind spot, but their data and computational requirements make city-scale repeated assessment difficult.

![Source–path–receiver mechanisms of urban light exposure](/images/papers/2026-shixh-rs/Fig.1.png)

## Proposed Framework

The study develops the **Physics-Informed Residual Cascade Framework (PIRCF)** to estimate individual-building vertical light exposure from two-dimensional multisource geospatial data. Here, “physics-informed” refers to using exposure-related geometry, distance attenuation, spatial topology, and environmental occlusion as inductive biases rather than directly enforcing physical governing equations in the loss function.

PIRCF combines graph-based neighborhood inference with XGBoost residual correction. This design captures broad relationships among nearby buildings while correcting localized variation that the graph model does not fully explain.

![Overview of the PIRCF workflow](/images/papers/2026-shixh-rs/Fig.4.png)

## Key Results

- In Guangzhou, PIRCF achieved test-set R² values of **0.78** for panchromatic exposure and **0.85** for blue-light exposure, outperforming the selected statistical baselines.
- Applied directly to Shanghai without retraining or parameter adjustment, the Guangzhou-trained model achieved R² values of **0.70** and **0.73**, respectively.
- Panchromatic exposure showed broader, more continuous gradients associated with road networks, while blue-light exposure formed more fragmented clusters near commercial and vertically developed urban areas.

![Model performance for panchromatic and blue-light exposure in Guangzhou](/images/papers/2026-shixh-rs/Fig.6.png)

![Zero-shot transfer evaluation in central Shanghai](/images/papers/2026-shixh-rs/Fig.11.png)

## Significance

The framework offers a scalable alternative to repeated three-dimensional simulation for building-level urban light-exposure screening. It can help identify priority locations for detailed field investigation and support more spatially refined urban-lighting assessment and governance.

[Read the open-access article](https://www.mdpi.com/2072-4292/18/15/2621)
