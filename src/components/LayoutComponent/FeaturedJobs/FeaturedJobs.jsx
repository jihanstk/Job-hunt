import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobCompany from "../JobCompany/JobCompany";

const FeaturedJobs = ({ allCompany }) => {
  const [companies, setCompanies] = useState(4);
  const handleSliceData = () => {
    setCompanies(allCompany.length);
  };
  // if (companies.length > 4) {
  //   let lessCompany = companies.slice(0, 4);
  //   setCompanies(lessCompany);
  // }
  // if (companies.length > 4) {
  //   const company = companies.slice(0, 4);
  // } else {

  // }

  // const [allCompany, setAllCompany] = useState([]);

  // if (4 && allCompany > 4) {
  //   allCompany = allCompany.slice(0, 4);
  // }

  // useEffect(() => {
  //   setAllCompany(jobCompanies);
  // }, []);
  return (
    <div className="">
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold">Featured Jobs</h1>
        <p className="text-gray-500 p-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="text-center">
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-5 ">
          {allCompany.length > 0 &&
            allCompany
              .slice(0, companies)
              .map((jobCompany) => (
                <JobCompany
                  key={jobCompany.id}
                  jobCompany={jobCompany}
                ></JobCompany>
              ))}
        </div>
        <button
          onClick={handleSliceData}
          className={`btn btn-error mt-10 ${
            companies == allCompany.length ? "hidden" : "visible"
          } `}
        >
          See all Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
