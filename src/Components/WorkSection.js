import React from "react";
// import classes from "./WorkSection.module.css"
import FeaturedWorks from "./FeaturedWorks";
// import WorkDetail  from "./WorkDetail";

const WorkSection = (props) => {
  return (
    <div>
      <FeaturedWorks works={props.works} title={props.title} />
      {/* <WorkDetail works = {props.works}/> */}
    </div>
  );
};

export default WorkSection;
