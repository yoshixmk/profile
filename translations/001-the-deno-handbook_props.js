import Ga from '/_ga.js';
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
        "base": "/",
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
                    "articles/001-install-and-hello-world.md",
                    "articles/002-awesome-deno-cn.md"
                ]
            },
            {
                "link": "translations/README.md",
                "children": [
                    "translations/001-the-deno-handbook.md",
                    "translations/002-deno-chat-app.md",
                    "translations/003-from-node-to-deno.md"
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
    'pagePath': "translations/001-the-deno-handbook.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "translations/001-the-deno-handbook.html",
    'title': "TBD",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1 id="tbd">TBD <a class="header-anchor" href="#tbd">§</a></h1>\n<p>TBD</p>\n<h2 id="tbd-2">TBD <a class="header-anchor" href="#tbd-2">§</a></h2>\n<p>TBD</p>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'sidebar': [
        {
            "text": "Profile",
            "link": "index.html"
        },
        {
            "link": "articles/index.html",
            "children": [
                {
                    "text": "(1) TBD",
                    "link": "articles/001-install-and-hello-world.html"
                },
                {
                    "text": "(2) TBD",
                    "link": "articles/002-awesome-deno-cn.html"
                }
            ],
            "text": "ブログ"
        },
        {
            "link": "translations/index.html",
            "children": [
                {
                    "text": "TBD",
                    "link": "translations/001-the-deno-handbook.html"
                },
                {
                    "text": "TBD",
                    "link": "translations/002-deno-chat-app.html"
                },
                {
                    "text": "TBD",
                    "link": "translations/003-from-node-to-deno.html"
                }
            ],
            "text": "翻訳"
        }
    ],
    'ga': React.createElement(Ga, { id: "UA-149348992-2" })
};
