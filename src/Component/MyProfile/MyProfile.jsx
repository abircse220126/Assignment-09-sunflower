import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const MyProfile = () => {
  const { user } = use(AuthContext);
  console.log(user);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-2xl flex flex-col md:flex-row items-center p-8 gap-8 max-w-2xl">
        <img
          src={user?.photoURL}
          alt="User"
          className="w-36 h-36 rounded-full shadow-lg object-cover"
        />

        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            {user?.displayName}
          </h2>
          <p className="text-gray-600 mt-2">{user?.email}</p>

          <button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
