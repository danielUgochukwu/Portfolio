import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { categories } from "../constants";

import { AppWrap, MotionWrap } from "../wrapper";
import { urlFor, client } from "../client";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    let isMounted = true; // Track if the component is mounted

    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      if (isMounted) {
        setWorks(data);
        setFilterWork(data);
      }
    });

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        my creative <span className="text-secondary"> portfolio</span>
      </h2>

      <div className="flex flex-row justify-start items-center flex-wrap mt-16 mx-0 mb-8">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`py-2 px-4 rounded-lg bg-white-color text-black font-extrabold cursor-pointer transition-all duration-300 ease-linear m-2 hover:bg-secondary hover:text-white-color flex-center p-text 3xl:py-4 3xl:px-8 3xl:rounded-xl ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex-center flex-wrap"
      >
        {filterWork.map((work, index) => (
          <div
            className="flex-center w-72 flex-col m-8 p-4 rounded-lg bg-white-color text-black cursor-pointer transition-all duration-300 ease-in hover:shadow-custom-hover 3xl:w-[470px] 3xl:p-5 3xl:rounded-xl max-xxs:w-full max-xxs:m-4"
            key={index}
          >
            <div className="flex-center w-full h-60 relative 3xl:h-80">
              <img
                src={urlFor(work.imgUrl)}
                alt={work.name}
                className="w-full h-full rounded-lg object-cover"
              />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                className="flex-center absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000080] rounded-lg opacity-0 transition-all duration-300 ease-in-out"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [0, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="flex-center work-link"
                  >
                    <AiFillEye className="work-link-svg" />
                  </motion.div>
                </a>

                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [0, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="flex-center work-link"
                  >
                    <AiFillGithub className="work-link-svg" />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="flex-center p-2 w-full relative flex-col">
              <h4 className="text-bold mt-4 leading-6">{work.title}</h4>
              <p className="p-text mt-3">{work.description}</p>

              <div className="flex-center absolute py-2 px-4 rounded-xl bg-white-color -top-6">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

const WrappedWork = AppWrap(
  MotionWrap(Work, "app-container"),
  "work",
  "bg-primary"
);

export default WrappedWork;
