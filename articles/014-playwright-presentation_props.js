import projectConfig from '/profile/pagic.config.js';
import DenoIntro from './014-playwright-presentation_content.js';
import Ga from '/profile/_ga.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "articles/014-playwright-presentation.tsx",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/014-playwright-presentation.html",
    'title': "Playwright 発表資料",
    'content': React.createElement(DenoIntro, { author: "yoshixmk", config: {
            branch: 'master',
            exclude: [
                '**/.*',
                '**/package.json',
                '**/package-lock.json',
                '**/node_modules',
                'pagic.config.ts',
                'pagic.config.tsx',
                '**/config.gypi',
                '**/CVS',
                '**/npm-debug.log',
                'dist'
            ],
            footer: React.createElement("footer", null,
                "Powered by\u00A0",
                React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
            ga: {
                id: 'UA-149348992-2'
            },
            github: 'https://github.com/yoshixmk',
            ignore: [
                /\/public\//,
                /\/\./,
                /\/LICENSE/
            ],
            include: undefined,
            nav: [
                {
                    link: 'https://www.tegebu.com/',
                    text: 'Tegebu'
                },
                {
                    link: '/../deno-x-ranking/',
                    text: 'Deno X Ranking'
                },
                {
                    link: 'https://github.com/yoshixmk',
                    text: 'Github'
                },
                {
                    link: 'https://twitter.com/yoshixmk',
                    text: 'Twitter'
                },
                {
                    link: 'https://qiita.com/yoshixmk',
                    text: 'Qiita'
                }
            ],
            outDir: 'dist',
            plugins: [
                'clean',
                'init',
                'md',
                'tsx',
                'script',
                'layout',
                'out',
                'sidebar',
                'ga'
            ],
            port: 8000,
            root: '/profile/',
            serve: false,
            sidebar: {
                '/': [
                    'README.md',
                    {
                        children: [
                            'articles/001-deno-introduction-in-my-company.md',
                            'articles/002-news-published-third-party-module.md',
                            'articles/003-deno-introduction-at-ts-study-meeting.md',
                            'articles/004-deno-introduce-by-yoshixmk-regret-10-things.tsx',
                            'articles/005-deno-react-chat.md',
                            'articles/006-tege-next-introduction.md',
                            'articles/007-deno-ja-manual-introduction.md',
                            'articles/008-tege-next-trend-page-release.md',
                            'articles/009-tege-domains-release.md',
                            'articles/010-introduction-f3.md',
                            'articles/011-introduction-gagic.md',
                            'articles/012-introduction-piny-and-pinyin.md',
                            'articles/013-hasura-presentation.tsx',
                            'articles/014-playwright-presentation.tsx'
                        ],
                        link: 'articles/README.md'
                    },
                    {
                        children: [
                            'translations/001-perfomance-aspect-of-deno-vs-node-js.md',
                            'translations/002-what-is-the-best-deno-web-framework.md',
                            'translations/003-registration-form-mongodb.md',
                            'translations/004-guide-to-porting-node-modules-to-deno.md',
                            'translations/005-do-all-roads-lead-to-rome.md',
                            'translations/006-the-wait-is-over-mandarine-2-0-0-is-here.md'
                        ],
                        link: 'translations/README.md'
                    }
                ]
            },
            srcDir: '.',
            theme: 'docs',
            title: 'yoshixmk Profile',
            watch: false
        }, content: null, footer: React.createElement("footer", null,
            "Powered by\u00A0",
            React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")), head: null, layoutPath: "_layout.tsx", outputPath: "articles/014-playwright-presentation.html", pagePath: "articles/014-playwright-presentation.tsx", published: "2021-09-23", script: null, title: "Playwright \u767A\u8868\u8CC7\u6599" }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-149348992-2" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/profile/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'author': "yoshixmk",
    'published': "2021-09-23",
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
