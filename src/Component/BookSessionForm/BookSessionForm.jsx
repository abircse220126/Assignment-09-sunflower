import React from "react";
import Swal from "sweetalert2";

const BookSessionSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    Swal.fire({
      title: "Start Your Learning Today",
      text: "Join a session and grow your skills.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="w-full py-10 bg-gradient-to-r from-blue-50 to-blue-100 mt-5">
      <div className="max-w-xs mx-auto bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Book Session
        </h2>

        <form onSubmit={handleSubmit}>
          <fieldset>
            {/* Name Field */}
            <div className="mb-3">
              <label className="text-sm font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm text-black"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm text-black"
              />
            </div>

            {/* Button */}
            <button
              className="w-full bg-blue-600 text-white py-2 rounded-md 
          hover:bg-blue-700 transition-all text-sm font-semibold"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default BookSessionSection;
