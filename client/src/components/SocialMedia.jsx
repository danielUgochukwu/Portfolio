import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const SocialMedia = () => {
  return (
    <div className="flex justify-end items-center flex-col p-4 pb-8 max-sm:hidden">
      <div className="w-10 h-10 rounded-full bg-white-color my-1 mx-0 flex-center transition-all ease-out hover:bg-secondary hover:border-secondary 3xl:w-[70px] 3xl:h-[70px]">
        <RiTwitterXFill className="text-gray-color hover:text-white-color 3xl:w-8 3xl:h-8" />
      </div>

      <div className="w-10 h-10 rounded-full bg-white-color my-1 mx-0 flex-center transition-all ease-out hover:bg-secondary hover:border-secondary 3xl:w-[70px] 3xl:h-[70px]">
        <FaFacebookF className="text-gray-color hover:text-white-color 3xl:w-8 3xl:h-8" />
      </div>
      <div className="w-10 h-10 rounded-full bg-white-color my-1 mx-0 flex-center transition-all ease-out hover:bg-secondary hover:border-secondary 3xl:w-[70px] 3xl:h-[70px]">
        <FaInstagram className="text-gray-color hover:text-white-color 3xl:w-8 3xl:h-8" />
      </div>
    </div>
  );
};

export default SocialMedia;
