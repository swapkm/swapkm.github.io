import React from "react";
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      <>
        <h1>About US</h1>
        <p>
          The SwapKam is a leading source for tech, reviews, and insights.
          Founded in 2019, Our mission is to empower our readers with the latest
          information and trends in the world of tech and to help them make
          informed decisions about the products and services they use.
        </p>
        <p>
          At SwapKam, we cover a wide range of topics related to technology,
          including smartphones, laptops, software, gadgets, and more. We are
          passionate about exploring the latest trends in the tech industry, and
          we are constantly on the lookout for new products and innovations that
          can make a difference in people’s lives.
        </p>
        <p>
          Our team of experienced writers and editors brings together a wealth
          of expertise in the field of technology, and we are committed to
          providing our readers with accurate, reliable, and up-to-date
          information. We take pride in our editorial independence, and we
          strive to maintain the highest standards of journalistic integrity in
          everything we do.
        </p>
        <p>
          In addition to our news and reviews, we also offer a range of helpful
          resources and tips to help our readers get the most out of their
          technology. Whether you’re a seasoned tech expert or a newcomer to the
          world of gadgets and software, you’ll find plenty of valuable insights
          and advice on our site.
        </p>
        <p>
          Thank you for visiting SwapKam, and we hope you enjoy our content. If
          you have any feedback or suggestions, please don’t hesitate to get in
          touch with us. We’d love to hear from you!
        </p>
      </>
    </Layout>
  );
};

export default About;

export const Head = () => (
  <SEO
    title="About - SwapKam"
    description="We bring you insightful news, reviews, and trends in smartphones, laptops, gadgets, and more. Explore the world of technology with us!"
  />
);
