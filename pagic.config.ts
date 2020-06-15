export default {
  base: '/profile/',
  srcDir: '.',
  ignore: [/\/public\//, /\/\./, /\/LICENSE/],
  theme: 'docs',
  plugins: ['sidebar', 'script', 'ga'],
  title: 'yoshixmk Profile',
  sidebar: [
    'README.md',
    {
      link: 'articles/README.md',
      children: [
        'articles/001-install-and-hello-world.md',
        'articles/002-awesome-deno-cn.md'
      ]
    },
    {
      link: 'translations/README.md',
      children: [
        'translations/001-the-deno-handbook.md',
        'translations/002-deno-chat-app.md',
        'translations/003-from-node-to-deno.md'
      ]
    }
  ],
  nav: [
    {
      text: 'Tegebu',
      link: 'https://www.tegebu.com/'
    },
    {
      text: 'Deno Third Party Modules Ranking',
      link: 'https://deno.land/x/ranking'
    },
    {
      text: 'Github',
      link: 'https://github.com/yoshixmk'
    },
    {
      text: 'Twitter',
      link: 'https://twitter.com/yoshixmk'
    },
    {
      text: 'Qiita',
      link: 'https://qiita.com/yoshixmk'
    }
  ],
  ga: {
    id: 'UA-149348992-2'
  }
};
