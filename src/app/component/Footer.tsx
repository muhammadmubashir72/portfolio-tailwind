

import React from 'react';
import {  FaFacebook, FaLinkedin, } from 'react-icons/fa';
import Link from 'next/link';
const Footer = () => {
  return (
    <div>
      <footer className="body-font  text-2xl bg-red-900 text-white py-4"> 
        <div className="container px-5 mx-auto flex flex-col sm:flex-row items-center sm:justify-center">
          {/* Logo Section */}
         
          
          {/* Copyright Text */}
          <p className="text-lg space-x-2 text-white-700 sm:border-l-2 sm:border-white-700 sm:pl-4">
            © 2024  MUHAAMAD MUBASHIR SAEEDI
            <p>portfolio created by MUHAMMAD MUBASHIR SAEEDI</p>
             
          </p>
          
          {/* Social Icons */}
          <span className="inline-flex mt-4 sm:mt-0 ">
         
          <Link href="https://www.linkedin.com/in/muhammad-mubashir-saeedi/" target="_blank" rel="noopener noreferrer" className="text-white-400 hover:text-blue-900 mx-1 transition duration-300">
              <FaLinkedin className="w-5 h-5" />
            </Link>
        
            <Link href="https://www.freelancer.com/u/mubashirkhi72" target="_blank" rel="noopener noreferrer" className="text-white-500 hover:text-white-500 mx-1 transition duration-300">
              <FaFacebook className="w-5 h-5" />
            </Link>
            
        
           

          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
