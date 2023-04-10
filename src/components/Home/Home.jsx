import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Navigation/Navigation";
import Navigation from "../Navigation/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
