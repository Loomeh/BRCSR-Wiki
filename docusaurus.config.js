// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BRC Speedrunning Wiki',
  tagline: 'We go pretty fast™ we think',
  favicon: 'img/brcsr-icon.png',

  // Production URL
  url: 'https://loomeh.github.io',
  baseUrl: '/BRCSR-Wiki',

  // GitHub pages deployment config.
  organizationName: 'Loomeh',
  projectName: 'BRCSR-Wiki',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    discordUrl: 'https://discord.gg/EWCfbJDrh4',
    githubUrl: 'https://github.com/Loomeh/BRCSR-Wiki',
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Loomeh/BRC-Wiki/blob/main/',

          admonitions: {
            keywords: ['note', 'tip', 'info', 'caution', 'danger', 'diffe', 'diffm', 'diffh'],
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'BRC Speedrunning Wiki',
        logo: {
          src: 'img/brcsr-icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/category/welcome',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/EWCfbJDrh4',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Loomeh/BRCSR-Wiki',
              },
            ],
          },
        ],
        copyright: `Made with 🧡 (and Docusaurus) by the BRC Speedrunning Community (Wiki base made by Titanfall 2 Speedrunning Community)`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
