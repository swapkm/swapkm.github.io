import React from "react";
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const Disclaimer = () => {
  return (
    <Layout>
      <>
        <h1>Disclaimer</h1>
        <p>
          The information contained on this website (swapkam.com) is for general
          information purposes only. While we endeavor to keep the information
          up-to-date and correct, we make no representations or warranties of
          any kind, express or implied, about the completeness, accuracy,
          reliability, suitability or availability with respect to the website
          or the information, products, services, or related graphics contained
          on the website for any purpose. Any reliance you place on such
          information is therefore strictly at your own risk.
        </p>
        <p>
          In no event will we be liable for any loss or damage including without
          limitation, indirect or consequential loss or damage, or any loss or
          damage whatsoever arising from loss of data or profits arising out of,
          or in connection with, the use of this website.
        </p>
        <p>
          Through this website, you are able to link to other websites which are
          not under the control of SwapKam. We have no control over the nature,
          content, and availability of those sites. The inclusion of any links
          does not necessarily imply a recommendation or endorse the views
          expressed within them.
        </p>
        <p>
          Every effort is made to keep the website up and running smoothly.
          However, SwapKam takes no responsibility for, and will not be liable
          for, the website being temporarily unavailable due to technical issues
          beyond our control.
        </p>
      </>
    </Layout>
  );
};

export default Disclaimer;

export const Head = () => (
  <SEO
    title="Disclaimer - SwapKam"
    description="Information on swapkam.com is for general purposes only. We do not guarantee accuracy or reliability. Use at your own risk."
  />
);
