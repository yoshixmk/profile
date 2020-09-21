import projectConfig from '/profile/gagic.config.js';
var _a, _b;
export default {
    'head': undefined,
    'sidebar': [
        {
            "text": "@yoshixmk / Yoshihiro Ueki",
            "link": "index.html",
            "pagePath": "README.md"
        },
        {
            "link": "articles/index.html",
            "children": [
                {
                    "text": "社内勉強会でDenoを発表しました",
                    "link": "articles/001-deno-introduction-in-my-company.html",
                    "pagePath": "articles/001-deno-introduction-in-my-company.md"
                },
                {
                    "text": "Denoのサードパーティモジュールを公開しました",
                    "link": "articles/002-news-published-third-party-module.html",
                    "pagePath": "articles/002-news-published-third-party-module.md"
                },
                {
                    "text": "Tegebu TS勉強会で登壇しました",
                    "link": "articles/003-deno-introduction-at-ts-study-meeting.html",
                    "pagePath": "articles/003-deno-introduction-at-ts-study-meeting.md"
                },
                {
                    "text": "Deno 発表資料",
                    "link": "articles/004-deno-introduce-by-yoshixmk-regret-10-things.html",
                    "pagePath": "articles/004-deno-introduce-by-yoshixmk-regret-10-things.tsx"
                },
                {
                    "text": "deno-react-chatを公開しました",
                    "link": "articles/005-deno-react-chat.html",
                    "pagePath": "articles/005-deno-react-chat.md"
                },
                {
                    "text": "てげぶのサイトを新たに作成しました",
                    "link": "articles/006-tege-next-introduction.html",
                    "pagePath": "articles/006-tege-next-introduction.md"
                },
                {
                    "text": "Deno 日本語マニュアルを公開しました",
                    "link": "articles/007-deno-ja-manual-introduction.html",
                    "pagePath": "articles/007-deno-ja-manual-introduction.md"
                },
                {
                    "text": "てげぶにトレンドページを作成しました",
                    "link": "articles/008-tege-next-trend-page-release.html",
                    "pagePath": "articles/008-tege-next-trend-page-release.md"
                },
                {
                    "text": "てげメンバーの部員紹介ページを作成し、リリースしました",
                    "link": "articles/009-tege-domains-release.html",
                    "pagePath": "articles/009-tege-domains-release.md"
                },
                {
                    "text": "f3の紹介",
                    "link": "articles/010-introduction-f3.html",
                    "pagePath": "articles/010-introduction-f3.md"
                },
                {
                    "text": "Gagicの紹介",
                    "link": "articles/011-introduction-gagic.html",
                    "pagePath": "articles/011-introduction-gagic.md"
                }
            ],
            "text": "ブログ",
            "pagePath": "articles/README.md"
        },
        {
            "link": "translations/index.html",
            "children": [
                {
                    "text": "Performance aspect of Deno vs. Node",
                    "link": "translations/001-perfomance-aspect-of-deno-vs-node-js.html",
                    "pagePath": "translations/001-perfomance-aspect-of-deno-vs-node-js.md"
                },
                {
                    "text": "What Is The Best Deno Web Framework?",
                    "link": "translations/002-what-is-the-best-deno-web-framework.html",
                    "pagePath": "translations/002-what-is-the-best-deno-web-framework.md"
                },
                {
                    "text": "Creating Registration Form In Deno : MongoDB Setup, Saving Data",
                    "link": "translations/003-registration-form-mongodb.html",
                    "pagePath": "translations/003-registration-form-mongodb.md"
                },
                {
                    "text": "Guide To Porting Node Modules To Deno",
                    "link": "translations/004-guide-to-porting-node-modules-to-deno.html",
                    "pagePath": "translations/004-guide-to-porting-node-modules-to-deno.md"
                }
            ],
            "text": "翻訳",
            "pagePath": "translations/README.md"
        }
    ],
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['undefined'] },
    'pagePath': "articles/008-tege-next-trend-page-release.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/008-tege-next-trend-page-release.html",
    'title': "てげぶにトレンドページを作成しました",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>てげぶにトレンドページを作成しました</h1>\n<div style="text-align: right;">\nPublication date： 2020-08-17\n</div>\n<h2 id="%E6%A6%82%E8%A6%81">概要<a class="anchor" href="#%E6%A6%82%E8%A6%81">§</a></h2>\n<p>先日紹介した、新しいてげぶのサイト<a href="https://tegebu.netlify.app/">Tegebu next</a>に、<a href="https://tegebu.netlify.app/trend/">トレンドページ</a>を作成しました</p>\n<h2 id="%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">技術要素<a class="anchor" href="#%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">§</a></h2>\n<ul>\n<li>(New!!) Firestore</li>\n<li>(New!!) <a href="http://bgg-json.azurewebsites.net/">BoardGameGeek JSON APIs</a></li>\n<li>Gatsby</li>\n<li>Typescript</li>\n<li>Tailwind CSS</li>\n<li>PostCSS<br>\nなど</li>\n</ul>\n<p>今回データストアとして、<code>Firestore</code>を使いました。<br>\nGatsbyがビルドする際に、取りに行きGraphQLで扱えるようにしています。\n（<code>Firestore</code>へは、バッチ処理を別途作成してます）</p>\n<h2 id="%E6%89%80%E6%84%9F">所感<a class="anchor" href="#%E6%89%80%E6%84%9F">§</a></h2>\n<p><code>Firestore</code>接続には暗号化ファイルを用いたため、パスワードの管理について学びがありました。Github Actionsで<code>Secret</code>設定の際は機密性はもちろんありますが、Netlifyでの<a href="https://docs.netlify.com/configure-builds/environment-variables/#sensitive-variable-policy">環境変数設定</a>では話が少し違います。信頼できるデプロイかどうかに応じて「承認が必要」/「機密変数なしで扱う」/「制限なし」の中から選ぶ形でした。</p>\n<p><a href="http://bgg-json.azurewebsites.net/">BoardGameGeek JSON APIs</a>の内容を基に、注目度の高いテーブルゲームを抽出しています。APIに関して使用した感想は、ドキュメントにもある通り<em>本番品質のコードではない</em>こともあり、エラーレスポンスの発生確率が高いことから、バッチ処理の際にエラーハンドリングを工夫し、なんとかしました。英語のコンテンツのため詳細表示で、日本語にする方法は、別の機会にまた考えてみようかと思います。</p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/profile/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E6%A6%82%E8%A6%81">概要</a></li><li><a href="#%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">技術要素</a></li><li><a href="#%E6%89%80%E6%84%9F">所感</a></li></ol></nav>'
        } })
};
