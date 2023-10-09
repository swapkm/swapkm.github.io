import React from "react";
import { SEO } from "../components/seo";

const OneOffPage = () => {
  return <main>Hello World</main>;
};

export default OneOffPage;

export const Head = () => (
  <SEO title="One Off Page">
    <script type="application/ld+json">{JSON.stringify({})}</script>
  </SEO>
);
