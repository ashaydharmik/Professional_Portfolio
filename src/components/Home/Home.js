import React from "react";
import "./home.scss";
import img from "../assets/bg-img.png";
import person from "../assets/person.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import About from "../About/About";
const Home = () => {
  return (
    <>
      <section className="home">
        <div className="social">
          <p style={{ "--i": 1 }}>
            <FaInstagram />
          </p>
          <p style={{ "--i": 2 }}>
            <FaLinkedin />
          </p>
          <p style={{ "--i": 3 }}>
            <FaGithub />
          </p>
        </div>
        <div className="content_one">
          <div className="heading">
            <span className="hello">Hello_</span>
            <h1>
              {" "}
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
                     "Full Stack Developer",
                     "Mern Stack Developer" 
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
            <button>Download CV</button>
            <button>Hire Me</button>
          </div>
        </div>
        <div className="content_two">
          <img src={img} alt="" id="splash"></img>
          <img src={person} id="user" alt=""></img>
        </div>
      </section>

      <div className="layout">
        <About/>
      </div>
    </>
  );
};

export default Home;
