import classes from "./FeaturedWork.module.css";
import React from "react";

const FeaturedWorks = (props) => {
  return (
    <div className={classes.mainContainer}>
      <h2 className={classes.topic}>{props.title}</h2>
      {props.works.map((work, i) => {
        return (
          <div key={work.key} className={classes.container}>
            <div className={classes.imageSection}>
              {/* <img src={work.src} alt="" /> */}
              {i + 1}
            </div>
            <div className={classes.detailSection}>
              <div className={classes.header}>
                <h2>{work.header}</h2>
              </div>
              <div className={classes.detailSubHeading}>
                <div className={classes.year}>{work.year}</div>
                <div className={classes.type}>{work.type}</div>
              </div>
              <div className={classes.content}>{work.content}</div>
              <div className={classes.view}>
                <a href={work.link}>View</a>
              </div>
              <hr />
            </div>
          </div>
        );
      })}
      <div className={classes.more}>
        To view more projects, please visit my{" "}
        <a href="https://github.com/Tobe0504">GitHub</a>
      </div>
    </div>
  );
};

export default FeaturedWorks;
