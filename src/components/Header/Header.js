import React, { useEffect, useState } from "react";
import "./header.scss";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import SideHeader from "./side-header/SideHeader";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

const Header = () => {
  const [scrolled,setScrolled] = useState(false)
    const [mode,setMode] = useState(false)
    // const [toggle,setToggle] = useState(false)
const [showHeader, setShowHeader] =useState(false)


    const handleMode=()=>{
        setMode(!mode)
        // document.body.style.backgroundColor = changeColor ? "" : "purple";
    }
    // const handleToggle=()=>{
    //     setToggle(!toggle)
    // }

    const handleScroll=()=>{
      const offset = window.scrollY.toFixed(2);
      // console.log(offset)
      if(offset > 600){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }

useEffect(()=>{
  window.addEventListener("scroll", handleScroll)
},[])

    
  return (
    <>
      <section className={`navbar  ${scrolled ? "nav-sticky" : ""} ${mode ? "changeColor" : ""}`}>
        <div className="nav">
          <div className="left">
            <Link  to={"/"}>
            <p>
              ASH<span>AY</span>
            </p>
            
            </Link>
          </div>
          <div className="center">
            <div className="nav-links">
              <ul className="ul-nav">
              <Link to={"/"}><li><a href='#' style={{ "--i": 1 }}>Home</a></li></Link>
              <Link to={"/about"}><li><a href='#' style={{ "--i": 2 }}>About</a></li></Link>
              <Link to={"/skills"}><li><a href='#' style={{ "--i": 3 }}>Skills</a></li></Link>
              <Link to={"/experience"}><li><a href='#' style={{ "--i": 4 }}>Experience</a></li></Link>
              <Link to={"/portfolio"}><li><a href='#' style={{ "--i": 5 }}>Portfolio</a></li></Link>
              <Link to={"/contact"}><li><a href='#' style={{ "--i": 6 }}>Contact</a></li></Link>
              </ul>
            </div>
          </div>
          <div className={`right `}>
            <span className="mode">
              <span className={`night`} onClick={handleMode}>
                {
                    mode? <FaMoon />:<FaSun/>
                }
              </span>
            </span>
            <span className="talk">
              <Link to={"/contact"}>
              <button>Let's talk</button>
              </Link>
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
