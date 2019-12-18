module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/gatsby-theme-blog/gatsby-plugin-theme-ui/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Girassol`,
          `Lato\:400,400i,700, 700i` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-theme-blog`
    },
    {
      resolve: `gatsby-theme-waves`
    },
  ],

  siteMetadata: {
    title: `The War on Jank`,
    author: `Tim JK Strickland: webhead`,
    description: `A random assortment of thoughts, web-related and otherwise.`,
    social: [
      {
        name: `dev.to`,
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
