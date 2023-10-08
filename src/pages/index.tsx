import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

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
