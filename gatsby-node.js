// *** exports ar por createPages e dete hoibo

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      query MyQuery {
        product: allContentfulGatsbyProduct {
          nodes {
            slug
          }
        }
      }
    `
  )

  result.data.product.nodes.forEach(product => {
    createPage({
      path: `/product/${product.slug}`,
      component: path.resolve(`src/templates/templates.js`),
      context: {
        slug: product.slug,
      },
    })
  })
  
}

// product ar btn a click korle kothay jaibo ame ayta component a bole dece
