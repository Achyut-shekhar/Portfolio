import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="relative flex items-center justify-center w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] mx-auto"
    >
      {/* Glowing & Spinning Hexagon Outline Behind Image */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <PiHexagonThin className="w-full h-full text-cyan-400 animate-spin-slow glow blur-md" />
      </div>

      {/* Normal Image (not clipped) */}
      <div className="w-full h-full overflow-hidden z-10 rounded-xl hexagon-mask">
        <img
          src="/me.png"
          alt="Achyut Shekhar Singh"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default HeroPic;
