import projectConfig from '/profile/pagic.config.js';
import Ga from '/profile/_ga.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "articles/003-deno-introduction-at-ts-study-meeting.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/003-deno-introduction-at-ts-study-meeting.html",
    'title': "Tegebu TS勉強会で登壇しました",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Tegebu TS勉強会で登壇しました</h1>\n<p>Typescriptのセキュアなランタイム、<strong>Deno</strong>について話をしました<br>\n<img src="../static/images/ts.png" alt="ts"></p>\n<div style="text-align: right;">\nPublication date： 2020-06-23\n</div>\n<h2 id="10-things-i-regret-about-nodejs">10 Things I Regret About Node.js<a class="anchor" href="#10-things-i-regret-about-nodejs">§</a></h2>\n<p>JSConf EU 2018で、Node.js作者であるRyan Dahl ※ライアン・ダールが発表した内容。<br>\n日本語にすると、「Node.jsについて後悔する10のこと」。<br>\nDenoの公表を含んでいました。</p>\n<p>※ regretの直訳は色々ある</p>\n<ul>\n<li>後悔</li>\n<li>反省点</li>\n<li>設計ミス</li>\n</ul>\n<h2 id="%E7%B6%9A%E3%81%8D%E3%81%AF">続きは<a class="anchor" href="#%E7%B6%9A%E3%81%8D%E3%81%AF">§</a></h2>\n<p>後日全てを公開します。<br>\n（tsxで埋め込みする予定）</p>'
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
    'contentTitle': React.createElement("h1", { key: "0" }, "Tegebu TS\u52C9\u5F37\u4F1A\u3067\u767B\u58C7\u3057\u307E\u3057\u305F"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Typescriptのセキュアなランタイム、<strong>Deno</strong>について話をしました<br>\n<img src="../static/images/ts.png" alt="ts"></p>\n<div style="text-align: right;">\nPublication date： 2020-06-23\n</div>\n<h2 id="10-things-i-regret-about-nodejs">10 Things I Regret About Node.js<a class="anchor" href="#10-things-i-regret-about-nodejs">§</a></h2>\n<p>JSConf EU 2018で、Node.js作者であるRyan Dahl ※ライアン・ダールが発表した内容。<br>\n日本語にすると、「Node.jsについて後悔する10のこと」。<br>\nDenoの公表を含んでいました。</p>\n<p>※ regretの直訳は色々ある</p>\n<ul>\n<li>後悔</li>\n<li>反省点</li>\n<li>設計ミス</li>\n</ul>\n<h2 id="%E7%B6%9A%E3%81%8D%E3%81%AF">続きは<a class="anchor" href="#%E7%B6%9A%E3%81%8D%E3%81%AF">§</a></h2>\n<p>後日全てを公開します。<br>\n（tsxで埋め込みする予定）</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#10-things-i-regret-about-nodejs" }, "10 Things I Regret About Node.js")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%B6%9A%E3%81%8D%E3%81%AF" }, "\u7D9A\u304D\u306F")))),
    'author': "yoshixmk",
    'contributors': [
        "yoshixmk"
    ],
    'date': "2021-09-26T07:28:11.000Z",
    'updated': null,
    'excerpt': "Typescriptのセキュアなランタイム、Denoについて話をしました Publication date： 2020-06-23 10 Things I Regret About Node.js JSConf EU 2018で、Node.js作者であるRyan Dahl ※ライアン・ダールが発表した内容。 日本語に...",
    'cover': "../static/images/ts.png",
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
