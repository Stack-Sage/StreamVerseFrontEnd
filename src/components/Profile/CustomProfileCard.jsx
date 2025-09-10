"use client";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext.js";
import { FaCamera } from "react-icons/fa";
import {
  updateAccountApi,
  updateAvatarApi,
  changePasswordApi,
  getUserChannelProfileApi,
} from "../../services/user.service.js";
import { showError, showInfo, showSuccess } from "../ui/toast.js";
import { buttonStyle } from "@/styles/globals.js";


const CustomProfileCard = ({profileId}) => {

 const { profile, setProfile } = useContext(UserContext);


  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await getUserChannelProfileApi(profileId);
        setProfile(response.data);
      } catch (error) {
        showError("Error fetching profile");
      }
    }
    if (profileId) fetchProfile();
  }, [profileId, setProfile]);



  return (
    <div className=" px-4 pb-20 opacity-100  flex  flex-col mx-auto justify-center  w-fit    ">
      <div
        className="max-w-4xl mx-auto mt-30 bg-gradient-to-br from-indigo-300/40 via-blue-200/30 to-indigo-200/40 
dark:from-indigo-900/60 dark:via-blue-950/40 dark:to-slate-900/70  hover:scale-[1.01] duration-300 transition-all ease-out hover:contrast-125 hover:via-blue-300/50 hover:dark:via-black/30 rounded-2xl shadow-lg opacity-90 backdrop-opacity-35 flex flex-col md:flex-row items-center p-8 gap-8"
      >
        <div className="relative">
          <img
            src={
              profile?.avatar ||
              "https://img.favpng.com/6/14/19/computer-icons-profile-profile-icon-design-png-favpng-vcvaCZNwnpxfkKNYzX3fYz7h2.jpg"
            }
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-[#e3eafe] dark:border-[#7b2ff2] object-cover shadow"
          />
          
        </div>

  
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="bg-transparent text-xl w-fit text-center text-[#23235b] dark:text-white rounded px-3 py-1 mb-2 italic tracking-wider ">
            {profile?.username}
          </h1>
          <h1 className="bg-transparent text-xl w-fit text-center text-[#23235b] dark:text-white rounded px-3 py-1 mb-2">
            {profile?.email}
          </h1>
           {!profile?.isCurrentUser && (
        <button className={`${buttonStyle} mt-4 py-2 rounded-full`} 
 
        >
          {profile?.isSubscribed ? "Subscribed" : "Subscribe"}
          
        </button>
      )}
    
        </div>

        <div className="flex-col space-y-4 mr-10">
          <div>Videos Watched: {profile?.watchHistory?.length || 0}</div>
          <div>Watch Time - 2 hours</div>
          <div>Followers: {profile?.subscribersCount || 0}  </div>
          <div>Following: {profile?.channelsSubcribedToCount || 0}</div>
          <div></div>
        </div>
        
      </div>

    </div>
  );
};

export default CustomProfileCard;
