import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../wrapper";
import { urlFor, client } from "../client";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const test = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="flex-center w-3/5 min-h-80 bg-white-color p-8 rounded-2xl test-shadow transition-all duration-300 ease-in-out 3xl:min-h-96 max-lg:w-full max-md:flex-col">
            <img
              src={urlFor(test.imgUrl)}
              alt="testimonials"
              className="w-28 h-f28 rounded-full object-cover 3xl:w-36 3xl:h-36"
            />

            <div className="flex-1 h-full py-0 px-8 text-left flex flex-col justify-around items-start">
              <p className="p-text text-xl leading-8 text-black font-montserrat">
                {test.feedback}
              </p>
              <div>
                <h4 className="text-bold font-semibold text-secondary mt-8">
                  {test.name}
                </h4>
                <h5 className="p-text font-normal text-gray-color mt-1">
                  {test.company}
                </h5>
              </div>
            </div>
          </div>

          <div className="flex-center flex-row mt-4">
            <div
              className="flex-center w-12 h-12 rounded-full bg-white-color m-4 transition-all duration-300 ease-in-out hover:bg-secondary"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft className="w-5 h-5 text-secondary hover:text-white-color" />
            </div>

            <div
              className="flex-center w-12 h-12 rounded-full bg-white-color m-4 transition-all duration-300 ease-in-out hover:bg-secondary"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight className="w-5 h-5 text-secondary hover:text-white-color" />
            </div>
          </div>
        </>
      )}

      <div className="flex-center w-4/5 flex-wrap mt-8 max-lg:w-full">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
            className="w-40 m-6 3xl:w-52 3xl:m-8 max-xs:w-32 max-xs:m-4"
          >
            <img
              src={urlFor(brand.imgUrl)}
              alt={brand.name}
              className="w-full h-auto object-cover grayscale-95 hover:grayscale-0"
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

const WrappedTestimonial = AppWrap(
  MotionWrap(Testimonial, "app-container"),
  "testimonials",
  "bg-primary"
);

export default WrappedTestimonial;
