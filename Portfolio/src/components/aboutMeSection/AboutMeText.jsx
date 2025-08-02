import { Link } from "react-scroll";
import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center text-white px-4">
      <h2 className="text-4xl md:text-6xl text-cyan mb-6 font-bold">About Me</h2>

      <p className="text-lg leading-7 max-w-xl">
        I’m Achyut Shekhar Singh, a passionate web developer and Computer Science undergraduate. I specialize in frontend development using React.js, Tailwind CSS, and I'm constantly building real-world projects that combine beautiful interfaces with powerful functionality.
        <br /><br />
        From visualizing real-time air traffic with Leaflet.js to creating intelligent crop health dashboards using NDVI and satellite data, I love working at the intersection of creativity, technology, and impact. I’ve also explored Firebase, Appwrite, and AI/ML to add intelligence and scalability to my applications.
        <br /><br />
        I enjoy continuous learning and contributing to meaningful tech solutions. Whether it's hackathons, full-stack projects, or open-source collaboration, I’m always up for a new challenge.
      </p>

      {/* ✅ Use Link directly as a styled button */}
      <Link
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        className="border border-orange rounded-full py-2 px-6 text-lg flex gap-2 items-center mt-10 hover:bg-orange hover:text-black transition-all duration-500 cursor-pointer md:self-start sm:self-center"
      >
        My Projects
      </Link>
    </div>
  );
};

export default AboutMeText;
