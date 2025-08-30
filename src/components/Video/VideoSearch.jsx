'use client'
import React, { useContext, useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { ThemeToggle } from "../ui/ThemeToggleButton";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export default function VideoSearch() {

   const [searchQuery,setSearchQuery] = useState()

   const router = useRouter()
   const {user} = useContext(UserContext)

  return (
    <header className=" left-0 right-0  w-full top-0 fixed  dark:bg-black z-0  text-white backdrop-blur-3xl bg-gradient-br bg-transparent backdrop-opacity-100 overflow-x-hidden ">
      <div className="flex  items-center w-full max-w-full  justify-between px-4 md:px-6 py-1">
       
          
         
 
        
    
        <div className="flex z-10 lg:ml-32 md:ml-24  opacity-100 backdrop-blur-3xl flex-1 justify-center  items-center px-4">
          <div className="flex  md:w-2/3 lg:w-1/2">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow px-4 py-2 rounded-l-full bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
            />
            <button className="px-4 bg-neutral-800 border border-l-0 border-neutral-700 rounded-r-full flex items-center justify-center hover:bg-neutral-700">
              <FaSearch className="text-gray-300" />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle/>
          <button className="flex items-center space-x-2 px-3 py-1 bg-neutral-800 hover:bg-neutral-700 rounded-full">
            <FaPlus className="text-sm" />

            <span className="hidden md:inline text-sm">Create</span>
          </button>

      
          <img
            src={user?.avatar}
            alt="profile"
            onClick={()=>router.push('/profile')}
   
            className="w-10 h-10 cursor-pointer hover:scale-[1.04] transition-all duration-200 ease-out   rounded-full border border-neutral-600"
          />
        </div>
      </div>
    </header>
  );
}
