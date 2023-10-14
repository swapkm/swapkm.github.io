import React, { useState } from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { SEO } from "../components/seo";
import FormatListBulleted from "@mui/icons-material/FormatListBulleted";
import Close from "@mui/icons-material/Close";

const shortcodes = { Link };

export default function PageTemplate({ data, children }) {
  const [showTOC, setShowTOC] = useState(false);

  const toggleTOC = () => {
    setShowTOC(!showTOC);
  };

  return (
    <Layout>
      <MDXProvider components={shortcodes}>
        <article>
          <section>
            <h1>{data.mdx.frontmatter.title}</h1>
            <div className="flex space-x-4">
              <p>
                {new Date(data.mdx.frontmatter.date).toLocaleDateString(
                  undefined,
                  { year: "numeric", month: "short", day: "numeric" }
                )}
              </p>
              <p className="flex space-x-4">
                <strong>
                  {data.mdx.frontmatter.category.charAt(0).toUpperCase() +
                    data.mdx.frontmatter.category.slice(1)}
                </strong>
              </p>
            </div>
          </section>
          <section className="bg-gray-100 p-4 my-4 rounded-lg">
            <button
              onClick={toggleTOC}
              className="bg-gray-500 text-white px-4 py-2 rounded-sm hover:bg-blue-700"
            >
              {showTOC ? (
                <>
                  <Close /> Table of Contents
                </>
              ) : (
                <>
                  <FormatListBulleted /> Table of Contents
                </>
              )}
            </button>
            {showTOC && (
              <div>
                <h3 className="text-xl font-semibold">Table of Contents</h3>
                <ul>
                  {data.mdx.tableOfContents.items.map((item) => (
                    <li key={item.url}>
                      <a href={item.url}>
                        <strong>{item.title}</strong>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
          {children}
          <div className="bg-gray-100 my-4 rounded-lg">
            <div className="flex space-x-4">
            Tags: <strong>{data.mdx.frontmatter.tags.join(', ')}</strong>
            </div>

            <div className="flex space-x-4 mt-4">
              {" "}
              Author:
              <Link to="/author/swapkam">
                <strong>{data.mdx.frontmatter.author}</strong>
              </Link>
            </div>
          </div>
        </article>
      </MDXProvider>
    </Layout>
  );
}

export const Head = ({ data, location }) => (
  <SEO
    title={`${data.mdx.frontmatter.title} - SwapKam`}
    description={data.mdx.frontmatter.description}
    pathname={location.pathname}
    image={data.mdx.frontmatter.image}
    type={data.mdx.frontmatter.type}
  >
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "@id": `${data.site.siteMetadata.siteUrl}/${data.mdx.frontmatter.slug}/#breadcrumb`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: {
                  "@id": data.site.siteMetadata.siteUrl,
                  name: "Home",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                name: data.mdx.frontmatter.category,
                item: {
                  "@id": `${data.site.siteMetadata.siteUrl}/${data.mdx.frontmatter.category}`,
                  name: data.mdx.frontmatter.category,
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@id":
                    data.site.siteMetadata.siteUrl + data.mdx.frontmatter.slug,
                  name: data.mdx.frontmatter.title,
                },
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": `${data.site.siteMetadata.siteUrl}${data.mdx.frontmatter.slug}/#BlogPosting`,
            mainEntityOfPage: {
              "@id": `${data.site.siteMetadata.siteUrl}${data.mdx.frontmatter.slug}/#webpage`,
              url: data.site.siteMetadata.siteUrl + data.mdx.frontmatter.slug,
            },
            headline: `${data.mdx.frontmatter.title} - ${data.site.siteMetadata.title}`,
            name: `${data.mdx.frontmatter.title} - ${data.site.siteMetadata.title}`,
            description: data.mdx.frontmatter.description,
            datePublished: data.mdx.frontmatter.date,
            dateModified: data.mdx.frontmatter.date,
            author: {
              "@type": "Person",
              "@id": `${data.site.siteMetadata.siteUrl}/author/swapkam/#Person`,
              name: data.mdx.frontmatter.author,
              url: `${data.site.siteMetadata.siteUrl}/author/swapkam/`,
              image: {
                "@type": "ImageObject",
                "@id":
                  "https://secure.gravatar.com/avatar/72153990e1d7a80b51712e2f3b91c0e5?s=96&amp;d=mm&amp;r=g",
                url: "https://secure.gravatar.com/avatar/72153990e1d7a80b51712e2f3b91c0e5?s=96&amp;d=mm&amp;r=g",
                height: "96",
                width: "96",
              },
            },
            publisher: {
              "@type": "Organization",
              "@id": data.site.siteMetadata.siteUrl,
              name: data.site.siteMetadata.title,
              logo: {
                "@type": "ImageObject",
                "@id":
                  data.site.siteMetadata.siteUrl + data.site.siteMetadata.image,
                url:
                  data.site.siteMetadata.siteUrl + data.site.siteMetadata.image,
                width: 512,
                height: 512,
              },
            },
            image: {
              "@type": "ImageObject",
              "@id":
                data.site.siteMetadata.siteUrl + data.mdx.frontmatter.image,
              url: data.site.siteMetadata.siteUrl + data.mdx.frontmatter.image,
              contentUrl:
                data.site.siteMetadata.siteUrl + data.mdx.frontmatter.image,
              license: `${data.site.siteMetadata.siteUrl}/images-license`,
              acquireLicensePage: `${data.site.siteMetadata.siteUrl}/how-to-use-images`,
              creditText: data.site.siteMetadata.title,
              creator: {
                "@type": "Person",
                name: "Swap Kam",
              },
              copyrightNotice: "Swap Kam",
              height: 1024,
              width: 596,
            },
            url: data.site.siteMetadata.siteUrl + data.mdx.frontmatter.slug,
            isPartOf: {
              "@type": "Blog",
              "@id": `${data.site.siteMetadata.siteUrl}${data.mdx.frontmatter.slug}/#webpage`,
              name: `${data.mdx.frontmatter.title} - ${data.site.siteMetadata.title}`,
              publisher: {
                "@type": "Organization",
                "@id": data.site.siteMetadata.siteUrl,
                name: data.site.siteMetadata.title,
              },
            },
            keywords: data.mdx.frontmatter.keywords,
            articleSection: data.mdx.frontmatter.category,
            inLanguage: "en-US",
          },
        ],
      })}
    </script>
  </SEO>
);

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      tableOfContents
      frontmatter {
        title
        description
        slug
        category
        tags
        keywords
        date
        image
        type
        author
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
        image
      }
    }
  }
`;
