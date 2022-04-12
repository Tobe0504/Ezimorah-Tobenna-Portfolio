import React, { useState } from "react";
import Description from "./Components/Description";
import Header from "./Components/Header";
import RecentPost from "./Components/RecentPost";
import FeaturedWorks from "./Components/FeaturedWorks";
import Footer from "./Components/Footer";
import WorkSection from "./Components/WorkSection";
import BlogSection from "./Components/BlogSection";
// import Counter from "./Components/Counter";
import classes from "./App.module.css";
import gpCalc from "./Components/Pictures/gpCalc.png";
import responsiveNav from "./Components/Pictures/Responsive nav.png";
import nameAgeDisplay from "./Components/Pictures/Name age display.png";

function App() {
  // https://www.figma.com/file/gKZoWoleFgP35xvYu83Y2l/Portfolio-UI-Web-and-Mobile

  const [homeToggle, setHomeToggle] = useState(true);
  const [workToggle, setWorkToggle] = useState(false);
  const [blogToggle, setBlogToggle] = useState(false);

  const recentPost = [
    {
      key: Math.random(),
      header: "The Difference Between Web 2.0 and Web 3.0",
      date: "12 Feb 2022",
      description: "Web 3, Technology",
      content:
        "This briefs about the major difference between the Web 2 and novel Web 3. The write-up breaks down even from the first version of the web down to where we are presently. Also, it welcomes new names and technologies Web 3 brings on the table. Please do well to give it a read!",
      link: "https://medium.com/@ezimorahtobenna/the-difference-between-web-2-0-and-web-3-0-889d5abf8256",
    },
    {
      key: Math.random(),
      header:
        "The WHY of Web 3.0 and understanding it enough for commercial use",
      date: "Drops soon!",
      description: "Web 3, Technology",
      content:
        "Hey there lovely human, I know you are here to read this write-up and I am really exhilerated about that. I am really sorry that I have failed to meet my end and I promise the write-up will be up before you know. Keep being a great reader and keep shaping your mind to becomimg the genius you already are!",
      link: "#0",
    },
    {
      key: Math.random(),
      header: "My Tech Experience after a year",
      date: "7 April 2022",
      description: "Blog, Technology",
      content:
        "This run through the mistakes I have made when I started with tech about a year ago and necessary actions that could be taken to avoid making such mistakes as a newbie, a pro or just a reader.",
      link: "https://medium.com/@ezimorahtobenna/my-tech-journey-after-a-year-f47004e03bab",
    },
  ];

  const featuredWorks = [
    {
      key: Math.random(),
      src: gpCalc,
      header: "Grade Point Calculator",
      year: "2022",
      type: "Simple Grade Point calculator",
      content:
        "A simple Grade Point calculator that lets users calculate their grade points on a five-point scale. It was built with user-friendly user interface designed by myself as part of efforts to improve my creativity as a frontend developer. More detail on it can be found on my github! Do well to click the github icon at the footer of this webpage. ",
      link: "https://github.com/Tobe0504/Grade-Point-Calculator",
    },
    {
      key: Math.random(),
      src: responsiveNav,
      header: "Responsive Navigation Bars",
      year: "2022",
      type: "Nav-Bar for Desktop and Mobile Devices",
      content:
        "A very simple but eloquent responsive navigation bar built with great design and very re-usable and re-factorable code. Built with simple HTML and CSS with some Javascript. More detail and code on my Github! Do well to click the github icon at the footer of this webpage.",
      link: "https://github.com/Tobe0504/Responsive-NavBar",
    },
    {
      key: Math.random(),
      src: nameAgeDisplay,
      header: " CRUD Name Age Display with Form Validations",
      year: "2022",
      type: "Name, Age Input and Output",
      content:
        "A demo name age display made with React Javascript that lets users put in their names and age, as well as output it. It was made to test basic React functionalities like conditional rendering, dynamic input and styling and form validation; just to mention a few. Click the github icon in the footer for the code and more information!",
      link: "https://github.com/Tobe0504/Input-Form-React-Project",
    },
  ];

  const homeClickHandler = () => {
    console.log("Home clicled");
    setHomeToggle(true);
    setWorkToggle(false);
    setBlogToggle(false);
  };

  const workClickHandler = () => {
    setWorkToggle(true);
    setHomeToggle(false);
    setBlogToggle(false);
    console.log("Work clicled");
  };

  const blogClickHandler = () => {
    setBlogToggle(true);
    setWorkToggle(false);
    setHomeToggle(false);
    console.log("Blog clicked");
  };

  return (
    <div>
      {homeToggle && (
        <div>
          <div className={classes.nav}>
            <Header
              className={classes.app}
              onWorkClick={workClickHandler}
              onHomeClick={homeClickHandler}
              onBlogClick={blogClickHandler}
              onHomeConfirm={homeToggle}
              onWorkConfirm={workToggle}
              onBlogConfirm={blogToggle}
            />
          </div>
          <Description />

          <div className={classes.recentPost}>
            <RecentPost postData={recentPost} />
          </div>

          <FeaturedWorks works={featuredWorks} title="Featured Works" />
          <Footer />

          {/* <Counter /> */}
        </div>
      )}

      {workToggle && (
        <div>
          <div className={classes.nav}>
            <Header
              className={classes.app}
              onWorkClick={workClickHandler}
              onHomeClick={homeClickHandler}
              onBlogClick={blogClickHandler}
              onHomeConfirm={homeToggle}
              onWorkConfirm={workToggle}
              onBlogConfirm={blogToggle}
            />
          </div>
          <WorkSection works={featuredWorks} title="Works" />
          <Footer />
        </div>
      )}

      {blogToggle && (
        <div>
          <div className={classes.nav}>
            <Header
              className={classes.app}
              onWorkClick={workClickHandler}
              onHomeClick={homeClickHandler}
              onBlogClick={blogClickHandler}
              onHomeConfirm={homeToggle}
              onWorkConfirm={workToggle}
              onBlogConfirm={blogToggle}
            />
          </div>
          <BlogSection posts={recentPost} />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
