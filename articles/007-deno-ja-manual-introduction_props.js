import projectConfig from '/profile/gagic.config.js';
var _a, _b;
export default {
    'head': undefined,
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
                    "text": "てげメンバーの部員紹介ページを作成し、リリースしました",
                    "link": "articles/009-tege-domains-release.html",
                    "pagePath": "articles/009-tege-domains-release.md"
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
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['undefined'] },
    'pagePath': "articles/007-deno-ja-manual-introduction.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/007-deno-ja-manual-introduction.html",
    'title': "Deno 日本語マニュアルを公開しました",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Deno 日本語マニュアルを公開しました</h1>\n<div style="text-align: right;">\nPublication date： 2020-08-16\n</div>\n<h2 id="%E6%A6%82%E8%A6%81">概要<a class="anchor" href="#%E6%A6%82%E8%A6%81">§</a></h2>\n<p><code>Deno 日本語マニュアル</code>は、Denoの<a href="https://deno.land/manual">公式マニュアルページ</a>を参考に、翻訳している非公式なクローンサイトです。<br>\nマニュアルの内容は、今後も随時更新予定です。<br>\nURL: <a href="https://yoshixmk.github.io/deno-manual-ja">https://yoshixmk.github.io/deno-manual-ja</a><br>\nGithub: <a href="https://github.com/yoshixmk/deno-manual-ja">https://github.com/yoshixmk/deno-manual-ja</a></p>\n<h2 id="%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91">きっかけ<a class="anchor" href="#%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91">§</a></h2>\n<p>きっかけは、中国のDenoコミュニティが<a href="https://nugine.github.io/deno-manual-cn/">https://nugine.github.io/deno-manual-cn/</a>にて、<br>\n<code>Deno 中文手册</code>(=Deno 中国語マニュアル)を公開しているのを見つけたことです。<br>\n今回はそちらをforkして、日本語版の作成に至っています。<br>\nfork Github: <a href="https://github.com/Nugine/deno-manual-cn">https://github.com/Nugine/deno-manual-cn</a></p>\n<p>Deno関連で、何か他の人の役に立つような、コントリビュートしたいと思っていたので、夏季休暇で作りあげました。</p>\n<h2 id="%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">技術要素<a class="anchor" href="#%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">§</a></h2>\n<ul>\n<li><a href="https://github.com/rust-lang/mdBook">mdBook</a></li>\n<li>cargo (Rust) ※ mdBookインストールのみ\nなど</li>\n</ul>\n<h2 id="%E8%B5%B7%E5%8B%95%E6%96%B9%E6%B3%95">起動方法<a class="anchor" href="#%E8%B5%B7%E5%8B%95%E6%96%B9%E6%B3%95">§</a></h2>\n<ol>\n<li><a href="https://www.rust-lang.org/tools/install">Rustのインストール</a>(cargoが同時に入ります)</li>\n<li><a href="https://github.com/rust-lang/mdBook#installation">mdBookのインストール</a></li>\n<li><code>mdbook serve</code></li>\n</ol>\n<h2 id="%E6%89%80%E6%84%9F">所感<a class="anchor" href="#%E6%89%80%E6%84%9F">§</a></h2>\n<p>Denoのバイナリファイルは<code>Rust</code>と<code>JS</code>で書かれており<code>Rust</code>の思想を受けている印象を持っており、CoC(Code of Conduct)がRustの内容に準拠していること、インストール方法や単一のバイナリだけで動作すること、<a href="https://doc.rust-jp.rs/rust-nomicon-ja/meet-safe-and-unsafe.html">安全性</a>など、今回触れられたので面白かったです。<br>\n※ (余談) 標準モジュールは<code>Go</code>を参考に、<code>Typescript</code>で書かれています。</p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/profile/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E6%A6%82%E8%A6%81">概要</a></li><li><a href="#%E3%81%8D%E3%81%A3%E3%81%8B%E3%81%91">きっかけ</a></li><li><a href="#%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">技術要素</a></li><li><a href="#%E8%B5%B7%E5%8B%95%E6%96%B9%E6%B3%95">起動方法</a></li><li><a href="#%E6%89%80%E6%84%9F">所感</a></li></ol></nav>'
        } })
};
