import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faArrowsAltH } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "./ DarkModeContext";
import { RxHamburgerMenu } from "react-icons/rx";
import "../Styles.scss";
import Toggle from "./Toggle";
import homew from "../Icon/homew.png";
import skillw from "../Icon/skillw.png";
import projw from "../Icon/projb.png";
import contw from "../Icon/contw.png";
import homew1 from "../Icon/homeb.png";
import skillw1 from "../Icon/skillb.png";
import projw1 from "../Icon/projw.png";
import contw1 from "../Icon/contb.png";
import DownloadCVButton from "./DownloadCVButton";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="me-2 custom-hamburger-button"
      >
        {<RxHamburgerMenu />}
      </Button>
      <Offcanvas
        className="Offcanvas"
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton className="closecanvas">
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="Menu-small">
            <Link
              to="/"
              className={`nav-link ${isDarkMode ? "dark-mode" : ""}`}
              onClick={handleClose}
            >
              <span>
                {" "}
                <img src={homew} className="blackbg" alt="" />
                <img src={homew1} className="whitebg" alt="" />
              </span>
              <span> Home</span>
            </Link>

            <Link
              to="/Skills"
              className={`nav-link ${isDarkMode ? "dark-mode" : ""}`}
              onClick={handleClose}
            >
              <span>
                {" "}
                <img src={skillw} className="blackbg" alt="" />
                <img src={skillw1} className="whitebg" alt="" />
              </span>
              <span> Skills</span>
            </Link>
            <Link
              to="/Portfolio"
              className={`nav-link ${isDarkMode ? "dark-mode" : ""}`}
              onClick={handleClose}
            >
              <span>
                <img src={projw} className="blackbg" alt="" />
                <img src={projw1} className="whitebg" alt="" />
              </span>
              <span> Portfolio</span>
            </Link>
            <Link
              to="/Contact"
              className={`nav-link ${isDarkMode ? "dark-mode" : ""}`}
              onClick={handleClose}
            >
              <span>
                {" "}
                <img src={contw} className="blackbg" alt="" />
                <img src={contw1} className="whitebg" alt="" />
              </span>
              <span> Contact</span>
            </Link>
          </div>
          <div className="cvbutton">
            <DownloadCVButton />
          </div>
          <div className="ocean-wave-spinner">
            <div className="waves"></div>
            <div className="waves"></div>
            <div className="waves"></div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample
          key={idx}
          placement={placement}
          name={<RxHamburgerMenu />}
        />
      ))}
    </>
  );
}

export default Example;
