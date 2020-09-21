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
    'pagePath': "articles/009-tege-domains-release.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/009-tege-domains-release.html",
    'title': "てげメンバーの部員紹介ページを作成し、リリースしました",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>てげメンバーの部員紹介ページを作成し、リリースしました</h1>\n<div style="text-align: right;">\nPublication date： 2020-09-21\n</div>\n<p><img src="../static/images/member.png" alt="member page"></p>\n<h2 id="%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">ドメインについて<a class="anchor" href="#%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">§</a></h2>\n<p>今回のリリースは、今まで最も大きなリリースです。<br>\n<strong>ドメイン移行までのマイルストーンは全て完了</strong>し、てげぶのドメインの移行が完了していることを報告します <a href="https://www.tegebu.com/">https://www.tegebu.com/</a> 。</p>\n<p>新サイトでは、私たちのテーブルゲームの紹介や、最新トレンドの動的更新、ページの整理整頓、外部リンクなどの見直しなど数えきれない変更を行ってきました。</p>\n<p>以前の記事でも紹介していますが、新テーマは明るく仕上がっています（真っ暗なテーマに、さよなら😁）</p>\n<p>これに伴い、<a href="https://github.com/yoshixmk/tegebu">旧てげぶサイト</a>については、Archiveを行っています。およそ1年間使用していました。</p>\n<h2 id="%E3%81%A6%E3%81%92%E9%83%A8%E3%81%AE%E9%83%A8%E5%93%A1%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">てげ部の部員ページについて<a class="anchor" href="#%E3%81%A6%E3%81%92%E9%83%A8%E3%81%AE%E9%83%A8%E5%93%A1%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">§</a></h2>\n<p>部員ページはいわゆる、メンバーページにあたります。\n今後も情報を部員更新する予定がありますので、お楽しみに！\n<a href="https://www.tegebu.com/members/">https://www.tegebu.com/members/</a></p>\n<h2 id="%E3%83%9B%E3%82%B9%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A0%B4%E6%89%80%E3%82%92%E5%A4%89%E6%9B%B4">ホスティングの場所を変更<a class="anchor" href="#%E3%83%9B%E3%82%B9%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A0%B4%E6%89%80%E3%82%92%E5%A4%89%E6%9B%B4">§</a></h2>\n<p>開発では、<a href="https://tegebu.netlify.app/">Netlify</a>を使用していましたが、Github Actionsを使うことで、今後の開発がさらに行いやすいであろうことから、GIthub Pagesに移行しました （※ 現在もNetlifyへのデプロイ自体は行っています。）</p>\n<h2 id="%E9%96%8B%E7%99%BA%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">開発について<a class="anchor" href="#%E9%96%8B%E7%99%BA%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">§</a></h2>\n<p>開発において、最も大きなニュースは、<a href="https://github.com/tegebu">Organization</a>へ全面的に移行し、てげぶのリポジトリの集約に努めたことが挙げられます。</p>\n<p><img src="../static/images/organization_tegebu.png" alt="Github organization tegebu"></p>\n<p>開発に携わるのは、私（<a href="https://github.com/yoshixmk">@yoshixmk</a>）と<a href="https://github.com/jamashita">@jamashita</a>です。</p>\n<p>我々は、いつも遊び心を持って開発してます。</p>\n<p>今回のリリースでも、あの有名な<a href="https://www.tegebu.com/dinosaur/">恐竜ゲーム</a>をひっそり含めてみました。</p>\n<p>また新しいニュースが届けられるように、今日もまたコミットを続けています。\nテーブルゲーム、ボードゲームと、エンジニアリングを掛け合わせることにご興味がある方は、ぜひご連絡ください。</p>\n<p>Mail: <a href="mailto:info@tegebu.com">info@tegebu.com</a></p>\n<p>Twitter: <a href="https://twitter.com/tegebu">https://twitter.com/tegebu</a></p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/profile/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">ドメインについて</a></li><li><a href="#%E3%81%A6%E3%81%92%E9%83%A8%E3%81%AE%E9%83%A8%E5%93%A1%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">てげ部の部員ページについて</a></li><li><a href="#%E3%83%9B%E3%82%B9%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A0%B4%E6%89%80%E3%82%92%E5%A4%89%E6%9B%B4">ホスティングの場所を変更</a></li><li><a href="#%E9%96%8B%E7%99%BA%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">開発について</a></li></ol></nav>'
        } })
};
