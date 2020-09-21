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
                    "text": "てげメンバーの部員紹介ページを作成し、リリースしました",
                    "link": "articles/009-tege-domains-release.html",
                    "pagePath": "articles/009-tege-domains-release.md"
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
    'pagePath': "articles/010-introduction-f3.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/010-introduction-f3.html",
    'title': "f3の紹介",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>f3の紹介</h1>\n<div style="text-align: right;">\nPublication date： 2020-09-21\n</div>\n<p><img src="https://github.com/yoshixmk/f3/blob/master/screenshot.png?raw=true" alt="F3 image"></p>\n<h2 id="f3%E3%81%A8%E3%81%AF">f3とは<a class="anchor" href="#f3%E3%81%A8%E3%81%AF">§</a></h2>\n<ul>\n<li>ファイブフィンガーのWebアプリです</li>\n<li>読み方： エフスリー</li>\n<li>英語名: fist to five</li>\n<li><strong>基本的には、5が賛成、1が反対。0は無効投票です</strong>（ただし、0はあまり使って欲しくないこともあり、裏コマンドっぽく実装してます）。</li>\n</ul>\n<p>由来については、fの数が3つであることからつけました。</p>\n<blockquote>\n<p><strong>F</strong>acilitating conversations using <strong>F</strong>ist to <strong>F</strong>ive.\nRecommended for use in online agile meeting🃏</p>\n</blockquote>\n<p><a href="https://github.com/yoshixmk/f3">https://github.com/yoshixmk/f3</a></p>\n<h2 id="%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9">ユースケース<a class="anchor" href="#%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9">§</a></h2>\n<p>合意形成やて手軽なアンケート手法として、会議の参加者にお題を提示して、0~5を示す指の本数で、そのお題に対応する度合いを表すことができます。</p>\n<p>アジャイル開発において、今の気分をアイスブレイクとして聞いてみたり、振り返り（レトロスペクティブズ）などのセレモニー後の感想を集めたり、全員の意見を簡単に収集してみたい場合があります。</p>\n<p>このようなときに、オンラインで使用できるツールとして開発しました。</p>\n<h2 id="%E7%94%BB%E9%9D%A2%E3%81%AE%E6%93%8D%E4%BD%9C%E6%96%B9%E6%B3%95">画面の操作方法<a class="anchor" href="#%E7%94%BB%E9%9D%A2%E3%81%AE%E6%93%8D%E4%BD%9C%E6%96%B9%E6%B3%95">§</a></h2>\n<p>ファシリテータ画面は1人、ユーザ画面はその他全員が使用します</p>\n<ul>\n<li>\n<p>ユーザ画面<br>\n<a href="http://hostname/">http://hostname/</a></p>\n</li>\n<li>\n<p>ファシリテータ画面<br>\n<a href="http://hostname/fff">http://hostname/fff</a></p>\n</li>\n<li>\n<p>重要1: <strong>ユーザ名が一致していればユーザの投票は変更できます</strong></p>\n</li>\n<li>\n<p>重要2: ファシリテータ画面の、<strong>Resetボタンは全ユーザの投票結果が消える</strong>ので十分ご注意ください</p>\n</li>\n</ul>\n<h2 id="%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">技術要素<a class="anchor" href="#%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">§</a></h2>\n<ul>\n<li><a href="https://github.com/vuejs/vue-next">Vue 3</a></li>\n<li><a href="https://github.com/vitejs/vite">Vite</a></li>\n<li><a href="https://romefrontend.dev/">Rome</a></li>\n<li><a href="https://v5.getbootstrap.jp/">Bootstrap 5</a></li>\n<li><a href="https://cdb.reacttraining.com/universal-javascript-4761051b7ae9#.d39eaqcjp">Universal JavaScript</a></li>\n<li><a href="https://github.com/PacktPublishing/Node.js_Design_Patterns_Second_Edition_Code">Node.js design patterns</a>\n<ul>\n<li><a href="https://www.amazon.co.jp/Node-Js-Design-Patterns-Mario-Casciaro/dp/1785885588">en</a></li>\n<li><a href="https://www.oreilly.co.jp/books/9784873118734/">ja</a></li>\n</ul>\n</li>\n</ul>\n<p>ローカルで<code>yarn dev</code>と起動すると、フロントエンドの3000ポートからアクセスできます。</p>\n<ul>\n<li>frontend: 3000</li>\n<li>backend : 5000</li>\n</ul>\n<h2 id="%E3%82%82%E3%81%97%E3%80%81issue%E3%82%92%E8%A6%8B%E3%81%A4%E3%81%91%E3%81%9F%E3%82%89">もし、Issueを見つけたら<a class="anchor" href="#%E3%82%82%E3%81%97%E3%80%81issue%E3%82%92%E8%A6%8B%E3%81%A4%E3%81%91%E3%81%9F%E3%82%89">§</a></h2>\n<p>こちらからIssueの起票をお願いします</p>\n<p><a href="https://github.com/yoshixmk/f3/issues">https://github.com/yoshixmk/f3/issues</a></p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/profile/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#f3%E3%81%A8%E3%81%AF">f3とは</a></li><li><a href="#%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9">ユースケース</a></li><li><a href="#%E7%94%BB%E9%9D%A2%E3%81%AE%E6%93%8D%E4%BD%9C%E6%96%B9%E6%B3%95">画面の操作方法</a></li><li><a href="#%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">技術要素</a></li><li><a href="#%E3%82%82%E3%81%97%E3%80%81issue%E3%82%92%E8%A6%8B%E3%81%A4%E3%81%91%E3%81%9F%E3%82%89">もし、Issueを見つけたら</a></li></ol></nav>'
        } })
};
