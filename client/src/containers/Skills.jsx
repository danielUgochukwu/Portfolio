import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../wrapper";
import { urlFor, client } from "../client";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills</h2>

      <div className="w-full flex-center mt-12 flex max-lg:w-full max-lg:flex-col">
        <motion.div className="flex-center flex-1 flex-wrap  mr-20 ">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="flex-center flex-col text-center m-4 transition-all duration-300 ease-in-out"
              key={skill.name}
            >
              <div
                className="flex-center h-24 w-24 rounded-full bg-white-color hover:shadow-skills-hover 3xl:my-4 3xl:mx-8 3xl:w-40 3xl:h-40 sm:w-20 sm:h-20"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img
                  src={urlFor(skill.icon)}
                  alt={skill.name}
                  className="w-1/2 h-1/2"
                />
              </div>
              <p className="p-text font-medium mt-2 3xl:mt-4">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

const WrappedSkills = AppWrap(
  MotionWrap(Skills, "app-skills"),
  "skills",
  "bg-white-color"
);

export default WrappedSkills;
