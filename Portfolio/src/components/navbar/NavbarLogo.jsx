import React from "react";

const NavbarLogo = () => {
  return (
    <div className="text-white">
      {/* Full name on medium+ screens */}
      <h1 className="hidden md:block text-2xl">
        Achyut Shekhar Singh
      </h1>

      {/* Short initials on small screens only */}
      <h1 className="block md:hidden text-3xl font-extrabold font-special">
        A.S.S
      </h1>
    </div>
  );
};

export default NavbarLogo;
