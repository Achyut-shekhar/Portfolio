import React from "react";

import HeroText from "./HeroText";
import HeroPic from "./HeroPic";


const HeroMain = () => {
  return (
    <div className="relative pt-40 pb-16 overflow-hidden">
   

      {/* Content on top */}
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative z-10 px-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
