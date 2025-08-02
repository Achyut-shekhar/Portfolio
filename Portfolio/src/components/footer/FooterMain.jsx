import { Link } from "react-scroll";
import React from "react";

const FooterMain = () => {
  const footerLinks = [
    { name: "About Me", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Projects", section: "projects" },
  ];

  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>

      {/* ✅ Desktop view */}
      <div className="hidden md:flex justify-between mt-4 max-w-[1200px] mx-auto">
        <p className="text-3xl text-lightGrey">Achyut Shekhar Singh</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                className="hover:text-white transition-all duration-500 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ Mobile view */}
      <div className="flex flex-col items-center justify-center mt-6 md:hidden gap-3">
        <p className="text-2xl text-lightGrey text-center">
          Achyut Shekhar Singh
        </p>
        <ul className="flex flex-col gap-2 text-lightGrey text-lg text-center">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                className="hover:text-white transition-all duration-500 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ Bottom line */}
      <p className="max-w-[1200px] mx-auto text-center mt-6 mb-12 text-sm text-lightBrown">
        © 2024 Achyut | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
