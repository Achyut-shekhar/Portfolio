import React from "react";
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
    <nav>
      <ul
        className="
          flex 
          lg:flex-row sm:flex-col
          gap-6 
          text-white 
          font-body 

          /* ✅ Desktop - Clean layout */
          lg:relative 
          lg:text-md 
          lg:bg-transparent 
          lg:w-auto 
          lg:static 
          lg:translate-x-0 
          lg:px-0 
          lg:py-0 
          lg:rounded-none 
          lg:shadow-none

          /* ✅ Mobile - Background, center positioning */
          sm:absolute 
          sm:top-[120%] 
          sm:left-1/2 
          sm:-translate-x-1/2 
          sm:text-xl 
          sm:w-[90vw] 
          sm:px-6 
          sm:py-4 
          sm:rounded-md 
          sm:backdrop-blur-md 
          sm:bg-cyan-900/90 
          sm:shadow-md 
          sm:z-50 
          sm:text-center
        "
      >
        {links.map((link, index) => (
          <li key={index} className="group">
            <Link
              to={link.section}
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="cursor-pointer text-white hover:text-orange transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-orange w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarLinks;
