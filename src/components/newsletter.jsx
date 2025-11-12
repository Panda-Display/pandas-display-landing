import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-white flex justify-center items-center py-15">
      <div className="bg-primary w-[80%] flex flex-col justify-center items-center rounded-2xl text-white space-y-6 px-5 py-15 text-center">
        <h2 className="font-bold text-xl sm:text-3xl">
          Subscribe to our newsletter
        </h2>
        <p className="text-sm font-light sm:text-lg">
          Stay updated with our latest LED innovations and display trends.
        </p>
        <form
          action="https://pandadisplay.substack.com/subscribe"
          method="GET"
          className="sm:flex sm:justify-center w-full"
        >
          <div className="bg-white p-2 flex flex-col sm:flex-row justify-between items-center rounded-xl sm:rounded-full gap-3 sm:w-[60%]">
            <input
              type="email"
              name="email"
              placeholder="email address"
              className="sm:flex-1 outline-none px-3 bg-transparent text-text"
            />
            <button
              type="submit"
              className="bg-primary text-white rounded-full py-2 px-3 font-semibold text-sm transition-all duration-200 ease-out
                         active:translate-y-[2px] active:scale-95 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
