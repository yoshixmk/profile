# Deno 日本語マニュアルを公開しました

<div style="text-align: right;">
Publication date： 2020-08-16
</div>

## 概要
`Deno 日本語マニュアル`は、Denoの[公式マニュアルページ](https://deno.land/manual)を参考に、翻訳している非公式なクローンサイトです。  
マニュアルの内容は、今後も随時更新予定です。  
URL: <https://yoshixmk.github.io/deno-manual-ja>  
Github: <https://github.com/yoshixmk/deno-manual-ja>  

## きっかけ
きっかけは、中国のDenoコミュニティが<https://nugine.github.io/deno-manual-cn/>にて、  
`Deno 中文手册`(=Deno 中国語マニュアル)を公開しているのを見つけたことです。  
今回はそちらをforkして、日本語版の作成に至っています。  
fork Github: <https://github.com/Nugine/deno-manual-cn>

Deno関連で、何か他の人の役に立つような、コントリビュートしたいと思っていたので、夏季休暇で作りあげました。

## 技術要素
- [mdBook](https://github.com/rust-lang/mdBook)
- cargo (Rust) ※ mdBookインストールのみ
など

## 起動方法
1. [Rustのインストール](https://www.rust-lang.org/tools/install)(cargoが同時に入ります)
1. [mdBookのインストール](https://github.com/rust-lang/mdBook#installation)
1. `mdbook serve`

## 所感
Denoのバイナリファイルは`Rust`と`JS`で書かれており`Rust`の思想を受けている印象を持っており、CoC(Code of Conduct)がRustの内容に準拠していること、インストール方法や単一のバイナリだけで動作すること、[安全性](https://doc.rust-jp.rs/rust-nomicon-ja/meet-safe-and-unsafe.html)など、今回触れられたので面白かったです。  
※ (余談) 標準モジュールは`Go`を参考に、`Typescript`で書かれています。  
