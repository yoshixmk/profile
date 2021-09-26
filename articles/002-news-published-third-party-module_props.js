import projectConfig from '/profile/pagic.config.js';
import Ga from '/profile/_ga.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "articles/002-news-published-third-party-module.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/002-news-published-third-party-module.html",
    'title': "Denoのサードパーティモジュールを公開しました",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Denoのサードパーティモジュールを公開しました</h1>\n<div style="text-align: right;">\nPublication date： 2020-06-23\n</div>\n<h2 id="i-have-published-a-third-party-module">I have published a third party module.<a class="anchor" href="#i-have-published-a-third-party-module">§</a></h2>\n<h2 id="deno-x-ranking">deno-x-ranking<a class="anchor" href="#deno-x-ranking">§</a></h2>\n<p>🦕 Deno Third Party Modules Ranking 👑<br>\n<a href="https://deno.land/x/ranking">https://deno.land/x/ranking</a></p>\n<h2 id="%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E6%A9%9F%E8%83%BD">ランキング機能<a class="anchor" href="#%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E6%A9%9F%E8%83%BD">§</a></h2>\n<p>サードパーティモジュールをランキング形式で並べ、注目するべきモジュールがわかるというのを目指して、作成しました。<br>\n<a href="https://deno.land/x/ranking">https://deno.land/x/ranking</a><br>\n出力形式は、tsv形式と標準出力が選べます。<br>\n使用するには下記を実行してください（Githubアカウントが必要です）</p>\n<h3 id="file-output">File output<a class="anchor" href="#file-output">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit">$ deno run <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>write https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>ranking<span class="token operator">/</span>mod<span class="token punctuation">.</span>ts <span class="token operator">&lt;</span>github username<span class="token operator">></span> <span class="token operator">&lt;</span>github password<span class="token operator">></span> file\n</code></pre>\n<h3 id="console-output">Console output<a class="anchor" href="#console-output">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit">$ deno run <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>ranking<span class="token operator">/</span>mod<span class="token punctuation">.</span>ts <span class="token operator">&lt;</span>github username<span class="token operator">></span> <span class="token operator">&lt;</span>github password<span class="token operator">></span> table\n</code></pre>\n<h2 id="%E4%BB%8A%E5%BE%8C%E3%81%AE%E4%BA%88%E5%AE%9A">今後の予定<a class="anchor" href="#%E4%BB%8A%E5%BE%8C%E3%81%AE%E4%BA%88%E5%AE%9A">§</a></h2>\n<p>いつでもランキングが見れるよう、ページを構築しようかと思ってます。</p>'
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
    'contentTitle': React.createElement("h1", { key: "0" }, "Deno\u306E\u30B5\u30FC\u30C9\u30D1\u30FC\u30C6\u30A3\u30E2\u30B8\u30E5\u30FC\u30EB\u3092\u516C\u958B\u3057\u307E\u3057\u305F"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<div style="text-align: right;">\nPublication date： 2020-06-23\n</div>\n<h2 id="i-have-published-a-third-party-module">I have published a third party module.<a class="anchor" href="#i-have-published-a-third-party-module">§</a></h2>\n<h2 id="deno-x-ranking">deno-x-ranking<a class="anchor" href="#deno-x-ranking">§</a></h2>\n<p>🦕 Deno Third Party Modules Ranking 👑<br>\n<a href="https://deno.land/x/ranking">https://deno.land/x/ranking</a></p>\n<h2 id="%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E6%A9%9F%E8%83%BD">ランキング機能<a class="anchor" href="#%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E6%A9%9F%E8%83%BD">§</a></h2>\n<p>サードパーティモジュールをランキング形式で並べ、注目するべきモジュールがわかるというのを目指して、作成しました。<br>\n<a href="https://deno.land/x/ranking">https://deno.land/x/ranking</a><br>\n出力形式は、tsv形式と標準出力が選べます。<br>\n使用するには下記を実行してください（Githubアカウントが必要です）</p>\n<h3 id="file-output">File output<a class="anchor" href="#file-output">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit">$ deno run <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>write https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>ranking<span class="token operator">/</span>mod<span class="token punctuation">.</span>ts <span class="token operator">&lt;</span>github username<span class="token operator">></span> <span class="token operator">&lt;</span>github password<span class="token operator">></span> file\n</code></pre>\n<h3 id="console-output">Console output<a class="anchor" href="#console-output">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit">$ deno run <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>ranking<span class="token operator">/</span>mod<span class="token punctuation">.</span>ts <span class="token operator">&lt;</span>github username<span class="token operator">></span> <span class="token operator">&lt;</span>github password<span class="token operator">></span> table\n</code></pre>\n<h2 id="%E4%BB%8A%E5%BE%8C%E3%81%AE%E4%BA%88%E5%AE%9A">今後の予定<a class="anchor" href="#%E4%BB%8A%E5%BE%8C%E3%81%AE%E4%BA%88%E5%AE%9A">§</a></h2>\n<p>いつでもランキングが見れるよう、ページを構築しようかと思ってます。</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#i-have-published-a-third-party-module" }, "I have published a third party module.")),
            React.createElement("li", null,
                React.createElement("a", { href: "#deno-x-ranking" }, "deno-x-ranking")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E6%A9%9F%E8%83%BD" }, "\u30E9\u30F3\u30AD\u30F3\u30B0\u6A5F\u80FD"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#file-output" }, "File output")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#console-output" }, "Console output")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BB%8A%E5%BE%8C%E3%81%AE%E4%BA%88%E5%AE%9A" }, "\u4ECA\u5F8C\u306E\u4E88\u5B9A")))),
    'author': "yoshixmk",
    'contributors': [
        "yoshixmk"
    ],
    'date': "2021-09-26T07:28:11.000Z",
    'updated': null,
    'excerpt': "Publication date： 2020-06-23 I have published a third party module. deno-x-ranking 🦕 Deno Third Party Modules Ranking 👑 https://deno.land/x/ranking ランキング機能 サードパーティモジュールをランキング形式...",
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
