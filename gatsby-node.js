//./gatsby-node.js
const path = require("path")
const postTemplate = path.resolve(`./src/templates/post.jsx`)
const category = path.resolve(`./src/templates/category.tsx`)

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
            category
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

    if (result.errors) {
        reporter.panicOnBuild('Error loading MDX result', result.errors)
    }

    const posts = result.data.allMdx.nodes

    posts.forEach(node => {
        createPage({
            path: node.frontmatter.slug,
            component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            context: { id: node.id },
        })
    })

    // Create category pages
  const categories = new Set();
  posts.forEach(node => {
    categories.add(node.frontmatter.category);
  });

  categories.forEach(category  => {
    createPage({
      path: `/category/${category}`,
      component: path.resolve("./src/templates/category.tsx"),
      context: { category },
    });
  });
}