import React from "react";
import { Link } from "react-router-dom";
import {
  faCircleDollarToSlot,
  faCalendarAlt,
  faPhone,
  faMailBulk,
  faDollarSign,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const JobCompany = ({ jobCompany }) => {
  return (
    <div className="border p-8  md:text-left text-center">
      <div>
        <img className="w-6/12 md:mx-0 mx-auto" src={jobCompany.image} alt="" />
      </div>
      <h2 className="text-xl mt-5 font-bold">{jobCompany.name}</h2>
      <h3 className=" text-lg font-extrabold my-5 text-gray-600">
        {jobCompany.company}
      </h3>
      <div className="my-2 text-purple-500 flex gap-4 w-fit md:mx-0 mx-auto">
        {jobCompany.jobTypes.map((type, index) => (
          <p key={index} className="border border-purple-200 py-1 px-3 rounded">
            {type}
          </p>
        ))}
      </div>
      <p className="my-6">
        <span className="mr-3">
          <FontAwesomeIcon icon={faLocationDot} />
        </span>{" "}
        <span className="mr-4">{jobCompany.location} </span>
        <span className="mr-3 md:inline block">
          <FontAwesomeIcon icon={faDollarSign} />
        </span>{" "}
        <span>Salary: {jobCompany.salary}</span>
      </p>

      <Link to={`/jobinfo/${jobCompany.id}`}>
        <button className=" mt-2 btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default JobCompany;
