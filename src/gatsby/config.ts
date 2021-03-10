export type SiteMetadata = typeof config.siteMetadata

const config = {
  siteMetadata: {
    name: 'David De Wulf',
    description: "Website of David De Wulf: Software Engineer",
    url: "https://dewulfdavid.com",
    type: 'website',
    image: "/images/icon.png",
    themeColor: "",
    colorScheme: 'dark light',
    lang: 'en',
    twitterUsername: "TweetWolf64",
    twitter: 'https://twitter.com/TweetWolf64',
    mail: 'mailto:contact.dewulf@gmail.com',
    linkedin: 'https://www.linkedin.com/in/dewulfdavid/',
    github: 'https://github.com/Wolfy64'
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
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
  ],
};

export default config