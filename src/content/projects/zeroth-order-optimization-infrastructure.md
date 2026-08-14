---
title: Zeroth-Order Optimization Infrastructure
summary: Research tooling for large-scale zeroth-order experiments across transformer and vision fine-tuning pipelines.
category: Research Infrastructure
role: Graduate research
dateStart: 2025-08-01
featured: true
order: 3
stack:
  - PyTorch
  - SLURM
  - Optuna
  - Transformers
  - Experiment tracking
highlights:
  - Supported large weekly trial counts with resumable HPO workflows.
  - Built structured artifact handling and replayable study logic.
  - Served both vision and language-model fine-tuning research.
---

## Overview

This work is less about a single headline metric and more about the machinery required to run serious optimization research without drowning in experiment management overhead.

## What I built

- A distributed hyperparameter search workflow designed for SLURM-managed GPU clusters.
- Journal-backed study tracking, intermediate pruning, and structured artifact output.
- Resumable experiment flow so long-running studies could recover cleanly instead of restarting from scratch.

## Research context

The infrastructure supported two related lines of work: zeroth-order fine-tuning for vision tasks and zeroth-order optimization for transformer pipelines. In both cases, the real bottleneck was not only model code, but the reliability of the experimental process itself.

## Why it matters

This is the kind of engineering that rarely looks flashy in a screenshot, but it is what makes research output believable. Stable experiment systems are what turn an idea into results that can be repeated, compared, and extended.

