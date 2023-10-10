import React from "react";
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const TermsOfService = () => {
  return (
    <Layout>
        <h1>Terms of Service</h1>
        <p>
          The Website Owner, including subsidiaries and affiliates (“Website” or
          “Website Owner” or “we” or “us” or “our”) provides the information
          contained on the website or any of the pages comprising the website
          (“website”) to visitors (“visitors”) (cumulatively referred to as
          “you” or “your” hereinafter) subject to the terms and conditions set
          out in these website terms and conditions, the privacy policy and any
          other relevant terms and conditions, policies and notices which may be
          applicable to a specific section or module of the website.
        </p>
        <p>
          Welcome to our website. If you continue to browse and use this website
          you are agreeing to comply with and be bound by the following terms
          and conditions of use, which together with our privacy policy govern
          SwapKam’s relationship with you in relation to this website.
        </p>
        <p>
          The term ‘SwapKam’ or ‘us’ or ‘we’ refers to the owner of the website
          whose registered/operational office is Hinganghat Wardha MAHARASHTRA
          442301. The term ‘you’ refers to the user or viewer of our website.
        </p>
        <p>
          <b>
            The use of this website is subject to the following terms of use:
          </b>
        </p>

        <ul>
          <li>
            The content of the pages of this website is for your general
            information and use only. It is subject to change without notice.
          </li>
          <li>
            Neither we nor any third parties provide any warranty or guarantee
            as to the accuracy, timeliness, performance, completeness or
            suitability of the information and materials found or offered on
            this website for any particular purpose. You acknowledge that such
            information and materials may contain inaccuracies or errors and we
            expressly exclude liability for any such inaccuracies or errors to
            the fullest extent permitted by law.
          </li>
          <li>
            Your use of any information or materials on this website is entirely
            at your own risk, for which we shall not be liable. It shall be your
            own responsibility to ensure that any products, services or
            information available through this website meet your specific
            requirements.
          </li>
          <li>
            This website contains material which is owned by or licensed to us.
            This material includes, but is not limited to, the design, layout,
            look, appearance and graphics. Reproduction is prohibited other than
            in accordance with the copyright notice, which forms part of these
            terms and conditions.
          </li>
          <li>
            All trademarks reproduced in this website which are not the property
            of, or licensed to, the operator are acknowledged on the website.
          </li>
          <li>
            Unauthorized use of this website may give rise to a claim for
            damages and/or be a criminal offense.
          </li>
          <li>
            From time to time this website may also include links to other
            websites. These links are provided for your convenience to provide
            further information.
          </li>
          <li>
            You may not create a link to this website from another website or
            document without SwapKam’s prior written consent.
          </li>
          <li>
            Your use of this website and any dispute arising out of such use of
            the website is subject to the laws of India or other regulatory
            authority.
          </li>
        </ul>
        <p>
          We as a merchant shall be under no liability whatsoever in respect of
          any loss or damage arising directly or indirectly out of the decline
          of authorization for any Transaction, on Account of the Cardholder
          having exceeded the preset limit mutually agreed by us with our
          acquiring bank from time to time
        </p>
    </Layout>
  );
};

export default TermsOfService;

export const Head = () => (
  <SEO
    title="Terms of Service - SwapKam"
    description="Read our website's terms of service. Your agreement to these terms governs your browsing experience. Discover more about SwapKam's services and offerings."
  />
);
