import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";

const shortcodes = { Link };

export default function PageTemplate({ data, children }) {
  return (
    <>
      <Header />
      <MDXProvider components={shortcodes}>
        <main className="min-h-screen container mx-auto p-4">
          <h1>{data.mdx.frontmatter.title}</h1>
          {children}
        </main>
      </MDXProvider>
      <Footer />
    </>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
