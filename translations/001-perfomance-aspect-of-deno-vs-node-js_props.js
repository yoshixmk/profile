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
                    "text": "Gagicの紹介",
                    "link": "articles/011-introduction-gagic.html",
                    "pagePath": "articles/011-introduction-gagic.md"
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
    'pagePath': "translations/001-perfomance-aspect-of-deno-vs-node-js.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "translations/001-perfomance-aspect-of-deno-vs-node-js.html",
    'title': "Performance aspect of Deno vs. Node",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Performance aspect of Deno vs. Node</h1>\n<div style="text-align: right;">\n<p>Original Publication date： 2020-06-19</p>\n<p>Publication date： 2020-07-24</p><br>\n</div>\n<h2 id="%E3%81%93%E3%81%AE%E8%A8%98%E4%BA%8B%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6">この記事に関して<a class="anchor" href="#%E3%81%93%E3%81%AE%E8%A8%98%E4%BA%8B%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6">§</a></h2>\n<p><a href="https://dev.to/gjuoun/perfomance-aspect-of-deno-vs-node-js-4dke">Performance aspect of Deno vs. Node</a>を翻訳しています。</p>\n<h2 id="deno%E5%AF%BEnode%E3%81%AE%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">Deno対Nodeのパフォーマンスについて<a class="anchor" href="#deno%E5%AF%BEnode%E3%81%AE%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">§</a></h2>\n<p>パフォーマンスが良いことは、素晴らしいことです。<br>\n数日前、Craig Mortenの投稿<a href="https://dev.to/craigmorten/what-is-the-best-deno-web-framework-2k69">What Is The Best Deno Web Framework?</a>「DenoのWebフレームワークで最適なものは何か？」を読みました。すべてのDenoフレームワークの概要を示し、それらのすべての側面を比較します。あなたがそれについて読んでいないなら、私はあなたがそうすることを強く勧めます。</p>\n<p>クレイグの投稿によると、「パフォーマンス」セクションは魅力的です。彼の環境では、Deno HTTPモジュールはNode HTTPモジュールとほとんど同じ（さらにはそれ以上）という結果でした。これは単なる &quot;Hello Deno！&quot;を試すだけのパフォーマンステストですが、この結果に驚きました。</p>\n<p><s>しかし、私はそれがほとんどの場合に当てはまらないことを知っていました。なぜならDeno HTTPモジュールはTypescriptで記述されているためです。型チェックは開発の楽しさをもたらしますが、コンパイラー時間により多くのリソースがかかるため、パフォーマンスに悪影響を及ぼします。</s>\n（Oghenovo UsiwomaとJonathan Beaumont がコメントで<a href="https://dev.to/eunovo/comment/10hn2">指摘</a>してくれてありがとう）</p>\n<p>しかし、私は以前にそれをテストしたことがあり、彼と同じ結果を得たことはありません。より強力なマシンでテストを実行するとどうなるかを確認したいと思います。</p>\n<ul>\n<li>\n<p>環境：</p>\n<ul>\n<li>CPU：i5-9600KF @ 3.7GHz</li>\n<li>RAM：16GB DDR4 2133MHz</li>\n<li>OS：Windows 10</li>\n<li>ベンチマークツール： <a href="https://github.com/mcollina/autocannon">autocannon</a></li>\n</ul>\n</li>\n<li>\n<p>ベンチマークスクリプト：</p>\n<ul>\n<li>&quot;Hello World!&quot; <a href="https://github.com/deligenius/deligenius/blob/master/benchmark/deno.http.tsv">deno server</a></li>\n<li>&quot;Hello World!&quot; <a href="https://github.com/deligenius/deligenius/blob/master/benchmark/node.http.js">node server</a>\n最初に結果を見てみましょう：</li>\n</ul>\n</li>\n</ul>\n<h3 id="100%E5%90%8C%E6%99%82%E6%8E%A5%E7%B6%9A">100同時接続<a class="anchor" href="#100%E5%90%8C%E6%99%82%E6%8E%A5%E7%B6%9A">§</a></h3>\n<table>\n<thead>\n<tr>\n<th>名前</th>\n<th>バージョン</th>\n<th>AVGリクエスト/秒</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>node.http</td>\n<td>12.16.3</td>\n<td>47969.2</td>\n</tr>\n<tr>\n<td>deno.http</td>\n<td>1.0.0</td>\n<td>47376</td>\n</tr>\n<tr>\n<td>deno.http</td>\n<td>1.1.0</td>\n<td>46953.7</td>\n</tr>\n<tr>\n<td>node.http</td>\n<td>14.2.0</td>\n<td>44409</td>\n</tr>\n</tbody>\n</table>\n<p>なんと！全体的にDenoはNodeを優っているように見えます！（少なくともNodeバージョン14.2.0の場合）。</p>\n<p>ただし、このベンチマークは、100の同時接続数に基づいて<code>autocannon http://localhost:3000/ -c100</code>のコマンドで実行しているため、中小規模のサーバーには多すぎます。そこで、もう一度試してみます。今回<code>-c10</code>は、10の同時接続で要求を送信し続けるてみます。</p>\n<h3 id="10%E5%90%8C%E6%99%82%E6%8E%A5%E7%B6%9A">10同時接続<a class="anchor" href="#10%E5%90%8C%E6%99%82%E6%8E%A5%E7%B6%9A">§</a></h3>\n<table>\n<thead>\n<tr>\n<th>名前</th>\n<th>バージョン</th>\n<th>AVGリクエスト/秒</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>node.http</td>\n<td>12.16.3</td>\n<td>49926.69</td>\n</tr>\n<tr>\n<td>node.http</td>\n<td>14.2.0</td>\n<td>45345.33</td>\n</tr>\n<tr>\n<td>deno.http</td>\n<td>1.1.0</td>\n<td>34806.79</td>\n</tr>\n<tr>\n<td>deno.http</td>\n<td>1.0.0</td>\n<td>34742.37</td>\n</tr>\n</tbody>\n</table>\n<p>今回は、Nodeの勝利です。2つの間には大きな違いがあり、ノードはデノよりも毎秒約10Kを超えるリクエストを持っています。</p>\n<p>しかし、これは新しい質問をもたらします：</p>\n<h3 id="%E5%90%8C%E6%99%82%E6%8E%A5%E7%B6%9A%E6%95%B0%E3%81%8C%E9%87%8D%E8%A6%81%E3%81%AA%E3%81%AE%E3%81%AF%E3%81%AA%E3%81%9C%E3%81%A7%E3%81%99%E3%81%8B%EF%BC%9F">同時接続数が重要なのはなぜですか？<a class="anchor" href="#%E5%90%8C%E6%99%82%E6%8E%A5%E7%B6%9A%E6%95%B0%E3%81%8C%E9%87%8D%E8%A6%81%E3%81%AA%E3%81%AE%E3%81%AF%E3%81%AA%E3%81%9C%E3%81%A7%E3%81%99%E3%81%8B%EF%BC%9F">§</a></h3>\n<p>同時接続とは、<a href="https://blog.litespeedtech.com/2013/04/26/concurrent-connections-demystified/#:~:text=A%20concurrent%20connection%20is%20a,mean%20the%20exact%20same%20time.">別の接続と同時に発生する接続</a>のことです。<br>\nあるユーザーがHTMLページのリクエストを送信し、5ミリ秒後に、<br>\n別のユーザーがcssファイルのリクエストを送信したとします。<br>\nしかしこれは同時接続とは見なされません。</p>\n<h2 id="%E5%90%8C%E6%99%82%E6%8E%A5%E7%B6%9A%E6%95%B0%E3%82%92%E8%A8%88%E7%AE%97%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95">同時接続数を計算する方法<a class="anchor" href="#%E5%90%8C%E6%99%82%E6%8E%A5%E7%B6%9A%E6%95%B0%E3%82%92%E8%A8%88%E7%AE%97%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95">§</a></h2>\n<p>例えば、アプリに100人のアクティブユーザーがいるとします。これらのユーザーを1時間追跡し、各ユーザーが1時間に60回のクリックを行っていることを分かったとします。これはサーバーでの合計リクエスト数が6000であり、各リクエストには平均で2秒かかるとします（これは非常に低速です）。これは、3600秒（1時間）で、12000秒のアクティブな接続であり、<strong>同時接続数は3.33</strong>になります（12000/3600 = 3.33）。</p>\n<ul>\n<li>\n<p>Q. もしサーバーが1秒以内に各リクエストを処理できるほど強力な場合はどうでしょう?</p>\n</li>\n<li>\n<p>A. 同時数はさらに少なくして、1.7未満です。</p>\n</li>\n<li>\n<p>Q. 1000人のアクティブユーザーはどうですか？</p>\n</li>\n<li>\n<p>A. 同時接続数は33.3</p>\n</li>\n<li>\n<p>Q. 100の同時接続はやりすぎでは？</p>\n</li>\n<li>\n<p>A. そのとおり！3000人以上のアクティブユーザーにサービスを提供するエンタープライズレベルのアプリケーションを構築する場合を除きます。（上記のシナリオにおいては）</p>\n</li>\n</ul>\n<h3 id="node%E3%81%BE%E3%81%9F%E3%81%AFdeno%E3%80%81%E3%81%A9%E3%81%A1%E3%82%89%E3%81%AE%E6%96%B9%E3%81%8C%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9%E3%81%8C%E8%89%AF%E3%81%84%E3%81%8B%E6%95%99%E3%81%88%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%91%E3%81%BE%E3%81%99%E3%81%8B%EF%BC%9F">NodeまたはDeno、どちらの方がパフォーマンスが良いか教えていただけますか？<a class="anchor" href="#node%E3%81%BE%E3%81%9F%E3%81%AFdeno%E3%80%81%E3%81%A9%E3%81%A1%E3%82%89%E3%81%AE%E6%96%B9%E3%81%8C%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9%E3%81%8C%E8%89%AF%E3%81%84%E3%81%8B%E6%95%99%E3%81%88%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%91%E3%81%BE%E3%81%99%E3%81%8B%EF%BC%9F">§</a></h3>\n<p>そうは言っても、<strong>10個の同時接続の結果は実際にはより意味があり、Nodeはパフォーマンスラウンドで勝利します。</strong></p>\n<p><code>-c100</code>のテストではDenoの方がパフォーマンスが優れていますが、これは、トラフィック量の多いネットワークの場合であり、NodeよりもDenoの方が優れていることを意味しています。それは素晴らしいことです。私が見てきたことから、Denoはまだ若く、現時点ではまだ本番環境に対応していないため、企業はデノよりも大量のトラフィックを処理するためにJavaまたは他のよく知られた実績のある言語を好むでしょう。しかし、Denoコミュニティの誰もがそれを実現させています🔥。</p>\n<p>最後に一点申し上げたいと思います。開発コミュニティにとって、パフォーマンスは成功の鍵ではありません。PythonとPHPを見てください。それらはNodeとDeno よりもかなり遅く実行されます。なぜ、それらは人気なのでしょうか？その理由はエコシステムと人です！</p>\n<h3 id="%E8%BF%BD%E5%8A%A0%E3%83%88%E3%83%94%E3%83%83%E3%82%AF">追加トピック<a class="anchor" href="#%E8%BF%BD%E5%8A%A0%E3%83%88%E3%83%94%E3%83%83%E3%82%AF">§</a></h3>\n<p><a href="https://99firms.com/blog/google-search-statistics/">Googleが1秒あたり75,000以上のクエリを処理する</a>ことを検討してください。\nサーバーは、1秒あたりこの量のリクエスト（&gt; 40K）を処理できますか？</p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/profile/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E3%81%93%E3%81%AE%E8%A8%98%E4%BA%8B%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6">この記事に関して</a></li><li><a href="#deno%E5%AF%BEnode%E3%81%AE%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">Deno対Nodeのパフォーマンスについて</a><ol><li><a href="#100%E5%90%8C%E6%99%82%E6%8E%A5%E7%B6%9A">100同時接続</a></li><li><a href="#10%E5%90%8C%E6%99%82%E6%8E%A5%E7%B6%9A">10同時接続</a></li><li><a href="#%E5%90%8C%E6%99%82%E6%8E%A5%E7%B6%9A%E6%95%B0%E3%81%8C%E9%87%8D%E8%A6%81%E3%81%AA%E3%81%AE%E3%81%AF%E3%81%AA%E3%81%9C%E3%81%A7%E3%81%99%E3%81%8B%EF%BC%9F">同時接続数が重要なのはなぜですか？</a></li></ol></li><li><a href="#%E5%90%8C%E6%99%82%E6%8E%A5%E7%B6%9A%E6%95%B0%E3%82%92%E8%A8%88%E7%AE%97%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95">同時接続数を計算する方法</a><ol><li><a href="#node%E3%81%BE%E3%81%9F%E3%81%AFdeno%E3%80%81%E3%81%A9%E3%81%A1%E3%82%89%E3%81%AE%E6%96%B9%E3%81%8C%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9%E3%81%8C%E8%89%AF%E3%81%84%E3%81%8B%E6%95%99%E3%81%88%E3%81%A6%E3%81%84%E3%81%9F%E3%81%A0%E3%81%91%E3%81%BE%E3%81%99%E3%81%8B%EF%BC%9F">NodeまたはDeno、どちらの方がパフォーマンスが良いか教えていただけますか？</a></li><li><a href="#%E8%BF%BD%E5%8A%A0%E3%83%88%E3%83%94%E3%83%83%E3%82%AF">追加トピック</a></li></ol></li></ol></nav>'
        } })
};
