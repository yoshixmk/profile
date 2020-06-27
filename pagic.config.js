export default {
    base: "/profile/",
    srcDir: ".",
    ignore: [/\/public\//, /\/\./, /\/LICENSE/],
    theme: "docs",
    plugins: ["sidebar", "script", "ga"],
    title: "yoshixmk Profile",
    sidebar: [
        "README.md",
        {
            link: "articles/README.md",
            children: [
                "articles/001-deno-introduction-in-my-company.md",
                "articles/002-news-published-third-party-module.md",
                "articles/003-deno-introduction-at-ts-study-meeting.md",
                "articles/004-deno-introduce-by-yoshixmk-regret-10-things.tsx",
            ],
        },
        {
            link: "translations/README.md",
            children: [
                "translations/001-perfomance-aspect-of-deno-vs-node-js.md",
                "translations/002-what-is-the-best-deno-web-framework.md",
                "translations/003-registration-form-mongodb.md",
            ],
        },
    ],
    nav: [
        {
            text: "Tegebu",
            link: "https://www.tegebu.com/",
        },
        {
            text: "Deno Third Party Modules Ranking",
            link: "https://deno.land/x/ranking",
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