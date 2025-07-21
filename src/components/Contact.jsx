import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";  
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <div className="container contact">
        <h1>Contact Me</h1>
        <div className="contact-icon">
          <a href="https://www.instagram.com/jain._nishank" target='_blank' className="items">
            <FaInstagramSquare className="icons" />
          </a>
          <a href="mailto:j123nishank@gmail.com" target='_blank' className="items">
            <SiGmail className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/imnishankjain/" target='_blank' className="items">
            <FaLinkedin className="icons" />
          </a>
          <a href="https://github.com/Iamnishankjain" target='_blank' className="items">
            <FaGithub className="icons" />
          </a>
          <a href="#" target='_blank' className="items">
            <FaFacebook className="icons" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact;
