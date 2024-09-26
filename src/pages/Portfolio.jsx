import React, { useEffect } from "react";
import Projects from "../component/Projects";
import Footer from "../component/Footer";
import ScrollToTopButton from "../component/ScrollToTopButton";
import { motion } from "framer-motion";
const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="projectpage">
        <div className="projectp">
          <article>
            Thank you for checking out my projects! Here's a glimpse into some
            of the selected works I've deployed, representing a blend of
            creativity and technical expertise. Your interest is greatly
            appreciated!
          </article>
        </div>
        <Projects />
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Portfolio;
