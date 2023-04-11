import React from "react";
import social from "../../assets/Icons/Group 9969.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="md:p-20 md:px-32  bg-black mt-40">
      <div className="grid-custom md:text-left text-center border-b border-slate-600 ">
        <div className="text-white p-2 pt-10">
          <h1 className=" text-3xl">CareerHub</h1>
          <p className="text-slate-400">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <img className="md:mx-0 mx-auto" src={social} alt="" />
        </div>
        <div className=" text-white text-center my-5">
          <h2 className="text-2xl">Company</h2>
          <ul className="text-slate-400 ">
            <li className="my-2">
              <a href="#">About Us</a>
            </li>
            <li className="my-2">
              <a href="#">Work</a>
            </li>
            <li className="my-2">
              <a href="#">Latest News</a>
            </li>
            <li className="my-2">
              <a href="#">Career</a>
            </li>
          </ul>
        </div>
        <div className=" text-white text-center my-5">
          <h2 className="text-2xl">Product</h2>
          <ul className="text-slate-400 ">
            <li className="my-2">
              <a href="#">Prototype</a>
            </li>
            <li className="my-2">
              <a href="#">Plans & Pricing</a>
            </li>
            <li className="my-2">
              <a href="#">Customers</a>
            </li>
            <li className="my-2">
              <a href="#">Integrations</a>
            </li>
          </ul>
        </div>
        <div className=" text-white text-center my-5">
          <h2 className="text-2xl">Support</h2>
          <ul className="text-slate-400 ">
            <li className="my-2">
              <a href="#">Help Desk</a>
            </li>
            <li className="my-2">
              <a href="#">Sales</a>
            </li>
            <li className="my-2">
              <a href="#">Become a Partner</a>
            </li>
            <li className="my-2">
              <a href="#">Developers</a>
            </li>
          </ul>
        </div>
        <div className=" text-white text-center my-5">
          <h2 className="text-2xl">Contact</h2>
          <ul className="text-slate-400 ">
            <li className="my-2">524 Broadway , NYC</li>
            <li className="my-2">+1 777 - 978 - 5570</li>
          </ul>
        </div>
      </div>
      <div className="text-slate-500 mt-16 pb-10 text-center">
        <h1> @2023 CareerHub. All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
