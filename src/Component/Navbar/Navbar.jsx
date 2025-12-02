
import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Navbar = () => {
  const { user , signOutUser } = use(AuthContext);
  console.log(user?.displayName);
  console.log(user?.photoURL);

  const handleLogOut = ()=>{
    console.log("log out button is clicked")

    signOutUser()
    .then(()=>{})
    .catch(error =>{
      console.log(error)
    })
  }

  const link = (
    <>
      <li>
        <NavLink 
          to="/" 
          className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/my-profile" 
          className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200"
        >
          My Profile
        </NavLink>
      </li>

      <li>
        <NavLink 
          to="/top-categories" 
          className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200"
        >
          Top Categories
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="w-full flex items-end mx-auto">
      <div className="navbar bg-white border border-gray-200 shadow-md  px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div 
              tabIndex={0} 
              role="button" 
              className="btn btn-ghost lg:hidden hover:bg-gray-100 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
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
              className="menu menu-sm dropdown-content bg-white border border-gray-200 rounded-lg shadow-lg mt-3 w-52 p-2"
            >
              {link}
            </ul>
          </div>

          <a className="text-2xl font-bold tracking-tight text-blue-600 ">
            daisyUI
          </a>
        </div>


        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            {link}
          </ul>
        </div>


        <div className="navbar-end flex items-center gap-4">

          <div className="avatar">
            <div className="w-10 h-10 rounded-full border-2 border-blue-600 shadow-sm overflow-hidden">
              <img 
                src={user?.photoURL}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="pl-3">
          {
            user?
            <NavLink to="/login">
              <button 
                onClick={handleLogOut}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-sm"
              >
                Logout
              </button>
            </NavLink>
             :
            <NavLink to="/register">
              <button 
                className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-sm"
              >
                SignUp
              </button>
            </NavLink>
          }
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;




