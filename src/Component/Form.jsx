import React, { useState } from "react";

const Form = () => {
  const [formData , setFormData] = useState({ 
    Firstname: "",
    Lastname: "",
    Email: "",
    Street:"",
    City:"",
    Zipcode:"",
    State:"",
    Country:"",
    Phone: ""
  })

  function onChangeHandler(event){
     console.log(event);
     setFormData((prev)=>({
       ...prev,
       [event.target.name]: event.target.value,
     }))
  }
   
 function OnSubmitHandler(event){
 event.preventDefault();
 console.log(formData);
 }

  return (
    <form  className="flex px-16">
      <div className="w-full max-w-2xl bg-white rounded-lg p-6 sm:p-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <input type="text" placeholder="First name" required className="input" onChange={onChangeHandler} value={formData.Firstname} name="Firstname"/>
          <input type="text" placeholder="Last name" required className="input" onChange={onChangeHandler} value={formData.Lastname} name="Lastname"/>

          <input
            type="email"
            placeholder="Email address"
            required
            className="input sm:col-span-2"
            onChange={onChangeHandler} value={formData.Email} name="Email"
          />

          <input
            type="text"
            placeholder="Street"
            className="input sm:col-span-2"
            onChange={onChangeHandler} value={formData.Street} name="Street"
          />

          <input type="text" placeholder="City" required className="input" onChange={onChangeHandler} value={formData.City} name="City"/>
          <input type="text" placeholder="State" required className="input" onChange={onChangeHandler} value={formData.State} name="State"/>

          <input type="number" placeholder="Zipcode" required className="input" onChange={onChangeHandler} value={formData.Zipcode} name="Zipcode"/>
          <input type="text" placeholder="Country" required className="input" onChange={onChangeHandler} value={formData.Country} name="Country"/>

          <input
            type="number"
            placeholder="Phone"
            required
            className="input sm:col-span-2"
            onChange={onChangeHandler} 
            name="Phone"
            value={formData.Phone}
          />
        </div>

      </div>
    </form>
  );
};

export default Form;
