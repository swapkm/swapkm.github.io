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
      <>
        <ol style={{ listStyle: `none` }}>
          {posts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug;

            return (
              <li key={post.frontmatter.slug} className="md:px-20">
                <Link
                  className="block rounded-3xl bg-pink-50 shadow-md hover:shadow-lg transition duration-300 p-2"
                  to={post.frontmatter.slug}
                >
                  <div>
                    {post.frontmatter.image && (
                      <img
                        src={post.frontmatter.image}
                        alt={post.frontmatter.title}
                        style={{ maxWidth: "100%", height: "auto" }}
                        className="block rounded-3xl"
                      />
                    )}
                    <h2 className="text-2xl font-bold text-shadow m-5">
                      <span>{title}</span>
                    </h2>
                    <small className="text-shadow mx-5 text-black">
                      {post.frontmatter.date}, Tags: {post.frontmatter.tags.map((tag) => (
                        <span key={tag} className="mr-2">
                          {tag}
                        </span>
                      ))}
                    </small>
                  </div>
                  <div>
                    <p
                      className="m-5 text-black"
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                    />
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </>
    </Layout>
  );
};

export default IndexPage;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      url: "https://swapkam.com/",
      logo: "https://swapkam.com/images/logo.svg",
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
  ],
};

export const Head = () => (
  <SEO title="SwapKam - Tech Insides">
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
          image
          tags
        }
      }
    }
  }
`;
