module.exports = {
  title: 'Triton Documentation',
  description: 'Translate Your Server - Spigot Plugin',
  base: '/documentation/',
  dest: './static/documentation',
  plugins: [
    '@vuepress/medium-zoom',
    'vuepress-plugin-element-tabs',
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-123906138-2',
      },
    ],
  ],
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://cdn.rexcantor64.com/triton/assets/logo.png',
      },
    ],

    [
      'meta',
      {
        property: 'og:title',
        content: 'Triton Documentation',
      },
    ],
    [
      'meta',
      {
        property: 'og:type',
        content: 'article',
      },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://triton.rexcantor64.com/',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Translate Your Server - Spigot Plugin',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://cdn.rexcantor64.com/triton/assets/banner.png',
      },
    ],
    [
      'meta',
      {
        property: 'og:article:author',
        content: 'diogotc2002',
      },
    ],

    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:url',
        content: 'https://triton.rexcantor64.com/',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:site',
        content: '@diogotc2002',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:title',
        content: 'Triton Documentation',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:description',
        content: 'Translate Your Server - Spigot Plugin',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content: 'https://cdn.rexcantor64.com/triton/assets/banner.png',
      },
    ],
  ],
  themeConfig: {
    logo: 'https://cdn.rexcantor64.com/triton/assets/logo.png',
    nav: [
      {
        text: 'Spigot',
        link: 'https://triton.rexcantor64.com/spigot',
      },
      {
        text: 'Songoda',
        link: 'https://triton.rexcantor64.com/songoda',
      },
      {
        text: 'Polymart',
        link: 'https://triton.rexcantor64.com/polymart',
      },
      {
        text: 'Discord',
        link: 'https://triton.rexcantor64.com/discord',
      },
    ],
    repo: 'tritonmc/triton-website',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Improve this page',
    lastUpdated: 'Last Updated',
    serviceWorker: true,
    sidebarDepth: 1,
    sidebar: [
      {
        collapsable: false,
        title: '🚀 Getting Started',
        children: ['/getting-started/installation'],
      },
      {
        collapsable: true,
        title: '💡 Concepts',
        children: ['/concepts/translations'],
      },
      {
        collapsable: true,
        title: '📚 Guides',
        children: ['/guides/first-translation'],
      },
      {
        collapsable: true,
        title: '🔌 Programatic API',
        children: ['/programatic-api/getting-started'],
      },
    ],
  },
};
