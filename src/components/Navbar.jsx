import React from "react";
import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={style.nav_bar}>
      <div className={style.left}>Portfolio</div>
      <div className={`${style.right} ${style.div_items}`}>
        <a href="#" className={style.nav_items}>Home</a>
        <a href="#" className={style.nav_items}>Experience</a>
        <a href="#" className={style.nav_items}>Skills</a>
        <a href="#" className={style.nav_items}>Project</a>
        <a href="#" className={style.nav_items}>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
