import projectConfig from '/profile/pagic.config.js';
import Ga from '/profile/_ga.js';
export default {
    config: { "srcDir": "src", "publicDir": "public", "base": "/", ...projectConfig },
    'pagePath': "articles/005-deno-react-chat.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/005-deno-react-chat.html",
    'title': "deno-react-chatを公開しました",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>deno-react-chatを公開しました</h1>\n<p>React, deno-react-base-server, Websocketを使用して、チャットを作成しました。<br>\nリポジトリはこちら<br>\nhttps://github.com/yoshixmk/deno-react-chat<br>\n（ IssueやPRをお待ちしてます ）\n<img src="../static/images/screenshot.png" alt="deno-react-chatのスクリーンショット"></p>\n<p>React.FunctionComponent (React.FC) を使用しています<br>\nまた、Typescriptファイルのみで構成してみました。</p>\n<p>サーバは、<a href="https://github.com/asos-craigmorten/deno-react-base-server">deno-react-base-server</a>を使用しており、背後で<a href="https://github.com/asos-craigmorten/opine">Opine</a>という、ExpressJSから移植されたDeno用の高速でシンプルなWebフレームワークが動作します。<br>\n<img src="../static/images/typescript100.png" alt="typescript only image"></p>\n<p>Opineを使用して、1から作成したい場合は一度<a href="https://github.com/asos-craigmorten/opine/tree/main/examples/react">Example</a>を見てみるのがおすすめです。</p>\n<p>Denoのランタイムで動作する、http server フレームワークは活動的で、ひしめいています。選定する際には、<a href="https://dev.to/craigmorten/what-is-the-best-deno-web-framework-2k69">What Is The Best Deno Web Framework?</a> が参考になります。<br>\nこちらは翻訳予定ですので、完了したらまた記事を書こうと思います。</p>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/profile/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol></ol></nav>'
        } }),
    'sidebar': [
        {
            "text": "@yoshixmk / Yoshihiro Ueki",
            "link": "index.html"
        },
        {
            "link": "articles/index.html",
            "children": [
                {
                    "text": "社内勉強会でDenoを発表しました",
                    "link": "articles/001-deno-introduction-in-my-company.html"
                },
                {
                    "text": "Denoのサードパーティモジュールを公開しました",
                    "link": "articles/002-news-published-third-party-module.html"
                },
                {
                    "text": "Tegebu TS勉強会で登壇しました",
                    "link": "articles/003-deno-introduction-at-ts-study-meeting.html"
                },
                {
                    "text": "Deno 発表資料",
                    "link": "articles/004-deno-introduce-by-yoshixmk-regret-10-things.html"
                },
                {
                    "text": "deno-react-chatを公開しました",
                    "link": "articles/005-deno-react-chat.html"
                }
            ],
            "text": "ブログ"
        },
        {
            "link": "translations/index.html",
            "children": [
                {
                    "text": "Performance aspect of Deno vs. Node",
                    "link": "translations/001-perfomance-aspect-of-deno-vs-node-js.html"
                },
                {
                    "text": "What Is The Best Deno Web Framework?",
                    "link": "translations/002-what-is-the-best-deno-web-framework.html"
                },
                {
                    "text": "Creating Registration Form In Deno : MongoDB Setup, Saving Data",
                    "link": "translations/003-registration-form-mongodb.html"
                }
            ],
            "text": "翻訳"
        }
    ],
    'ga': React.createElement(Ga, { id: "UA-149348992-2" })
};
