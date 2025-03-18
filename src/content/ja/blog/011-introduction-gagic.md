# Gagicの紹介

<div style="text-align: right;">
Publication date： 2020-09-22
</div>

## Gagicとは

Denoを用いて、Markdownから静的HTMLページを生成する最も簡単なツールです🦕 

`Gagic`は[Pagic](https://deno.land/x/pagic@v0.9.1)のサブバージョンです。  
`Gagic`はに`Deno 1.4.0`以降をサポートし、今後も開発していきます。
詳しくは後述しますが、`Deno 1.3.3`まで対応している`Pagic`v0.9.1をハードフォークして作成しています。

## ハードフォークと経緯
9/10、突然、Pagicを作成していた[アカウント](https://github.com/xcatliu)や**リポジトリ**が消えて、[deno-x-ranking](https://github.com/yoshixmk/deno-x-ranking/)のCIが失敗するようになった。  
この時はDenoのサードパーティモジュールの固定化されたURLに変更し、対応した。

9/14、Deno 1.4.0の`BREAKING Changes`の内容を含んでいたため、メンテナンスの必要があったため、ハードフォークし、対応を始めた。

選択肢としては、2つだが、後者を選んだ。
- 1.3.3を使用し続ける
- 自分でメンテナンスして1.4.0移行に対応する

9/21、この`Profile`サイトや`deno-x-ranking`を`Pagic`から`Gagic`へ切り替え作業が完了。

## 使い方
`README`をご覧ください。

<https://github.com/yoshixmk/gagic#gagic>
