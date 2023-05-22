import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  const openSideMenu = () => {
    document.getElementById("sideMenu").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
  };

  const closeSideMenu = () => {
    document.getElementById("sideMenu").style.width = "0px";
  };

  const homeClickHandler = () => {
    props.onHomeClick();
  };

  const workClickHandler = () => {
    props.onWorkClick();
  };

  const blogClickHandler = () => {
    props.onBlogClick();
  };

  return (
    <header>
      <span className={classes.openSlide}>
        <span onClick={openSideMenu}>
          <svg width="30" height="30">
            <path d="M0, 5, 30, 5" stroke="#000" strokeWidth="3"></path>
            <path d="M0, 14, 30, 14" stroke="#000" strokeWidth="3"></path>
            <path d="M0, 23, 30, 23" stroke="#000" strokeWidth="3"></path>
          </svg>
        </span>
      </span>

      <ul className={classes.ul}>
        <li
          className={
            props.onHomeConfirm ? `${classes.worksAlt}` : `${classes.home}`
          }
        >
          <a href="#0" onClick={homeClickHandler}>
            Home
          </a>
        </li>
        <li
          className={
            props.onWorkConfirm ? `${classes.worksAlt}` : `${classes.work}`
          }
        >
          <a href="#0" onClick={workClickHandler}>
            Portfolio
          </a>
        </li>
        <li
          className={
            props.onBlogConfirm ? `${classes.worksAlt}` : `${classes.blogs}`
          }
        >
          <a href="#0" onClick={blogClickHandler}>
            Blog
          </a>
          {/* <p>Blogs</p> */}
        </li>
      </ul>

      <div id="sideMenu" className={classes.sideNav}>
        <button className={classes.btnClose} onClick={closeSideMenu}>
          &times;
        </button>
        <a
          href="#0"
          onClick={homeClickHandler}
          className={
            props.onHomeConfirm
              ? `${classes.sideNavAlt}`
              : `${classes.sideNavLink}`
          }
        >
          Home
        </a>
        <a
          href="#0"
          onClick={workClickHandler}
          className={
            props.onWorkConfirm
              ? `${classes.sideNavAlt}`
              : `${classes.sideNavLink}`
          }
        >
          Portfolio
        </a>
        <a
          href="#0"
          onClick={blogClickHandler}
          className={
            props.onBlogConfirm
              ? `${classes.sideNavAlt}`
              : `${classes.sideNavLink}`
          }
        >
          Blog
        </a>
      </div>
    </header>
  );
};

export default Header;
