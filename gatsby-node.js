const path = require("path")
const postTemplate = path.resolve(`./src/templates/post.jsx`)

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
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

    // Create blog post pages.
    const posts = result.data.allMdx.nodes

    // you'll call `createPage` for each result
    posts.forEach(node => {
        createPage({
            // As mentioned above you could also query something else like frontmatter.title above and use a helper function
            // like slugify to create a slug
            path: node.frontmatter.slug,
            // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
            //component: node.internal.contentFilePath,
            // You can use the values in this context in
            // our page layout component
            component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            context: { id: node.id },
        })
    })
}