import projectConfig from '/profile/pagic.config.js';
import Ga from '/profile/_ga.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "articles/005-deno-react-chat.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/005-deno-react-chat.html",
    'title': "deno-react-chatを公開しました",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>deno-react-chatを公開しました</h1>\n<div style="text-align: right;">\n  Publication date： 2020-07-08\n</div>\n<p>React, deno-react-base-server, Websocketを使用して、チャットを作成しました。<br>\nリポジトリはこちら<br>\n<a href="https://github.com/yoshixmk/deno-react-chat">https://github.com/yoshixmk/deno-react-chat</a><br>\n（ IssueやPRをお待ちしてます ）\n<img src="../static/images/screenshot.png" alt="deno-react-chatのスクリーンショット"></p>\n<p>React.FunctionComponent (React.FC) を使用しています<br>\nまた、Typescriptファイルのみで構成してみました。</p>\n<p>サーバは、<a href="https://github.com/asos-craigmorten/deno-react-base-server">deno-react-base-server</a>を使用しており、背後で<a href="https://github.com/asos-craigmorten/opine">Opine</a>という、ExpressJSから移植されたDeno用の高速でシンプルなWebフレームワークが動作します。<br>\n<img src="../static/images/typescript100.png" alt="typescript only image"></p>\n<p>Opineを使用して、1から作成したい場合は一度<a href="https://github.com/asos-craigmorten/opine/tree/main/examples/react">Example</a>を見てみるのがおすすめです。</p>\n<p>Denoのランタイムで動作する、http server フレームワークは活動的で、ひしめいています。選定する際には、<a href="https://dev.to/craigmorten/what-is-the-best-deno-web-framework-2k69">What Is The Best Deno Web Framework?</a> が参考になります。<br>\nこちらは翻訳予定ですので、完了したらまた記事を書こうと思います。</p>'
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
    'contentTitle': React.createElement("h1", { key: "0" }, "deno-react-chat\u3092\u516C\u958B\u3057\u307E\u3057\u305F"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<div style="text-align: right;">\n  Publication date： 2020-07-08\n</div>\n<p>React, deno-react-base-server, Websocketを使用して、チャットを作成しました。<br>\nリポジトリはこちら<br>\n<a href="https://github.com/yoshixmk/deno-react-chat">https://github.com/yoshixmk/deno-react-chat</a><br>\n（ IssueやPRをお待ちしてます ）\n<img src="../static/images/screenshot.png" alt="deno-react-chatのスクリーンショット"></p>\n<p>React.FunctionComponent (React.FC) を使用しています<br>\nまた、Typescriptファイルのみで構成してみました。</p>\n<p>サーバは、<a href="https://github.com/asos-craigmorten/deno-react-base-server">deno-react-base-server</a>を使用しており、背後で<a href="https://github.com/asos-craigmorten/opine">Opine</a>という、ExpressJSから移植されたDeno用の高速でシンプルなWebフレームワークが動作します。<br>\n<img src="../static/images/typescript100.png" alt="typescript only image"></p>\n<p>Opineを使用して、1から作成したい場合は一度<a href="https://github.com/asos-craigmorten/opine/tree/main/examples/react">Example</a>を見てみるのがおすすめです。</p>\n<p>Denoのランタイムで動作する、http server フレームワークは活動的で、ひしめいています。選定する際には、<a href="https://dev.to/craigmorten/what-is-the-best-deno-web-framework-2k69">What Is The Best Deno Web Framework?</a> が参考になります。<br>\nこちらは翻訳予定ですので、完了したらまた記事を書こうと思います。</p>'
        } }),
    'toc': null,
    'author': "yoshixmk",
    'contributors': [
        "yoshixmk"
    ],
    'date': "2021-09-26T07:28:11.000Z",
    'updated': null,
    'excerpt': "Publication date： 2020-07-08 React, deno-react-base-server, Websocketを使用して、チャットを作成しました。 リポジトリはこちら https://github.com/yoshixmk/deno-react-chat （ IssueやPRをお待ちしてます ） React.Fu...",
    'cover': "../static/images/screenshot.png",
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