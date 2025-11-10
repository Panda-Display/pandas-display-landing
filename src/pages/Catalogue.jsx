import React from "react";
import Layout from "../App";
import CatalogueHero from "../components/catalogue-hero";
import ProductSection from "../components/productSection";

const Catalogue = () => {

  return (
    <Layout navbarBg="bg-white">
      <CatalogueHero/>
      <ProductSection/>
    </Layout>
  );
};

export default Catalogue;
