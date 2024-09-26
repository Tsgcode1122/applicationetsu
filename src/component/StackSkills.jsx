import React from "react";
import { motion } from "framer-motion";
import Html from "../Images/html-5.png";
import Css from "../Images/css-3.png";
import Javascript from "../Images/js.png";
import react from "../Images/physics.png";
import Tailwind from "../Images/tailwind.png";
import Bootstrap from "../Images/bootstrap.webp";
import Scss from "../Images/sass.png";

const workAnimate = {
  slideOut: { x: -25, opacity: 1 },
  slideIn: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      delay: 0.1,
      duration: 1.2,
    },
  },
};

const StackSkills = () => {
  return (
    <>
      <section className="stack">
        <div className="stacker">
          <motion.div
            initial={"slideOut"}
            whileInView={"slideIn"}
            viewport={{ once: true, amount: 0.2 }}
            className="stack-skills"
          >
            <motion.div variants={workAnimate} className="single_project">
              <img src={Html} alt="HTML" />
              <h5>HTML</h5>
              <article>
                Proficiency in developing semantically structured and responsive
                websites, harnessing the power of cutting-edge HTML5 features to
                enhance web functionality and performance.
              </article>
            </motion.div>
          </motion.div>
          <motion.div
            initial={"slideOut"}
            whileInView={"slideIn"}
            viewport={{ once: true, amount: 0.2 }}
            className="stack-skills"
          >
            <motion.div variants={workAnimate} className="single_project">
              <img src={Css} alt="CSS" />
              <h5>CSS</h5>
              <article>
                Proficiency in crafting responsive layouts, incorporating
                dynamic animations, leveraging Sass preprocessors, and
                seamlessly integrating CSS with various web technologies for a
                harmonious and engaging user experience.
              </article>
            </motion.div>
          </motion.div>
          <motion.div
            initial={"slideOut"}
            whileInView={"slideIn"}
            viewport={{ once: true, amount: 0.2 }}
            className="stack-skills"
          >
            <motion.div variants={workAnimate} className="single_project">
              <img src={Javascript} alt="JavaScript" />
              <h5>JAVASCRIPT</h5>
              <article>
                Proficiency in writing algorithms, adeptly utilizing modern ES6+
                features, and implementing robust asynchronous programming
                through the use of promises and async/await for enhanced
                application functionality.
              </article>
            </motion.div>
          </motion.div>
          <motion.div
            initial={"slideOut"}
            whileInView={"slideIn"}
            viewport={{ once: true, amount: 0.2 }}
            className="stack-skills"
          >
            <motion.div variants={workAnimate} className="single_project">
              <img src={react} alt="React" />
              <h5>REACT</h5>
              <article>
                Proficient in React, excelling in creating dynamic user
                interfaces, utilizing hooks, and optimizing performance for
                seamless applications. Experienced in building scalable and
                feature-rich web solutions with a focus on reusability and
                maintainability.
              </article>
            </motion.div>
          </motion.div>
          <motion.div
            initial={"slideOut"}
            whileInView={"slideIn"}
            viewport={{ once: true, amount: 0.2 }}
            className="stack-skills"
          >
            <motion.div variants={workAnimate} className="single_project">
              <img src={Bootstrap} alt="Bootstrap" />
              <h5>BOOTSTRAP</h5>
              <article>
                Proficient in Bootstrap, adept at leveraging its powerful grid
                system, components, and utilities to rapidly build responsive
                and visually appealing web interfaces. Experienced in utilizing
                Bootstrap's versatility to streamline the development process
                and create polished, modern websites.
              </article>
            </motion.div>
          </motion.div>
          <motion.div
            initial={"slideOut"}
            whileInView={"slideIn"}
            viewport={{ once: true, amount: 0.2 }}
            className="stack-skills"
          >
            <motion.div variants={workAnimate} className="single_project">
              <img src={Tailwind} alt="Tailwind" />
              <h5>TAILWIND</h5>
              <article>
                Proficient in Tailwind CSS, utilizing its utility-first approach
                to efficiently style and design responsive, modern interfaces.
                Experienced in leveraging Tailwind's extensive utility classes
                for streamlined and customizable web development, ensuring a
                clean and maintainable codebase.
              </article>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default StackSkills;
