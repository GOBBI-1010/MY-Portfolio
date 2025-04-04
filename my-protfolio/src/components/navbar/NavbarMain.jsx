import { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";


const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2 font-bold ">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px]">
        <NavbarLogo />
        <div className={`${menuOpen ? "block" : "hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>

      {/* Mobile Menu Toggle Button */}
      <div
        className="flex lg:hidden p-6 items-center justify-center rounded-full border-orange border-[0.5px] cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <NavbarToggler />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden  sm:hidden absolute top-[80px]  w-100 bg-transparent  p-4  flex flex-row  justify-around left-0 ">
          <a href="#about" className=" text-white font-bold hover:text-cyan transition-all duration-500" onClick={() => setMenuOpen(false)}>About Me</a>
          <a href="#skills" className="text-white font-bold hover:text-cyan transition-all duration-500" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#experience" className="text-white font-bold hover:text-cyan transition-all duration-500" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#projects" className="text-white font-bold hover:text-cyan transition-all duration-500" onClick={() => setMenuOpen(false)}>Projects</a>
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
