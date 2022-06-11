import React from "react";

const Header = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#64ffda]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Monirul Hoque.
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front-end Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a front-end developer specializing in building front-end website
          based on React. Currently, I’m focusing on building responsive
          full-stack web applications.
        </p>
        <div>
          <a
            className="btna text-[#64ffda]"
            href="https://drive.google.com/file/d/120VdoILS4E_RVxXXcqxdgklzhV3QzGpL/view?usp=sharing"
            download
          >
            <button className="btn btn-outline-dark  mt-4 mb-3 ">
              Download Resume
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
