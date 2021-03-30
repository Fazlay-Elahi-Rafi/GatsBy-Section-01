// ame gatsby-node.js file bole dece btn a click korle kon file a jaibo

import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
// import item from "../pages/products/item";

import Layout from "../Component/layout"

const query = graphql`
  {
    allContentfulGatsbyProduct {
      nodes {
        id
        title
        slug
        price
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        info {
          info
        }
      }
    }
  }
`

export default function Product() {
  const {
    allContentfulGatsbyProduct: { nodes: anyName },
  } = useStaticQuery(query)
  return (
    <Layout>
      <div className="container my-5">
        <div className="row">
          {anyName.map(templates => {
            const { id, title, price, image, info } = templates
            return (
              <>
                <div className="col-4" key={id}>
                  <Image
                    className="card-img-top"
                    fluid={image.fluid}
                    alt="img"
                  ></Image>
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{price}</p>
                    <p className="card-text">{info.info}</p>
                    <Link
                      className="btn px-5 btn-outline-info text-uppercase"
                      to={`/product/${templates.slug}`}
                    >
                      {/* templates nam ta hoilo amar file ar nam & ay nam ta sob jaygay same e rakte hoibo */}
                      more
                    </Link>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
