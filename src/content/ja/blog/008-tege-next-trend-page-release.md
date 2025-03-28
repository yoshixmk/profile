# てげぶにトレンドページを作成しました

<div style="text-align: right;">
Publication date： 2020-08-17
</div>

## 概要
先日紹介した、新しいてげぶのサイト[Tegebu next](https://tegebu.netlify.app/)に、[トレンドページ](https://tegebu.netlify.app/trend/)を作成しました  

## 技術要素
- (New!!) Firestore
- (New!!) [BoardGameGeek JSON APIs](http://bgg-json.azurewebsites.net/)
- Gatsby
- Typescript
- Tailwind CSS
- PostCSS  
など

今回データストアとして、`Firestore`を使いました。  
Gatsbyがビルドする際に、取りに行きGraphQLで扱えるようにしています。
（`Firestore`へは、バッチ処理を別途作成してます）

## 所感
`Firestore`接続には暗号化ファイルを用いたため、パスワードの管理について学びがありました。Github Actionsで`Secret`設定の際は機密性はもちろんありますが、Netlifyでの[環境変数設定](https://docs.netlify.com/configure-builds/environment-variables/#sensitive-variable-policy)では話が少し違います。信頼できるデプロイかどうかに応じて「承認が必要」/「機密変数なしで扱う」/「制限なし」の中から選ぶ形でした。

[BoardGameGeek JSON APIs](http://bgg-json.azurewebsites.net/)の内容を基に、注目度の高いテーブルゲームを抽出しています。APIに関して使用した感想は、ドキュメントにもある通り*本番品質のコードではない*こともあり、エラーレスポンスの発生確率が高いことから、バッチ処理の際にエラーハンドリングを工夫し、なんとかしました。英語のコンテンツのため詳細表示で、日本語にする方法は、別の機会にまた考えてみようかと思います。
