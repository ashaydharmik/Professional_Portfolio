import React, { useState,useEffect } from 'react'
import "./sideHeader.scss"
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";

const SideHeader = ({setShowHeader}) => {

  return (
    <>
     <div className="cart-container">
        <div className="background"></div>
        <div className="cartWindow">
        <div className="cart-heading">
            <div className="heading">
              <h1>Menu</h1>
            </div>
            <div className="cart-btn" onClick={()=>setShowHeader(false)}>
            <ImCancelCircle />
            </div>
          </div>
        <div className="nav-links">
              <ul className="ul-nav">
              <Link to={"/"}><li onClick={()=>setShowHeader(false)}><a href='#' style={{ "--i": 1 }}>Home</a></li></Link>
              <Link to={"/about"}><li onClick={()=>setShowHeader(false)}><a href='#' style={{ "--i": 2 }}>About</a></li></Link>
              <Link to={"/skills"}><li onClick={()=>setShowHeader(false)}><a href='#' style={{ "--i": 3 }}>Skills</a></li></Link>
              <Link to={"/experience"}><li onClick={()=>setShowHeader(false)}><a href='#' style={{ "--i": 4 }}>Experience</a></li></Link>
              <Link to={"/portfolio"}><li onClick={()=>setShowHeader(false)}><a href='#' style={{ "--i": 5 }}>Portfolio</a></li></Link>
              <Link to={"/contact"}><li onClick={()=>setShowHeader(false)}><a href='#' style={{ "--i": 6 }}>Contact</a></li></Link>
              </ul>
            </div>
        </div>
        </div>
       
       
    </>
  )
}

export default SideHeader
