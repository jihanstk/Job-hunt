import React from "react";
import { Link } from "react-router-dom";

const JobCompany = ({ jobCompany }) => {
  return (
    <div className="border p-8 text-gray-500 text-center">
      <div>
        <img className="w-6/12 mx-auto" src={jobCompany.image} alt="" />
      </div>
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

      <Link to={`/jobinfo/${jobCompany.id}`}>
        <button className=" mt-2 btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default JobCompany;
