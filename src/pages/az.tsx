import React from "react";
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const Az = () => {
  return (
    <Layout>
      <h1>AZ The Learning App</h1>

      <h2>Features</h2>

      <p>Over 3,000 learners trust us for their preparation</p>

      <p>Conceptual clarity through visualisation</p>
      <p>Comprehensive learning programs and classes for all students</p>
      <ul>
        <li>
          <strong>Documentary-type video lectures</strong>
        </li>
        <li>
          <strong>Quizzes: based on previous chapters</strong>
        </li>
        <li>
          <strong>Feeds: current affairs, daily events, news and more</strong>
        </li>
        <li>
          <strong>Articles: gives real-world knowledge</strong>
        </li>
        <li>
          <strong>Easy job: get a high score, get more chances of a job</strong>
        </li>
        <li>
          <strong>Physical library support: get books, read &amp; study</strong>
        </li>
      </ul>

      <ul>
        <li>
          <strong>English</strong>
        </li>

        <li>
          <strong>Marathi</strong>
        </li>

        <li>
          <strong>History</strong>
        </li>

        <li>
          <strong>Political Science</strong>
        </li>

        <li>
          <strong>Sociology</strong>
        </li>

        <li>
          <strong>Economics</strong>
        </li>
      </ul>

      <ul>
        <li>
          <strong>Learn online or offline</strong>
        </li>

        <li>
          <strong>Get notifications of every event of your college</strong>
        </li>

        <li>
          <strong>Fill out forms: </strong>
          <strong>Exam, Scholarship &amp; more</strong>
        </li>

        <li>
          <strong>24x7 Support</strong>
        </li>

        <li>
          <strong>Job alerts: apply for jobs</strong>
        </li>

        <li>
          <strong>Editor's Choice: Get best deals and offers</strong>
        </li>

        <li>
          <strong>Editor's picks: exclusive contents only for students</strong>
        </li>

        <li>
          <strong>
            Personalized Study Plans (PSPs): for effective preparation
          </strong>
        </li>
      </ul>
    </Layout>
  );
};

export default Az;

export const Head = () => (
  <SEO
    title="AZ - The Learning App"
    description="AZ (OpenAZ): including notes, lectures, quizzes, and subjects: English, Marathi, History, Political Science, Sociology, and Economics."
  />
);
