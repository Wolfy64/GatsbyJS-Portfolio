module.exports = {
  siteMetadata: {
    title: 'De Wulf David - Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/`,
        name: 'pages',
      },
    },
  ],
}
