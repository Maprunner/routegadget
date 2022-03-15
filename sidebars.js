// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: "intro"
    },
    {
      type: 'category',
      link: {
        type: 'generated-index',
        title: 'User Guide',
        description: 'Nearly everything you could ever want to know about how to use Routegadget',
        slug: '/category/user-guide',
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      label: 'User Guide',
      collapsible: true,
      items: ['user-guide/page-layout',
        'user-guide/events-tab',
        'user-guide/courses-tab',
        'user-guide/results-tab',
        'user-guide/draw-tab',
        'user-guide/replay',
        'user-guide/analysis-options',
        'user-guide/configuration-options'],
    },
    {
      type: 'category',
      link: {
        type: 'generated-index',
        title: 'Manager Guide',
        description: 'How to use the Routegadget manager to set up and configure events',
        slug: '/category/manager-guide',
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      },
      label: 'Manager Guide',
      collapsible: true,
      items: ['manager-guide/logging-in',
        'manager-guide/creating-events',
        'manager-guide/editing-events',
        'manager-guide/maps',
        'manager-guide/configuration-options'
      ],
    },
    {
      type: 'doc',
      id: "useful"
    },
  ]
};

module.exports = sidebars;
