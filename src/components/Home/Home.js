import React, { useState } from "react";
import "./home.scss";
import img from "../assets/bg-img.png";
import person from "../assets/person.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";

const Home = () => {
 
  
  return (
    <>
      <section className={`home`}>
        <div className="social">
          <p style={{ "--i": 1 }}>
           <a href="https://www.instagram.com/i_ashay07/" target="_blank"><FaInstagram /></a>
          </p>
          <p style={{ "--i": 2 }}>
          <a href="https://www.linkedin.com/in/ashay-dharmik-10aab4207/" target="_blank"><FaLinkedin /></a>
          </p>
          <p style={{ "--i": 3 }}>
          <a href="https://github.com/ashaydharmik" target="_blank"><FaGithub /></a>
          </p>
        </div>
        <div className="content_one">
          <div className="heading">
            <span className="hello">Hello_</span>
            <h1>
              I'm <span>Ashay Dharmik</span>
            </h1>
          </div>
          <div className="description">
            <span>
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "FrontEnd Developer",
                    "MernStack Developer",
                    "FullStack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="bio">
            <p>
              "I'm a dedicated and passionate individual eager to contribute my
              skills to organizations, thrive in diverse environments, and make
              a meaningful impact. "
            </p>
          </div>
          <div className="buttons">
          <a href="https://drive.google.com/file/d/1jWgEUWjzPMpYbcBei5DTw0cwnpLTHxAo/view?usp=drive_link" target="_blank"><button>Download CV</button></a>
          <Link to={"/about"}><button>Hire Me</button></Link>
          </div>
        </div>
        <div className="content_two">
          <img src={img} alt="" id="splash"></img>
          <img src={person} id="user" alt=""></img>
        </div>
      </section>

      <div className="layout">
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
};

export default Home;
