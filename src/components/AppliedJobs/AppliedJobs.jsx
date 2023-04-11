import React, { useState } from "react";
import AllJobs from "../AllJobs/AllJobs";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoData from "../NoData/NoData";

const AppliedJobs = () => {
  const applied = JSON.parse(localStorage.getItem("applied-job"));

  const [filterJobs, setFilterJobs] = useState(applied);
  const handleFilter = (type) => {
    let jobType = type
      ? applied.filter((item) => item.jobTypes.includes(type))
      : applied;
    setFilterJobs(jobType);
  };

  return (
    <div className="text-end w-9/12 mx-auto">
      <div className="dropdown mb-10 p-5 mx-auto">
        <label tabIndex="0" className="btn m-1">
          filter by
          <span className="ml-8">
            <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
          </span>
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => handleFilter()}>
            <a>All</a>
          </li>
          <li onClick={() => handleFilter("Remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleFilter("on-site")}>
            <a>Part-time</a>
          </li>
        </ul>
      </div>
      <div>
        {" "}
        {filterJobs ? (
          filterJobs.map((job) => <AllJobs key={job.id} job={job}></AllJobs>)
        ) : (
          <NoData></NoData>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
