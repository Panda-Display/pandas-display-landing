import React from 'react'
import zap from "../assets/icons/zap.svg";
import bullseye from "../assets/icons/bullseye.svg";
import growth from "../assets/icons/growth.svg";
import homepageImageTwo from "../assets/images/homepageImage-2.png";

const WhoWeAre = () => {
  return (
    <>
     <section className="flex flex-col justify-center items-center pt-20">
            <div className="flex flex-col justify-centre items-center text-center max-w-[80%] space-y-6 mb-6">
              <h2 className="font-semibold text-[36px] sm:text-4xl">Who We Are?</h2>
              <p className="text-base font-light sm:text-xl lg:max-w-[50%]">
                At Panda Display, we believe every light tells a story. We are a
                leading provider of innovative LED display solutions, helping brands
                and organizations communicate with brilliance and precision.
              </p>
            </div>
            <div className="bg-primary py-20 flex justify-center items-center w-full">
              <ul className="flex flex-col md:grid md:grid-cols-2 justify-between items-center text-center gap-6 text-white max-w-[80%]">
                <li className="flex flex-col justify-center items-center space-y-3">
                  <div className="border border-grey-border shadow-sm rounded-lg p-3 bg-white">
                    <img src={bullseye} alt="" />
                  </div>
                  <h3 className="text-lg font-semibold">Mission</h3>
                  <p className="font-normal text-base lg:max-w-[50%]">
                    To illuminate ideas through innovative, reliable, and
                    energy-efficient LED display solutions that drive engagement and
                    impact.
                  </p>
                </li>
                <li className="flex flex-col justify-center items-center space-y-3">
                  <div className="border border-grey-border shadow-sm rounded-lg p-3 bg-white">
                    <img src={growth} alt="" />
                  </div>
                  <h3 className="text-lg font-semibold">Vision</h3>
                  <p className="font-normal text-base lg:max-w-[50%]">
                    To become a trusted name in LED display technology across
                    Africa, known for quality, creativity, and customer
                    satisfaction.
                  </p>
                </li>
              </ul>
            </div>
          </section>
    
          <section>
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-20">
              <div
                className="w-full lg:w-[55%] h-[560px] bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${homepageImageTwo})` }}
              ></div>
              <div className="max-w-[80%] lg:w-[30%] lg:ml-34 space-y-6 lg:pl-4">
                <div className="rounded-full bg-custom-pink p-3 w-fit">
                  <img src={zap} alt="" />
                </div>
                <h2 className="font-semibold text-3xl sm:text-4xl">
                  Your Trusted Partner in Digital Display Solutions
                </h2>
                <p className="text-base font-light sm:text-xl">
                  Founded with a vision to redefine visual communication in Africa,
                  Panda Display blends technology, craftsmanship, and
                  customer-centric service to deliver outstanding LED display
                  experiences.
                </p>
              </div>
            </div>
          </section>
    </>
  )
}

export default WhoWeAre
