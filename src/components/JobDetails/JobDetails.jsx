import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./JobDetails.css";
import JobDetail from "../jobDetail/JobDetail";
import RouteHeaders from "../RouteHeaders/RouteHeaders";

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
      <RouteHeaders>{details.company}</RouteHeaders>

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
