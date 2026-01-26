import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient max-h-dvh min-h-[92vh] lg:h-[min(100vh,780px)]">
      <div className="text-white h-full w-full flex justify-center items-center flex-col absolute z-100">
        <div className="mt-12 sm:px-3 space-y-6 text-center sm:text-left w-[80%]">
          <h1 className="font-semibold max-w-[16ch] sm:max-w-none mx-auto text-4xl sm:text-[64px] sm:leading-15">
            Brightening your World <br className="hidden sm:block" /> Through
            Innovation
          </h1>

          <p className="font-light max-w-[33ch] mx-auto text-base sm:max-w-none md:text-xl">
            Delivering high-quality LED display solutions that inspire,
            <br className="hidden sm:block" />
            engage, and elevate brands.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 m:gap-7">
            <Link to="/catalogue">
              <button
                className="border-white border font-semibold text-bases rounded-full py-1 px-3 text-center active:bg-white active:text-primary transition-all duration-200 ease-out
             active:translate-y-[2px] active:scale-95
             hover:scale-105 hover:shadow-lg"
              >
                Explore our catalogue
              </button>
            </Link>
            <button className="border-white border font-semibold text-bases rounded-full py-1 px-3 text-center">
              Get a Free Quote
            </button>
          </div>
        </div>

        {/* <div className="max-w-[80%]">
        <img src={heroImage} alt="hero image" className="border-2 border-purple-600 rounded-3xl" loading="lazy"/>
      </div> */}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-cont">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="interactive"></div>
      </div>
    </section>
  );
};

export default HeroSection;
