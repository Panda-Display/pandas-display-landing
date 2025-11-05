import React from "react";
import avatar from "../assets/images/avatar.png";

const HiringSection = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center py-20">
      <div className="max-w-[80%] space-y-6">
        <h5 className="text-primary font-semibold">We’re hiring!</h5>
        <h1 className="font-semibold text-4xl sm:text-[36px] sm:leading-15">
          Meet our team
        </h1>
        <p className="font-light text-base md:text-xl">
          The creative minds and technical experts driving innovation and
          excellence at Panda Display.
        </p>

        <ul className="flex flex-col gap-15 sm:flex-row justify-between items-center">
          <li className="flex justify-between gap-10">
            <img src={avatar} alt="avatar image" />
            <div className="flex flex-col justify-end">
              <h5 className="text-dark text-lg font-semibold">Ahmad Bunu </h5>
              <p className="font-normal text-base">Co-CEO and Co-Founder</p>
            </div>
          </li>
          <li className="flex justify-between gap-10">
            <img src={avatar} alt="avatar image" />
            <div className="flex flex-col justify-end">
              <h5 className="text-dark text-lg font-semibold">David Abukar </h5>
              <p className="font-normal text-base">Co-CEO and Co-Founder</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HiringSection;
