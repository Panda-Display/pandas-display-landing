import React from "react";
import homepageVideo from "../assets/videos/homepageVideo.mp4";

const WhyChooseSection = () => {
  const features = [
    "Multiple pixel pitch options to suit every application",
    "High-resolution LED technology with advanced refresh rates",
    "Energy-efficient and eco-friendly",
    "Seamless installation and maintenance",
    "Custom configurations and design",
  ];
  return (
    <section className="bg-gray flex justify-center items-center py-20">
      <div className="max-w-[80%] flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="font-semibold text-3xl sm:text-4xl">
            Why Choose Panda Display?
          </h2>
          <p className="text-base font-light sm:text-xl">
            At Panda Display, we don’t just create screens we craft experiences.
            Our cutting-edge LED solutions are built for performance,
            reliability, and visual excellence, helping brands stand out and
            connect with their audience.
          </p>
          <video
            src={homepageVideo}
            autoPlay
            loop
            muted
            playsInline // <-- ADD THIS
          />
        </div>

        <ul className="lg:w-1/2 space-y-7 text-lg sm:text-2xl">
          {features.map((feature, index) => (
            <li
              key={index}
              className="bg-white border border-grey-border py-4 px-8 rounded-lg"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseSection;
