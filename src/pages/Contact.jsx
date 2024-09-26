import React, { useEffect } from "react";
import Getintouch from "../component/Getintouch";
import Footer from "../component/Footer";
import ScrollToTopButton from "../component/ScrollToTopButton";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="contactpage">
        <div className="contactt">
          <article>
            Ready to connect and collaborate? I'm here to bring your projects to
            life. Whether you're interested in discussing a potential
            collaboration, have a project idea in mind, or considering hiring
            me, your message is the first step. Let's initiate the conversation
            and explore how we can create something remarkable together. Don't
            hesitate to reach out—I'm excited about the possibilities.
          </article>
        </div>
        <Getintouch />
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Contact;
