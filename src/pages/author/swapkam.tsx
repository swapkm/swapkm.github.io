import React from "react";
import { SEO } from "../../components/seo";
import Layout from "../../components/layout";
import Author from "../../images/icon.svg";

const SwapKam = () => {
  return (
    <Layout>
      <>
        <img
          className="mx-auto block mt-20"
          src={Author}
          alt={`Author: Swap Kam`}
          width={250}
        />
        <h2>Swap Kam</h2>
        <p>I am a blogger</p>
      </>
    </Layout>
  );
};

export default SwapKam;

export const Head = () => (
  <SEO
    title="Author - SwapKam"
    description="Reach out to SwapKam with any questions or feedback. We value your input! Get in touch via the form or use our contact details below."
  />
);
