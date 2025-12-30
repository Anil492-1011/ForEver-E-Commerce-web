import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2">
          <p className="text-2xl font-semibold text-gray-800">
            WHY <span className="text-gray-800">CHOOSE US</span>
          </p>
          <span className="w-8 sm:w-12 h-[2px] bg-gray-700"></span>
        </div>
      </div>
 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
     
        <div className="border rounded-lg p-8 flex flex-col gap-4 hover:shadow-md transition">
          <h3 className="text-gray-800 font-semibold text-base">
            Premium Quality
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            We source our products from trusted manufacturers to ensure
            durability, performance, and long-lasting quality.
          </p>
        </div>

        
        <div className="border rounded-lg p-8 flex flex-col gap-4 hover:shadow-md transition">
          <h3 className="text-gray-800 font-semibold text-base">
            Secure & Reliable
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Your payments and personal information are protected with advanced
            security and reliable checkout systems.
          </p>
        </div>

      
        <div className="border rounded-lg p-8 flex flex-col gap-4 hover:shadow-md transition">
          <h3 className="text-gray-800 font-semibold text-base">
            Customer Support
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our dedicated support team is always ready to help you before,
            during, and after your purchase.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
