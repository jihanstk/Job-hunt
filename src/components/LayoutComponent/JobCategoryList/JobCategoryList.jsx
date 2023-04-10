import React from "react";
import Account from "../../../assets/Icons/accounts 1.png";
import Creative from "../../../assets/Icons/business 1.png";
import Marketing from "../../../assets/Icons/social-media 1.png";
import Engineering from "../../../assets/Icons/chip 1.png";

const JobCategoryList = () => {
  return (
    <div className="my-32 ">
      <div className=" text-center my-20">
        <h1 className="text-2xl font-bold mb-3">Job Category List</h1>
        <p className=" text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 justify-between items-center mx-auto text-center">
        <div className="">
          <img className="w-fit mx-auto" src={Account} alt="" />
          <h3 className="my-2 text-xl font-semibold">Account & Finance</h3>
          <p className=" text-gray-500">300 Jobs Available</p>
        </div>
        <div>
          <img className="w-fit mx-auto" src={Creative} alt="" />
          <h3 className="my-2 text-xl font-semibold">Creative Design</h3>
          <p className=" text-gray-500">100 Jobs Available</p>
        </div>
        <div>
          <img className="w-fit mx-auto" src={Marketing} alt="" />
          <h3 className="my-2 text-xl font-semibold">Marketing & Sales</h3>
          <p className=" text-gray-500">150 Jobs Available</p>
        </div>
        <div>
          <img className="w-fit mx-auto" src={Engineering} alt="" />
          <h3 className="my-2 text-xl font-semibold">Engineering Job</h3>
          <p className=" text-gray-500">200 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default JobCategoryList;
