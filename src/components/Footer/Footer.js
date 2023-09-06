import React, { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.gif";
import "./footer.scss";
const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <section className="footer-container">
        <div className="heading">
        <img src={logo} alt="" style={{width:"40px", height:"40px", borderRadius:"50%",marginTop:"0.6rem" }}/>
        </div>
        <div className="menu">
          <ul className="ul-nav">
            <Link to={"/"}>
              <li>
                <a href="/">Home</a>
              </li>
            </Link>
            <Link to={"/about"}>
              <li>
                <a href="#">About</a>
              </li>
            </Link>
            <Link to={"/skills"}>
              <li>
                <a href="#">Skills</a>
              </li>
            </Link>
            <Link to={"/experience"}>
              <li>
                <a href="#">Experience</a>
              </li>
            </Link>
            <Link to={"/portfolio"}>
              <li>
                <a href="#">Portfolio</a>
              </li>
            </Link>
            <Link to={"/contact"}>
              <li>
                <a href="#">Contact</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="social">
          <p>
            <a href="https://www.instagram.com/i_ashay07/" target="_blank">
              <FaInstagram />
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/ashay-dharmik-10aab4207/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </p>
          <p>
            <a href="https://github.com/ashaydharmik" target="_blank">
              <FaGithub />
            </a>
          </p>
        </div>
        <div className="footer-content">
          <p>&copy; 2023 Ashay Dharmik. All rights reserved.</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
