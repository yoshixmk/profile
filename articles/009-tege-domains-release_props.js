import projectConfig from '/profile/pagic.config.js';
import Ga from '/profile/_ga.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "articles/009-tege-domains-release.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/009-tege-domains-release.html",
    'title': "てげメンバーの部員紹介ページを作成し、リリースしました",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>てげメンバーの部員紹介ページを作成し、リリースしました</h1>\n<div style="text-align: right;">\nPublication date： 2020-09-20\n</div>\n<p><img src="../static/images/member.png" alt="member page"></p>\n<h2 id="%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">ドメインについて<a class="anchor" href="#%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">§</a></h2>\n<p>今回のリリースは、今まで最も大きなリリースです。<br>\n<strong>ドメイン移行までのマイルストーンは全て完了</strong>し、てげぶのドメインの移行が完了していることを報告します <a href="https://www.tegebu.com/">https://www.tegebu.com/</a> 。</p>\n<p>新サイトでは、私たちのテーブルゲームの紹介や、最新トレンドの動的更新、ページの整理整頓、外部リンクなどの見直しなど数えきれない変更を行ってきました。</p>\n<p>以前の記事でも紹介していますが、新テーマは明るく仕上がっています（真っ暗なテーマに、さよなら😁）</p>\n<p>これに伴い、<a href="https://github.com/yoshixmk/tegebu">旧てげぶサイト</a>については、Archiveを行っています。およそ1年間使用していました。</p>\n<h2 id="%E3%81%A6%E3%81%92%E9%83%A8%E3%81%AE%E9%83%A8%E5%93%A1%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">てげ部の部員ページについて<a class="anchor" href="#%E3%81%A6%E3%81%92%E9%83%A8%E3%81%AE%E9%83%A8%E5%93%A1%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">§</a></h2>\n<p>部員ページはいわゆる、メンバーページにあたります。\n今後も情報を部員更新する予定がありますので、お楽しみに！\n<a href="https://www.tegebu.com/members/">https://www.tegebu.com/members/</a></p>\n<h2 id="%E3%83%9B%E3%82%B9%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A0%B4%E6%89%80%E3%82%92%E5%A4%89%E6%9B%B4">ホスティングの場所を変更<a class="anchor" href="#%E3%83%9B%E3%82%B9%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A0%B4%E6%89%80%E3%82%92%E5%A4%89%E6%9B%B4">§</a></h2>\n<p>開発では、<a href="https://tegebu.netlify.app/">Netlify</a>を使用していましたが、Github Actionsを使うことで、今後の開発がさらに行いやすいであろうことから、GIthub Pagesに移行しました （※ 現在もNetlifyへのデプロイ自体は行っています。）</p>\n<h2 id="%E9%96%8B%E7%99%BA%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">開発について<a class="anchor" href="#%E9%96%8B%E7%99%BA%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">§</a></h2>\n<p>開発において、最も大きなニュースは、<a href="https://github.com/tegebu">Organization</a>へ全面的に移行し、てげぶのリポジトリの集約に努めたことが挙げられます。</p>\n<p><img src="../static/images/organization_tegebu.png" alt="Github organization tegebu"></p>\n<p>開発に携わるのは、私（<a href="https://github.com/yoshixmk">@yoshixmk</a>）と<a href="https://github.com/jamashita">@jamashita</a>です。</p>\n<p>我々は、いつも遊び心を持って開発してます。</p>\n<p>今回のリリースでも、あの有名な<a href="https://www.tegebu.com/dinosaur/">恐竜ゲーム</a>をひっそり含めてみました。</p>\n<p>また新しいニュースが届けられるように、今日もまたコミットを続けています。\nテーブルゲーム、ボードゲームと、エンジニアリングを掛け合わせることにご興味がある方は、ぜひご連絡ください。</p>\n<p>Mail: <a href="mailto:info@tegebu.com">info@tegebu.com</a></p>\n<p>Twitter: <a href="https://twitter.com/tegebu">https://twitter.com/tegebu</a></p>'
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
    'contentTitle': React.createElement("h1", { key: "0" }, "\u3066\u3052\u30E1\u30F3\u30D0\u30FC\u306E\u90E8\u54E1\u7D39\u4ECB\u30DA\u30FC\u30B8\u3092\u4F5C\u6210\u3057\u3001\u30EA\u30EA\u30FC\u30B9\u3057\u307E\u3057\u305F"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<div style="text-align: right;">\nPublication date： 2020-09-20\n</div>\n<p><img src="../static/images/member.png" alt="member page"></p>\n<h2 id="%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">ドメインについて<a class="anchor" href="#%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">§</a></h2>\n<p>今回のリリースは、今まで最も大きなリリースです。<br>\n<strong>ドメイン移行までのマイルストーンは全て完了</strong>し、てげぶのドメインの移行が完了していることを報告します <a href="https://www.tegebu.com/">https://www.tegebu.com/</a> 。</p>\n<p>新サイトでは、私たちのテーブルゲームの紹介や、最新トレンドの動的更新、ページの整理整頓、外部リンクなどの見直しなど数えきれない変更を行ってきました。</p>\n<p>以前の記事でも紹介していますが、新テーマは明るく仕上がっています（真っ暗なテーマに、さよなら😁）</p>\n<p>これに伴い、<a href="https://github.com/yoshixmk/tegebu">旧てげぶサイト</a>については、Archiveを行っています。およそ1年間使用していました。</p>\n<h2 id="%E3%81%A6%E3%81%92%E9%83%A8%E3%81%AE%E9%83%A8%E5%93%A1%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">てげ部の部員ページについて<a class="anchor" href="#%E3%81%A6%E3%81%92%E9%83%A8%E3%81%AE%E9%83%A8%E5%93%A1%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">§</a></h2>\n<p>部員ページはいわゆる、メンバーページにあたります。\n今後も情報を部員更新する予定がありますので、お楽しみに！\n<a href="https://www.tegebu.com/members/">https://www.tegebu.com/members/</a></p>\n<h2 id="%E3%83%9B%E3%82%B9%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A0%B4%E6%89%80%E3%82%92%E5%A4%89%E6%9B%B4">ホスティングの場所を変更<a class="anchor" href="#%E3%83%9B%E3%82%B9%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A0%B4%E6%89%80%E3%82%92%E5%A4%89%E6%9B%B4">§</a></h2>\n<p>開発では、<a href="https://tegebu.netlify.app/">Netlify</a>を使用していましたが、Github Actionsを使うことで、今後の開発がさらに行いやすいであろうことから、GIthub Pagesに移行しました （※ 現在もNetlifyへのデプロイ自体は行っています。）</p>\n<h2 id="%E9%96%8B%E7%99%BA%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">開発について<a class="anchor" href="#%E9%96%8B%E7%99%BA%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">§</a></h2>\n<p>開発において、最も大きなニュースは、<a href="https://github.com/tegebu">Organization</a>へ全面的に移行し、てげぶのリポジトリの集約に努めたことが挙げられます。</p>\n<p><img src="../static/images/organization_tegebu.png" alt="Github organization tegebu"></p>\n<p>開発に携わるのは、私（<a href="https://github.com/yoshixmk">@yoshixmk</a>）と<a href="https://github.com/jamashita">@jamashita</a>です。</p>\n<p>我々は、いつも遊び心を持って開発してます。</p>\n<p>今回のリリースでも、あの有名な<a href="https://www.tegebu.com/dinosaur/">恐竜ゲーム</a>をひっそり含めてみました。</p>\n<p>また新しいニュースが届けられるように、今日もまたコミットを続けています。\nテーブルゲーム、ボードゲームと、エンジニアリングを掛け合わせることにご興味がある方は、ぜひご連絡ください。</p>\n<p>Mail: <a href="mailto:info@tegebu.com">info@tegebu.com</a></p>\n<p>Twitter: <a href="https://twitter.com/tegebu">https://twitter.com/tegebu</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6" }, "\u30C9\u30E1\u30A4\u30F3\u306B\u3064\u3044\u3066")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E3%81%A6%E3%81%92%E9%83%A8%E3%81%AE%E9%83%A8%E5%93%A1%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6" }, "\u3066\u3052\u90E8\u306E\u90E8\u54E1\u30DA\u30FC\u30B8\u306B\u3064\u3044\u3066")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E3%83%9B%E3%82%B9%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A0%B4%E6%89%80%E3%82%92%E5%A4%89%E6%9B%B4" }, "\u30DB\u30B9\u30C6\u30A3\u30F3\u30B0\u306E\u5834\u6240\u3092\u5909\u66F4")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E9%96%8B%E7%99%BA%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6" }, "\u958B\u767A\u306B\u3064\u3044\u3066")))),
    'author': "yoshixmk",
    'contributors': [
        "yoshixmk"
    ],
    'date': "2021-09-26T07:28:11.000Z",
    'updated': null,
    'excerpt': "Publication date： 2020-09-20 ドメインについて 今回のリリースは、今まで最も大きなリリースです。 ドメイン移行までのマイルストーンは全て完了し、てげぶのドメインの移行が完了していることを報告します https://www.teg...",
    'cover': "../static/images/member.png",
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
