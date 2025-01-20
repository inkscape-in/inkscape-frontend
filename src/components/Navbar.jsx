import React, { useState } from 'react';
import { Mail, Menu, X, BookOpen, Pen, Instagram, Twitter, Facebook } from 'lucide-react';
import inscape_logo from "../assets/inkscape-logo.png"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src={inscape_logo} alt="Inkscape" className="h-16 w-auto mt-2" />
              <a href="/" className='text-xl sm:text-xl font-semibold text-gray-900 hover:text-red-700 cursor-pointer'>inkScape</a>
            </div>
  
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-red-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
  
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-800 hover:text-red-700">About</a>
              {/* <a href="#" className="text-gray-800 hover:text-red-700">Services</a> */}
              <a href="#" className="text-gray-800 hover:text-red-700">Contact</a>
            </div>
          </div>
        </div>
  
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-800 hover:text-red-700">About</a>
              {/* <a href="#" className="block px-3 py-2 text-gray-800 hover:text-red-700">Services</a> */}
              <a href="#" className="block px-3 py-2 text-gray-800 hover:text-red-700">Contact</a>
            </div>
          </div>
        )}
      </nav>
    );
  };
  
  export default Navbar;