import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../utilities/fakedb";
import { json } from "react-router-dom";
import cartProductLoader from "../../loaders/cartProductLoader";

const AppliedJobs = () => {
  const stored = JSON.parse(localStorage.getItem("applied-job"));
  return (
    <div>
      {stored
        ? stored.map((store) => <p>{store ? store.name : "hii"}</p>)
        : "ddd"}
    </div>
  );
};

export default AppliedJobs;
