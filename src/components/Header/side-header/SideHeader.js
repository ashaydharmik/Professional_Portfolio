import React from 'react'
import "./sideHeader.scss"
import { ImCancelCircle } from "react-icons/im";
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
              <li><a href='#' style={{ "--i": 1 }}>Home</a></li>
              <li><a href='#' style={{ "--i": 2 }}>About</a></li>
              <li><a href='#' style={{ "--i": 3 }}>Skills</a></li>
              <li><a href='#' style={{ "--i": 4 }}>Experience</a></li>
              <li><a href='#' style={{ "--i": 5 }}>Portfolio</a></li>
              <li><a href='#' style={{ "--i": 6 }}>Contact</a></li>
              </ul>
            </div>
        </div>
        </div>
       
       
    </>
  )
}

export default SideHeader
