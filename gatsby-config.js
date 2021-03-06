module.exports = {
  siteMetadata: {
    siteUrl: "https://undertheground.wishwork.org",
    title: "under the ground website",
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "Button",
        link: "/buttondoc",
      },
      {
        name: "Input",
        link: "/inputdoc",
      },
      {
        name: "Button",
        link: "/buttondoc",
      },
      {
        name: "Button",
        link: "/buttondoc",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/main-layout.js"),
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-209847724-1        ",
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0
      },
    },
  ],
};
