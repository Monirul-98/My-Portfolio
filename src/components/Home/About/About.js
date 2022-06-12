import React from "react";
import "./About.css";
import sifat from "../../../assets/images/sifat.jpeg";
import { SiJavascript, SiCss3, SiReact, SiFirebase } from "react-icons/si";
import { RiHtml5Fill } from "react-icons/ri";

const About = () => {
  return (
    <div>
      <div
        className=" w-full h-screen bg-[#0a192f] text-white flex items-center "
        id="about"
      >
        <div className="a-left w-full">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={sifat} alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right text-start w-2/3 p-6">
          <h1 className="a-title text-3xl text-[#64ffda]">About Me</h1>
          <p className="a-sub">Hello! My name is Mohammad Monirul Hoque.</p>
          <p className="a-desc mb-3">
            My interest on web development began on 2020 while I was learning
            JavaScript. Web seems interesting and fun to me so that's why I
            dived into the world of Web development. Now I am a self proclaimed
            Jr. Front-end web developer.
          </p>
          <h2>Here are some technologies I have been working with recently:</h2>
          <div className=" text-[#64ffda] mt-3 ">
            <SiJavascript className="inline text-3xl mr-3 "></SiJavascript>
            <SiReact className="inline text-3xl mr-3"></SiReact>
            <RiHtml5Fill className="inline text-3xl mr-3"></RiHtml5Fill>
            <SiFirebase className="inline text-3xl mr-3"></SiFirebase>
            <SiCss3 className="inline text-3xl "></SiCss3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
