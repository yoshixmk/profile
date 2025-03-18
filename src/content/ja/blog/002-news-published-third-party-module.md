# Denoのサードパーティモジュールを公開しました

<div style="text-align: right;">
Publication date： 2020-06-23
</div>

## I have published a third party module.  

## deno-x-ranking
🦕 Deno Third Party Modules Ranking 👑  
[https://deno.land/x/ranking](https://deno.land/x/ranking)

## ランキング機能
サードパーティモジュールをランキング形式で並べ、注目するべきモジュールがわかるというのを目指して、作成しました。  
[https://deno.land/x/ranking](https://deno.land/x/ranking)  
出力形式は、tsv形式と標準出力が選べます。  
使用するには下記を実行してください（Githubアカウントが必要です）

### File output
```Shell
$ deno run --allow-net --allow-write https://deno.land/x/ranking/mod.ts <github username> <github password> file
```

### Console output
```Shell
$ deno run --allow-net https://deno.land/x/ranking/mod.ts <github username> <github password> table
```

## 今後の予定
いつでもランキングが見れるよう、ページを構築しようかと思ってます。
