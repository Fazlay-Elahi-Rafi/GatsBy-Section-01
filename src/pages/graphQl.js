import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import Layout from "../Component/layout"

import Header from "../GraphQL/header"

 const data = graphql`
  query {
    site {
      info: siteMetadata {
        author
        data
        title
        person {
          name
          age
        }
      }
    }
  }
`

export default function GraphQl() {
  const {
    site: {
      info: { author, title },
    },
  } = useStaticQuery(data)
  return (
    <>
      <Layout>
        <h5>Author: {author}</h5>
        <h5>Title: {title}</h5>
        <Header />
      </Layout>
    </>
  )
}
