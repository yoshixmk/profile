import Ga from '/profile/_ga.js';
export default {
    'config': {
        "srcDir": ".",
        "publicDir": "public",
        "ignore": [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        "base": "/profile/",
        "theme": "docs",
        "plugins": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        "watch": false,
        "serve": false,
        "port": 8000,
        "title": "yoshixmk Profile",
        "sidebar": [
            "README.md",
            {
                "link": "articles/README.md",
                "children": [
                    "articles/001-deno-introduction-in-my-company.md",
                    "articles/002-news-published-third-party-module.md",
                    "articles/003-deno-introduction-at-ts-study-meeting.md"
                ]
            },
            {
                "link": "translations/README.md",
                "children": [
                    "translations/001-perfomance-aspect-of-deno-vs-node-js.md",
                    "translations/002-what-is-the-best-deno-web-framework.md",
                    "translations/003-registration-form-mongodb.md"
                ]
            }
        ],
        "nav": [
            {
                "text": "Tegebu",
                "link": "https://www.tegebu.com/"
            },
            {
                "text": "Deno Third Party Modules Ranking",
                "link": "https://deno.land/x/ranking"
            },
            {
                "text": "Github",
                "link": "https://github.com/yoshixmk"
            },
            {
                "text": "Twitter",
                "link": "https://twitter.com/yoshixmk"
            },
            {
                "text": "Qiita",
                "link": "https://qiita.com/yoshixmk"
            }
        ],
        "ga": {
            "id": "UA-149348992-2"
        }
    },
    'pagePath': "translations/001-perfomance-aspect-of-deno-vs-node-js.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "translations/001-perfomance-aspect-of-deno-vs-node-js.html",
    'title': "Performance aspect of Deno vs. Node",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Performance aspect of Deno vs. Node</h1>\n<p>TBD <a href="https://dev.to/gjuoun/perfomance-aspect-of-deno-vs-node-js-4dke">Performance aspect of Deno vs. Node</a></p>\n<h2 id="tbd">TBD<a class="anchor" href="#tbd">§</a></h2>\n<p>TBD</p>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/profile/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#tbd">TBD</a></li></ol></nav>'
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
