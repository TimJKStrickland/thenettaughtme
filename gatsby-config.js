module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Dela+Gothic+One`,
          `Lato\:400,400i,700, 700i` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: '/posts'
      }
    },
    {
      resolve: `gatsby-plugin-theme-ui`,
    },
    { resolve: `gatsby-theme-waves`,
      options: {}
    },
    { 
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "thenettaught.me",
      },
    }
  ],

  siteMetadata: {
    title: `TheNetTaught.Me`,
    author: `Tim JK Strickland: webhead`,
    description: `Learn from my mistakes, learn from my successes`,
    social: [
      {
        name: `dev`,
        url: `https://dev.to/timjkstrickland`,
      },
      {
        name: `github`,
        url: `https://github.com/timjkstrickland`,
      },
      {
        name: `codepen`,
        url: `https://codepen.io/timjkstrickland`,
      },
    ],
  },
}
