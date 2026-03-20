---
title: "Running ClawX with Qwen3.5 9B (Local LLM) for Free"
author: "yoshixmk"
published: "2026-03-21"
---

[Qwen3.5 9B](https://lmstudio.ai/models/qwen/qwen3.5-9b) is a model that exceeds the performance of 120B models. Released in March, it became extremely popular, surpassing 200,000 downloads within just one week.

When it comes to Qwen, the 2.5 version was a very small model, so I personally had experience testing it. However, when it came to using it with chat or tools like Claude Code, it couldn't handle Tool Use effectively and was essentially useless.

That said, Qwen 3.5 has proven to be sufficiently capable for use with ClawX, so I decided to write this article.

## Test 1: Web Browsing + File Output

The first task I asked it to do was a simple instruction: operate the browser to display content and save it to a file.

Input:

```txt
Open the page at https://lmstudio.ai/models/qwen/qwen3.5-9b, check the description, and save it as a text file on the desktop using Notepad
```

Output:

![Output from the first instruction](/img/blog/015/first-try-output.png)
```txt
# Qwen3.5-9B Model Description (from LM Studio)

## Main Description
Qwen3.5 represents a significant leap forward, integrating breakthroughs in multimodal learning, architectural efficiency, reinforcement learning scale, and global accessibility. This is a 9B parameter dense model, supporting a native context length of 262,144 tokens.

## Highlights
- **Unified Vision-Language Foundation**: Early fusion training on multimodal tokens achieves cross-generational parity with Qwen3 and outperforms Qwen3-VL models across reasoning, coding, agents, and visual understanding benchmarks.
- **Scalable RL Generalization**: Reinforcement learning scaled across million-agent environments with progressively complex task distributions for robust real-world adaptability.
- **Global Linguistic Coverage**: Expanded support to 201 languages and dialects, enabling inclusive, worldwide deployment with nuanced cultural and regional understanding.

## Key Stats
- **Parameters**: 9B (dense model)
- **Context Length**: 262,144 tokens
- **Downloads**: 209K
- **Stars**: 28
```

The content obtained had no issues. Looking at the `exec` command, it was clear that it used the OpenClaw feature to take a screenshot and analyze the web content.

## Test 2: Code Understanding + Blog Post Output

Next, I asked it to write an introduction article about ClawX using this repository as a sample.
The goal was to check if the article correctly introduced ClawX and if it could generate properly structured Markdown with a title.

Input:

```txt
I'd like you to write an article about ClawX.
 The project is located at C:\Users\{my-username}\src\own\profile,
 After starting it with pnpm dev, you can access it at http://localhost:3000/ja or /en to verify it works.
 In this setup, I chose the Qwen3.5 9B model in LM Studio, and the key was to set the System Prompt as "Respond concisely. The OS is Windows."
 I expect the blog posts in both ja and en to be written properly.
```

It generated the output after 4 rounds of conversation with "y" responses.

Output:

[The result became this article](./clawx-introduction.md)

### Points of Concern

- Japanese is weak. It uses expressions that Japanese people don't use.
- The "Getting Started" section for ClawX is incorrect. ClawX can be used just by installing and launching the installer, which also runs OpenClaw.

## Finally

This was the first time I saw this level of performance on a PC with no GPU, using only the internal CPU GPU, so I decided to document it in this article.
A detailed setup guide will be covered in the next article.