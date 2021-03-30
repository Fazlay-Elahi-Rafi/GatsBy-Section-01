/**
jai plugin e use kore na kn oyta ay khan bole dete hoibo
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "GatsBy",
    author: "@rafi",
    data: ["item 1", "item 2"],
    person: { name: "rafi", age: 20 },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `nbzlfsrxaouj`,
        accessToken: process.env.ACCESS_KEY,
      },
    },
  ],
}
