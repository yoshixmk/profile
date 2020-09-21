# f3の紹介

<div style="text-align: right;">
Publication date： 2020-09-21
</div>

![F3 image](https://github.com/yoshixmk/f3/blob/master/screenshot.png?raw=true)

## f3とは
- `フィスト トゥ ファイブ`（ファイブフィンガー）のWebアプリです
- 読み方： `エフスリー`
- 英語名: fist to five
- **基本的には、5が賛成、1が反対。0は無効投票です**（ただし、0はあまり使って欲しくないこともあり、裏コマンドっぽく実装してます）。

由来については、fの数が3つであることからつけました。
> **F**acilitating conversations using **F**ist to **F**ive.
Recommended for use in online agile meeting🃏

<https://github.com/yoshixmk/f3>


## ユースケース
合意形成やて手軽なアンケート手法として、会議の参加者にお題を提示して、**0~5を示す指の本数で、そのお題に対応する度合い**を表すことができます。

アジャイル開発において、今の気分をアイスブレイクとして聞いてみたり、振り返り（レトロスペクティブズ）などのセレモニー後の感想を集めたり、全員の意見を簡単に収集してみたい場合があります。  

このようなときに、オンラインで使用できるツールとして開発しました。

## 画面の操作方法
ファシリテータ画面は1人、ユーザ画面はその他全員が使用します
- ユーザ画面  
https://\<hostname\>/  
- ファシリテータ画面  
https://\<hostname\>/fff  

- 重要1: **ユーザ名が一致していればユーザの投票は変更できます**  
- 重要2: ファシリテータ画面の、**Resetボタンは全ユーザの投票結果が消える**ので十分ご注意ください

## 技術要素
- [Vue 3](https://github.com/vuejs/vue-next)
- [Vite](https://github.com/vitejs/vite)
- [Rome](https://romefrontend.dev/)
- [Bootstrap 5](https://v5.getbootstrap.jp/)
- [Universal JavaScript](https://cdb.reacttraining.com/universal-javascript-4761051b7ae9#.d39eaqcjp)
- [Node.js design patterns](https://github.com/PacktPublishing/Node.js_Design_Patterns_Second_Edition_Code)
  - [en](https://www.amazon.co.jp/Node-Js-Design-Patterns-Mario-Casciaro/dp/1785885588)
  - [ja](https://www.oreilly.co.jp/books/9784873118734/)

ローカルで`yarn dev`と起動すると、[フロントエンドの3000ポート](http://localhost:3000)からアクセスできます。
- frontend: 3000
- backend : 5000

## もし、Issueを見つけたら
こちらからIssueの起票をお願いします

<https://github.com/yoshixmk/f3/issues>
