import { Link } from "react-scroll";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const FooterMain = () => {
  const footerLinks = [
    { name: "About Me", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Experience", section: "experience" },
    { name: "Projects", section: "projects" },
  ];

  return (
    <div className="px-4">
      {/* Divider */}
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>

      {/* Logo */}
      <div className="flex justify-center">
        <img
          src="public/images/g.png"
          alt="Centered Image"
          className="w-20 mt-4 cursor-pointer"
        />
      </div>

      {/* Desktop Footer Links */}
      <div className="md:flex justify-center mt-2 max-w-[1200px] mx-auto sm:hidden">
        <ul className="flex gap-4 text-lightGrey text-center">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to={item.section}
                className="text-2xl max-sm:hidden p-4 flex justify-between items-center hover:text-cyan cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 📱 Mobile Only Info */}
      <div className="sm:hidden mt-6 text-white text-center flex flex-col items-center gap-4 fade-up">
        {/* Email & Phone in row */}
        <div className="flex gap-6 items-center justify-center font-bold">
          <a
            href="mailto:dgobi2002@gmail.com"
            className="flex items-center gap-2 hover:text-cyan text-base"
          >
            <HiOutlineMail className="text-cyan-400 text-xl" />
            dgobi2002@gmail.com
          </a>
          <a
            href="tel:7708918912"
            className="flex items-center gap-2 hover:text-cyan text-base"
          >
            <FiPhone className="text-cyan-400 text-xl" />
            7708918912
          </a>
        </div>

        {/* Address in column */}
        <div className="flex flex-col items-center gap-1 text-base font-bold hover:text-cyan">
          <div className="flex items-center gap-2">
            <IoLocationOutline className="text-cyan-400 text-xl" />
            <span>SOBANPURAM, TRICHY</span>
          </div>
          <span className="text-sm">TAMILNADU, INDIA</span>
        </div>

        {/* Social Icons in column */}
        <div className="flex gap-6 mt-2 ">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan text-xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Footer Note */}
      <p className="max-w-[1200px] mx-auto text-center mt-4 mb-12 text-sm text-lightBrown">
        © 2025 GOBBI | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
