import React from "react";
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        {/* Text */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>

        {/* Desktop Skills (unchanged) */}
        <div className="hidden lg:block absolute bottom-[50px] left-1/2 -translate-x-1/2 w-full">
          <AllSkills />
        </div>

        {/* Mobile/Tablet Skills (new layout, avoids overlap) */}
        <div className="block lg:hidden mt-10">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
