import React from "react";
import homepageImageOne from "../assets/images/homepageImage-1.png";
import homepageImageTwo from "../assets/images/homepageImage-2.png";
import { Link } from "react-router-dom";

const HightlightSection = () => {
  return (
    <section className="space-y-8 text-text pb-5">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-15">
        <div
          className="w-full lg:w-[55%] h-[560px] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${homepageImageOne})` }}
        ></div>

        <div className="max-w-[80%] lg:w-[30%] lg:mr-34 space-y-6 px-4">
          <h2 className="font-semibold text-3xl sm:text-4xl">
            The Future of Digital Display Solutions
          </h2>
          <p className="text-base font-light sm:text-xl">
            Welcome to Panda Display, your trusted partner in advanced LED
            screen technology. We specialize in premium indoor and outdoor LED
            displays designed to transform spaces, attract audiences, and
            enhance visibility for businesses and events.
          </p>
          <Link to="/about-us">
            <button
              className="border border-text rounded-full py-2 px-3 font-semibold text-sm 
             bg-white shadow-md 
             active:bg-primary active:text-white 
             transition-all duration-200 ease-out
             active:translate-y-[2px] active:scale-95
             hover:scale-105 hover:shadow-lg"
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-20">
        <div
          className="w-full lg:w-[55%] h-[560px] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${homepageImageTwo})` }}
        ></div>
        <div className="max-w-[80%] lg:w-[30%] lg:ml-34 space-y-6 lg:pl-4">
          <h2 className="font-semibold text-3xl sm:text-4xl">
            The Future of Digital Display Solutions
          </h2>
          <p className="text-base font-light sm:text-xl">
            Welcome to Panda Display, your trusted partner in advanced LED
            screen technology. We specialize in premium indoor and outdoor LED
            displays designed to transform spaces, attract audiences, and
            enhance visibility for businesses and events.
          </p>
          <Link to="/about-us">
            <button
              className="border border-text rounded-full py-2 px-3 font-semibold text-sm 
             bg-white shadow-md 
             active:bg-primary active:text-white 
             transition-all duration-200 ease-out
             active:translate-y-[2px] active:scale-95
             hover:scale-105 hover:shadow-lg"
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HightlightSection;
