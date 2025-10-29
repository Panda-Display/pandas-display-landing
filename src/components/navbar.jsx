// Navbar.jsx

import React, { useState } from "react";
import logo from "../assets/icons/logo.svg";
import { Link, NavLink } from "react-router-dom";

// Remove bgType prop
const Navbar = () => { 
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Use sticky top-0 w-full z-50 here. The background is inherited from the parent div in App.jsx
    <section className="sticky top-0 w-full z-50 flex justify-center items-center">
      <nav className="bg-white p-2 my-5 flex justify-between items-center w-[80%] rounded-full border border-grey-border">
        <div className="flex justify-between items-center gap-7">
         <Link to='/'><img src={logo} alt="Logo" /></Link>

          <ul className="hidden sm:flex justify-between items-center gap-7 font-semibold text-sm">
           <NavLink to='/'>Home</NavLink>
            <li>About Us</li>
            <li>Catalogue</li>
          </ul>
        </div>

        <Link to='/contact-us' className="hidden sm:block">
          <button className="bg-primary text-white rounded-full py-2 px-3 font-semibold text-sm transition-all duration-200 ease-out
             active:translate-y-[2px] active:scale-95
             hover:scale-105 hover:shadow-lg">
            Contact Us
          </button>
        </Link>

        {/* Hamburger Icon (mobile) */}
        <div className="sm:hidden mr-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative w-6 h-6 flex flex-col gap-1 justify-center items-center transition-transform duration-500 ease-in-out origin-center ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {/* line 1 */}
            <span
              className={`block w-full h-0.5 bg-black rounded transition-all duration-300 ease-in-out origin-center ${
                isOpen ? "rotate-45 translate-y-[6px]" : "translate-y-0"
              }`}
            ></span>

            {/* line 2 */}
            <span
              className={`block w-full h-0.5 bg-black rounded transition-all duration-300 ease-in-out origin-center ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>

            {/* line 3 */}
            <span
              className={`block w-full h-0.5 bg-black rounded transition-all duration-300 ease-in-out origin-center ${
                isOpen ? "-rotate-45 -translate-y-[6px]" : "translate-y-0"
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="glass-menu absolute top-[80px] left-0 w-full bg-white shadow-md py-5 flex flex-col justify-center items-center space-y-4 font-semibold text-sm z-[50] sm:hidden">
          <ul className="flex flex-col gap-5 items-center text-primary">
            <NavLink to='/'>Home</NavLink>
            <li>About Us</li>
            <li>Catalogue</li>
          </ul>
          <Link to='/contact-us'>
          <button className="bg-primary text-white rounded-full py-2 px-4 font-semibold text-sm transition-all duration-200 ease-out
             active:translate-y-[2px] active:scale-95
             hover:scale-105 hover:shadow-lg">
            Contact Us
          </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Navbar;