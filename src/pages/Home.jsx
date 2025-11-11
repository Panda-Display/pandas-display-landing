import React from "react";
import HeroSection from "../components/heroSection";
import HightlightSection from "../components/highlightSection";
import WhyChooseSection from "../components/whyChooseSection";
import Layout from "../App";

const Home = () => {
  return (
      <Layout>
        <HeroSection />
        <HightlightSection />
        <WhyChooseSection />
      </Layout>
  );
};

export default Home;
