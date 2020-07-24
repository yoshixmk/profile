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
    'pagePath': "articles/005-deno-react-chat.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/005-deno-react-chat.html",
    'title': "deno-react-chatを公開しました",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>deno-react-chatを公開しました</h1>\n<div style="text-align: right;">\n  Publication date： 2020-07-08\n</div>\n<p>React, deno-react-base-server, Websocketを使用して、チャットを作成しました。<br>\nリポジトリはこちら<br>\nhttps://github.com/yoshixmk/deno-react-chat<br>\n（ IssueやPRをお待ちしてます ）\n<img src="../static/images/screenshot.png" alt="deno-react-chatのスクリーンショット"></p>\n<p>React.FunctionComponent (React.FC) を使用しています<br>\nまた、Typescriptファイルのみで構成してみました。</p>\n<p>サーバは、<a href="https://github.com/asos-craigmorten/deno-react-base-server">deno-react-base-server</a>を使用しており、背後で<a href="https://github.com/asos-craigmorten/opine">Opine</a>という、ExpressJSから移植されたDeno用の高速でシンプルなWebフレームワークが動作します。<br>\n<img src="../static/images/typescript100.png" alt="typescript only image"></p>\n<p>Opineを使用して、1から作成したい場合は一度<a href="https://github.com/asos-craigmorten/opine/tree/main/examples/react">Example</a>を見てみるのがおすすめです。</p>\n<p>Denoのランタイムで動作する、http server フレームワークは活動的で、ひしめいています。選定する際には、<a href="https://dev.to/craigmorten/what-is-the-best-deno-web-framework-2k69">What Is The Best Deno Web Framework?</a> が参考になります。<br>\nこちらは翻訳予定ですので、完了したらまた記事を書こうと思います。</p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/profile/index.js", type: "module" })),
    'toc': null
};
