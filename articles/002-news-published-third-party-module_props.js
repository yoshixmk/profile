import projectConfig from '/profile/pagic.config.js';
import Ga from '/profile/_ga.js';
export default {
    config: { "srcDir": "src", "publicDir": "public", "base": "/", ...projectConfig },
    'pagePath': "articles/002-news-published-third-party-module.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/002-news-published-third-party-module.html",
    'title': "Denoのサードパーティモジュールを公開しました",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Denoのサードパーティモジュールを公開しました</h1>\n<p>I have published a third party module.</p>\n<h2 id="deno-x-ranking">deno-x-ranking<a class="anchor" href="#deno-x-ranking">§</a></h2>\n<p>🦕 Deno Third Party Modules Ranking 👑<br>\n<a href="https://deno.land/x/ranking">https://deno.land/x/ranking</a></p>\n<h2 id="%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E6%A9%9F%E8%83%BD">ランキング機能<a class="anchor" href="#%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E6%A9%9F%E8%83%BD">§</a></h2>\n<p>サードパーティモジュールをランキング形式で並べ、注目するべきモジュールがわかるというのを目指して、作成しました。<br>\n<a href="https://deno.land/x/ranking">https://deno.land/x/ranking</a><br>\n出力形式は、tsv形式と標準出力が選べます。<br>\n使用するには下記を実行してください（Githubアカウントが必要です）</p>\n<h3 id="file-output">File output<a class="anchor" href="#file-output">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit">$ deno run <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>write https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>ranking<span class="token operator">/</span>mod<span class="token punctuation">.</span>ts <span class="token operator">&lt;</span>github username<span class="token operator">></span> <span class="token operator">&lt;</span>github password<span class="token operator">></span> file\n</code></pre>\n<h3 id="console-output">Console output<a class="anchor" href="#console-output">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit">$ deno run <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>ranking<span class="token operator">/</span>mod<span class="token punctuation">.</span>ts <span class="token operator">&lt;</span>github username<span class="token operator">></span> <span class="token operator">&lt;</span>github password<span class="token operator">></span> table\n</code></pre>\n<h2 id="%E4%BB%8A%E5%BE%8C%E3%81%AE%E4%BA%88%E5%AE%9A">今後の予定<a class="anchor" href="#%E4%BB%8A%E5%BE%8C%E3%81%AE%E4%BA%88%E5%AE%9A">§</a></h2>\n<p>いつでもランキングが見れるよう、ページを構築しようかと思ってます。</p>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/profile/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#deno-x-ranking">deno-x-ranking</a></li><li><a href="#%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E6%A9%9F%E8%83%BD">ランキング機能</a><ol><li><a href="#file-output">File output</a></li><li><a href="#console-output">Console output</a></li></ol></li><li><a href="#%E4%BB%8A%E5%BE%8C%E3%81%AE%E4%BA%88%E5%AE%9A">今後の予定</a></li></ol></nav>'
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
                },
                {
                    "text": "Guide To Porting Node Modules To Deno",
                    "link": "translations/004-guide-to-porting-node-modules-to-deno.html"
                }
            ],
            "text": "翻訳"
        }
    ],
    'ga': React.createElement(Ga, { id: "UA-149348992-2" })
};
