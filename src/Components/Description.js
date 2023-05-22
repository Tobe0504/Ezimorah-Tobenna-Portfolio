import React from "react";
import Button from "./UI/Button";
import Man from "./Pictures/Wrist watch with man.jpeg";
import classes from "./Description.module.css";

const Description = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>Hi, I am Tobe,</h1>
        <h1>Futuristic Tech Enthusiast.</h1>
        <p>
          I am a Software Developer practicing Frontend Web Development, a tech
          writer as well and of Nigerian descent. I am a student of the
          University of Lagos, Nigeria. I have sound knowledge of the basic
          frontend technologies like HTML, CSS and even CSS Framework Bootstrap.
          I am also very sound in Javascript Single Page Application Library,
          React. More detail can be found in my resume. I look forward to
          hearing from you, lovely!
        </p>
        <p>Have a great time on my portfolio web app!</p>
        <a
          href="https://drive.google.com/file/d/1wbmOxPK_EegHptGMhU_Jg3FkW5GqOn5g/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <Button className={classes.btn}>Download Resume</Button>
        </a>
      </div>

      <div className={classes.image}>
        <img src={Man} alt={"A man with a wrist watch"} />
      </div>
    </div>
  );
};

export default Description;
