import React from "react";
import { Instagram, Twitter, Facebook } from "lucide-react";
import inscape_logo from "../assets/inkscape-logo2.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-start">
          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li> */}
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
                <li>
                <a href="" className="text-gray-400 hover:text-white">
                  T&C
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="flex justify-end md:justify-start">
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/inkscape.in/?hl=en" className="text-gray-400 hover:text-white">
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/share/18dWWUccQS/" className="text-gray-400 hover:text-white">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Empty Div for Desktop Layout */}
          <div className="hidden md:block"></div>
        </div>

        {/* Footer Logo and Copyright */}
        <div className="mt-8 border-t border-gray-800 text-center text-gray-400">
          <div>
            <div className="relative h-20 w-full flex justify-center items-center overflow-hidden">
              <img
                src={inscape_logo}
                alt="Inkscape"
                className="h-full w-40 object-cover"
              />
            </div>
          </div>
          <p>
            &copy; {new Date().getFullYear()} inkscape.in. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
