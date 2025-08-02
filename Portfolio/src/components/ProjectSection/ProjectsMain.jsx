import ProjectsText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import React from "react";

const projects = [
  {
    name: "Churn Prediction",
    align: "right",
    image: "/churn.png", // ✅ Fixed image path
    link: "https://github.com/Achyut-shekhar/Churn-prediction/tree/main/churn-prediction",
  },
  {
    name: "SkyNavigation", // ✅ Fixed typo from "SkyNAvigation"
    align: "left",
    image: "/sky.png",
    link: "https://github.com/Achyut-shekhar/Sky-Navigation",
  },
  {
    name: "AgriScan",
    align: "right",
    image: "/agri.png",
    link: "https://github.com/Achyut-shekhar/cropHealth",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link} // ✅ Passed link prop
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
