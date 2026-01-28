import React, { useEffect, useRef } from "react";
import videoPoster from "../assets/images/homepageImage-2.png";

// Hero section of the catalogue page
const CatalogueHero = ({ video }) => {
  const videoRef = useRef(null);

  // Reload and play video when it changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, [video]);

  return (
    <section className="flex justify-between space-y-6 items-center text-left flex-col py-20">
      <div className="mt-10 w-[80%] sm:p-3 space-y-6">
        <h5 className="text-primary font-semibold">Our Catalogue</h5>
        <h1 className="font-semibold text-4xl sm:text-[48px] sm:leading-15">
          Explore Our Range of High-
          <br />
          Performance LED Screens
        </h1>

        <p className="font-light text-base md:text-xl">
          Explore our range of vibrant LED displays built for every occasion.
        </p>
      </div>
      <div className="max-w-[80%]">
        <video
          ref={videoRef}
          src={video}
          poster={videoPoster}
          autoPlay
          loop
          muted
          playsInline
          className="border-2 border-purple-600 rounded-3xl"
        />
      </div>
    </section>
  );
};

export default CatalogueHero;
