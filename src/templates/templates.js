import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../Component/layout"

export const query = graphql`
  query SingleProduct($slug: String) {
    product: contentfulGatsbyProduct(slug: { eq: $slug }) {
      title
      price
      image {
        fixed {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default function templates({
  data: {
    product: {
      title,
      price,
      image: { fixed },
      info: { info },
    },
  },
}) {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-8 text-center m-auto mt-5">
            <div>
              <Image className="card-img-top" fixed={fixed} alt="img"></Image>
            </div>
            <div className="col-8 m-auto">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{price}</p>
              <p className="card-text">{info}</p>
              <Link
                className="btn px-5 btn-outline-info text-uppercase"
                to="/product"
              >
                back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
