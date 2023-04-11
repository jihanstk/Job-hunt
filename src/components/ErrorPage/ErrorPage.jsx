import React from "react";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
          className=" w-6/12
        "
          src="https://cdn.svgator.com/images/2022/01/funny-website-error-messages.gif"
          alt=""
        />
        <div className="max-w-md text-center">
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded-xl bg-cyan-400 hover:bg-red-400  text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
