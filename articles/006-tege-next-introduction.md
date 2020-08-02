# てげぶのサイトを新たに作成しました

<div style="text-align: right;">
Publication date： 2020-08-02
</div>

## 概要
新しいてげぶのサイトは、Tegebu nextというプロジェクトで進めており、テーブルゲームの団体（てげぶ）とテーブルゲームの紹介を中心にサイトを作成しました。  
URL: [https://tegebu.netlify.app/](https://tegebu.netlify.app/)  
以前、[tegebu.com](https://www.tegebu.com/tabletop-games/)というのを作成しており、これのサイトリニューアルです。  
今は、テーブルゲームの一覧の移行が完了しております。  
残っている内容も、移行が終わり次第、ドメインを書き換える想定です。

## 技術要素
- Gatsby
- Typescript
- Tailwind CSS
- PostCSS  
など

## Tailwind CSSに関して
[Tailwind](https://tailwindcss.com/)は、`Utility-First`(※詳しくは後述) のCSSフレームワークです。  
Tailwindは高度にカスタマイズ可能な低レベルなアーキテクチャであり、デザインを構築するために必要なすべてを提供します。  
個人的な感想としては、  
基本的にBootstrapなどとよく似ているのですが、より低レベルでカスタマイズ可能なフレームワークで、カスタムデザインの迅速な構築にむいていると感じました。Bootstrapより記述自体は量が必要ですが、自由度が高いと言えます。  
`Utility-First`というのがコアコンセプトにあり、これは、Tailwind自身がプリミティブなCSSクラスのアセットで、複雑なコンポーネントを（CSSファイルを一から直接書くことなく）構築できるという意味です。これによって下記のような効果が得られます
- クラス名を考える労力が、必要ありません
- CSSの肥大化が止まります
- 安全に変更を加えることができます（生のCSSはグローバルなため、不安を完全に取り除くことはできない）
次の例は、通常時に「青色のテキスト」で、マウスホバーしたときには「アンダーラインありの、黄色のテキスト」という意味になります（簡単ですね！）。
```html
<a class="text-blue hover:text-yellow hover:underline">Link</a>
```
詳しくは[マニュアル](https://tailwindcss.com/docs/utility-first)を見てください。  
`Bootstrap 5`が間も無く出ますが、[Poll: Tailwind or Bootstrap?](https://dev.to/zolidev/poll-tailwind-or-bootstrap-1153)にもある通り、`Tailwind CSS`の人気は今後も上がっていくと思います。  

## Github
[https://github.com/yoshixmk/tegebu-next](https://github.com/yoshixmk/tegebu-next)  

リポジトリをクローンをして、起動します。  
```Shell
$ git clone https://github.com/yoshixmk/tegebu-next.git
$ cd tegebu-next/
$ yarn install
$ gatsby develop
```
[http://localhost:8000](http://localhost:8000)で実行されます

下記のような画面が見られるはずです（左はPCサイズ、右はスマホサイズ）。
<div style="flex">
  <p align="center">
    <a href="https://tegebu.netlify.app/" >
      <img alt="Tegebuプレビュー画像1" src="../static/images/preview.png" width="67%"/>
    </a>
    <a href="https://tegebu.netlify.app/" >
      <img alt="Tegebuプレビュー画像2" src="../static/images//preview2.png" width="28%"/>
    </a>
  </p>
</div>
