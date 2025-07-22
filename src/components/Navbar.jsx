import React from "react";
import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={`${style.nav_bar} container`} data-aos="fade-down" data-aos-duration="1000">
      <div className={style.left}>Portfolio</div>
      <div className={`${style.right} ${style.div_items}`}>
        <a href="#home" className={style.nav_items}>Home</a>
        <a href="#experience" className={style.nav_items}>Experience</a>
        <a href="#skills" className={style.nav_items}>Skills</a>
        <a href="#project" className={style.nav_items}>Project</a>
        <a href="#contact" className={style.nav_items}>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
