import React from "react";
import Layout from "../App";
import contactImage from "../assets/images/contactImage.jpg";
import tickbox from "../assets/icons/tickbox.svg";

const ContactUs = () => {
  return (
    <Layout navbarBg="bg-primary">
      <section className="bg-primary text-white flex justify-center py-6">
        <div className="w-[80%] flex flex-col lg:flex-row justify-between items-center gap-10">
          <div
            className="w-full lg:w-xl h-[657px] bg-cover bg-no-repeat bg-center rounded-2xl"
            style={{ backgroundImage: `url(${contactImage})` }}
          ></div>

          {/* form input */}
          <div className="space-y-6 lg:w-2/3">
            <h2 className="font-semibold text-3xl sm:text-4xl">Contact Us</h2>
            <p className="text-base font-light sm:text-xl pr-10">
              Ready to choose the right LED screen for your project? <br />
              Our experts are here to guide you through selection, installation,
              and maintenance.
            </p>

            <form className="space-y-6">
              <div className="flex items-start border border-gray-300 rounded-md p-3 bg-white">
                <span className="text-xl mr-2">
                  <img src={tickbox} alt="" />
                </span>
                <div className="flex-1">
                  <label htmlFor="name" className="block text-sm text-gray-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Write here..."
                    className="w-full border-none outline-none text-sm placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="flex items-start border border-gray-300 rounded-md p-3 bg-white">
                <span className="text-xl mr-2">
                  <img src={tickbox} alt="" />
                </span>
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-600"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Write here..."
                    className="w-full border-none outline-none text-sm placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="bg-white p-1">
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-600 ml-3 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write here..."
                  className="w-full h-35 rounded-md px-3 text-sm placeholder-gray-400 outline-none focus:ring-1 focus:ring-gray-400"
                  rows="5"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-white text-dark rounded-lg py-2 px-3 font-semibold text-sm transition-all duration-200 ease-out
             active:translate-y-[2px] active:scale-95
             hover:scale-105 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
