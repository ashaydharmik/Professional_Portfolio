import React, { useState } from "react";
import "./contact.scss";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import contact from "../assets/contact.jpg";
import seperator from "../assets/seperator.png";
const Contact = () => {
  const [username, setUsername] = useState();
  const [phoneNum, setPhoneNum] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [successMsg, setSuccessMsg] = useState();
  const [errMsg, setErrMsg] = useState();

  const red = "#d9363e";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNum === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNum("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <>
      <div className="contact-container">
        <div className="heading">
          <h1>Contact Me</h1>
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
                <span>Phone : </span>+91 7020967445
              </p>
              <p>
                <span>Email : </span>ashaydharmik807@gmail.com
              </p>
              <h2>FIND ME IN</h2>
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
          </div>
          <div className="con-right">
            <form className="form" onSubmit={handleSubmit}>
              {successMsg && (
                <p className="successMsg">
                  <span>{successMsg}</span>
                </p>
              )}
              <div className="name-ph">
                <div className="input-div">
                  <p>Name:</p>
                  <input
                    type="text"
                    id="name"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                  />
                </div>
                <div className="input-div">
                  <p>Phone:</p>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{10}"
                    onChange={(e) => setPhoneNum(e.target.value)}
                    value={phoneNum}
                    required
                  />
                </div>
              </div>
              <div className="email">
                <p>Email:</p>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div className="text-area">
                <p>TextArea:</p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  required
                ></textarea>
              </div>
              <div className="buttons">
                <button type="submit">Submit</button>
              </div>
              {errMsg && (
                <p className="errMsg">
                  <span>{errMsg}</span>
                </p>
              )}
              {successMsg && (
                <p className="successMsg">
                  <span>{successMsg}</span>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
