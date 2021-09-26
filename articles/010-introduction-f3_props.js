import projectConfig from '/profile/pagic.config.js';
import Ga from '/profile/_ga.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "articles/010-introduction-f3.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/010-introduction-f3.html",
    'title': "f3の紹介",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>f3の紹介</h1>\n<div style="text-align: right;">\nPublication date： 2020-09-21\n</div>\n<p><img src="https://github.com/yoshixmk/f3/blob/master/screenshot.png?raw=true" alt="F3 image"></p>\n<h2 id="f3%E3%81%A8%E3%81%AF">f3とは<a class="anchor" href="#f3%E3%81%A8%E3%81%AF">§</a></h2>\n<ul>\n<li><code>フィスト トゥ ファイブ</code>（ファイブフィンガー）のWebアプリです</li>\n<li>読み方： <code>エフスリー</code></li>\n<li>英語名: fist to five</li>\n<li><strong>基本的には、5が賛成、1が反対。0は無効投票です</strong>（ただし、0はあまり使って欲しくないこともあり、裏コマンドっぽく実装してます）。</li>\n</ul>\n<p>由来については、fの数が3つであることからつけました。</p>\n<blockquote>\n<p><strong>F</strong>acilitating conversations using <strong>F</strong>ist to <strong>F</strong>ive.\nRecommended for use in online agile meeting🃏</p>\n</blockquote>\n<p><a href="https://github.com/yoshixmk/f3">https://github.com/yoshixmk/f3</a></p>\n<h2 id="%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9">ユースケース<a class="anchor" href="#%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9">§</a></h2>\n<p>合意形成やて手軽なアンケート手法として、会議の参加者にお題を提示して、<strong>0~5を示す指の本数で、そのお題に対応する度合い</strong>を表すことができます。</p>\n<p>アジャイル開発において、今の気分をアイスブレイクとして聞いてみたり、振り返り（レトロスペクティブズ）などのセレモニー後の感想を集めたり、全員の意見を簡単に収集してみたい場合があります。</p>\n<p>このようなときに、オンラインで使用できるツールとして開発しました。</p>\n<h2 id="%E7%94%BB%E9%9D%A2%E3%81%AE%E6%93%8D%E4%BD%9C%E6%96%B9%E6%B3%95">画面の操作方法<a class="anchor" href="#%E7%94%BB%E9%9D%A2%E3%81%AE%E6%93%8D%E4%BD%9C%E6%96%B9%E6%B3%95">§</a></h2>\n<p>ファシリテータ画面は1人、ユーザ画面はその他全員が使用します</p>\n<ul>\n<li>\n<p>ユーザ画面<br>\nhttps://&lt;hostname&gt;/</p>\n</li>\n<li>\n<p>ファシリテータ画面<br>\nhttps://&lt;hostname&gt;/fff</p>\n</li>\n<li>\n<p>重要1: <strong>ユーザ名が一致していればユーザの投票は変更できます</strong></p>\n</li>\n<li>\n<p>重要2: ファシリテータ画面の、<strong>Resetボタンは全ユーザの投票結果が消える</strong>ので十分ご注意ください</p>\n</li>\n</ul>\n<h2 id="%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">技術要素<a class="anchor" href="#%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">§</a></h2>\n<ul>\n<li><a href="https://github.com/vuejs/vue-next">Vue 3</a></li>\n<li><a href="https://github.com/vitejs/vite">Vite</a></li>\n<li><a href="https://romefrontend.dev/">Rome</a></li>\n<li><a href="https://v5.getbootstrap.jp/">Bootstrap 5</a></li>\n<li><a href="https://cdb.reacttraining.com/universal-javascript-4761051b7ae9#.d39eaqcjp">Universal JavaScript</a></li>\n<li><a href="https://github.com/PacktPublishing/Node.js_Design_Patterns_Second_Edition_Code">Node.js design patterns</a>\n<ul>\n<li><a href="https://www.amazon.co.jp/Node-Js-Design-Patterns-Mario-Casciaro/dp/1785885588">en</a></li>\n<li><a href="https://www.oreilly.co.jp/books/9784873118734/">ja</a></li>\n</ul>\n</li>\n</ul>\n<p>ローカルで<code>yarn dev</code>と起動すると、<a href="http://localhost:3000">フロントエンドの3000ポート</a>からアクセスできます。</p>\n<ul>\n<li>frontend: 3000</li>\n<li>backend : 5000</li>\n</ul>\n<h2 id="%E3%82%82%E3%81%97issue%E3%82%92%E8%A6%8B%E3%81%A4%E3%81%91%E3%81%9F%E3%82%89">もし、Issueを見つけたら<a class="anchor" href="#%E3%82%82%E3%81%97issue%E3%82%92%E8%A6%8B%E3%81%A4%E3%81%91%E3%81%9F%E3%82%89">§</a></h2>\n<p>こちらからIssueの起票をお願いします</p>\n<p><a href="https://github.com/yoshixmk/f3/issues">https://github.com/yoshixmk/f3/issues</a></p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-149348992-2" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/profile/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "f3\u306E\u7D39\u4ECB"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<div style="text-align: right;">\nPublication date： 2020-09-21\n</div>\n<p><img src="https://github.com/yoshixmk/f3/blob/master/screenshot.png?raw=true" alt="F3 image"></p>\n<h2 id="f3%E3%81%A8%E3%81%AF">f3とは<a class="anchor" href="#f3%E3%81%A8%E3%81%AF">§</a></h2>\n<ul>\n<li><code>フィスト トゥ ファイブ</code>（ファイブフィンガー）のWebアプリです</li>\n<li>読み方： <code>エフスリー</code></li>\n<li>英語名: fist to five</li>\n<li><strong>基本的には、5が賛成、1が反対。0は無効投票です</strong>（ただし、0はあまり使って欲しくないこともあり、裏コマンドっぽく実装してます）。</li>\n</ul>\n<p>由来については、fの数が3つであることからつけました。</p>\n<blockquote>\n<p><strong>F</strong>acilitating conversations using <strong>F</strong>ist to <strong>F</strong>ive.\nRecommended for use in online agile meeting🃏</p>\n</blockquote>\n<p><a href="https://github.com/yoshixmk/f3">https://github.com/yoshixmk/f3</a></p>\n<h2 id="%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9">ユースケース<a class="anchor" href="#%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9">§</a></h2>\n<p>合意形成やて手軽なアンケート手法として、会議の参加者にお題を提示して、<strong>0~5を示す指の本数で、そのお題に対応する度合い</strong>を表すことができます。</p>\n<p>アジャイル開発において、今の気分をアイスブレイクとして聞いてみたり、振り返り（レトロスペクティブズ）などのセレモニー後の感想を集めたり、全員の意見を簡単に収集してみたい場合があります。</p>\n<p>このようなときに、オンラインで使用できるツールとして開発しました。</p>\n<h2 id="%E7%94%BB%E9%9D%A2%E3%81%AE%E6%93%8D%E4%BD%9C%E6%96%B9%E6%B3%95">画面の操作方法<a class="anchor" href="#%E7%94%BB%E9%9D%A2%E3%81%AE%E6%93%8D%E4%BD%9C%E6%96%B9%E6%B3%95">§</a></h2>\n<p>ファシリテータ画面は1人、ユーザ画面はその他全員が使用します</p>\n<ul>\n<li>\n<p>ユーザ画面<br>\nhttps://&lt;hostname&gt;/</p>\n</li>\n<li>\n<p>ファシリテータ画面<br>\nhttps://&lt;hostname&gt;/fff</p>\n</li>\n<li>\n<p>重要1: <strong>ユーザ名が一致していればユーザの投票は変更できます</strong></p>\n</li>\n<li>\n<p>重要2: ファシリテータ画面の、<strong>Resetボタンは全ユーザの投票結果が消える</strong>ので十分ご注意ください</p>\n</li>\n</ul>\n<h2 id="%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">技術要素<a class="anchor" href="#%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">§</a></h2>\n<ul>\n<li><a href="https://github.com/vuejs/vue-next">Vue 3</a></li>\n<li><a href="https://github.com/vitejs/vite">Vite</a></li>\n<li><a href="https://romefrontend.dev/">Rome</a></li>\n<li><a href="https://v5.getbootstrap.jp/">Bootstrap 5</a></li>\n<li><a href="https://cdb.reacttraining.com/universal-javascript-4761051b7ae9#.d39eaqcjp">Universal JavaScript</a></li>\n<li><a href="https://github.com/PacktPublishing/Node.js_Design_Patterns_Second_Edition_Code">Node.js design patterns</a>\n<ul>\n<li><a href="https://www.amazon.co.jp/Node-Js-Design-Patterns-Mario-Casciaro/dp/1785885588">en</a></li>\n<li><a href="https://www.oreilly.co.jp/books/9784873118734/">ja</a></li>\n</ul>\n</li>\n</ul>\n<p>ローカルで<code>yarn dev</code>と起動すると、<a href="http://localhost:3000">フロントエンドの3000ポート</a>からアクセスできます。</p>\n<ul>\n<li>frontend: 3000</li>\n<li>backend : 5000</li>\n</ul>\n<h2 id="%E3%82%82%E3%81%97issue%E3%82%92%E8%A6%8B%E3%81%A4%E3%81%91%E3%81%9F%E3%82%89">もし、Issueを見つけたら<a class="anchor" href="#%E3%82%82%E3%81%97issue%E3%82%92%E8%A6%8B%E3%81%A4%E3%81%91%E3%81%9F%E3%82%89">§</a></h2>\n<p>こちらからIssueの起票をお願いします</p>\n<p><a href="https://github.com/yoshixmk/f3/issues">https://github.com/yoshixmk/f3/issues</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#f3%E3%81%A8%E3%81%AF" }, "f3\u3068\u306F")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9" }, "\u30E6\u30FC\u30B9\u30B1\u30FC\u30B9")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%94%BB%E9%9D%A2%E3%81%AE%E6%93%8D%E4%BD%9C%E6%96%B9%E6%B3%95" }, "\u753B\u9762\u306E\u64CD\u4F5C\u65B9\u6CD5")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0" }, "\u6280\u8853\u8981\u7D20")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E3%82%82%E3%81%97issue%E3%82%92%E8%A6%8B%E3%81%A4%E3%81%91%E3%81%9F%E3%82%89" }, "\u3082\u3057\u3001Issue\u3092\u898B\u3064\u3051\u305F\u3089")))),
    'author': "yoshixmk",
    'contributors': [
        "yoshixmk"
    ],
    'date': "2021-09-26T07:28:11.000Z",
    'updated': null,
    'excerpt': "Publication date： 2020-09-21 f3とは - フィスト トゥ ファイブ（ファイブフィンガー）のWebアプリです - 読み方： エフスリー - 英語名: fist to five - 基本的には、5が賛成、1が反対。0は無効投票です（ただし、0はあまり...",
    'cover': "https://github.com/yoshixmk/f3/blob/master/screenshot.png?raw=true",
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
                },
                {
                    "text": "PinyとPinyinの紹介",
                    "link": "articles/012-introduction-piny-and-pinyin.html",
                    "pagePath": "articles/012-introduction-piny-and-pinyin.md"
                },
                {
                    "text": "Hasura 発表資料",
                    "link": "articles/013-hasura-presentation.html",
                    "pagePath": "articles/013-hasura-presentation.tsx"
                },
                {
                    "text": "Playwright 発表資料",
                    "link": "articles/014-playwright-presentation.html",
                    "pagePath": "articles/014-playwright-presentation.tsx"
                }
            ],
            "pagePath": "articles/README.md",
            "text": "ブログ"
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
                },
                {
                    "text": "Do all roads lead to Rome?",
                    "link": "translations/005-do-all-roads-lead-to-rome.html",
                    "pagePath": "translations/005-do-all-roads-lead-to-rome.md"
                },
                {
                    "text": "The wait is over, Mandarine 2.0.0 is here.",
                    "link": "translations/006-the-wait-is-over-mandarine-2-0-0-is-here.html",
                    "pagePath": "translations/006-the-wait-is-over-mandarine-2-0-0-is-here.md"
                }
            ],
            "pagePath": "translations/README.md",
            "text": "翻訳"
        }
    ]
};
