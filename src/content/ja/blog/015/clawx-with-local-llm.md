---
title: "Qwen3.5 9B（Local LLM）でClawXを動作させて無料であれこれやってもらう"
author: "yoshixmk"
published: "2026-03-21"
---

[Qwen3.5 9B](https://lmstudio.ai/models/qwen/qwen3.5-9b)は120Bモデルを超える性能を持つということで3月に公開されて1週間ですでに20万ダウンロード超える人気のモデルです。
Qwenといえば2.5がCorderモデルとしても非常に小さいモデルだったので私自身、試した経験がありましたが、チャットでの利用はまだしもClaude Codeなどのツールとの連携はTool Useをうまく使えず役にたたない印象でした。
しかしながらQwen 3.5はClawxでの利用が十分可能だったので今回記事を書いてます

## 検証1: Webブラウジング + ファイル出力

まずはじめに試したことは、ブラウザを操作してもらい内容をファイルに出力してもらう単純な指示です

Input

```txt
https://lmstudio.ai/models/qwen/qwen3.5-9bのページを開いて、descriptionを確認し、notepadでデスクトップにテキストファイルを保存
```

Output

![初めての指示結果の画像](/img/blog/015/first-try-output.png)
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

結果として得られた内容に問題はなさそうです。Webの内容をScreenshotして解析(OpenClaw機能)が使われたことが`exec`を見るとわかりました。

## 検証2: コード理解 + ブログ記事出力

次にこのリポジトリをサンプルとして利用してClawxの紹介記事を書いてもらうことにしました。
記事は正しくClawxを紹介できているのかということと、タイトルをつけるなどルールの伴ったMarkdownが生成できるかを判断するのが目的です

Input

```txt
これからあなたにClawXの記事を書いてほしい。
 C:\Users\{私のユーザ名}\src\own\profileにプロジェクトがあるので、pnpm devで起動してから、
 http://localhost:3000/jaもしくはenでアクセスして動作確認ができる。
 今回のセットアップでは、LM StusioにQwen3.5 9Bモデルを採用し、
 System Promptとして、Respond concisely. The OS is Windows.と記載したのがコツだ。
 結果としてはjaとenのブログが書けているのが期待している
```

こちらは4回「y」と会話を行って出力してくれました

Output

[結果はこのような記事になりました](./clawx-introduction.md)

### 気になった点

- 日本語が弱い。日本人が使わない表現を使っている
- Clawxの「始め方」がまちがってる。インストーラを使ってインストール後に起動するだけでOpenClawも動作する。

## 最後に

GPUのないPCで、CPUの内部GPUのみで動作がここまで動いたのは初めてだったので記事にまとめました。
詳しいセットアップは次の記事に記載します。
