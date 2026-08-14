---
title: Edge-Cloud Collaborative CNN Inference
summary: Progressive device-cloud inference work centered on early exits, offloading boundaries, and communication-aware execution.
category: Systems Research
role: Graduate project
dateStart: 2025-09-01
dateEnd: 2025-12-01
featured: true
order: 1
stack:
  - PyTorch
  - CIFAR-10
  - Optuna
  - CNN profiling
highlights:
  - Built SPINN-inspired early-exit inference for device-cloud execution.
  - Profiled candidate split points using FLOPs, parameter counts, and transfer cost.
  - Added compression-aware thinking to the execution pipeline.
---

## Overview

This project explored how a CNN can be split between a local device and a cloud endpoint without treating deployment as an afterthought. Instead of measuring only raw accuracy, the work looked at when to exit early, where to offload computation, and how communication cost changes the picture.

## What I built

- Implemented a progressive inference pipeline in PyTorch inspired by SPINN-style execution.
- Built VGG early-exit models with dynamic loss weighting and confidence-based routing.
- Added profiling utilities for model splits, parameter counts, and compute cost so offloading decisions could be compared directly.

## Why it mattered

The useful part of the project was not just the model itself, but the decision framework around it. It turned a classroom-style CNN exercise into a more realistic systems question: where should inference happen, and what trade-off is actually acceptable once communication enters the loop?

## Technical direction

I also introduced communication-aware ideas such as activation compression, quantization, and pruning-oriented transfer assumptions. Those pieces made the work feel closer to practical edge deployment than a standard offline benchmark.

