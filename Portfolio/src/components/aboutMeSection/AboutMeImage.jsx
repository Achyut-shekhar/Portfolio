import React from "react";

const AboutMeImage = () => {
  return (
    <div className="relative w-[300px] h-[500px] mx-auto">
      {/* Image Container */}
      <div className="absolute inset-0 rounded-[100px] overflow-hidden z-10">
        <img
          src="/about-me.jpg"
          alt="About Me"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Background Shape */}
      <div className="absolute bottom-[-30px] left-[-30px] w-[250px] h-[500px] bg-orange rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] z-0" />
    </div>
  );
};

export default AboutMeImage;
