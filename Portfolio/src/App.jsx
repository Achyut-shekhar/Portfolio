import React from "react";

import HeroMain from "./components/heroSection/HeroMain";
import SubHeroMain from "./components/subHeroSection/SubHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import ProjectsMain from "./components/ProjectSection/ProjectsMain";
import ContactMeMain from "./components/Contact/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";
import NavbarMain from "./components/navbar/NavbarMain";
function App() {
  return (
    <main className="font-body">
      <NavbarMain></NavbarMain>
      <HeroMain></HeroMain>
      <SubHeroMain></SubHeroMain>
      <AboutMeMain></AboutMeMain>
      <SkillsMain></SkillsMain>
      <ProjectsMain></ProjectsMain>
      <ContactMeMain></ContactMeMain>
      <FooterMain></FooterMain>
    </main>
  );
}

export default App;
