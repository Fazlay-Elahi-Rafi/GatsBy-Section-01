//Plugin--- npm install gatsby-source-filesystem
//Plugin--- npm install gatsby-image..npm install gatsby-transformer-sharp gatsby-plugin-sharp

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const getsImg = graphql`
  {
    fixed: file(relativePath: { eq: "3.jpg" }) {
      childImageSharp {
        fixed(width: 800, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default function Img() {
  const data = useStaticQuery(getsImg)
  return (
    <>
      <h1>....Img....</h1>

      {/* fixed img size fix thakbo */}
      <Image fixed={data.fixed.childImageSharp.fixed} />
      
      <Image fluid={data.fluid.childImageSharp.fluid} />
      {/* fluid img size Browser ar size onojiye change hoibo(like Bootstrap -- img-fluid) */}
    </>
  )
}
