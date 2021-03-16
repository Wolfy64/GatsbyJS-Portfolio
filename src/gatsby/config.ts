export type SiteMetadata = typeof config.siteMetadata

const config = {
  siteMetadata: {
    name: 'David De Wulf',
    description: "Website of David De Wulf: Software Engineer",
    jobTitle: 'Software Engineer at PayPal',
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
    github: 'https://github.com/Wolfy64',
    prompt: `Last login: ${new Date().toString().slice(0, 15)}
    david:~ ls ./skills`,
    skills: [
      'React',
      'Redux',
      'GraphQL',
      'JavaScript',
      'HTML5',
      'CSS3',
      'TypeScript',
      'Node',
      'Express',
      'Gatsby',
      'Next',
      'REST',
      'MySQL',
      'NoSQL',
      'Git',
    ],
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