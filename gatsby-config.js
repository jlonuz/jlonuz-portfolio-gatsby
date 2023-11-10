/**
 * @type {import('gatsby').GatsbyConfig}
 */

//const adapter = require("gatsby-adapter-netlify")

module.exports = {
  siteMetadata: {
    title: `jlonuz-portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
  // adapter: adapter({
  //   excludeDatastoreFromEngineFunction: false,
  // }),
}
