import {
  faCircleDollarToSlot,
  faCalendarAlt,
  faPhone,
  faMailBulk,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";
import { addToDb } from "../../utilities/fakedb";

const JobDetail = ({ details }) => {
  const [appliedJob, setAppliedJob] = useState([]);

  const handleApplyNow = (job) => {
    let saveJobs = [];
    const jobExists = appliedJob.find((aj) => aj.id == job.id);
    if (!jobExists) {
      saveJobs = [...appliedJob];
    } else {
      const remaining = appliedJob.find((aj) => aj.id !== job.id);
      saveJobs = [...remaining, jobExists];
    }

    setAppliedJob(saveJobs);
    addToDb(job);
  };
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
            {details.experiences.map((experience, index) => (
              <p key={index}>{experience}</p>
            ))}
          </span>
        </div>
      </div>
      <div className="md:text-left text-center md:pl-12 font-serif my-10">
        <h1 className=" text-xl font-bold border-b border-purple-200 pl-5 pb-5">
          Job Details : {details.company}
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
            <span className=" text-purple-500 text-lg mr-2">
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
            </span>
            <strong>Phone : </strong>
            <span>{details.phone}</span>
          </p>
          <p className="my-5">
            <span className=" text-purple-500 text-lg mr-2">
              <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>
            </span>
            <strong>Email : </strong>
            <span>{details.email}</span>
          </p>
          <p>
            <span className=" text-purple-500 text-lg mr-2">
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            </span>
            <strong>Location : </strong>
            <span>{details.address}</span>
          </p>
        </div>

        <button
          onClick={() => handleApplyNow(details)}
          className="my-10 btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] w-full"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
