import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `SwapKam - Tech Insights`,
    description: `Discover tech, gadgets, and more! Get reviews and stay updated on the latest innovations in technology at SwapKam. #Tech #Gadgets #AI.`,
    twitterUsername: `@swapkams`,
    image: `/swapkam.svg`,
    //siteUrl: `https://swapkam.com`,
    siteUrl: `http://localhost:8000`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.svg",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(
                (node: {
                  frontmatter: {
                    title: string;
                    slug: string;
                    date: string;
                  };
                  excerpt: string;
                  html: string;
                }) => {
                  return Object.assign({}, node.frontmatter, {
                    description: node.excerpt,
                    date: node.frontmatter.date,
                    url: site.siteMetadata.siteUrl + node.frontmatter.slug,
                    guid: site.siteMetadata.siteUrl + node.frontmatter.slug,
                    custom_elements: [{ "content:encoded": node.html }],
                  });
                }
              );
            },
            query: `
              {
                allMdx(
                  sort: { id: DESC, },
                ) {
                  nodes {
                    excerpt
                    frontmatter {
                      title
                      slug
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
            match: "^/blog/",
            link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://swapkam.com",
        sitemap: "https://swapkam.com/sitemap.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
  ],
};

export default config;
