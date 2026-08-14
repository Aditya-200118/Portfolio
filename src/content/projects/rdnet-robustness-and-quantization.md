---
title: RDNet Robustness and Quantization Study
summary: Efficient deployment study focused on accuracy retention, adversarial robustness, and INT8 model compression.
category: Model Evaluation
role: Graduate project
dateStart: 2025-03-01
dateEnd: 2025-05-01
featured: true
order: 2
stack:
  - PyTorch
  - ONNX Runtime
  - CIFAR-10
  - Foolbox
highlights:
  - Transfer-learned RDNet-Tiny to 93.86 percent CIFAR-10 accuracy.
  - Reduced model size from 87.19 MB to 24.56 MB with INT8 quantization.
  - Evaluated robustness under FGSM, LinfPGD, L2PGD, and DeepFool.
---

## Overview

This project focused on a question that shows up constantly in practical ML work: how much efficiency can be gained before the model meaningfully degrades in ways that matter?

## What I built

- Fine-tuned an ImageNet-pretrained RDNet-Tiny on CIFAR-10.
- Exported and quantized the model with ONNX Runtime INT8.
- Benchmarked model size, inference behavior, and adversarial sensitivity together instead of treating them as separate concerns.

## What the results showed

The main takeaway was that compression is only a useful win if it is evaluated alongside post-compression behavior. The project therefore treated deployment as a multi-objective trade-off involving memory footprint, latency, clean accuracy, and robustness.

## Why it belongs here

This work fits the portfolio because it sits at the boundary between model research and engineering judgment. It was not just a training exercise; it was an evaluation pipeline for deciding whether a smaller model still behaves well enough to ship.

