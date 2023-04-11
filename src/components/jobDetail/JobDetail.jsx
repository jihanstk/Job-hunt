import React from "react";

const JobDetail = ({ details }) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      <p>
        <strong>Job Description:</strong>
        {details.jobDescription}
      </p>
    </div>
  );
};

export default JobDetail;
