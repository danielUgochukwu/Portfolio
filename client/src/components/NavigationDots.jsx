import PropTypes from "prop-types";
import { navLists } from "../constants";

const NavigationDots = ({ active }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 max-sm:hidden">
      {navLists.map((item, index) => (
        <a
          key={item + index}
          href={`#${item}`}
          className={`w-3 h-3 rounded-full bg-[#CBCBCB] m-2 ease-in-out hover:bg-secondary 3xl:w-5 3xl:h-5 ${
            active === item ? "bg-secondary" : ""
          }`}
        />
      ))}
    </div>
  );
};

NavigationDots.propTypes = {
  active: PropTypes.string.isRequired,
};

export default NavigationDots;
