import React from "react";
import HeroSection from "../components/heroSection";
import HightlightSection from "../components/highlightSection";
import WhyChooseSection from "../components/whyChooseSection";
import Layout from "../App";

const Home = () => {
  return (
    <Layout navbarBg="bg-gradient">
      {/* <div className="bg-gradient"> */}
        <HeroSection />
      {/* </div> */}
      <HightlightSection />
      <WhyChooseSection />
    </Layout>
  );
};

export default Home;
