import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { SEO } from "../components/seo";

interface IndexPageProps extends PageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const IndexPage: React.FC<PageProps> = ({ data, location }) => {
  const posts = data.allMdx.nodes;
  return (
    <Layout>
      <main>
        <ol style={{ listStyle: `none` }}>
          {posts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug;

            return (
              <li key={post.frontmatter.slug}>
                <article
                  className="m-6"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <Link to={post.frontmatter.slug} itemProp="url">
                    <header>
                      <h2>
                        <span itemProp="headline">{title}</span>
                      </h2>
                      <small>{post.frontmatter.date}</small>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </Link>
                </article>
              </li>
            );
          })}
        </ol>
      </main>
    </Layout>
  );
};

export default IndexPage;

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
        url: "https://swapkam.com/wp-content/uploads/2023/09/swapkam.webp",
        contentUrl:
          "https://swapkam.com/wp-content/uploads/2023/09/swapkam.webp",
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

export const Head = () => (
  <SEO>
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  </SEO>
);

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          slug
          description
        }
      }
    }
  }
`;
