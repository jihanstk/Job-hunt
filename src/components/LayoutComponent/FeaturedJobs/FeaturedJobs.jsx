import React from "react";
import { useLoaderData } from "react-router-dom";
import JobCompany from "../JobCompany/JobCompany";

const FeaturedJobs = () => {
  const jobCompanies = useLoaderData();
  return (
    <div className="">
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold">Featured Jobs</h1>
        <p className="text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-5">
        {jobCompanies.map((jobCompany) => (
          <JobCompany key={jobCompany.id} jobCompany={jobCompany}></JobCompany>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
