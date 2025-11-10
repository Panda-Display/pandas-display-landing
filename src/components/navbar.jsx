import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/icons/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const closeMenu = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <section
      className={`fixed top-0 left-0 w-full z-100 flex justify-center items-center transition-all duration-500 ease-in-out bg-transparent ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        ref={menuRef}
        className="bg-white p-2 my-5 flex justify-between items-center w-[80%] rounded-full border border-grey-border transition-all duration-500 ease-in-out"
      >
        <div className="flex justify-between items-center gap-7">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>

          <ul className="hidden sm:flex justify-between items-center gap-7 font-semibold text-sm py-1">
            <NavLink to="/"><li className="hover:border-b-2 hover:border-primary hover:translate-y-[-2] transition-all ease-in ">Home</li></NavLink>
            <NavLink to="/about-us"><li className="hover:border-b-2 hover:border-primary hover:translate-y-[-2] transition-all ease-in ">About Us</li></NavLink>
            <NavLink to="/catalogue"><li className="hover:border-b-2 hover:border-primary hover:translate-y-[-2] transition-all ease-in ">Catalogue</li></NavLink>
          </ul>
        </div>

        <Link to="/contact-us" className="hidden sm:block">
          <button
            className="bg-primary text-white rounded-full py-2 px-3 font-semibold text-sm transition-all duration-200 ease-out
             active:translate-y-0.5 active:scale-95
             hover:scale-105 hover:shadow-lg"
          >
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
                isOpen ? "rotate-45 translate-y-1.5" : "translate-y-0"
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
                isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0"
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="glass-menu absolute top-20 left-0 w-full bg-white shadow-md py-5 flex flex-col justify-center items-center space-y-4 font-semibold text-sm z-99 sm:hidden">
          <ul className="flex flex-col gap-5 items-center text-primary">
               <NavLink to="/"><li className="hover:border-b-2 hover:border-primary hover:translate-y-[-2] transition-all ease-in ">Home</li></NavLink>
            <NavLink to="/about-us"><li className="hover:border-b-2 hover:border-primary hover:translate-y-[-2] transition-all ease-in ">About Us</li></NavLink>
            <NavLink to="/catalogue"><li className="hover:border-b-2 hover:border-primary hover:translate-y-[-2] transition-all ease-in ">Catalogue</li></NavLink>
          </ul>
          <Link to="/contact-us">
            <button
              className="bg-primary text-white rounded-full py-2 px-4 font-semibold text-sm transition-all duration-200 ease-out
             active:translate-y-0.5 active:scale-95
             hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Navbar;
