// @ts-check

const config = {
  title: 'Creatorlayer',
  url: 'https://www.creatorlayer.eu',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'creatorlayer',
  projectName: 'creatorlayer-www',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Creatorlayer',
      items: [
        {
          to: '/lenders',
          label: 'For lenders',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Creatorlayer.`,
    },
  },
};

module.exports = config;