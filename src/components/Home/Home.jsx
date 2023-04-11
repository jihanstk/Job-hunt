import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Navigation/Navigation";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
