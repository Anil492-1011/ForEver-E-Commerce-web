import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import OurStore from "../Component/OurStore";
import NewsLitterBox from "../Component/NewsLitterBox";
import Footer from "../Component/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_CLIENT_URL}/api/contact/create`,
        formData,
      );

      if (response.data?.success) {
        toast.success("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <OurStore/>
      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form onSubmit={onSubmitHandler} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={onChangeHandler}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={onChangeHandler}
              placeholder="Write your message"
              required
              rows={6}
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Submit Message"}
            </button>
          </form>
        </div>
      </section>
      <NewsLitterBox/>
      <Footer/>
    </div>
  )
}

export default Contact
