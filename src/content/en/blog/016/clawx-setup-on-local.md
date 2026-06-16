---
title: "LM Studio Settings for Using Qwen3.5 9B (Local LLM) with ClawX"
author: "yoshixmk"
published: "2026-04-05"
---

## Introduction

Running a local LLM and connecting it to ClawX is an appealing setup for many developers. The ability to work without relying on cloud APIs and the added peace of mind around privacy are the main draws.

This post covers the configuration steps to get **Qwen3.5 9B** running through LM Studio and operable from ClawX (formerly Open Claw), along with several practical insights discovered during testing. A single misconfigured setting can cause errors or prevent the LLM from returning responses at all — hopefully this article helps you avoid those pitfalls.

---

## Test Environment (Machine Specs)

Here are the specs of the machine used for this testing.

| Item | Details |
|------|---------|
| CPU | AMD Ryzen 7 8845HS w/ Radeon 780M Graphics |
| Cores / Threads | 8 cores / 16 threads |
| Max Clock | 3,801 MHz (3.8 GHz) |
| GPU | AMD Radeon 780M (integrated graphics) |
| Memory | ~32 GB (31,941 MB) |
| OS | Windows 11 (Build 26200) 64-bit |

The Ryzen 7 8845HS is a high-performance mobile APU with a built-in NPU for AI workloads. It's capable enough to run a 9B-class model locally, but as a laptop with integrated graphics, inference speed is noticeably slower than a desktop with a dedicated GPU. Think of it as "not powerful, but it works."

---

## Settings Overview

There are four main settings to adjust on the LM Studio side. Each is covered in detail below.

1. Context Size
2. System Prompt
3. Thinking (Enable Thinking)
4. Temperature

---

## 1. Context Size

**Location**: LM Studio → Model Settings → Context and Offload → Context Length

### Why the Default Is Not Enough

LM Studio's default context size is **8,192 tokens**. That may seem sufficient, but ClawX accumulates tool call results, system prompt content, and conversation history all within the context window. Any moderately complex task will hit the limit quickly, causing ClawX to throw an error.

### Recommended Value

Setting it to at least **30,000 tokens** is strongly recommended. The values used in practice are:

- `88,888`
- `99,999`

The reason for these specific numbers is simple: they're **easy to remember**. Values above 100,000 work fine too, but keeping it just under a round number helps avoid accidental typos.

> **Note**: Increasing context size also increases memory usage. On a 32 GB machine, 99,999 worked without issues, but adjust accordingly if your machine has less RAM.

---

## 2. System Prompt

**Location**: LM Studio → Model Settings → System Prompt

When using ClawX, it's important to explicitly tell the model to actively use ClawX features and that the OS is Windows.

```txt
You should use ClawX feature actively. The OS is Windows.
```

This is usually sufficient, but if the model isn't following instructions reliably, **adding more specific goals or constraints** helps.

### Customization Example

To prevent unintended file deletions or system changes, consider adding a restriction like this:

```txt
You should use ClawX feature actively. The OS is Windows.
Do not perform any destructive operations such as deleting files or modifying system settings without explicit confirmation.
```

Local LLMs can have weaker instruction-following than cloud APIs, so setting clear rules in the system prompt improves overall stability.

---

## 3. Thinking (Enable Thinking)

**Location**: LM Studio → Model Settings → Custom Fields → Enable Thinking

### Bottom Line: **Turn It OFF**

When `Enable Thinking` is ON, the model generates its internal reasoning as tokens before producing a response. It's tempting to enable this for better accuracy, but with local LLMs it tends to **backfire**.

Enabling Thinking caused the following issues:

- The model enters a **long reasoning loop** and exits without returning a response to ClawX
- Processing time increases significantly, leading to timeouts
- Thinking tokens consume context space, leaving less room for actual task execution

Since a local 9B model has far fewer resources than a large cloud model, the downsides of enabling Thinking outweigh the benefits. **Start with it OFF** and only experiment with enabling it if needed.

---

## 4. Temperature

**Location**: LM Studio → Model Settings → Temperature

Temperature controls the "randomness" of the model's responses. Higher values produce more diverse and creative output; lower values produce more consistent, deterministic responses.

### Recommended Value: `0.77`

The default (often 1.0) has been lowered slightly to `0.77`. Here's the reasoning:

- For tasks requiring precision — like coding or configuration changes — a slightly lower Temperature produces more stable results
- Going too close to 0 makes responses rigid and inflexible
- `0.77` felt like a good balance between **creativity and consistency**

The default value will still allow ClawX integration to function, but if unexpected variation in responses is causing issues, adjusting Temperature is worth trying.

---

## Tips on Giving Instructions

Beyond settings, **how you phrase instructions** has a significant impact on success rate with local LLMs.

### Break Tasks Into Simple Steps

Giving complex instructions all at once tends to cause these problems:

- Context fills up with instructions and reasoning, leaving no room to return results
- The LLM loses track of what to do next and exits without responding to ClawX
- Processing time grows too long, resulting in a timeout

Instead of chaining many actions together, split them into individual steps and issue them one at a time.

### Example

```
# Less effective
Update the project README, fix the CI config, and delete any unnecessary files.

# More effective
First, just update the overview section of the README.
(After completion) Now check the CI config file and tell me what needs to be fixed.
```

---

## Summary

Here's a quick reference for the recommended LM Studio settings when connecting Qwen3.5 9B to ClawX.

| Setting | Recommended Value | Reason |
|---------|------------------|--------|
| Context Length | 88,888 – 99,999 | Default 8,192 causes errors during ClawX operations |
| System Prompt | Specify ClawX usage and OS | Gives the model the right context to operate correctly |
| Enable Thinking | **OFF** | Turning it ON increases cases where no response is returned |
| Temperature | 0.77 | Balances accuracy and creativity |

Local LLM behavior varies a lot depending on configuration. If things aren't working out of the box, try the settings in this article. The context size increase and disabling Thinking tend to have the biggest impact — start there.
