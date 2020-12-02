module.exports = {
  title: "Coding journey",
  description:
    "Here you see & read about my coding journey and fun discoveries",
  themeConfig: {
    nav: [
      { text: "About", link: "/about/" },
      { text: "Documentation", link: "/documentation/" },
    ],
    sidebar: [
      {
        title: "Documentation",
        path: "/documentation/",
        children: [
          "/documentation/react/",
          "/documentation/vue/",
          "/documentation/styled-components/",
          "/documentation/tailwind/",
          "/documentation/vscode/",
        ],
        collapsable: false,
      },
    ],
    sidebarDepth: 3,
  },
};
