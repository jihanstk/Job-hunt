import React from "react";
import { Link } from "react-router-dom";

const JobCompany = ({ jobCompany }) => {
  return (
    <div className="border p-8 text-gray-500">
      <img src={jobCompany.image} alt="" />
      <h2 className="text-xl mt-5 font-bold">{jobCompany.name}</h2>
      <h3 className="font-bold my-2">{jobCompany.company}</h3>
      <div className="my-2 flex gap-4">
        {jobCompany.jobTypes.map((type) => (
          <p className="border">{type}</p>
        ))}
      </div>
      <p>{jobCompany.location}</p>
      <button className=" mt-2 btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
        <Link to={`/jobinfo/${jobCompany.id}`}>View Details</Link>
      </button>
    </div>
  );
};

export default JobCompany;
