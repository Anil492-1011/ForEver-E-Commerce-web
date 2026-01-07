import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-12">
       
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2">
          <p className="text-2xl text-gray-500">
            ABOUT <span className="text-gray-800 font-semibold">US</span>
          </p>
          <span className="w-8 sm:w-12 h-[2px] bg-gray-700"></span>
        </div>
      </div>

       
      <div className="flex flex-col md:flex-row items-center gap-12">       
       
        <img
          src={assets.about_img}
          alt="About us"
          className="w-full md:max-w-[420px] rounded-lg shadow-sm"
        />
    
        <div className="flex flex-col gap-5 md:w-1/2 text-gray-600 text-sm leading-relaxed">
          <p>
            Forever was born out of a passion for innovation and a desire to
            transform the way people shop online. Our journey started with a
            simple idea — to make discovering and purchasing quality products
            easy, reliable, and enjoyable from anywhere.
          </p>

          <p>
            Over time, we have carefully curated a diverse range of products to
            suit every lifestyle and preference. From fashion and beauty to
            electronics and home essentials, we work with trusted brands to
            ensure quality and value.
          </p>

          <h3 className="text-gray-800 font-semibold text-base mt-2">
            Our Mission
          </h3>

          <p>
            Our mission is to empower customers with choice, convenience, and
            confidence. We aim to deliver a smooth shopping experience — from
            browsing and ordering to fast delivery and reliable support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
