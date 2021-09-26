import projectConfig from '/profile/pagic.config.js';
import Ga from '/profile/_ga.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "articles/012-introduction-piny-and-pinyin.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/012-introduction-piny-and-pinyin.html",
    'title': "PinyとPinyinの紹介",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>PinyとPinyinの紹介</h1>\n<div style="text-align: right;">\nPublication date： 2021-01-11\n</div>\n<h2 id="piny%E3%81%A8%E3%81%AF">Pinyとは<a class="anchor" href="#piny%E3%81%A8%E3%81%AF">§</a></h2>\n<p>HSK (漢語水平考試)の単語覚えのために開発しました。<br>\n<a href="https://github.com/yoshixmk/piny">https://github.com/yoshixmk/piny</a><br>\nCLIでピンインの確認テスト、Web UIでの単語の暗記、カスタマイズ可能なディクショナリ（初期セットはHSK3~6）とツールを用意しています。<br>\nまた、ピンインの確認テストでは、一度間違えたものをやり直せるように、集中対策モードをつけました<br>\nこだわったのは単純な単語の羅列にしないことで、一度見て覚えるのは難しいので、関連する画像を合わせて表示してイメージを膨らませながら取り組むことができるようにしました</p>\n<h2 id="pinyin%E3%81%A8%E3%81%AF">Pinyinとは<a class="anchor" href="#pinyin%E3%81%A8%E3%81%AF">§</a></h2>\n<p>Denoのサードパーティモジュールとして公開（<a href="https://deno.land/x/pinyin">https://deno.land/x/pinyin</a>）し、Pinyの内部モジュールとして使用しました<br>\nnpmで同様の<a href="https://www.npmjs.com/package/pinyin">pinyin</a>モジュールがあるのでラップして実装しました。</p>\n<h2 id="%E4%BB%8A%E5%BE%8C">今後<a class="anchor" href="#%E4%BB%8A%E5%BE%8C">§</a></h2>\n<p>HSKのみならず中国語の学習する上で、これあったらいいな、と思ったものがあれば追加していきます。<br>\n希望の機能や不具合があればIssueをください</p>\n<h2 id="%E4%BD%BF%E3%81%84%E6%96%B9">使い方<a class="anchor" href="#%E4%BD%BF%E3%81%84%E6%96%B9">§</a></h2>\n<p>それぞれ<code>README</code>をご覧ください。<br>\n<a href="https://github.com/yoshixmk/pinyin">https://github.com/yoshixmk/pinyin</a><br>\n<a href="hhttps://github.com/yoshixmk/piny">hhttps://github.com/yoshixmk/piny</a></p>'
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
    'contentTitle': React.createElement("h1", { key: "0" }, "Piny\u3068Pinyin\u306E\u7D39\u4ECB"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<div style="text-align: right;">\nPublication date： 2021-01-11\n</div>\n<h2 id="piny%E3%81%A8%E3%81%AF">Pinyとは<a class="anchor" href="#piny%E3%81%A8%E3%81%AF">§</a></h2>\n<p>HSK (漢語水平考試)の単語覚えのために開発しました。<br>\n<a href="https://github.com/yoshixmk/piny">https://github.com/yoshixmk/piny</a><br>\nCLIでピンインの確認テスト、Web UIでの単語の暗記、カスタマイズ可能なディクショナリ（初期セットはHSK3~6）とツールを用意しています。<br>\nまた、ピンインの確認テストでは、一度間違えたものをやり直せるように、集中対策モードをつけました<br>\nこだわったのは単純な単語の羅列にしないことで、一度見て覚えるのは難しいので、関連する画像を合わせて表示してイメージを膨らませながら取り組むことができるようにしました</p>\n<h2 id="pinyin%E3%81%A8%E3%81%AF">Pinyinとは<a class="anchor" href="#pinyin%E3%81%A8%E3%81%AF">§</a></h2>\n<p>Denoのサードパーティモジュールとして公開（<a href="https://deno.land/x/pinyin">https://deno.land/x/pinyin</a>）し、Pinyの内部モジュールとして使用しました<br>\nnpmで同様の<a href="https://www.npmjs.com/package/pinyin">pinyin</a>モジュールがあるのでラップして実装しました。</p>\n<h2 id="%E4%BB%8A%E5%BE%8C">今後<a class="anchor" href="#%E4%BB%8A%E5%BE%8C">§</a></h2>\n<p>HSKのみならず中国語の学習する上で、これあったらいいな、と思ったものがあれば追加していきます。<br>\n希望の機能や不具合があればIssueをください</p>\n<h2 id="%E4%BD%BF%E3%81%84%E6%96%B9">使い方<a class="anchor" href="#%E4%BD%BF%E3%81%84%E6%96%B9">§</a></h2>\n<p>それぞれ<code>README</code>をご覧ください。<br>\n<a href="https://github.com/yoshixmk/pinyin">https://github.com/yoshixmk/pinyin</a><br>\n<a href="hhttps://github.com/yoshixmk/piny">hhttps://github.com/yoshixmk/piny</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#piny%E3%81%A8%E3%81%AF" }, "Piny\u3068\u306F")),
            React.createElement("li", null,
                React.createElement("a", { href: "#pinyin%E3%81%A8%E3%81%AF" }, "Pinyin\u3068\u306F")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BB%8A%E5%BE%8C" }, "\u4ECA\u5F8C")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BD%BF%E3%81%84%E6%96%B9" }, "\u4F7F\u3044\u65B9")))),
    'author': "yoshixmk",
    'contributors': [
        "yoshixmk"
    ],
    'date': "2021-09-26T07:28:11.000Z",
    'updated': null,
    'excerpt': "Publication date： 2021-01-11 Pinyとは HSK (漢語水平考試)の単語覚えのために開発しました。 https://github.com/yoshixmk/piny CLIでピンインの確認テスト、Web UIでの単語の暗記、カスタマイズ可能なディクショナリ（初期...",
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
