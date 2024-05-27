import { useState } from "react";

import { images } from "../constants";
import { AppWrap, MotionWrap } from "../wrapper";
import { client } from "../client";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="w-3/5 flex justify-evenly items-center flex-wrap-reverse mt-16 mx-8 mb-8">
        <div className="min-w-72 flex flex-row justify-start items-center my-4 mx-0 p-4 rounded-xl cursor-pointer bg-[#FEF6F1] transition-all duration-300 ease-out hover:shadow-skills-hover max-xs:w-full">
          <img src={images.email} alt="email" className="w-10 h-10 my-0 mx-3" />
          <a
            href="mailto:ugochukwudaniel2@gmail.com"
            className="p-text no-underline font-medium"
          >
            ugochukwudaniel2@gmail.com
          </a>
        </div>

        <div className="min-w-72 flex flex-row justify-start items-center my-4 mx-0 p-4 rounded-xl cursor-pointer bg-primary transition-all duration-300 ease-out hover:shadow-skills-hover max-xs:w-full">
          <img
            src={images.mobile}
            alt="email"
            className="w-10 h-10 my-0 mx-3"
          />
          <a
            href="tel:+2347058279903"
            className="p-text no-underline font-medium"
          >
            +2347058279903
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="flex-center w-3/5 flex-col my-4 mx-8 max-md:w-full max-md:my-4 max-md:mx-0">
          <div className="flex-center w-full my-3 mx-0 rounded-xl cursor-pointer bg-primary transition-all duration-300 ease-in-out hover:shadow-skills-hover">
            <input
              className="p-text w-full p-4 border-none rounded-lg bg-primary font-montserrat text-secondary outline-none"
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>

          <div className="flex-center w-full my-3 mx-0 rounded-xl cursor-pointer bg-primary transition-all duration-300 ease-in-out hover:shadow-skills-hover">
            <input
              className="p-text w-full p-4 border-none rounded-lg bg-primary font-montserrat text-secondary outline-none"
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          <div className="flex-center w-full my-3 mx-0 rounded-xl cursor-pointer bg-primary transition-all duration-300 ease-in-out hover:shadow-skills-hover">
            <textarea
              className="p-text 
              w-full h-44 p-4 border-none rounded-lg bg-primary font-montserrat text-secondary outline-none"
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button
            type="button"
            className=" py-4 px-8 rounded-xl border-none bg-secondary font-medium text-white-color transition-all duration-300 ease-in-out hover:bg-white-color hover:text-secondary outline-none mt-8 mx-0 mb-0 font-montserrat cursor-pointer"
            onClick={handleSubmit}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

const WrappedFooter = AppWrap(
  MotionWrap(Footer, "app-containers"),
  "contact",
  "bg-white-color"
);

export default WrappedFooter;
