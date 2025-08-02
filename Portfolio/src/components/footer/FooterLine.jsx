import React from "react";

const FooterLine = ({ text }) => {
  return (
    <div className="w-full my-12">
      <div className="flex items-center justify-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-lightGrey to-transparent" />
        {text && (
          <span className="px-4 text-lightGrey text-sm uppercase tracking-wider">
            {text}
          </span>
        )}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-lightGrey to-transparent" />
      </div>
    </div>
  );
};

export default FooterLine;
