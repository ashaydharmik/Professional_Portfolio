import React, { useRef } from "react";
import "./about.scss";
import { FaUserAlt } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import seperator from "../assets/seperator.png"
import bg2 from "../assets/bg2.jpg"
import person2 from "../assets/person2.png"
import { useLocation } from 'react-router-dom';
// import Skills from "../Skills/Skills";
const About = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  const isMobileView = window.innerWidth<=640; 
  const pageStyle = {
    marginTop: isAboutPage ? (isMobileView? '10px' : '2rem') : '5rem',
  };

  // const shouldHideMobileDiv = isMobileView && isAboutPage;


  const targetSectionRef = useRef(null)

  const handleScroll = () => {
    const yOffset = 100;
    const targetSection = document.getElementById('targetSection');
    
    if (targetSection) {
      const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };



  return (
    <>
   
    {/* <div id="seperator"  >
    <img src={seperator} alt="" width="20px" height="5px"/>
    </div> */}
      <div className="about-container" style={{pageStyle}}>
        <div className="heading">
        <h1>About Me</h1>
        </div>
        <div className="about-content">

        <div className="about-img">
          {/* <img src={bg2} alt="" id="bg-2" /> */}
          <img src={person2} alt="" id="person-2"/>
        </div>
        <div className="img-info">
          <div className="heading">
            <h3>LET ME INTRODUCE MYSELF</h3>
          </div>
          <div className="description">
            <p>I am a perceptive and enthusiastic individual who is eager to study and delve deeply into subjects. With a strong dedication to using my talents to advance a company's objectives, I am constantly seeking opportunities to grow and learn in a supportive environment that exposes me to a variety of things. I am passionate about leveraging my skills to contribute to the success of organizations and make a meaningful impact.</p>
          </div>
          <div class="information">
            <div className="box1">
            <div class="info-box">
              <span>
                <FaUserAlt />
              </span>
              <span>Ashay Dharmik</span>
            </div>
            <div class="info-box">
              <span>
                <FaGraduationCap />
              </span>
              <span>Bachelor of Engineering (BE)</span>
            </div>
            <div class="info-box">
              <span>
                <ImPhone />
              </span>
              <span>+7020967445</span>
            </div>
            </div>
            <div className="box2">
            <div class="info-box">
              <span>
                <MdEmail />
              </span>
              <span>ashaydharmik807@gmail.com</span>
            </div>
            <div class="info-box">
              <span>
                <FaAddressCard />
              </span>
              <span>Bengaluru, Karnataka</span>
            </div>
            <div class="info-box">
              <span>
                <FaBirthdayCake />
              </span>
              <span>13th Aug 2001</span>
            </div>
            </div>
          </div>
          <div className="about-more">
            <button  onClick={handleScroll}>Know more <span>
            <AiFillCaretDown/>
              </span></button>
          </div>
        </div>
        </div>
      </div>
  
    </>
  );
};

export default About;
