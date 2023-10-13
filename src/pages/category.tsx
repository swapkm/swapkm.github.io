// src/pages/category.tsx
import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from "../components/layout";
import { SEO } from "../components/seo";

interface CategoryProps extends PageProps {
  data: {
    allMdx: {
      nodes: Array<{
        id: string;
        frontmatter: {
          category: string;
        };
      }>;
    };
  };
}

const Category: React.FC<CategoryProps> = ({ data }) => {
  const categories = new Set<string>();

  data.allMdx.nodes.forEach((node) => {
    const category = node.frontmatter.category;
    if (category) {
      categories.add(category);
    }
  });

  return (
    <Layout><div>
    <h1>All Categories</h1>
    <ul>
      {Array.from(categories).map((category) => (
        <li key={category}>
          <a href={`/category/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</a>
        </li>
      ))}
    </ul>
  </div></Layout>
  );
};

export default Category;

export const Head = () => (
  <SEO
  title="All Categories - SwapKam"
  description="Explore the Category!"><meta name="robots" content="noindex"/></SEO>
);

export const query = graphql`
  query {
    allMdx {
      nodes {
        id
        frontmatter {
          category
        }
      }
    }
  }
`;
