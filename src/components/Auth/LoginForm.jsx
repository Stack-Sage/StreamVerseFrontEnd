"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserContext";
import { showError, showSuccess } from "../ui/toast";
import { cardStyle } from "@/styles/globals";

export default function LoginForm() {
  const {loginMethod,} = useContext(UserContext)

  const [loginType, setLoginType] = useState("username");


  const [message, setMessage] = useState("Login");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    try {
      setMessage("Please Wait!");
      const response = await loginMethod(userData)
    
      if (response && response.data ) {
      
        setMessage("Logged in Successfully");
        showSuccess(response.message);
        

        router.push("/profile");
      } else {
        console.log("error is ",error?.response?.data?.message)
        showError(error?.response?.data?.message || "Failed no response");
      }
    } catch (error) {
      showError(error?.response?.data?.message || "Failed");
    
    }
  };

  return (
    <div className=" flex min-w-md min-h-[93vh] items-center justify-center ">
      <form
        className={` flex w-2/3 
         justify-center mb-10  hover:contrast-125  mx-auto p-6 lg:p-10
          flex-col gap-4 font-mono ${cardStyle}  `}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        {/* Choose Login Type */}
        <h1 className="text-center text-lg">Choose Login Method </h1>
        <div className="flex gap-4 mb-2 justify-center">
          <button
            type="button"
            className={`px-4 py-2 rounded-full font-bold transition-all duration-200 ${
              loginType === "username"
                ? "bg-indigo-300 dark:bg-indigo-900 text-black dark:text-white"
                : "bg-transparent border border-indigo-300 dark:border-indigo-900 text-black dark:text-white"
            }`}
            onClick={() => setLoginType("username")}
          >
            Username
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-full font-bold transition-all duration-200 ${
              loginType === "email"
                ? "bg-indigo-300 dark:bg-indigo-900 text-black dark:text-white"
                : "bg-transparent border border-indigo-300 dark:border-indigo-900 text-black dark:text-white"
            }`}
            onClick={() => setLoginType("email")}
          >
            Email
          </button>
        </div>

        {/* Username or Email Input */}
        {loginType === "username" ? (
          <>
            <label
              className="font-bold text-black dark:text-white tracking-tight mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="off"
              placeholder="Enter your username"
              className="bg-inherit w-full text-zinc-800 dark:text-zinc-200 font-mono ring-1 ring-indigo-300 focus:ring-2 focus:ring-indigo-400 dark:ring-indigo-500 dark:focus:ring-indigo-500 outline-none duration-300 placeholder:text-zinc-600 dark:placeholder:text-zinc-400 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg"
            />
          </>
        ) : (
          <>
            <label
              className="font-bold text-black dark:text-white tracking-tight mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="off"
              placeholder="Enter your email"
              className="bg-inherit w-full text-zinc-800 dark:text-zinc-200 font-mono ring-1 ring-indigo-300 focus:ring-2 focus:ring-indigo-400 dark:ring-indigo-500 dark:focus:ring-indigo-500 outline-none duration-300 placeholder:text-zinc-600 dark:placeholder:text-zinc-400 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg"
            />
          </>
        )}

        {/* Password */}
        <label
          className="font-bold text-black dark:text-white tracking-tight mb-1"
          htmlFor="password"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="off"
          placeholder="Enter your password"
          className="bg-inherit w-full text-zinc-800 dark:text-zinc-200 font-mono ring-1 ring-indigo-300 focus:ring-2 focus:ring-indigo-400 dark:ring-indigo-500 dark:focus:ring-indigo-500 outline-none duration-300 placeholder:text-zinc-600 dark:placeholder:text-zinc-400 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg"
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
