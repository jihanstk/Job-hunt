import React from "react";
import vector from "../../assets/All-images/Vector.png";

const RouteHeaders = ({ children }) => {
  return (
    <div className=" w-full md:flex relative">
      <img src={vector} alt="" />
      <div className="md:w-6/12 md:static md:left-0 absolute top-20 left-24">
        <h1 className="text-center text-4xl font-bold">
          {children} Job Details
        </h1>
      </div>
    </div>
  );
};

export default RouteHeaders;
