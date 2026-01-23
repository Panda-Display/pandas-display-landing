import React from 'react'
import logo from "../assets/icons/logo.svg";
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='bg-dark flex flex-col justify-center items-center py-15 text-footer-grey space-y-6'>
      <div className='w-[80%] flex flex-col justify-center items-center space-y-6'>
        <Link to='/'><img src={logo} alt="Logo" /></Link>
        <ul className="flex flex-col sm:flex-row justify-between items-center gap-7 font-semibold text-sm py-2">
            <NavLink to='/'><li className='hover:border-b-2 hover:border-b-white hover:translate-y-[-2] transition-all ease-in'>Home</li></NavLink>
            <NavLink to='/about-us'><li className='hover:border-b-2 hover:border-b-white hover:translate-y-[-2] transition-all ease-in'>About Us</li></NavLink>
            <NavLink to='/catalogue'><li className='hover:border-b-2 hover:border-b-white hover:translate-y-[-2] transition-all ease-in'>Catalogue</li></NavLink>
            <NavLink to='/contact-us'><li className='hover:border-b-2 hover:border-b-white hover:translate-y-[-2] transition-all ease-in'>Contact Us</li></NavLink>
          </ul>
      </div>
      <div className='w-[80%] flex flex-col-reverse sm:flex-row justify-center border-t border-footer-grey sm:justify-between items-center-safe p-3 gap-3'>
        <p className='text-center sm:text-left'>
          © 2025 Panda Display. All rights reserved.
        </p>
         <ul className="flex flex-col sm:flex-row justify-between items-center gap-7 font-semibold text-sm">
            <NavLink to='/terms-and-conditions'><li className='hover:border-b-2 hover:border-b-white hover:translate-y-[-2] transition-all ease-in'>Terms</li></NavLink>
            <NavLink to='/privacy-policy'><li className='hover:border-b-2 hover:border-b-white hover:translate-y-[-2] transition-all ease-in'>Privacy</li></NavLink>
            {/* <li>Cookies</li> */}
          </ul>
      </div>
      
    </section>
  )
}

export default Footer
