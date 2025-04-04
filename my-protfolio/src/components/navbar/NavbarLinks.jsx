import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
  
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row  sm:flex-row sm:w-full justify-around rounded-lg  gap-6 text-white font-body lg:relative sm:absolute sm:top-[100%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl  lg:bg-none sm:w-90 py-4 lg:w-full lg:bg-transparent">
      {links.map((link, index) => {
        return (
          <li key={index} className="group hidden md:block">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};
export default NavbarLinks;
