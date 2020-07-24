import Ga from '/profile/_ga.js';
import projectConfig from '/profile/pagic.config.js';
export default {
    'ga': React.createElement(Ga, { id: "UA-149348992-2" }),
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
    config: { "srcDir": "src", "publicDir": "public", "base": "/", ...projectConfig },
    'pagePath': "articles/003-deno-introduction-at-ts-study-meeting.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/003-deno-introduction-at-ts-study-meeting.html",
    'title': "Tegebu TS勉強会で登壇しました",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Tegebu TS勉強会で登壇しました</h1>\n<p>Typescriptのセキュアなランタイム、<strong>Deno</strong>について話をしました<br>\n<img src="../static/images/ts.png" alt="ts"></p>\n<div style="text-align: right;">\nPublication date： 2020-06-23\n</div>\n<h2 id="10-things-i-regret-about-node.js">10 Things I Regret About Node.js<a class="anchor" href="#10-things-i-regret-about-node.js">§</a></h2>\n<p>JSConf EU 2018で、Node.js作者であるRyan Dahl ※ライアン・ダールが発表した内容。<br>\n日本語にすると、「Node.jsについて後悔する10のこと」。<br>\nDenoの公表を含んでいました。</p>\n<p>※ regretの直訳は色々ある</p>\n<ul>\n<li>後悔</li>\n<li>反省点</li>\n<li>設計ミス</li>\n</ul>\n<h2 id="%E7%B6%9A%E3%81%8D%E3%81%AF">続きは<a class="anchor" href="#%E7%B6%9A%E3%81%8D%E3%81%AF">§</a></h2>\n<p>後日全てを公開します。<br>\n（tsxで埋め込みする予定）</p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/profile/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#10-things-i-regret-about-node.js">10 Things I Regret About Node.js</a></li><li><a href="#%E7%B6%9A%E3%81%8D%E3%81%AF">続きは</a></li></ol></nav>'
        } })
};
