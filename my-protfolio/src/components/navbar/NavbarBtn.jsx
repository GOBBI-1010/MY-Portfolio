import { Link } from "react-scroll";
import { LuArrowRight } from "react-icons/lu";
import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const NavbarBtn = () => {
  // Get theme from localStorage or default to light mode
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");

    }
  }, [darkMode]);

  return (
    <div className="flex items-center gap-4">
      <button className="px-4 py-2 max-sm:px-2 max-sm:py-1 rounded-full text-xl max-sm:text-sm font-bold font-body text-white1 border-2 max-sm:border border-cyan flex items-center gap-1 max-sm:gap-0 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-105 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
  <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
    Hire Me
  </Link>
  <div className="max-sm:block md:block">
    <LuArrowRight />
  </div>
</button>


      {/* Theme Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full border bg-gray-200 dark:bg-gray-800 transition-all duration-500 hover:scale-110 hover:shadow-md border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow text-white1"
      >
        {darkMode ? (
          <MdLightMode className=" text-white-400" />
        ) : (
          <MdDarkMode className="text-white-400" />
        )}
      </button>
    </div>
  );
};

export default NavbarBtn;
