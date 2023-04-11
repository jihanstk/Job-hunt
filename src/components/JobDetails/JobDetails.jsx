import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./JobDetails.css";
import vector from "../../assets/All-images/Vector.png";
import JobDetail from "../jobDetail/JobDetail";

const JobDetails = () => {
  const [details, setDetails] = useState({});
  const { jobId } = useParams();
  const job = useLoaderData();
  useEffect(() => {
    let detailsJob = job.find((item) => item.id == jobId);
    setDetails(detailsJob);
  }, [jobId]);

  return (
    <div>
      <div className=" w-full md:flex relative">
        <img src={vector} alt="" />
        <div className="md:w-6/12 md:static md:left-0 absolute top-20 left-24">
          <h1 className="text-center text-4xl font-bold">Job Details</h1>
        </div>
      </div>

      <div className="mt-20">
        {Object.keys(details).length > 0 ? (
          <JobDetail details={details}></JobDetail>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default JobDetails;
