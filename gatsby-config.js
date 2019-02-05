module.exports = {
  siteMetadata: {
    title: `Lisa Brener`, //should probably be Lisa Brener | *name of book*
    description: `Meta description goes here.`, //we need this from someone
    author: `Lisa Brener`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#404040`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `pfcunofbnp1d`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: `424db4c4f097d045107518975b79b0802be3722a076fb821ead8892c415eb32f`
      }
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
};
