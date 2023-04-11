import React from "react";
import { Link } from "react-router-dom";

const JobCompany = ({ jobCompany }) => {
  return (
    <div className="border p-8 text-gray-500 text-center">
      <img className="w-fit mx-auto" src={jobCompany.image} alt="" />
      <h2 className="text-xl mt-5 font-bold">{jobCompany.name}</h2>
      <h3 className="font-bold my-2">{jobCompany.company}</h3>
      <div className="my-2 flex gap-4 w-fit mx-auto">
        {jobCompany.jobTypes.map((type, index) => (
          <p key={index} className="border border-purple-200 py-1 px-3 rounded">
            {type}
          </p>
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
