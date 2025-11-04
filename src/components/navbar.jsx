import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/icons/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({bgType}) => { 
  const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

  useEffect(() => {
    const closeMenu = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  return (
    <section className={`${bgType} sticky top-0 w-full z-100 flex justify-center items-center`}>
      <nav ref={menuRef} className="bg-white p-2 my-5 flex justify-between items-center w-[80%] rounded-full border border-grey-border">
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
             active:translate-y-0.5 active:scale-95
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
            <NavLink to='/'>Home</NavLink>
            <li>About Us</li>
            <li>Catalogue</li>
          </ul>
          <Link to='/contact-us'>
          <button className="bg-primary text-white rounded-full py-2 px-4 font-semibold text-sm transition-all duration-200 ease-out
             active:translate-y-0.5 active:scale-95
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