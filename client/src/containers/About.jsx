import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { urlFor, client } from "../client";
import { AppWrap, MotionWrap } from "../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <div className="flex-1 w-full flex-col">
      <h2 className="head-text">
        I know that <span className="text-secondary"> Good Apps</span> <br />
        means <span className="text-secondary">Good Business</span>
      </h2>

      <div className="flex justify-center items-start flex-wrap mt-8">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            key={about.title + index}
            className="w-48 flex justify-start items-start flex-col m-8 3xl:w-96 3xl:my-8 3xl:mx-16"
          >
            <img
              src={urlFor(about.imgUrl)}
              alt={about.title}
              className="w-full h-40 rounded-2xl object-cover 3xl:h-96"
            />
            <h2 className="text-base mt-5 font-extrabold text-left 3xl:text-4xl xs:text-sm">
              {about.title}
            </h2>
            <p className="text-sm text-left text-gray-color mt-3 3xl:text-2xl">
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const WrappedAbout = AppWrap(
  MotionWrap(About, "app-container"),
  "about",
  "bg-white-color"
);

export default WrappedAbout;
