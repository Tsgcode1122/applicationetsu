import React from "react";
import { Link, Outlet } from "react-router-dom";
import myImg from "../Images/profile.png";
import "../Styles.scss";
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import useBottomToTopSwipe from "../animation/useBottomToTopSwipe";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
const Hero = () => {
  useBottomToTopSwipe(".bounce-in");
  useLeftToRightSwipe(".left-in");

  return (
    <>
      <section className="Hero">
        <div className="spin-box"></div>
        <div className="spin-box"></div>
        <div className="spin-box"></div>
        <div className="spin-box"></div>
        <div className="spin-box"></div>
        <div className="spin-box"></div>
        <div className="spin-box"></div>
        <div className="spin-box"></div>
        <div className="spin-box"></div>
        <div className="Hero-img bounce-in">
          <img src={myImg} />
        </div>

        <div className="Hero-content">
          <h5>
            Hello, I'm <span className="waving-hand">👋</span>
          </h5>
          <h1>Falola Tosin S.</h1>
          <p> A Graphics Designer</p>
          <article className="left-in">
            I'm a passionate Graphic/Web Designer and Freelancer dedicated to
            bringing your ideas to life. With a blend of creativity, precision,
            and a deep understanding of design principles, I craft visuals that
            tell stories, capture attention, and elevate brands. Whether it's
            branding, digital illustrations, or print media, I’m here to help
            you stand out. Let’s create something amazing together!
          </article>
          <div className="Hero-cta">
            <Link to="/Portfolio">
              <div className="Hero-ctap"> View Projects</div>
            </Link>
            <ul className="social-icons">
              <li className="github">
                <a
                  href="https://github.com/Tsgcode1122"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="email">
                <a href="mailto:tsgcode201@gmail.com">
                  <FaEnvelope />
                </a>
              </li>
              <li className="insta">
                <a
                  href="https://medium.com/@tsgcode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsMedium />
                </a>
              </li>
              {/* <li className="whats">
                  <a
                    href="https://www.whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                </li> */}

              <li className="linkedin">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ocean-wave-spinner">
          <div className="waves"></div>
          <div className="waves"></div>
          <div className="waves"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
