import React, { useEffect } from "react";
import Stacks from "../component/Stacks";
import StackSkills from "../component/StackSkills";
import Footer from "../component/Footer";
import ScrollToTopButton from "../component/ScrollToTopButton";

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="Skillspage">
        <Stacks />
        <StackSkills />
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Skills;
