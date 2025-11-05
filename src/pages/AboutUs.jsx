import React from "react";
import Layout from "../App";
import HiringSection from "../components/hiringSection";
import WhoWeAre from "../components/whoWeAre";
import Value from "../components/value";
import AboutUsHero from "../components/aboutUs-hero";

const AboutUs = () => {
  return (
    <Layout navbarBg="bg-white">
      <AboutUsHero/>
      <Value/>
      <WhoWeAre/>
      <HiringSection/>
    </Layout>
  );
};

export default AboutUs;
