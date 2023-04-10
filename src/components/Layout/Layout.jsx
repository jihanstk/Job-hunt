import React from "react";
import Header from "../LayoutComponent/Header/Header";
import JobCategoryList from "../LayoutComponent/JobCategoryList/JobCategoryList";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <JobCategoryList></JobCategoryList>
    </div>
  );
};

export default Layout;
