import React, { useEffect, useRef, useState } from "react";
import { productData } from "../utils/productData";

const ProductSection = () => {
  const [activeTabId, setActiveTabId] = useState("indoor");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef([]);

  const activeCategory = productData.find((cat) => cat.id === activeTabId);

  useEffect(() => {
    const currentTab = tabRefs.current[activeTabId];
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeTabId]);

  return (
    <section className="flex justify-between items-center flex-col ">
      {/* Catalogue content goes here */}
      <div className="max-w-[80%] space-y-6">
        <ul className="border-b border-grey-border flex flex-row overflow-auto gap-4 justify-start items-center py-3 relative px-1">
          {productData.map((category, index) => (
            <li
              key={index}
              ref={(el) => (tabRefs.current[category.id] = el)}
              onClick={() => setActiveTabId(category.id)}
              className={`cursor-pointer text-base font-semibold whitespace-nowrap hover:scale-105 hover:text-primary transition-all ${
                activeTabId === category.id ? "text-primary" : "text-footer-grey"
              }`}
            >
              {category.tab}
            </li>
          ))}
          <span
            className="absolute bottom-0 h-[2px] bg-primary transition-all duration-300"
            style={indicatorStyle}
          ></span>
        </ul>

        <div className="space-y-3">
          <h2 className="font-semibold text-lg sm:text-2xl">Description</h2>
          <p className="text-sm font-light sm:text-base">
            {activeCategory.description}
          </p>
          <ul className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-start gap-6 lg:flex-wrap overflow-auto">
            {activeCategory?.clients.map((client, index) => (
              <li
                key={index}
                className="border border-grey-border rounded-[10px] py-1 px-2 gap-2 sm:whitespace-nowrap flex flex-row items-center overflow-auto text-center sm:text-left "
              >
                <img src={client.icon} alt="" />
                <h3 className="text-dark text-lg font-normal">
                  {client.title}
                </h3>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {activeCategory?.products.map((product, index) => (
            <div key={index} className="space-y-2">
              <div
                className="w-full lg:w-[384px] h-[256px] bg-cover bg-no-repeat bg-center rounded-2xl"
                style={{ backgroundImage: `url(${product.image})` }}
              ></div>
              <h5 className="text-primary font-semibold text-sm">
                {product.model}
              </h5>
              <h1 className="font-semibold text-lg">Specification</h1>
              <ul className="flex flex-row justify-start gap-2 flex-wrap ">
                {product.specifications.map((specs, ind) => (
                  <li
                    key={ind}
                    className=" font-normal text-sm text-dark border border-grey-border rounded-[10px] py-1 px-2 gap-2 whitespace-nowrap flex flex-row items-center"
                  >
                    {specs}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
