import React from "react";
import { Link } from "react-router-dom";
import {
  faCircleDollarToSlot,
  faCalendarAlt,
  faPhone,
  faMailBulk,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AllJobs = ({ job }) => {
  const { name, image, company, jobTypes, location, id, salary } = job;
  return (
    <div className="border-2 rounded md:flex items-center justify-between md:w-10/12 mx-auto mb-6 md:p-10 p-4 text-center md:text-left">
      <div className="md:w-4/12">
        <img className="mx-auto" src={image} alt="" />
      </div>
      <div className="my-10 md:my-0 mx-auto">
        <h2 className="text-xl font-bold">{name}</h2>
        <h3 className="font-bold my-5 text-slate-500">{company}</h3>
        <div className="my-5 flex gap-4 w-fit md:mx-0 mx-auto">
          {jobTypes.map((type, indexes) => (
            <p
              key={indexes}
              className="border text-purple-400 border-purple-200 py-1 px-3 rounded"
            >
              {type}
            </p>
          ))}
        </div>
        <p>
          <span className="mr-4">
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
          </span>
          {location}
          <span className=" md:inline block ml-4">
            <span className="mr-4">
              <FontAwesomeIcon icon={faCircleDollarToSlot}></FontAwesomeIcon>
            </span>
            <span>{salary}</span>
          </span>
        </p>
      </div>

      <Link to={`/jobinfo/${id}`}>
        <button className=" mt-2 btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default AllJobs;
