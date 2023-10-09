import React, { ReactNode } from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import favicon from "../images/swapkam.svg";

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: ReactNode;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  pathname,
  children,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
    imageAlt,
    type,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
    imageAlt,
    type,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />

      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:title" content={title}></meta>
      <meta property="og:url" content={seo.url}></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:image" content={seo.image}></meta>
      <meta property="og:image:alt" content={imageAlt}></meta>
      <meta property="og:type" content={type} />
      <link rel="icon" href={favicon} />
      {children}
    </>
  );
};
