import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "./img"

// siteMetadata ar jaygay onno nam use korte chile anyName:siteMetadata
const myQl = graphql`
  {
    site {
      anyName: siteMetadata {
        author
        data
        title
        person {
          age
          name
        }
      }
    }
  }
`

const Header = () => {
  // const myData = useStaticQuery(myQl)
  const {
    site: {
      anyName: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(myQl)
  return (
    <>
      <h2>Title: {title}</h2>
      <h2>Name: {name}</h2>

      <Img />
      {/* <h1>Title: {data.site.siteMetadata.title}</h1>
      <h1>Name: {data.site.siteMetadata.person.name}</h1> */}
    </>
  )
}

export default Header
