import React from "react";
import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-6 text-white font-body text-lg">
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
            to={link.section}
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            activeClass="text-orange-400"
            className="cursor-pointer hover:text-orange-400 transition-all duration-300"
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-orange-400 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
