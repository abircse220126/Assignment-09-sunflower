import React, { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const MyProfile = () => {
  const { user } = use(AuthContext);
  const [update, setupdate] = useState(false);
  // console.log(user);

  const handleUpdate = () => {
    setupdate(true);
    // console.log(update);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    console.log("Cancel button is clicked");
    setupdate(false);
  };

  const handleUpdateNow = (event) => {
    event.preventDefault();
    const form = event.target.form; // important
    const name = form.name.value;
    const url = form.url.value;

    console.log(name);
    console.log(url);

    updateProfile(user, {
      displayName:name,
      photoURL: url,
    })
      .then(() => {
        alert("Profile is Updated")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
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

            <button
              onClick={handleUpdate}
              className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>

      <div>
        {update && (
          <div className="hero bg-base-200">
            <div className="hero-content flex-col">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Update Profile</h1>
              </div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                  <form>
                    <fieldset className="fieldset">
                      <label className="label">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="input"
                        placeholder="Name"
                      />

                      <label className="label">Image Url</label>
                      <input
                        type="text"
                        className="input"
                        name="url"
                        placeholder="https://imgbb.com/"
                      />
                      <div className="flex justify-between">
                        <button
                          onClick={handleUpdateNow}
                          className="btn btn-neutral mt-4"
                        >
                          Update Now
                        </button>
                        <button
                          onClick={handleCancel}
                          className="btn btn-neutral mt-4"
                        >
                          Cancel
                        </button>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyProfile;
