import React, { useState } from "react";
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const navs = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Statistics",
      path: "/statistics",
    },
    {
      id: 3,
      name: "Applied Jobs",
      path: "/applied-jobs",
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div className=" md:w-11/12 md:mx-auto md:my-10">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          Job HUnt
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[110] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {navs.map((nav) => (
            <li key={nav.id} className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  isActive ? " text-orange-600" : ""
                }
              >
                {nav.name}
              </NavLink>
            </li>
          ))}
          <button className="md:hidden visible font-[Poppins] py-2 px-6 btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] md:ml-6 ">
            Apply Now
          </button>
        </ul>
        <button className="hidden md:block  font-[Poppins] py-2 px-6 btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] md:ml-6 ">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Navigation;
