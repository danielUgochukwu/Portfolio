import { motion } from "framer-motion";

import { AppWrap } from "../wrapper";
import { images } from "../constants";

const scaleVarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="relative bg-header-bg bg-cover bg-center bg-repeat flex-center flex-1 w-full h-full flex-row pt-24 px-8 pb-0 header">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex-[0.65] flex flex-col justify-start items-start h-full my-0 mx-8 max-xl:w-full max-xl:mr-0"
      >
        <div className="w-full flex justify-end items-end flex-col max-xl:justify-start max-xl:items-start">
          <div className="info-tag flex-center flex-row">
            <span className="text-[2.5rem] 3xl:text-[5rem]">👋</span>
            <div className="mr-4">
              <p className="p-text">Hello, I am</p>
              <h1 className="font-palanquin font-semibold text-[2rem]">
                Daniel Ugochukwu
              </h1>
            </div>
          </div>

          <div className="info-tag flex-center flex-col mt-12">
            <p className="w-full text-right p-text uppercase">full stack</p>
            <p className="p-text uppercase">web developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="relative flex flex-1 justify-end items-end max-xl:my-8 max-xl:mx-0"
      >
        <img
          src={images.profile}
          alt="profile.bg"
          className="w-full object-contain z-[1]"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile-circle"
          className="absolute left-0 right-0 bottom-0 z-0 w-full h-[90%]"
        />
      </motion.div>

      <motion.div
        variants={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className="flex-[0.75] flex flex-col justify-evenly items-start h-full ml-4 max-xl:w-full max-xl:flex-row max-xl:flex-wrap max-xl:mr-0"
      >
        {[images.redux, images.typescript, images.mu5].map((circle, index) => (
          <div
            className="w-[100px] h-[100px] rounded-full bg-white-color flex-center shadow-md child max-xl:m-4"
            key={`circle-${index}`}
          >
            <img className="w-[60%] h-[60%]" src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const WrappedHeader = AppWrap(Header, "home");

export default WrappedHeader;
