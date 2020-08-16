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
    config: { "root": "/", ...projectConfig },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "@yoshixmk / Yoshihiro Ueki",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>@yoshixmk / Yoshihiro Ueki</h1>\n<p>植木 善弘<br>\nWeb Engineer / Web Developer</p>\n<p><img src="./static/images/usagi.jpg" alt="Github icon">\n<img src="./static/images/yoshixmk.jpg" alt="Facebbok\'s face"></p>\n<p><a href="https://github.com/anuraghazra/github-readme-stats"><img src="https://github-readme-stats.vercel.app/api?username=yoshixmk&amp;show_icons=true" alt="yoshixmk\'s github stats"></a></p>\n<h2 id="about">About<a class="anchor" href="#about">§</a></h2>\n<p>プログラミングは、テクノロジーです。</p>\n<p>コーディングのベストプラクティスは、Developerコミュニティがソフトウェアの品質向上を支援するために採用する非公式のルールのセットです。多くのプログラミング言語は初期の開発時点のバックグラウンドを維持し、長期間に渡り進化を続け、その後の保守と強化の両方をバランスしながら、コミュニティが支えます。</p>\n<p>コーディングにおいてシンプルさは、重要な役割の１つです。</p>\n<p>将来想定されるシステム規模の増大に対応できるよう、保守性、信頼性、効率、使いやすさを創造し、カタチを与え、繋いでいく。わかりやすく、複雑性の少ない設計の先には、スケーラビリティがあります。</p>\n<p>yoshixmkはテクノロジーを通じて、<br>\n人の心に触れ、社会の発展、人類の進歩に寄与することを約束します。</p>\n<h2 id="profile">Profile<a class="anchor" href="#profile">§</a></h2>\n<p>1992年、岡山県生まれ。\n理数科高校を卒業後、<br>\n中国職業能力開発大学校にてプログラミングと向き合う。そこで組込み技術を用いてロボット開発、ロボコンサークル部長を務める傍ら、Webの驚くべきテクノロジーの広がりを目の当たりにした。</p>\n<p>その後上京し、株式会社ユーザベースへ入社。  （2016~2019）\n現在は、アスタミューゼ株式会社にて勤務し、事業機会の探索と必要事業資源の獲得を支援するツール「ICP(InnovationCapital Pathfinder)」を開発中。(2019~)</p>\n<p>バックエンドエンジニア、SREエンジニアとしてキャリアをスタートし、現在はバックエンドを中心にフルスタックに活躍。</p>\n<h2 id="%E3%81%93%E3%81%AE%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6">このサイトに関して <img src="https://github.com/yoshixmk/profile/workflows/gh-pages/badge.svg" alt="gh-pages"><a class="anchor" href="#%E3%81%93%E3%81%AE%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6">§</a></h2>\n<h3 id="%E3%83%96%E3%83%AD%E3%82%B0">ブログ<a class="anchor" href="#%E3%83%96%E3%83%AD%E3%82%B0">§</a></h3>\n<p>プログラミングや技術情報に関することを掲載します。</p>\n<h3 id="%E7%BF%BB%E8%A8%B3">翻訳<a class="anchor" href="#%E7%BF%BB%E8%A8%B3">§</a></h3>\n<p>最新の技術トピックを翻訳します。</p>\n<h3 id="%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA">リポジトリ<a class="anchor" href="#%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA">§</a></h3>\n<p><a href="https://github.com/yoshixmk/profile">profile</a>は、<a href="https://deno.land/">Deno</a>と<a href="https://github.com/xcatliu/pagic">pagic</a>で作られています</p>\n<p>Prepare</p>\n<ul>\n<li>Install <a href="https://deno.land/">Deno</a></li>\n<li>Download <a href="https://github.com/yoshixmk/profile">profile</a></li>\n</ul>\n<p>Build<br>\n下記をprofile/ディレクトリ配下で実行してください。</p>\n<pre class="language-autoit"><code class="language-autoit">$ deno run <span class="token operator">-</span><span class="token operator">-</span>unstable <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>read <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>write <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>pagic<span class="token variable">@v0</span><span class="token punctuation">.</span><span class="token number">7.30</span><span class="token operator">/</span>mod<span class="token punctuation">.</span>ts build <span class="token operator">-</span><span class="token operator">-</span>serve <span class="token operator">-</span><span class="token operator">-</span>watch\n</code></pre>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/profile/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#about">About</a></li><li><a href="#profile">Profile</a></li><li><a href="#%E3%81%93%E3%81%AE%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6">このサイトに関して </a><ol><li><a href="#%E3%83%96%E3%83%AD%E3%82%B0">ブログ</a></li><li><a href="#%E7%BF%BB%E8%A8%B3">翻訳</a></li><li><a href="#%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA">リポジトリ</a></li></ol></li></ol></nav>'
        } })
};
