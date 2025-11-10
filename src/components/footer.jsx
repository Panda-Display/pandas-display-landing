import React from 'react'
import logo from "../assets/icons/logo.svg";
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='bg-dark flex flex-col justify-center items-center py-15 text-footer-grey space-y-6'>
      <div className='w-[80%] flex flex-col justify-center items-center space-y-6'>
        <Link to='/'><img src={logo} alt="Logo" /></Link>
        <ul className="flex flex-col sm:flex-row justify-between items-center gap-7 font-semibold text-sm">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about-us'>About Us</NavLink>
            <NavLink to='/catalogue'>Catalogue</NavLink>
            <NavLink to='/contact-us'>Contact Us</NavLink>
          </ul>
      </div>
      <div className='w-[80%] flex flex-col-reverse sm:flex-row justify-center border-t border-footer-grey sm:justify-between items-center-safe p-3 gap-3'>
        <p className='text-center sm:text-left'>
          © 2025 Panda Display. All rights reserved.
        </p>
         <ul className="flex flex-col sm:flex-row justify-between items-center gap-7 font-semibold text-sm">
            <li>Terms</li>
            <li>Privacy</li>
            {/* <li>Cookies</li> */}
          </ul>
      </div>
      
    </section>
  )
}

export default Footer
