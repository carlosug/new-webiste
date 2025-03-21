/**
 * To implement Gatsby's Browser APIs, create a gatsby-browser.js file.
 * See: https://www.gatsbyjs.org/docs/browser-apis
 */


module.exports = {
  // pathPrefix: "/reponame",
  siteMetadata: {
    title: `Carlos Utrilla-Guerrero`,
    description: `Carlos Utrilla-Guerrero personal website, with his resume.`,
    author: {
      name: `Carlos Utrilla-Guerrero`,
    },
    social: {
      github: `https://carlosug.github.io/new-website`,
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/layout.tsx`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/network.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
