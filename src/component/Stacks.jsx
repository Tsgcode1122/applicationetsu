import React from "react";
import { motion } from "framer-motion";
import Html from "../Images/html-5.png";
import Css from "../Images/css-3.png";
import Javascript from "../Images/js.png";
import react from "../Images/physics.png";
import Tailwind from "../Images/tailwind.png";
import Bootstrap from "../Images/bootstrap.webp";
import Scss from "../Images/sass.png";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
const animateIcon = {
  setOff: { y: 20 },
  setIn: {
    y: 0,
    rotate: [30, 180, 0],
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.8,
    },
  },
};

const Stacks = () => {
  useLeftToRightSwipe(".left-in");
  return (
    <>
      <section className="stack">
        <h2>Stacks & Technology</h2>
        <div className="stack-icon left-in">
          <div className="h-stacks">
            <motion.div
              initial={"setOff"}
              whileInView={"setIn"}
              transition={{ staggerChildren: 0.2 }}
              className="stacks"
            >
              <motion.img variants={animateIcon} src={Html} alt="" />
              <motion.img variants={animateIcon} src={Css} alt="" />
              <motion.img variants={animateIcon} src={Javascript} alt="" />
              <motion.img variants={animateIcon} src={react} alt="" />
              <motion.img variants={animateIcon} src={Bootstrap} alt="" />
              <motion.img variants={animateIcon} src={Scss} alt="" />
              <motion.img variants={animateIcon} src={Tailwind} alt="" />
            </motion.div>
          </div>
        </div>
        {/* <img src={Html} />
          <img src={Css} />
          <img src={Javascript} />
          <img src={react} />
          <img src={Bootstrap} />
          <img src={Scss} />
          <img src={} /> */}
      </section>
    </>
  );
};

export default Stacks;
