//./src/templates/category.tsx
import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from "../components/layout";
import { SEO } from "../components/seo";

interface CategoryProps extends PageProps {
  data: {
    allMdx: {
      edges: Array<{
        node: {
          id: string;
          frontmatter: {
            title: string;
            slug: string;
          };
        };
      }>;
    };
  };
  pageContext: {
    category: string;
  };
}

const Category: React.FC<CategoryProps> = ({ data, pageContext }) => {
  const category = pageContext.category;
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <ul>
        {posts.map(({ node }) => (
          <li key={node.id}>
            <a href={node.frontmatter.slug}>{node.frontmatter.title}</a>
          </li>
        ))}
      </ul>
    </div>
    </Layout>
  );
};

export default Category;

export const Head = () => (
  <SEO title="Category - SwapKam" description='Explore the Category!'><meta name="robots" content="noindex"/></SEO>
);

export const query = graphql`
  query($category: String!) {
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;
