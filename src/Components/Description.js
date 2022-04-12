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
          frontend technologies and I am very sound in React javascript. More
          detail can be found in my resume. I look forward to hearing from you,
          lovely!
        </p>
        <p>Have a great time on my portfolio web app!</p>
        <a href="https://docs.google.com/document/d/1t5a6XWhnQgyIgXhAj8MkgGq0tcf9BIvE/edit?usp=sharing&ouid=109885686325583081048&rtpof=true&sd=true">
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
