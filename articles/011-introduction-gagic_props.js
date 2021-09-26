import projectConfig from '/profile/pagic.config.js';
import Ga from '/profile/_ga.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "articles/011-introduction-gagic.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/011-introduction-gagic.html",
    'title': "Gagicの紹介",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Gagicの紹介</h1>\n<div style="text-align: right;">\nPublication date： 2020-09-22\n</div>\n<h2 id="gagic%E3%81%A8%E3%81%AF">Gagicとは<a class="anchor" href="#gagic%E3%81%A8%E3%81%AF">§</a></h2>\n<p>Denoを用いて、Markdownから静的HTMLページを生成する最も簡単なツールです🦕</p>\n<p><code>Gagic</code>は<a href="https://deno.land/x/pagic@v0.9.1">Pagic</a>のサブバージョンです。<br>\n<code>Gagic</code>はに<code>Deno 1.4.0</code>以降をサポートし、今後も開発していきます。\n詳しくは後述しますが、<code>Deno 1.3.3</code>まで対応している<code>Pagic</code>v0.9.1をハードフォークして作成しています。</p>\n<h2 id="%E3%83%8F%E3%83%BC%E3%83%89%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF%E3%81%A8%E7%B5%8C%E7%B7%AF">ハードフォークと経緯<a class="anchor" href="#%E3%83%8F%E3%83%BC%E3%83%89%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF%E3%81%A8%E7%B5%8C%E7%B7%AF">§</a></h2>\n<p>9/10、突然、Pagicを作成していた<a href="https://github.com/xcatliu">アカウント</a>や<strong>リポジトリ</strong>が消えて、<a href="https://github.com/yoshixmk/deno-x-ranking/">deno-x-ranking</a>のCIが失敗するようになった。<br>\nこの時はDenoのサードパーティモジュールの固定化されたURLに変更し、対応した。</p>\n<p>9/14、Deno 1.4.0の<code>BREAKING Changes</code>の内容を含んでいたため、メンテナンスの必要があったため、ハードフォークし、対応を始めた。</p>\n<p>選択肢としては、2つだが、後者を選んだ。</p>\n<ul>\n<li>1.3.3を使用し続ける</li>\n<li>自分でメンテナンスして1.4.0移行に対応する</li>\n</ul>\n<p>9/21、この<code>Profile</code>サイトや<code>deno-x-ranking</code>を<code>Pagic</code>から<code>Gagic</code>へ切り替え作業が完了。</p>\n<h2 id="%E4%BD%BF%E3%81%84%E6%96%B9">使い方<a class="anchor" href="#%E4%BD%BF%E3%81%84%E6%96%B9">§</a></h2>\n<p><code>README</code>をご覧ください。</p>\n<p><a href="https://github.com/yoshixmk/gagic#gagic">https://github.com/yoshixmk/gagic#gagic</a></p>'
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
    'contentTitle': React.createElement("h1", { key: "0" }, "Gagic\u306E\u7D39\u4ECB"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<div style="text-align: right;">\nPublication date： 2020-09-22\n</div>\n<h2 id="gagic%E3%81%A8%E3%81%AF">Gagicとは<a class="anchor" href="#gagic%E3%81%A8%E3%81%AF">§</a></h2>\n<p>Denoを用いて、Markdownから静的HTMLページを生成する最も簡単なツールです🦕</p>\n<p><code>Gagic</code>は<a href="https://deno.land/x/pagic@v0.9.1">Pagic</a>のサブバージョンです。<br>\n<code>Gagic</code>はに<code>Deno 1.4.0</code>以降をサポートし、今後も開発していきます。\n詳しくは後述しますが、<code>Deno 1.3.3</code>まで対応している<code>Pagic</code>v0.9.1をハードフォークして作成しています。</p>\n<h2 id="%E3%83%8F%E3%83%BC%E3%83%89%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF%E3%81%A8%E7%B5%8C%E7%B7%AF">ハードフォークと経緯<a class="anchor" href="#%E3%83%8F%E3%83%BC%E3%83%89%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF%E3%81%A8%E7%B5%8C%E7%B7%AF">§</a></h2>\n<p>9/10、突然、Pagicを作成していた<a href="https://github.com/xcatliu">アカウント</a>や<strong>リポジトリ</strong>が消えて、<a href="https://github.com/yoshixmk/deno-x-ranking/">deno-x-ranking</a>のCIが失敗するようになった。<br>\nこの時はDenoのサードパーティモジュールの固定化されたURLに変更し、対応した。</p>\n<p>9/14、Deno 1.4.0の<code>BREAKING Changes</code>の内容を含んでいたため、メンテナンスの必要があったため、ハードフォークし、対応を始めた。</p>\n<p>選択肢としては、2つだが、後者を選んだ。</p>\n<ul>\n<li>1.3.3を使用し続ける</li>\n<li>自分でメンテナンスして1.4.0移行に対応する</li>\n</ul>\n<p>9/21、この<code>Profile</code>サイトや<code>deno-x-ranking</code>を<code>Pagic</code>から<code>Gagic</code>へ切り替え作業が完了。</p>\n<h2 id="%E4%BD%BF%E3%81%84%E6%96%B9">使い方<a class="anchor" href="#%E4%BD%BF%E3%81%84%E6%96%B9">§</a></h2>\n<p><code>README</code>をご覧ください。</p>\n<p><a href="https://github.com/yoshixmk/gagic#gagic">https://github.com/yoshixmk/gagic#gagic</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#gagic%E3%81%A8%E3%81%AF" }, "Gagic\u3068\u306F")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E3%83%8F%E3%83%BC%E3%83%89%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF%E3%81%A8%E7%B5%8C%E7%B7%AF" }, "\u30CF\u30FC\u30C9\u30D5\u30A9\u30FC\u30AF\u3068\u7D4C\u7DEF")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BD%BF%E3%81%84%E6%96%B9" }, "\u4F7F\u3044\u65B9")))),
    'author': "yoshixmk",
    'contributors': [
        "yoshixmk"
    ],
    'date': "2021-09-26T07:28:11.000Z",
    'updated': null,
    'excerpt': "Publication date： 2020-09-22 Gagicとは Denoを用いて、Markdownから静的HTMLページを生成する最も簡単なツールです🦕 GagicはPagicのサブバージョンです。 GagicはにDeno 1.4.0以降をサポートし、今後も開発していきます。...",
    'cover': undefined,
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
