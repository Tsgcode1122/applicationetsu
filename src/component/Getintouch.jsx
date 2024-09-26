import React, { useState } from "react";
import "../Styles.scss";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import useZoomInAnimation from "../animation/useZoomInAnimation";
const Getintouch = () => {
  useZoomInAnimation(".Contact-form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",

    message: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xnqkdolz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        // reset the form fields
        setFormData({
          name: "",
          email: "",

          message: "",
        });
        // Show the success message
        setShowSuccessMessage(true);

        // Hide the success message after a few seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 10000);
      } else {
        console.error("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };

  return (
    <>
      <section className="contact ">
        <h2>Get In Touch</h2>
        <ul className="social-icons">
          <li className="email">
            <a href="mailto:falolatosin8@gmail.com">
              <FaEnvelope />
            </a>
          </li>

          <li className="whats">
            <a
              href="https://wa.me/+2348134098042"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </li>
          <li className="whats">
            <a
              href="tel:+2348134098042"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdCall />
            </a>
          </li>
        </ul>
        <div className="Contact-form">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message "
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>

          {showSuccessMessage && (
            <div className="success-message">Thank you for Messaging me!!!</div>
          )}
        </div>
      </section>
    </>
  );
};

export default Getintouch;
