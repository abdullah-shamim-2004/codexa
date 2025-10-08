import React from "react";
import LogoImg from "../assets/logo.png";
import { NavLink } from "react-router";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
          >
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>Apps</NavLink>
            </li>
            <li>
              <NavLink>Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex ">
          <img className="w-8 h-8 mr-2" src={LogoImg} alt="Logo Image" />
          <a className=" text-xl font-semibold text-[#8f53ee]">Codexa.io</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Apps">Apps</NavLink>
          </li>
          <li>
            <NavLink>Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-white bg-linear-to-r from-[#642fe4] to-[#7566f7]">
          {" "}
          <Github />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
