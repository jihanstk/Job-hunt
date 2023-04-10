import React from "react";
import Header from "../LayoutComponent/Header/Header";
import JobCategoryList from "../LayoutComponent/JobCategoryList/JobCategoryList";
import FeaturedJobs from "../LayoutComponent/FeaturedJobs/FeaturedJobs";

const Layout = () => {
  return (
    <div className="md:w-9/12 md:mx-auto">
      <div className="hidden">
        <Header></Header>
        <JobCategoryList></JobCategoryList>
      </div>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Layout;
