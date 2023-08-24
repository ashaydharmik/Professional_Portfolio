import React from "react";
import "./contact.scss";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import contact from "../assets/contact.jpg"
const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="heading">
          <h1>Experience</h1>
        </div>
        <div className="contact-box">
          <div className="con-left">
            <div className="photo">
              <img src={contact} alt="" />
            </div>
            <div className="desc">
              <h1>Ashay Dharmik</h1>
              <p>
                "I'm a dedicated and passionate individual eager to contribute
                my skills to organizations, thrive in diverse environments, and
                make a meaningful impact. "
              </p>
              <p>
                <span>Phone: </span>+91 7020967445
              </p>
              <p>
                <span>Email: </span>ashaydharmik807@gmail.com
              </p>
              <h2>FIND ME IN</h2>
            </div>
            <div className="social">
              <p>
                <FaInstagram />
              </p>
              <p>
                <FaLinkedin />
              </p>
              <p>
                <FaGithub />
              </p>
            </div>
          </div>
          <div className="con-right"></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
