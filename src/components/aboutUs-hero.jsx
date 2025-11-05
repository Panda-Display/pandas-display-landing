import React from 'react'

const AboutUsHero = () => {
  return (
  <section className="flex justify-between space-y-6 items-center text-center flex-col pb-15">
        <div className="mt-10 max-w-[80%] sm:p-3 space-y-6">
          <h5 className="text-primary font-semibold">About Us</h5>
          <h1 className="font-semibold text-4xl sm:text-[48px] sm:leading-15">
            Lighting Up the Future of Digital <br className="hidden sm:block" />
            Displays
          </h1>

          <p className="font-light text-base md:text-xl">
            We bring ideas to life through powerful, high-quality LED displays
            designed to capture attention and transform spaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 m:gap-7">
            <button
              className="border-primary border font-semibold text-bases rounded-full py-1 px-3 text-center active:bg-white active:text-primary transition-all duration-200 ease-out
             active:translate-y-[2px] active:scale-95
             hover:scale-105 hover:shadow-lg"
            >
              Explore our catalogue
            </button>
            <button
              className="border-white bg-primary text-white border font-semibold text-bases rounded-full py-1 px-3 text-center transition-all duration-200 ease-out
             active:translate-y-[2px] active:scale-95
             hover:scale-105 hover:shadow-lg"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>
  )
}

export default AboutUsHero
