import React from "react";
import ProjectList from "../Projects/ProjectList/ProjectList";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <ProjectList></ProjectList>
      <Contact></Contact>
    </div>
  );
};

export default Home;
