import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const menuitems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <HashLink to="/home#projects">Projects</HashLink>
      </li>
      <li>
        <HashLink to="/home#about">About</HashLink>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <HashLink to="/home#contact">Contact me</HashLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#0a192f] text-gray-300 fixed z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuitems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          Monirul <span className="text-white ml-1"> Hoque</span>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuitems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
