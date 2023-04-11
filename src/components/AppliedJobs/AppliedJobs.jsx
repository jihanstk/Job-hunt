import React from "react";
import AllJobs from "../AllJobs/AllJobs";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppliedJobs = () => {
  const applied = JSON.parse(localStorage.getItem("applied-job"));
  return (
    <div className="text-end w-9/12 mx-auto">
      <div className="dropdown mb-10 p-5 mx-auto">
        <label tabindex="0" className="btn m-1">
          filter by
          <span className="ml-8">
            <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
          </span>
        </label>
        <ul
          tabindex="0"
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Remote</a>
          </li>
          <li>
            <a>onside</a>
          </li>
        </ul>
      </div>
      <div>
        {" "}
        {applied
          ? applied.map((job) => <AllJobs key={job.id} job={job}></AllJobs>)
          : "ddd"}
      </div>
    </div>
  );
};

export default AppliedJobs;
