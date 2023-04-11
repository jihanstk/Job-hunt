import {
  faCircleDollarToSlot,
  faCalendarAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const JobDetail = ({ details }) => {
  return (
    <div className="grid-custom-jobDetail w-10/12  mx-auto">
      <div>
        {" "}
        <div className="text-lg ">
          <strong>Job Description :</strong>
          <span className=" text-slate-600"> {details.jobDescription}</span>
        </div>
        <div className="text-lg my-12">
          <strong>Job Responsibility : </strong>
          <span className=" text-slate-600">
            {" "}
            {details.jobResponsibilities}
          </span>
        </div>
        <div className="text-lg my-7">
          <strong>Educational Requirements :</strong>
          <p className=" text-slate-600 mt-5">
            {" "}
            {details.educationalRequirements}
          </p>
        </div>
        <div className="text-lg">
          <strong>Experiences :</strong>
          <span className=" text-slate-600">
            {" "}
            {details.experiences.map((experience) => (
              <p>{experience}</p>
            ))}
          </span>
        </div>
      </div>
      <div className="md:text-left text-center md:pl-12 font-serif my-10">
        <h1 className=" text-xl font-bold border-b border-purple-200 pl-5 pb-5">
          Job Details
        </h1>
        <div className="">
          <p className="my-3">
            <span className="text-purple-500 text-lg mr-2">
              <FontAwesomeIcon icon={faCircleDollarToSlot}></FontAwesomeIcon>
            </span>
            <strong>Salary</strong> : {details.salary} <span>(Per Month)</span>
          </p>
          <p>
            <span className="text-purple-500 text-lg mr-2">
              <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
            </span>
            <strong>Job Title</strong> : {details.name}
          </p>
        </div>
        <h3 className=" text-lg font-bold border-b border-purple-200 my-8 pl-5 pb-5">
          Contact Information
        </h3>

        <div>
          <p>
            <span className=" text-purple-500">
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
            </span>
            <strong>Phone :</strong>
            <span></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
