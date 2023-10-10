import React, { ReactNode } from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { favicon } from "../images/icon.svg";

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  categories?: string;
  type?: string;
  children?: ReactNode;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  pathname,
  image: postImage,
  categories,
  type,
  children,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    twitterUsername,
    image: siteMetadataImage,
    imageAlt,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: postImage
      ? `${siteUrl}${postImage}`
      : `${siteUrl}${siteMetadataImage}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
    imageAlt,
    categories,
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
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={seo.image} />
      <meta
        property="og:image:alt"
        content={imageAlt || title || defaultTitle}
      />
      <meta property="og:type" content={type} />
      <link rel="icon" href={favicon} />
      {children}
    </>
  );
};
