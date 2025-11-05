import React from 'react'
import lightbulb from "../assets/icons/lightbulb.svg";
import shield from "../assets/icons/shield.svg";
import zap from "../assets/icons/zap.svg";
import user from "../assets/icons/user.svg";

const Value = () => {
      const featuresData = [
        {
          title: "Innovation",
          description: "Constantly evolving with the latest LED technologies.",
          icon: lightbulb,
        },
        {
          title: "Quality",
          description:
            "Providing durable, high-performance displays that stand the test of time.",
          icon: zap,
        },
        {
          title: "Performance",
          description:
            "Delivering reliable and efficient solutions for all environments.",
          icon: user,
        },
        {
          title: "Sustainability",
          description:
            "Building eco-friendly products that reduce energy consumption.",
          icon: shield,
        },
      ];
    
  return (
     <section className="bg-gray flex items-center justify-center text-center py-20 ">
        <div className="w-[80%] flex flex-col space-y-11">
          <h5 className="text-primary font-semibold">Our Core Values</h5>
          <h1 className="font-semibold text-4xl sm:text-[36px] sm:leading-15">
            What do we value?
          </h1>

          <ul className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 justify-between items-center gap-6">
            {featuresData.map((items, index) => (
              <li
                key={index}
                className="flex flex-col justify-center items-center space-y-3"
              >
                <div className="border border-grey-border shadow-sm rounded-lg p-3">
                  <img src={items.icon} alt="" />
                </div>
                <h3 className="text-dark text-lg font-semibold">
                  {items.title}
                </h3>
                <p className="font-normal text-base">{items.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
  )
}

export default Value
