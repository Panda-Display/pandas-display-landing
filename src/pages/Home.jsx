import React from "react";
import HeroSection from "../components/heroSection";
import Layout from "../App";

const Home = () => {
  return (
    <Layout navbarBg="bg-gradient">
      <div className="bg-gradient">
        <HeroSection />
      </div>
    </Layout>
  );
};

export default Home;
