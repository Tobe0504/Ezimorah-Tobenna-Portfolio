import React from "react";
import classes from "./BlogSection.module.css";

const BlogSection = (props) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.posts}>Posts</h2>
      {props.posts.map((post) => {
        return (
          <div className={classes.postContainer}>
            <div className={classes.header}>
              <h2>{post.header}</h2>
            </div>
            <div className={classes.info}>
              <div className={classes.date}>{post.date}</div>
              <div className={classes.description}>{post.description}</div>
            </div>
            <div className={classes.content}>{post.content}</div>
            <div className={classes.read}>
              <a href={post.link}>Read</a>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default BlogSection;
