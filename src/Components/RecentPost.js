import React from "react";
import classes from "./RecentPost.module.css";

const RecentPost = (props) => {
  return (
    <React.Fragment>
      <div className={classes.recentPost}>
        <h2 className={classes.recentPostText}>Recent Posts </h2>
        <div className={classes.container}>
          {props.postData.map((post) => {
            return (
              <div className={classes.postItem} key={post.key}>
                <h2 className={classes.header}>{post.header}</h2>
                <div className={classes.detail}>
                  <div>{post.date}</div>
                  <div>{post.description}</div>
                </div>
                <p className={classes.content}>{post.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecentPost;
