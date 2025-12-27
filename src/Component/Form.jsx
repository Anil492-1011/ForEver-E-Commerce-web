import React from "react";

const Form = () => {
  return (
    <div className="flex px-16">
      <div className="w-full max-w-2xl bg-white rounded-lg p-6 sm:p-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <input type="text" placeholder="First name" required className="input" />
          <input type="text" placeholder="Last name" required className="input" />

          <input
            type="email"
            placeholder="Email address"
            required
            className="input sm:col-span-2"
          />

          <input
            type="text"
            placeholder="Street"
            className="input sm:col-span-2"
          />

          <input type="text" placeholder="City" required className="input" />
          <input type="text" placeholder="State" required className="input" />

          <input type="number" placeholder="Zipcode" required className="input" />
          <input type="text" placeholder="Country" required className="input" />

          <input
            type="number"
            placeholder="Phone"
            required
            className="input sm:col-span-2"
          />
        </div>

      </div>
    </div>
  );
};

export default Form;
