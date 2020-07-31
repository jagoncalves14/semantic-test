require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require('path')
const WebpackNotifierPlugin = require('webpack-notifier')
const isDevelopment = process.env.NODE_ENV === 'development'
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: `Pixelmatters`,
    description: `Pixelmatters website`,
    author: `Pixelmatters`,
    siteUrl: process.env.GATSBY_URL
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: `${process.env.GATSBY_API_PROTOCOL}://${process.env.GATSBY_API_URL}/graphql`,
      },
    },
    // Bootstrap requires minimum Sass number precision of 8
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
        postCssPlugins: [
          autoprefixer()
        ],
      },
    },
    {
      // Polyfills needed for IE11 support
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`Array.prototype.forEach`, `fetch`, `Object.keys`, `URL`]
      },
    },
    `gatsby-plugin-offline`,
  ],
}
exports.onCreateWebpackConfig = ({
  actions,
  loaders,
  config
}) => {
  if (isDevelopment) {
    config.plugins.push(
      new WebpackNotifierPlugin({
        title: 'Pixelmatters - Gatsby',
        excludeWarnings: true,
        alwaysNotify: true,
        contentImage: path.join(__dirname, '.storybook/logo.png'),
      }),
    )
  }
}