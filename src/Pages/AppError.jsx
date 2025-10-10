import React from "react";
import AppErrorImg from "../assets/App-Error.png";

const AppError = () => {
  return (
    <div className="card flex justify-center items-center bg-base-100 max-w-screen-2xl shadow-sm mx-auto">
      <div className="px-10 pt-10">
        <img src={AppErrorImg} alt="" />
      </div>
      <div className="card-body items-center text-center">
        <h1 className="card-title text-4xl">OPPS!! APP NOT FOUND</h1>
        <p>
          The App you are requesting is not found on our system. please try
          another apps.
        </p>
        <button className="btn border-none bg-linear-to-r from-[#642fe4] to-[#7566f7] text-white">
          Go Home
        </button>
      </div>
    </div>
  );
};

export default AppError;
