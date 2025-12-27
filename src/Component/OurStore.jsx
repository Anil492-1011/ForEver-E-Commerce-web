import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const OurStore = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2">
          <p className="text-2xl text-gray-500">
            CONTACT <span className="text-gray-800 font-semibold">US</span>
          </p>
          <span className="w-8 sm:w-12 h-[2px] bg-gray-700"></span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/*  Image*/}
        <img
          src={assets.contact_img}
          alt="Contact us"
          className="w-full md:w-1/2 max-w-md rounded-lg shadow-sm"
        />

        {/* Text Content */}
        <div className="text-gray-600 text-sm leading-relaxed md:w-1/2">
          <p>
            We’d love to hear from you! Whether you have questions about our
            products, need help with an order, or want to share feedback, our
            team is always ready to assist you.
          </p>

          <ul className="mt-4 space-y-2">
            <li>
              <strong>Email:</strong> anildayma999@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 77250 31492
            </li>
            <li>
              <strong>Address:</strong> B-51 Bank Colony, Near Mishra Hospital , Gwalior, Madhya Pradesh, India - 474001
            </li>
          </ul>

          <button className="mt-6 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStore;
