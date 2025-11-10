import React from 'react'
import catalogueVideo from "../assets/videos/catalogueVideo.mp4";

// chero section of the catalogue paeg
const CatalogueHero = () => {
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
            src={catalogueVideo}
            autoPlay
            loop
            muted
            className="border-2 border-purple-600 rounded-3xl"
          />
        </div>
      </section>
  )
}

export default CatalogueHero
