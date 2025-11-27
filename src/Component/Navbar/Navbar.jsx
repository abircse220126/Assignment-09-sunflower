import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Navbar = () => {
  const { user } = use(AuthContext);
  console.log(user?.displayName);
  console.log(user?.photoURL);
  const fixedURL = user?.photoURL?.replace("s96-c", "s256-c");

  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );
  return (
    <nav className="w-11/12 flex  items-end mx-auto pt-3">
      <div className="navbar bg-base-100 shadow-sm ">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">

          <div className="avatar">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src={user?.photoURL}
              className="w-full h-full object-cover"/>
            </div>
          </div>
          <div className="pl-3">
          {
            user?<button className="btn btn-primary">Logout</button> :<button className="btn btn-primary">SignUp</button>
          }
          </div>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
