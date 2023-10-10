import React from "react";
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout>
      <>
        <h1>Contact US</h1>
        <p>
          If you have any questions, comments, or concerns, please feel free to
          get in touch with us using the form below. We’d love to hear from you!
        </p>
        <p>
          <a href="mailto:mail@swapkam.com">Mail: mail@swapkam.com</a>
        </p>
      </>
    </Layout>
  );
};

export default Contact;

export const Head = () => (
  <SEO
    title="Contact - SwapKam"
    description="Reach out to SwapKam with any questions or feedback. We value your input! Get in touch via the form or use our contact details below."
  />
);
