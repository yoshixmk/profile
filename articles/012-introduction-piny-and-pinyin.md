# PinyとPinyinの紹介

<div style="text-align: right;">
Publication date： 2021-01-11
</div>

## Pinyとは
HSK (漢語水平考試)の単語覚えのために開発しました。  
<https://github.com/yoshixmk/piny>  
CLIでピンインの確認テスト、Web UIでの単語の暗記、カスタマイズ可能なディクショナリ（初期セットはHSK3~6）とツールを用意しています。  
また、ピンインの確認テストでは、一度間違えたものをやり直せるように、集中対策モードをつけました  
こだわったのは単純な単語の羅列にしないことで、一度見て覚えるのは難しいので、関連する画像を合わせて表示してイメージを膨らませながら取り組むことができるようにしました

## Pinyinとは
Denoのサードパーティモジュールとして公開（<https://deno.land/x/pinyin>）し、Pinyの内部モジュールとして使用しました  
npmで同様の[pinyin](https://www.npmjs.com/package/pinyin)モジュールがあるのでラップして実装しました。

## 今後
HSKのみならず中国語の学習する上で、これあったらいいな、と思ったものがあれば追加していきます。  
希望の機能や不具合があればIssueをください

## 使い方
それぞれ`README`をご覧ください。  
<https://github.com/yoshixmk/pinyin>  
<hhttps://github.com/yoshixmk/piny>  
