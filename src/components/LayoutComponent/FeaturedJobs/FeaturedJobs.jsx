import React from "react";
import { useLoaderData } from "react-router-dom";
import JobCompany from "../JobCompany/JobCompany";

const FeaturedJobs = () => {
  const jobCompanies = useLoaderData();
  return (
    <div className="">
      <div>
        <h1>Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-5">
        {jobCompanies.map((jobCompany) => (
          <JobCompany jobCompany={jobCompany}></JobCompany>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
