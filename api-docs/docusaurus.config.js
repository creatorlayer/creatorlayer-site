// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Creatorlayer API Docs',
  url: 'https://api.creatorlayer.eu',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'creatorlayer',
  projectName: 'creatorlayer-api-docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/', // docs at root
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
    plugins: [
      [
        'docusaurus-plugin-openapi-docs',
        {
          id: 'openapi',
          docsPluginId: 'classic',
          config: {
            creatorlayer: {
              specPath: 'https://api.creatorlayer.eu/openapi.yaml',
              outputDir: 'openapi',
              sidebarOptions: {
                groupPathsBy: 'tag',
                categoryLinkSource: 'tag',
              },
            },
          },
        },
      ],
    ],

  themeConfig: {
    navbar: {
      title: 'Creatorlayer API',
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'API Overview',
        },
          {
            to: '/openapi/creatorlayer',
            label: 'API Reference',
            position: 'left',
          },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;