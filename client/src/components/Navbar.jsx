import { images } from "../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";

import { navLists } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const filteredNavLists = navLists.filter((item) => item !== "testimonials");

  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 bg-white-color ">
      <div className="flex-center">
        <img
          src={images.logo}
          alt="logo"
          width={120}
          height={90}
          className=" 3xl:w-44 3xl:h-10 "
        />
      </div>
      <ul className="flex-1 flex-center ">
        {filteredNavLists.map((item) => (
          <li
            key={`link${item}`}
            className="flex-center mx-4 cursor-pointer flex-col max-md:hidden "
          >
            <div className="w-[5px] h-[5px] bg-transparent rounded-full mb-[5px]" />
            <a
              className="text-color flex-col uppercase font-medium ease-in-out hover:text-secondary"
              href={`#${item}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="relative w-9 h-9 rounded-full flex-center bg-secondary md:hidden">
        <HiMenuAlt4
          className="w-[70%] h-[70%] text-white-color"
          onClick={() => setToggle(true)}
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="fixed right-0 top-0 bottom-0 z-[5] p-4 w-[80%] h-[100vh] flex justify-end items-end flex-col bg-white-color bg-mobile-bg bg-cover bg-repeat shadow-sm"
          >
            <HiX
              onClick={() => setToggle(false)}
              className="w-[35px] h-[35px] text-secondary my-2 mx-4"
            />
            <ul className="list-none m-0 p-0 h-full w-full flex justify-start items-start flex-col">
              {navLists.map((item) => (
                <li key={item} className="m-4">
                  <a
                    className="text-gray-color text-base flex-col uppercase font-medium ease-in-out hover:text-secondary"
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
