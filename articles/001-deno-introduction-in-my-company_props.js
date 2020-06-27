import projectConfig from '/profile/pagic.config.js';
import Ga from '/profile/_ga.js';
export default {
    config: { "srcDir": "src", "publicDir": "public", "base": "/", ...projectConfig },
    'pagePath': "articles/001-deno-introduction-in-my-company.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/001-deno-introduction-in-my-company.html",
    'title': "社内勉強会でDenoを発表しました",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>社内勉強会でDenoを発表しました</h1>\n<p><img src="../static/images/deno.png" alt="Deno"></p>\n<h2 id="deno%E3%81%A8%E3%81%AF">Denoとは<a class="anchor" href="#deno%E3%81%A8%E3%81%AF">§</a></h2>\n<p>JavaScriptおよびTypeScriptのセキュアなランタイム\n→ V8を使用し、Rust(runtime部分)とTypeScript(std module部分)で書かれています。</p>\n<p>スター数 60kという驚くべき関心の高さ（ちなみにNode.jsはスター数70kです）</p>\n<p>ライアン・ダール自身、Node.jsとは全く別の新しいランタイムである、というのを繰り返しIssuesの回答に書いていて、npmライブラリの資産を使い回す意思はないというのが伝わってきます。</p>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/profile/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#deno%E3%81%A8%E3%81%AF">Denoとは</a></li></ol></nav>'
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
