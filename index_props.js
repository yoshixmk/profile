import Ga from '/profile/_ga.js';
export default {
    'config': {
        "srcDir": ".",
        "publicDir": "public",
        "ignore": [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        "base": "/profile/",
        "theme": "docs",
        "plugins": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        "watch": false,
        "serve": false,
        "port": 8000,
        "title": "yoshixmk Profile",
        "sidebar": [
            "README.md",
            {
                "link": "articles/README.md",
                "children": [
                    "articles/001-install-and-hello-world.md",
                    "articles/002-awesome-deno-cn.md"
                ]
            },
            {
                "link": "translations/README.md",
                "children": [
                    "translations/001-the-deno-handbook.md",
                    "translations/002-deno-chat-app.md",
                    "translations/003-from-node-to-deno.md"
                ]
            }
        ],
        "nav": [
            {
                "text": "Tegebu",
                "link": "https://www.tegebu.com/"
            },
            {
                "text": "Deno Third Party Modules Ranking",
                "link": "https://deno.land/x/ranking"
            },
            {
                "text": "Github",
                "link": "https://github.com/yoshixmk"
            },
            {
                "text": "Twitter",
                "link": "https://twitter.com/yoshixmk"
            },
            {
                "text": "Qiita",
                "link": "https://qiita.com/yoshixmk"
            }
        ],
        "ga": {
            "id": "UA-149348992-2"
        }
    },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "@yoshixmk / Yoshihiro Ueki",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1 id="%40yoshixmk-%2F-yoshihiro-ueki">@yoshixmk / Yoshihiro Ueki <a class="header-anchor" href="#%40yoshixmk-%2F-yoshihiro-ueki">§</a></h1>\n<p>植木 善弘<br>\nWeb Engineer / Web Developer</p>\n<p><img src="/static/images/usagi.jpg" alt="Github icon">\n<img src="/static/images/yoshixmk.jpg" alt="Facebbok\'s face"></p>\n<h2 id="about">About <a class="header-anchor" href="#about">§</a></h2>\n<p>プログラミングは、テクノロジーです。</p>\n<p>コーディングのベストプラクティスは、Developerコミュニティがソフトウェアの品質向上を支援するために採用する非公式のルールのセットです。多くのプログラミング言語は初期の開発時点のバックグラウンドを維持し、長期間に渡り進化を続け、その後の保守と強化の両方をバランスしながら、コミュニティが支えます。</p>\n<p>コーディングにおいてシンプルさは、重要な役割の１つです。</p>\n<p>将来想定されるシステム規模の増大に対応できるよう、保守性、信頼性、効率、使いやすさを創造し、カタチを与え、繋いでいく。わかりやすく、複雑性の少ない設計の先には、スケーラビリティがあります。</p>\n<p>yoshixmkはテクノロジーを通じて、<br>\n人の心に触れ、社会の発展、人類の進歩に寄与することを約束します。</p>\n<h2 id="profile">Profile <a class="header-anchor" href="#profile">§</a></h2>\n<p>1992年、岡山県生まれ。\n理数科高校を卒業後、<br>\n中国職業能力開発大学校にてプログラミングと向き合う。そこで組込み技術を用いてロボット開発、ロボコンサークル部長を務める傍ら、Webの驚くべきテクノロジーの広がりを目の当たりにした。</p>\n<p>その後上京し、株式会社ユーザベースへ入社。  （2016~2019）\n現在は、アスタミューゼ株式会社にて勤務し、事業機会の探索と必要事業資源の獲得を支援するツール「ICP(InnovationCapital Pathfinder)」を開発中。(2019~)</p>\n<p>バックエンドエンジニア、SREエンジニアとしてキャリアをスタートし、現在はバックエンドを中心にフルスタックに活躍。</p>\n<h2 id="%E3%81%93%E3%81%AE%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6">このサイトに関して <a class="header-anchor" href="#%E3%81%93%E3%81%AE%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6">§</a></h2>\n<h3 id="%E3%83%96%E3%83%AD%E3%82%B0">ブログ <a class="header-anchor" href="#%E3%83%96%E3%83%AD%E3%82%B0">§</a></h3>\n<p>プログラミングや技術情報に関することを掲載します。</p>\n<h3 id="%E7%BF%BB%E8%A8%B3">翻訳 <a class="header-anchor" href="#%E7%BF%BB%E8%A8%B3">§</a></h3>\n<p>最新の技術トピックを翻訳します。</p>\n<h3 id="%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA">リポジトリ <a class="header-anchor" href="#%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA">§</a></h3>\n<p><a href="https://github.com/yoshixmk/profile">profile</a>は、<a href="https://deno.land/">Deno</a>と<a href="https://github.com/xcatliu/pagic">pagic</a>で作られています</p>\n<p>Prepare</p>\n<ul>\n<li>Install <a href="https://deno.land/">Deno</a></li>\n<li>Download <a href="https://github.com/yoshixmk/profile">profile</a></li>\n</ul>\n<p>Build<br>\n下記をprofile/ディレクトリ配下で実行してください。</p>\n<pre class="language-autoit"><code class="language-autoit">$ deno run <span class="token operator">-</span><span class="token operator">-</span>unstable <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>read <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>write <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>pagic<span class="token variable">@0</span><span class="token punctuation">.</span><span class="token number">7.7</span><span class="token operator">/</span>mod<span class="token punctuation">.</span>ts build <span class="token operator">-</span><span class="token operator">-</span>serve <span class="token operator">-</span><span class="token operator">-</span>watch\n</code></pre>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/profile/main.js", type: "module" })),
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
                    "link": "articles/001-install-and-hello-world.html"
                },
                {
                    "text": "Denoのサードパーティモジュールを公開しました",
                    "link": "articles/002-awesome-deno-cn.html"
                }
            ],
            "text": "ブログ"
        },
        {
            "link": "translations/index.html",
            "children": [
                {
                    "text": "TBD",
                    "link": "translations/001-the-deno-handbook.html"
                },
                {
                    "text": "TBD",
                    "link": "translations/002-deno-chat-app.html"
                },
                {
                    "text": "TBD",
                    "link": "translations/003-from-node-to-deno.html"
                }
            ],
            "text": "翻訳"
        }
    ],
    'ga': React.createElement(Ga, { id: "UA-149348992-2" })
};
