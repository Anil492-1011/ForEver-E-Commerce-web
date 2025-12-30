import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <footer className=" mt-40">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[3fr_1fr_1fr] gap-10 text-sm text-gray-600">
        
        {/* Logo & Description */}
        <div>
          <img src={assets.logo} alt="Logo" className="w-32 mb-4" />
          <p className="leading-relaxed md:w-2/3">
            We are committed to delivering high-quality products that blend innovation, comfort, and design.
            Our goal is to provide a seamless shopping experience while bringing you products that truly add value to your lifestyle.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-4">
            COMPANY
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Contact Us</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
            <li className="hover:text-black cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-4">
            GET IN TOUCH
          </h3>
          <ul className="space-y-2">
            <li>📞 +91 77250 31492</li>
            <li>✉️ anildayma999@gmail.com</li>
            <li className="hover:text-black cursor-pointer">📷 Instagram</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} anildayma999@gmail.com-All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
