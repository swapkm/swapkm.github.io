import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import { SEO } from "../components/seo";

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

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://swapkam.com/#person",
      name: "Swap Kam",
      image: {
        "@type": "ImageObject",
        "@id": "https://swapkam.com/#logo",
        url: "https://swapkam.com/images/logo.png",
        contentUrl: "https://swapkam.com/images/logo.png",
        caption: "SwapKam",
        inLanguage: "en-US",
        width: "512",
        height: "512",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://swapkam.com/#website",
      url: "https://swapkam.com",
      name: "SwapKam",
      alternateName: "SK",
      publisher: { "@id": "https://swapkam.com/#person" },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://swapkam.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "CollectionPage",
      "@id": "https://swapkam.com/#webpage",
      url: "https://swapkam.com/",
      name: "SwapKam - Tech Insights",
      about: { "@id": "https://swapkam.com/#person" },
      isPartOf: { "@id": "https://swapkam.com/#website" },
      inLanguage: "en-US",
    },
  ],
};

export const Head = ({ data }) => (
  <SEO
    title={`${data.mdx.frontmatter.title} - SwapKam`}
    description={data.mdx.frontmatter.description}
  >
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  </SEO>
);

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
