import React from "react";
import Header from "../LayoutComponent/Header/Header";
import JobCategoryList from "../LayoutComponent/JobCategoryList/JobCategoryList";
import FeaturedJobs from "../LayoutComponent/FeaturedJobs/FeaturedJobs";
import { useLoaderData } from "react-router-dom";

const Layout = () => {
  const allCompany = useLoaderData();
  console.log(allCompany);
  return (
    <div className="md:w-9/12 md:mx-auto">
      <Header></Header>
      <JobCategoryList></JobCategoryList>
      <FeaturedJobs allCompany={allCompany}></FeaturedJobs>
    </div>
  );
};

export default Layout;
