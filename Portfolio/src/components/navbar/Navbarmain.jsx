import React from "react";
import { useSelector } from "react-redux";
import NavbarLogo from "./navbarlogo";
import NavbarLinks from "./navbarlink";
import NavbarBtn from "./Navbarbutton";
import NavbarToggler from "./NavbarToggler";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 z-20 w-full max-w-[1300px] px-4 mt-2">
      <div className="relative flex items-center justify-between w-full max-w-[1200px] mx-auto bg-black p-4 sm:p-6 rounded-full border border-orange z-30">
        {/* Logo */}
        <NavbarLogo />

        {/* Desktop Links */}
        <div className="hidden lg:block">
          <NavbarLinks />
        </div>

        {/* Hire Me Button */}
        <NavbarBtn />

        {/* Mobile Toggle Button */}
        <div className="lg:hidden ml-2 p-2 bg-black border border-orange rounded-full">
          <NavbarToggler />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full mt-3 bg-black/90 backdrop-blur-md z-10">
          <NavbarLinks />
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
