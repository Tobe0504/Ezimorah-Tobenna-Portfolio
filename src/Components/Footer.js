import classes from "./Footer.module.css";
import React from "react";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <div className={classes.container}>
      <h2>Contact Me!</h2>
      <div className={classes.innerContainer}>
        {/* <SocialIcon url="https://facebook.com" bgColor="#21243D" /> */}
        <SocialIcon
          url="https://mobile.twitter.com/volfgng"
          bgColor="#21243D"
          className={classes.icons}
          style={{ height: 42, width: 42 }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/tobenna-ezimorah-51b497201"
          bgColor="#21243D"
          className={classes.icons}
          style={{ height: 42, width: 42 }}
        />
        <SocialIcon
          url="https://github.com/Tobe0504"
          bgColor="#21243D"
          className={classes.icons}
          style={{ height: 42, width: 42 }}
        />
        <SocialIcon
          url="https://instagram.com/bbvolfgng?utm_medium=copy_link"
          bgColor="#21243D"
          className={classes.icons}
          style={{ height: 42, width: 42 }}
        />
      </div>
      <p>Copyright &copy;2020. All rights reserved</p>
    </div>
  );
};

export default Footer;
