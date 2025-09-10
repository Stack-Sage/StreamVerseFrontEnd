"use client";
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext.js";
import { FaCamera } from "react-icons/fa";
import {
  updateAccountApi,
  updateAvatarApi,
  changePasswordApi,
} from "@/services/user.service.js";
import { showError, showInfo, showSuccess } from "../ui/toast.js";
import { buttonStyle } from "@/styles/globals.js";

const ProfileCard = () => {
  const { user, setUser } = useContext(UserContext);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [updatePassword, setUpdatedPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const [editFields, setEditFields] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
  });

  const [settings, setSettings] = useState({
    emailFollow: true,
    emailAnswer: false,
    emailMention: true,
    launches: false,
    updates: true,
    newsletter: true,
  });

  const handlePasswordChange = (e) => {
    setUpdatedPassword((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const savePassword = async (e) => {
    if (updatePassword.newPassword === updatePassword.oldPassword) {
      showError("New Password must be different");
      return;
    }

    e.preventDefault();
    try {
      const response = await changePasswordApi(updatePassword);
      if (response && response.success) {
        showSuccess(response.message);
        setUpdatedPassword({ oldPassword: "", newPassword: "" });
        setShowPasswordForm(false);
      }
    } catch (error) {
      showError(error?.response?.data?.message || "Failed to Update ");
    }
  };

  const changeAvatar = async (e) => {
    const file = e.target.files[0];

    try {
      showInfo("Uploading Image...");
      const response = await updateAvatarApi(file);

      if (response && response.data) {
        setUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        showSuccess(response.message);
      }
    } catch (error) {
      showError(error?.response?.data?.message || "Failed to Update ");
    }
  };

  const handleChange = async (e) => {
    setEditFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handletoggle = async (e) => {};

  const handleSave = async (e) => {
    try {
      console.log(editFields);
      const response = await updateAccountApi(editFields);
      if (response && response.data) {
        console.log(response);
        setUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        showSuccess(response.message);
        setEdit(false);
      }
    } catch (error) {
      showError(error?.response?.data?.message || "Failed to Update");
    }
  };



  return (
    <div className=" px-4 pb-20 opacity-100     ">
      <div
        className="max-w-4xl lg:min-w-4xl mx-auto mt-30 bg-gradient-to-br from-indigo-300/40 via-blue-200/30 to-indigo-200/40 
dark:from-indigo-900/60 dark:via-blue-950/40 dark:to-slate-900/70  hover:scale-[1.01] duration-300 transition-all ease-out hover:contrast-125 hover:via-blue-300/50 hover:dark:via-black/30 rounded-2xl shadow-lg opacity-90 backdrop-opacity-35 flex flex-col md:flex-row  items-center p-8 gap-8"
      >
        <div className="relative">
          <img
            src={
              user?.avatar ||
              "https://img.favpng.com/6/14/19/computer-icons-user-profile-icon-design-png-favpng-vcvaCZNwnpxfkKNYzX3fYz7h2.jpg"
            }
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-[#e3eafe] dark:border-[#7b2ff2] object-cover shadow"
          />
          {edit && (
            <label className="absolute bottom-2 right-2  bg-[#e3eafe] dark:bg-[#23235b] p-2 rounded-full cursor-pointer shadow">
              <FaCamera className="text-[#9553ff] dark:text-[#8336ff]" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={changeAvatar}
              />
            </label>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col gap-2">
          {edit ? (
            <>
              <input
                name="fullName"
                value={editFields.fullName}
                onChange={handleChange}
                className="font-bold text-xl bg-transparent ring-1 text-center w-fit text-[#23235b] dark:text-white rounded px-3 py-1 mb-2  "
                placeholder="Enter New FullName"
              />

              <input
                name="email"
                value={editFields.email}
                onChange={handleChange}
                className="bg-transparent text-xl ring-1 w-fit text-center text-[#23235b] dark:text-white rounded px-3 py-1 mb-2"
                placeholder="Enter new Email"
              />
            </>
          ) : (
            <>
              <h2 className="font-bold text-xl text-[#23235b] w-fit text-center dark:text-white">
                {user?.fullName.toUpperCase()}
              </h2>

              <div className="text-[#23235b] w-fit text-center dark:text-white text-xl">
                <span className="font-semibold"></span> {user?.email}
              </div>
            </>
          )}
          <div className="flex gap-2 mt-4">
            {edit ? (
              <button
                className={`   px-4 py-2 rounded-xl font-bold  transition ${buttonStyle} `}
                onClick={handleSave}
              >
                Save
              </button>
            ) : (
              <button
                className={`   px-4 py-2 rounded-xl font-bold  transition ${buttonStyle} `}
                onClick={() => setEdit(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
        <div className="flex-col space-y-4 mr-10">
          <div>Videos Watched: {user?.watchHistory?.length || 0}</div>
          <div>Watch Time - 0 hours</div>
          <div>Followers: {user?.followers?.length || 0}</div>
          <div>Following: {user?.following?.length || 0}</div>
          <div></div>
        </div>
      </div>

      <div className=" lg:min-w-4xl max-w-4xl  mx-auto mt-8 opacity-80 grid grid-cols-1  md:grid-cols-2 gap-6">
        <div
          className="bg-gradient-to-br from-indigo-300/40 via-blue-200/30 to-indigo-100/40 
dark:from-indigo-900/60 dark:via-blue-950/40 dark:to-slate-900/70  hover:scale-[1.01] duration-300 transition-all ease-out hover:contrast-125 hover:via-blue-300/50 hover:dark:via-black/30  rounded-2xl shadow p-6"
        >
          <h3 className=" flex flex-row font-bold text-lg mb-4 text-[#23235b] dark:text-white">
            Profile Detials__{" "}
            <p className="text-[#0013a6] italic font-normal text-xl hover:text-blue-900 ">
              {" "}
              @{user?.username}
            </p>
          </h3>

          <div className="mb-4 text-[#23235b]  dark:text-white">
            <span className="font-semibold">Full Name:</span> {user?.fullName}
          </div>
          <div className="mb-4 text-[#23235b] dark:text-white">
            <span className="font-semibold">Email:</span> {user?.email}
          </div>
          <div className="mb-4 text-[#23235b] dark:text-white">
            <span className="font-semibold">Account Created on : </span>{" "}
            {user?.createdAt
              ? new Date(user.createdAt).toLocaleDateString()
              : ""}
          </div>
          <div className="mb-4 text-[#23235b] dark:text-white">
            <span className="font-semibold ">Last Updated on : </span>
            {user?.updatedAt
              ? new Date(user.updatedAt).toLocaleDateString()
              : ""}
          </div>

          {showPasswordForm === true ? (
            <>
              <form
                onSubmit={savePassword}
                className="mt-6 flex flex-col gap-2"
              >
                <label htmlFor="oldPassword" className="font-semibold">
                  Old Password
                </label>
                <input
                  type="password"
                  name="oldPassword"
                  id="oldPassword"
                  value={updatePassword.oldPassword}
                  onChange={handlePasswordChange}
                  className="bg-[#e3eafe] dark:bg-[#23235b] text-[#23235b] dark:text-white rounded px-3 py-1 mb-2"
                  placeholder="Enter old password"
                  required
                />
                <label htmlFor="newPassword" className="font-semibold">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  value={updatePassword.newPassword}
                  onChange={handlePasswordChange}
                  className="bg-[#e3eafe] dark:bg-[#23235b] text-[#23235b] dark:text-white rounded px-3 py-1 mb-2"
                  placeholder="Enter new password"
                  required
                />

                <button
                  type="submit"
                 className={`   px-4 py-2 rounded-xl font-bold  transition ${buttonStyle} `}
                >
                  Update Password
                </button>
              </form>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowPasswordForm(true)}
             className={`   px-4 py-2 rounded-xl font-bold  transition ${buttonStyle} `}
              >
                Change Password
              </button>
            </>
          )}
        </div>

        
      
      </div>
    </div>
  );
};

export default ProfileCard;
