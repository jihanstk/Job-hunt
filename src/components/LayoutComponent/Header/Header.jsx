import React from "react";
import person from "../../../assets/All Images/P3OLGJ1 copy 1.png";

const Header = () => {
  return (
    <div className="md:flex flex-col-reverse md:flex-row mb-20 ">
      <div>
        <img src={person} alt="" />
      </div>
      <div className="md:w-full w-11/12 mt-10 md:text-left text-center mx-auto">
        <h1 className="md:text-6xl text-3xl font-extrabold">
          One Step <br /> Closer To Your <br />
          <span className="text-orange-500">Dream Job</span>
        </h1>
        <p className="my-5 text-gray-500 ">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
