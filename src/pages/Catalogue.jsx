import React, { useState } from "react";
import Layout from "../App";
import CatalogueHero from "../components/catalogue-hero";
import ProductSection from "../components/productSection";
import { productData } from "../utils/productData";

const Catalogue = () => {
  const [activeTabId, setActiveTabId] = useState("indoor");
  
  const activeCategory = productData.find((cat) => cat.id === activeTabId);

  return (
    <Layout navbarBg="bg-white">
      <CatalogueHero video={activeCategory?.video} />
      <ProductSection 
        activeTabId={activeTabId} 
        setActiveTabId={setActiveTabId} 
      />
    </Layout>
  );
};

export default Catalogue;
