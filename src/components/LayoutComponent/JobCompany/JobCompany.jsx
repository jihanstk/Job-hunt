import React from "react";

const JobCompany = ({ jobCompany }) => {
  return (
    <div className="border p-8">
      <img src={jobCompany.image} alt="" />
      <h2 className="">{jobCompany.name}</h2>
      <h3>{jobCompany.company}</h3>
      <p className=" flex gap-4">
        {jobCompany.jobTypes.map((type) => (
          <p className=" border">{type}</p>
        ))}
      </p>
      <p>{jobCompany.location}</p>
      <button>View Details</button>
    </div>
  );
};

export default JobCompany;
