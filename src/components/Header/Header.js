import React, { useState } from "react";
import "./header.scss";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import SideHeader from "./side-header/SideHeader";

const Header = () => {
    const [mode,setMode] = useState(false)
    // const [toggle,setToggle] = useState(false)
const [showHeader, setShowHeader] =useState(false)

    const handleMode=()=>{
        setMode(!mode)
    }
    // const handleToggle=()=>{
    //     setToggle(!toggle)
    // }

    
  return (
    <>
      <section className="navbar">
        <div className="nav">
          <div className="left">
            <p>
              ASH<span>AY</span>
            </p>
          </div>
          <div className="center">
            <div className="nav-links">
              <ul className="ul-nav">
              <li><a href='#' style={{ "--i": 1 }}>Home</a></li>
              <li><a href='#' style={{ "--i": 2 }}>About</a></li>
              <li><a href='#' style={{ "--i": 3 }}>Skills</a></li>
              <li><a href='#' style={{ "--i": 4 }}>Portfolio</a></li>
              <li><a href='#' style={{ "--i": 5 }}>Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="right">
            <span className="mode">
              <span className="night" onClick={handleMode}>
                {
                    mode? <FaSun />:<FaMoon/>
                }
              </span>
            </span>
            <span className="talk">
              <button>Let's talk</button>
            </span>
            <span className="toggle" onClick={()=> setShowHeader(true)} >
            {/* {
                    toggle? <ImCancelCircle />:<FaBars/> 
                } */}
                <FaBars/> 
            </span>
          </div>
        </div>
      </section>
      {showHeader && <SideHeader setShowHeader={setShowHeader}/>}
    </>
  );
};

export default Header;
