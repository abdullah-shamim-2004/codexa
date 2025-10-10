import React from "react";
import Error404 from "../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="card bg-base-100 shadow-sm max-w-screen-2xl mx-auto">
      <figure className="px-10 pt-10">
        <img src={Error404} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-4xl ">Oops, page not found!</h2>
        <p>The page you are looking for is not available.</p>
       
          <Link
            to="/"
            className="btn border-none bg-linear-to-r from-[#642fe4] to-[#7566f7] text-white"
          >
            Go Back!
          </Link>
    
      </div>
    </div>
  );
};

export default ErrorPage;
