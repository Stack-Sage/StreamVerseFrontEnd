'use client'
import { useRouter } from "next/navigation";
import { registerUserApi } from "@/services/user.service";
import React, { useState } from "react";
import { showError, showSuccess } from "../ui/toast";
import { data } from "autoprefixer";
import { cardStyle } from "@/styles/globals";

export default function RegisterForm() {

  const [message ,setMessage] = useState("Register")

  const router = useRouter()
  const handleSubmit = async(e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      setMessage("Creating Account!")
      const data = await registerUserApi(formData);


      if(data){
        setMessage("Registered Successfully")
        showSuccess(data.message)
      
        router.push('/login')
        
      }
      else{
        showError(error?.response?.data?.message)
      }
    } catch (error) {
      
      showError(error?.response?.data?.message || "Failed")
    }
  }

  return (
    <div className="flex min-h-[93vh] items-center justify-center">
      <form
        className={` w-full flex justify-center  hover:-hue-rotate-15 max-w-md min-w-1/2 mx-auto p-6 
          flex-col gap-4 font-mono ${cardStyle} `}
        onSubmit = {handleSubmit}
        encType="multipart/form-data"
      >
        {/* Username */}
        <label className="font-bold text-black dark:text-white tracking-tight mb-1" htmlFor="username">
          Username
        </label>
        <input
        required
          id="username"
          name="username"
          type="text"
          autoComplete="off"
          placeholder="Enter your username"
          className="bg-inherit w-full text-zinc-800 dark:text-zinc-200 font-mono ring-1 ring-indigo-300 focus:ring-2 focus:ring-indigo-400 dark:ring-indigo-500 dark:focus:ring-indigo-500 outline-none duration-300 placeholder:text-zinc-600 dark:placeholder:text-zinc-400 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg"
        />

        {/* Full Name */}
        <label className="font-bold text-black dark:text-white tracking-tight mb-1" htmlFor="fullName">
          Full Name
        </label>
        <input
        required
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="off"
          placeholder="Enter your full name"
          className="bg-inherit w-full text-zinc-800 dark:text-zinc-200 font-mono ring-1 ring-indigo-300 focus:ring-2 focus:ring-indigo-400 dark:ring-indigo-500 dark:focus:ring-indigo-500 outline-none duration-300 placeholder:text-zinc-600 dark:placeholder:text-zinc-400 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg"
        />

        {/* Email */}
        <label className="font-bold text-black dark:text-white tracking-tight mb-1" htmlFor="email">
          Email
        </label>
        <input
        required
          id="email"
          name="email"
          type="email"
          autoComplete="off"
          placeholder="Enter your email"
          className="bg-inherit w-full text-zinc-800 dark:text-zinc-200 font-mono ring-1 ring-indigo-300 focus:ring-2 focus:ring-indigo-400 dark:ring-indigo-500 dark:focus:ring-indigo-500 outline-none duration-300 placeholder:text-zinc-600 dark:placeholder:text-zinc-400 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg"
        />

        {/* Password */}
        <label className="font-bold text-black dark:text-white tracking-tight mb-1" htmlFor="password">
          Password
        </label>
        <input
        required
        min={4}
          id="password"
          name="password"
          type="password"
          autoComplete="off"
          placeholder="Enter your password"
          className="bg-inherit w-full text-zinc-800 dark:text-zinc-200 font-mono ring-1 ring-indigo-300 focus:ring-2 focus:ring-indigo-400 dark:ring-indigo-500 dark:focus:ring-indigo-500 outline-none duration-300 placeholder:text-zinc-600 dark:placeholder:text-zinc-400 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg"
        />

        {/* Avatar */}
        <label className="font-bold text-black dark:text-white tracking-tight mb-1" htmlFor="avatar">
          Avatar
        </label>
        <input
        required
          id="avatar"
          name="avatar"
          type="file"
          accept="image/*"
          className="block w-full text-zinc-800 dark:text-zinc-200 font-mono rounded-full px-4 py-2 bg-inherit ring-1 ring-indigo-300 focus:ring-2 focus:ring-indigo-400 dark:ring-indigo-500 dark:focus:ring-indigo-500 shadow-md focus:shadow-lg"
        />

        
        <button
          type="submit"
          className="mt-2 flex items-center justify-center gap-2 px-5 py-2 rounded-lg font-bold tracking-tight
            bg-gradient-to-r font-stretch-extra-expanded from-indigo-300 via-transparent to-indigo-400
            dark:from-indigo-900 dark:via-indigo-600 dark:to-indigo-950
            text-black dark:text-white shadow hover:scale-105 hover:shadow-xl transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
        >
          {message}
        </button>
      </form>
    </div>
  );
}
