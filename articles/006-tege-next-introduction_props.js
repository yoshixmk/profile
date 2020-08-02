import Ga from '/profile/_ga.js';
import projectConfig from '/profile/pagic.config.js';
export default {
    'ga': React.createElement(Ga, { id: "UA-149348992-2" }),
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
    config: { "srcDir": "src", "publicDir": "public", "base": "/", ...projectConfig },
    'pagePath': "articles/006-tege-next-introduction.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/006-tege-next-introduction.html",
    'title': "てげぶのサイトを新たに作成しました",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>てげぶのサイトを新たに作成しました</h1>\n<div style="text-align: right;">\nPublication date： 2020-08-02\n</div>\n<h2 id="%E6%A6%82%E8%A6%81">概要<a class="anchor" href="#%E6%A6%82%E8%A6%81">§</a></h2>\n<p>新しいてげぶのサイトは、Tegebu nextというプロジェクトで進めており、テーブルゲームの団体（てげぶ）とテーブルゲームの紹介を中心にサイトを作成しました。<br>\nURL: <a href="https://tegebu.netlify.app/">https://tegebu.netlify.app/</a><br>\n以前、<a href="https://www.tegebu.com/tabletop-games/">tegebu.com</a>というのを作成しており、これのサイトリニューアルです。<br>\n今は、テーブルゲームの一覧の移行が完了しております。<br>\n残っている内容も、移行が終わり次第、ドメインを書き換える想定です。</p>\n<h2 id="%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">技術要素<a class="anchor" href="#%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">§</a></h2>\n<ul>\n<li>Gatsby</li>\n<li>Typescript</li>\n<li>Tailwind CSS</li>\n<li>PostCSS<br>\nなど</li>\n</ul>\n<h2 id="tailwind-css%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6">Tailwind CSSに関して<a class="anchor" href="#tailwind-css%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6">§</a></h2>\n<p><a href="https://tailwindcss.com/">Tailwind</a>は、<code>Utility-First</code>(※詳しくは後述) のCSSフレームワークです。<br>\nTailwindは高度にカスタマイズ可能な低レベルなアーキテクチャであり、デザインを構築するために必要なすべてを提供します。<br>\n個人的な感想としては、<br>\n基本的にBootstrapなどとよく似ているのですが、より低レベルでカスタマイズ可能なフレームワークで、カスタムデザインの迅速な構築にむいていると感じました。Bootstrapより記述自体は量が必要ですが、自由度が高いと言えます。<br>\n<code>Utility-First</code>というのがコアコンセプトにあり、これは、Tailwind自身がプリミティブなCSSクラスのアセットで、複雑なコンポーネントを（CSSファイルを一から直接書くことなく）構築できるという意味です。これによって下記のような効果が得られます</p>\n<ul>\n<li>クラス名を考える労力が、必要ありません</li>\n<li>CSSの肥大化が止まります</li>\n<li>安全に変更を加えることができます（生のCSSはグローバルなため、不安を完全に取り除くことはできない）\n次の例は、通常時に「青色のテキスト」で、マウスホバーしたときには「アンダーラインありの、黄色のテキスト」という意味になります（簡単ですね！）。</li>\n</ul>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-blue hover:text-yellow hover:underline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>詳しくは<a href="https://tailwindcss.com/docs/utility-first">マニュアル</a>を見てください。<br>\n<code>Bootstrap 5</code>が間も無く出ますが、<a href="https://dev.to/zolidev/poll-tailwind-or-bootstrap-1153">Poll: Tailwind or Bootstrap?</a>にもある通り、<code>Tailwind CSS</code>の人気は今後も上がっていくと思います。</p>\n<p>ではまた。</p>\n<h2 id="github">Github<a class="anchor" href="#github">§</a></h2>\n<p><a href="https://github.com/yoshixmk/tegebu-next">https://github.com/yoshixmk/tegebu-next</a></p>\n<p>リポジトリをクローンをして、起動します。</p>\n<pre class="language-autoit"><code class="language-autoit">$ git clone https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>yoshixmk<span class="token operator">/</span>tegebu<span class="token operator">-</span><span class="token keyword">next</span><span class="token punctuation">.</span>git\n$ cd tegebu<span class="token operator">-</span><span class="token keyword">next</span><span class="token operator">/</span>\n$ yarn install\n$ gatsby develop\n</code></pre>\n<p><a href="http://localhost:8000">http://localhost:8000</a>で実行されます</p>\n<p>下記のような画面が見られるはずです（左はPCサイズ、右はスマホサイズ）。</p>\n<div style="flex">\n  <p align="center">\n    <a href="https://tegebu.netlify.app/" >\n      <img alt="Tegebuプレビュー画像1" src="../static/images/preview.png" width="67%"/>\n    </a>\n    <a href="https://tegebu.netlify.app/" >\n      <img alt="Tegebuプレビュー画像2" src="../static/images//preview2.png" width="28%"/>\n    </a>\n  </p>\n</div>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/profile/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E6%A6%82%E8%A6%81">概要</a></li><li><a href="#%E6%8A%80%E8%A1%93%E8%A6%81%E7%B4%A0">技術要素</a></li><li><a href="#tailwind-css%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6">Tailwind CSSに関して</a></li><li><a href="#github">Github</a></li></ol></nav>'
        } })
};
