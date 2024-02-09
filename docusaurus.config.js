// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer")
const lightCodeTheme = themes.github
const darkCodeTheme = themes.dracula

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Routegadget UK",
  tagline:
    "Helping to widen the use of Routegadget. Draw your route after an orienteering event and compare it with others.",
  url: "https://www.routegadget.co.uk",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Maprunner",
  projectName: "rguk",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          lastVersion: "current",
          versions: {
            current: {
              label: "2.x",
              path: "2.x",
            },
          },
        },
        blog: {
          showReadingTime: true,
          path: "news",
          routeBasePath: "news",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/rg2-180-180.png",
      navbar: {
        title: "Routegadget UK",
        logo: {
          alt: "Routegadget Logo",
          src: "img/rg2-180-180.png",
        },
        items: [
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
          },
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Docs",
          },
          { to: "/news", label: "News", position: "right" },
          { to: "videos", label: "Videos", position: "right" },
          {
            href: "https://www.maprunner.co.uk/rg2-stats/",
            label: "Stats",
            position: "right",
          },
          { to: "about", label: "About", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/docs/intro",
              },
              {
                label: "User Guide",
                to: "/docs/category/user-guide",
              },
              {
                label: "Manager Guide",
                to: "/docs/category/manager-guide",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Maprunner/rg2",
              },
              {
                label: "Facebook",
                href: "https://facebook.com/Maprunner.co.uk",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/MaprunnerGB",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "News",
                to: "/news",
              },
              {
                label: "About",
                to: "about",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a target="_blank" rel="noopener noreferrer" href="https://www.maprunner.co.uk">Maprunner</a>.
         Built with <a target="_blank" rel="noopener noreferrer" href="https://docusaurus.io/">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["php"],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),
}

module.exports = config
