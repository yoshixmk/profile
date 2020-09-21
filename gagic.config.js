export default {
    root: "/profile/",
    srcDir: ".",
    ignore: [/\/public\//, /\/\./, /\/LICENSE/],
    theme: "docs",
    plugins: ["sidebar", "script", "ga"],
    title: "yoshixmk Profile",
    github: "https://github.com/yoshixmk",
    sidebar: {
        "/": [
            "README.md",
            {
                link: "articles/README.md",
                children: [
                    "articles/001-deno-introduction-in-my-company.md",
                    "articles/002-news-published-third-party-module.md",
                    "articles/003-deno-introduction-at-ts-study-meeting.md",
                    "articles/004-deno-introduce-by-yoshixmk-regret-10-things.tsx",
                    "articles/005-deno-react-chat.md",
                    "articles/006-tege-next-introduction.md",
                    "articles/007-deno-ja-manual-introduction.md",
                    "articles/008-tege-next-trend-page-release.md",
                    "articles/009-tege-domains-release.md",
                    "articles/010-introduction-f3.md",
                    "articles/011-introduction-gagic.md",
                ],
            },
            {
                link: "translations/README.md",
                children: [
                    "translations/001-perfomance-aspect-of-deno-vs-node-js.md",
                    "translations/002-what-is-the-best-deno-web-framework.md",
                    "translations/003-registration-form-mongodb.md",
                    "translations/004-guide-to-porting-node-modules-to-deno.md",
                    "translations/005-do-all-roads-lead-to-rome.md",
                    "translations/006-the-wait-is-over-mandarine-2-0-0-is-here.md",
                ],
            },
        ],
    },
    nav: [
        {
            text: "Tegebu",
            link: "https://www.tegebu.com/",
        },
        {
            text: "Deno X Ranking",
            link: "/../deno-x-ranking/",
        },
        {
            text: "Github",
            link: "https://github.com/yoshixmk",
        },
        {
            text: "Twitter",
            link: "https://twitter.com/yoshixmk",
        },
        {
            text: "Qiita",
            link: "https://qiita.com/yoshixmk",
        },
    ],
    ga: {
        id: "UA-149348992-2",
    },
};
