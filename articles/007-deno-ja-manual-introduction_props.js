import projectConfig from '/profile/pagic.config.js';
import Ga from '/profile/_ga.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "articles/007-deno-ja-manual-introduction.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/007-deno-ja-manual-introduction.html",
    'title': "Deno 日本語マニュアルを公開しました",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Deno 日本語マニュアルを公開しました</h1>\n<div style="text-align: right;">\nPublication date： 2020-08-16\n</div>\n<h2 id="%E6%A6%82%E8%A6%81">概要<a class="anchor" href="#%E6%A6%82%E8%A6%81">§</a></h2>\n<p><code>Deno 日本語マニュアル</code>は、Denoの<a href="https://deno.land/manual">公式マニュアルページ</a>を参考に、翻訳している非公式なクローンサイトです。<br>\nマニュアルの内容は、今後も随時更新予定です。<br>\nURL: <a href="https://yoshixmk.github.io/deno-manual-ja">https://yoshixmk.github.io/deno-manual-ja</a><br>\nGithub: <a href="https://github.com/yoshixmk/deno-manual-ja">https://github.com/yoshixmk/deno-manual-ja</a></p>\n<h2 id="%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91">きっかけ<a class="anchor" href="#%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91">§</a></h2>\n<p>きっかけは、中国のDenoコミュニティが<a href="https://nugine.github.io/deno-manual-cn/">https://nugine.github.io/deno-manual-cn/</a>にて、<br>\n<code>Deno 中文手册</code>(=Deno 中国語マニュアル)を公開しているのを見つけたことです。<br>\n今回はそちらをforkして、日本語版の作成に至っています。<br>\nfork Github: <a href="https://github.com/Nugine/deno-manual-cn">https://github.com/Nugine/deno-manual-cn</a></p>\n<p>Deno関連で、何か他の人の役に立つような、コントリビュートしたいと思っていたので、夏季休暇で作りあげました。</p>\n<h2 id="%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">技術要素<a class="anchor" href="#%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">§</a></h2>\n<ul>\n<li><a href="https://github.com/rust-lang/mdBook">mdBook</a></li>\n<li>cargo (Rust) ※ mdBookインストールのみ\nなど</li>\n</ul>\n<h2 id="%E8%B5%B7%E5%8B%95%E6%96%B9%E6%B3%95">起動方法<a class="anchor" href="#%E8%B5%B7%E5%8B%95%E6%96%B9%E6%B3%95">§</a></h2>\n<ol>\n<li><a href="https://www.rust-lang.org/tools/install">Rustのインストール</a>(cargoが同時に入ります)</li>\n<li><a href="https://github.com/rust-lang/mdBook#installation">mdBookのインストール</a></li>\n<li><code>mdbook serve</code></li>\n</ol>\n<h2 id="%E6%89%80%E6%84%9F">所感<a class="anchor" href="#%E6%89%80%E6%84%9F">§</a></h2>\n<p>Denoのバイナリファイルは<code>Rust</code>と<code>JS</code>で書かれており<code>Rust</code>の思想を受けている印象を持っており、CoC(Code of Conduct)がRustの内容に準拠していること、インストール方法や単一のバイナリだけで動作すること、<a href="https://doc.rust-jp.rs/rust-nomicon-ja/meet-safe-and-unsafe.html">安全性</a>など、今回触れられたので面白かったです。<br>\n※ (余談) 標準モジュールは<code>Go</code>を参考に、<code>Typescript</code>で書かれています。</p>'
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
    'contentTitle': React.createElement("h1", { key: "0" }, "Deno \u65E5\u672C\u8A9E\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u516C\u958B\u3057\u307E\u3057\u305F"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<div style="text-align: right;">\nPublication date： 2020-08-16\n</div>\n<h2 id="%E6%A6%82%E8%A6%81">概要<a class="anchor" href="#%E6%A6%82%E8%A6%81">§</a></h2>\n<p><code>Deno 日本語マニュアル</code>は、Denoの<a href="https://deno.land/manual">公式マニュアルページ</a>を参考に、翻訳している非公式なクローンサイトです。<br>\nマニュアルの内容は、今後も随時更新予定です。<br>\nURL: <a href="https://yoshixmk.github.io/deno-manual-ja">https://yoshixmk.github.io/deno-manual-ja</a><br>\nGithub: <a href="https://github.com/yoshixmk/deno-manual-ja">https://github.com/yoshixmk/deno-manual-ja</a></p>\n<h2 id="%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91">きっかけ<a class="anchor" href="#%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91">§</a></h2>\n<p>きっかけは、中国のDenoコミュニティが<a href="https://nugine.github.io/deno-manual-cn/">https://nugine.github.io/deno-manual-cn/</a>にて、<br>\n<code>Deno 中文手册</code>(=Deno 中国語マニュアル)を公開しているのを見つけたことです。<br>\n今回はそちらをforkして、日本語版の作成に至っています。<br>\nfork Github: <a href="https://github.com/Nugine/deno-manual-cn">https://github.com/Nugine/deno-manual-cn</a></p>\n<p>Deno関連で、何か他の人の役に立つような、コントリビュートしたいと思っていたので、夏季休暇で作りあげました。</p>\n<h2 id="%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">技術要素<a class="anchor" href="#%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">§</a></h2>\n<ul>\n<li><a href="https://github.com/rust-lang/mdBook">mdBook</a></li>\n<li>cargo (Rust) ※ mdBookインストールのみ\nなど</li>\n</ul>\n<h2 id="%E8%B5%B7%E5%8B%95%E6%96%B9%E6%B3%95">起動方法<a class="anchor" href="#%E8%B5%B7%E5%8B%95%E6%96%B9%E6%B3%95">§</a></h2>\n<ol>\n<li><a href="https://www.rust-lang.org/tools/install">Rustのインストール</a>(cargoが同時に入ります)</li>\n<li><a href="https://github.com/rust-lang/mdBook#installation">mdBookのインストール</a></li>\n<li><code>mdbook serve</code></li>\n</ol>\n<h2 id="%E6%89%80%E6%84%9F">所感<a class="anchor" href="#%E6%89%80%E6%84%9F">§</a></h2>\n<p>Denoのバイナリファイルは<code>Rust</code>と<code>JS</code>で書かれており<code>Rust</code>の思想を受けている印象を持っており、CoC(Code of Conduct)がRustの内容に準拠していること、インストール方法や単一のバイナリだけで動作すること、<a href="https://doc.rust-jp.rs/rust-nomicon-ja/meet-safe-and-unsafe.html">安全性</a>など、今回触れられたので面白かったです。<br>\n※ (余談) 標準モジュールは<code>Go</code>を参考に、<code>Typescript</code>で書かれています。</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%A6%82%E8%A6%81" }, "\u6982\u8981")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91" }, "\u304D\u3063\u304B\u3051")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0" }, "\u6280\u8853\u8981\u7D20")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%B5%B7%E5%8B%95%E6%96%B9%E6%B3%95" }, "\u8D77\u52D5\u65B9\u6CD5")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%89%80%E6%84%9F" }, "\u6240\u611F")))),
    'author': "yoshixmk",
    'contributors': [
        "yoshixmk"
    ],
    'date': "2021-09-26T07:28:11.000Z",
    'updated': null,
    'excerpt': "Publication date： 2020-08-16 概要 Deno 日本語マニュアルは、Denoの公式マニュアルページを参考に、翻訳している非公式なクローンサイトです。 マニュアルの内容は、今後も随時更新予定です。 URL: https://yoshixmk.github...",
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
