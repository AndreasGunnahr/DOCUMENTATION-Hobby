module.exports = {
  title: "Coding documentation",
  description: "Here you read about my coding discoveries",
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
