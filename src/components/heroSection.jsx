import React from "react";
import heroImage from '../assets/images/heroImage.png'
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="text-white flex justify-between space-y-6 items-center flex-col py-20 bg-gradient">
      <div className="g1"></div>
      <div></div>
      <div className="mt-10 sm:p-3 space-y-6 w-[80%]">
        <h1 className="font-semibold text-4xl sm:text-[64px] sm:leading-15">Brightening your World <br className="hidden sm:block" /> Through Innovation</h1>

        <p className="font-light text-base md:text-xl">
          Delivering high-quality LED display solutions that inspire, <br className="hidden sm:block"/>engage,
          and elevate brands.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 m:gap-7">
          <Link to='/catalogue'>
          <button className="border-white border font-semibold text-bases rounded-full py-1 px-3 text-center active:bg-white active:text-primary">Explore our catalogue</button>
          </Link>
          <button className="border-white border font-semibold text-bases rounded-full py-1 px-3 text-center">Get a Free Quote</button>
        </div>
      </div>

      <div className="max-w-[80%]">
        <img src={heroImage} alt="hero image" className="border-2 border-purple-600 rounded-3xl" loading="lazy"/>
      </div>
    </section>
  );
};

export default HeroSection;
