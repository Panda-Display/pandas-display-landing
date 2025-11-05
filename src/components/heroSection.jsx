import React from "react";
import heroImage from '../assets/images/heroImage.png'

const HeroSection = () => {
  return (
    <section className=" border-t-primary text-white flex justify-between space-y-6 items-center flex-col pb-15">
      <div className="mt-10 max-w-[80%] sm:text-left sm:p-3 space-y-6">
        <h1 className="font-semibold text-4xl sm:text-[64px] sm:leading-15">Brightening your World <br className="hidden sm:block" /> Through Innovation</h1>

        <p className="font-light text-base md:text-xl">
          Delivering high-quality LED display solutions that inspire, <br className="hidden sm:block"/>engage,
          and elevate brands.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 m:gap-7">
          <button className="border-white border font-semibold text-bases rounded-full py-1 px-3 text-center active:bg-white active:text-primary">Explore our catalogue</button>
          <button className="border-white border font-semibold text-bases rounded-full py-1 px-3 text-center">Get a Free Quote</button>
        </div>
      </div>

      <div className="max-w-[80%]">
        <img src={heroImage} alt="hero image" className="border-2 border-purple-600 rounded-3xl" />
      </div>
    </section>
  );
};

export default HeroSection;
