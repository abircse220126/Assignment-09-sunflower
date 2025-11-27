import React, { use, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { CreateUser, googleSignIn } = use(AuthContext);
  const [error, setError] = useState(" ");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  console.log(googleSignIn);

  // Register with email and password
  const handlRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const url = event.target.url.value;
    const password = event.target.password.value;
    console.log(name, email, url, password);

    // Client Side Validation is here

    const regex = /^(?=.*[A-Z])(?=.*[a-z]).+$/;
    const minLengthRegex = /^.{6,}$/;

    if (!regex.test(password)) {
      setError(
        "Password must contain at least one uppercase and one lowercase letter"
      );
      return;
    } else if (!minLengthRegex.test(password)) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Firebase Authentication
    CreateUser(email, password)
      .then((result) => {
        console.log(result.user);

        // Now you Need to update profile for finding all information
        updateProfile(result.user, {
          displayName: name,
          photoURL: url,
        })
          .then(() => {
            // now you need to move next step here
            toast.success("Account Created Successfully");
            navigate("/");
          })
          .catch((error) => {
            toast.error("Profile update failed");
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setError("This email is already used");
      });
  };

  // login with google

  const handleGoogleRegister = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // show password
  const handleShowPassword = () => {
    console.log("Show password button is clicked");
    setShowPassword(!showPassword);
    console.log(showPassword);
  };
  return (
    <div className="hero bg-base-200 pt-5">
      <div>
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register Now </h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handlRegister}>
              <fieldset className="fieldset">
                {/* Name Field */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="name"
                />

                {/* Email Fiels */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />

                {/* Photo Url Field */}
                <label className="label">Photo Url</label>
                <input
                  type="text"
                  className="input"
                  name="url"
                  placeholder="Photo Url"
                />

                {/* Password Field */}
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input"
                    name="password"
                    placeholder="Password"
                  />

                  <button
                    className="absolute top-3 right-7"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {error && <h3 className="text-red-500">{error}</h3>}
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>

            <button
              onClick={handleGoogleRegister}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <div>
              <a className="link link-hover">
                Already have an account? please{" "}
                <NavLink to="/login" className="link-hover text-purple-500">
                  Login
                </NavLink>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
