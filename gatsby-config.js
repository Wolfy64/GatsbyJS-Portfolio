module.exports = {
  siteMetadata: {
    title: `De Wulf David`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David De Wulf Portfolio`,
        short_name: `DDW`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/img/project-1.jpg`, // This path is relative to the root of the site. size at least 512x512
      },
    },
    `gatsby-plugin-offline`,
  ],
}