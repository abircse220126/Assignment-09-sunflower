import React, {  } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";

const ForgetPassword = () => {
//   console.log(user.email);

  const handleReset = (event) => {
    event.preventDefault();
    
    const email = event.target.email.value 
    sendPasswordResetEmail(auth ,email)
    .then(()=>{
        alert("please open your email and Reset your Password")
    })
    .then(error =>{
        console.log(error.message)
    })

  };
  return (
    <div className="flex justify-center items-center bg-gray-100 p-5">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Forgot Password
        </h2>

        <p className="text-center text-gray-500 mb-6 text-sm">
          Enter your email address to reset your password.
        </p>

        <form className="space-y-5" onSubmit={handleReset}>
          {/* Email Field */}
          <fieldset>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-black"
              />
            </div>

            {/* Reset Button */}
            <button
              
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow mt-5"
            >
              Reset Password
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
