// Navbar.jsx
import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "./ DarkModeContext";
import Example from "./SmallNav";
import "../Styles.scss";
import Toggle from "./Toggle";
import DownloadCVButton from "./DownloadCVButton";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  var ttt = "<";
  var ttt2 = "/>";

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <nav className={`navbar ${isDarkMode ? "dark-mode" : ""} `}>
        <div>
          <div className="Menu-small-size">
            <div className="Logo">
              <Link
                to="/"
                className={`nav-logo  ${isDarkMode ? "dark-mode" : ""}`}
              >
                <span className="white"> {ttt} </span>
                <span className="white">
                  {" "}
                  TS <span className="color"> Code</span>{" "}
                </span>
                <span className="white"> {ttt2} </span>
              </Link>
            </div>
            <div className="Menu-button">
              <div className="menu-fl">
                <Link
                  to="/"
                  className={`nav-link ${isDarkMode ? "dark-mode" : ""}`}
                >
                  Home
                </Link>

                <Link
                  to="/Skills"
                  className={`nav-link ${isDarkMode ? "dark-mode" : ""}`}
                >
                  Skills
                </Link>
                <Link
                  to="/Portfolio"
                  className={`nav-link ${isDarkMode ? "dark-mode" : ""}`}
                >
                  Portfolio
                </Link>
                <Link
                  to="/Contact"
                  className={`nav-link ${isDarkMode ? "dark-mode" : ""}`}
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="Menu-toggles">
              <button
                className={`dark-mode-button ${isDarkMode ? "dark" : "light"}`}
                onClick={toggleDarkMode}
              >
                <Toggle />
              </button>
              <DownloadCVButton />
            </div>
            <div className="Menu-toggle">
              <button
                className={`dark-mode-button ${isDarkMode ? "dark" : "light"}`}
                onClick={toggleDarkMode}
              >
                <Toggle />
              </button>
              <div className="iamtired">
                <DownloadCVButton />
              </div>
              <div className="hamm">
                <Example />
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </nav>
      {/* <div className="Nav-height"></div> */}
    </>
  );
};

export default Navbar;
