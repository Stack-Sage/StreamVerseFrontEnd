import { FaUserCircle } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

export default function TopBar() {
  return (
    <header
      className="fixed z-40 backdrop-blur-3xl top-0 left-0 w-full h-14 flex items-center justify-between px-4 py-1
        bg-gradient-to-br from-indigo-300 via-transparent to-indigo-300
        dark:from-black dark:via-gray-900 dark:to-black
         shadow-md dark:shadow-indigo-900/60
        border-b border-indigo-100 dark:border-indigo-900
        text-black dark:text-white  transition-all duration-300
        font-sans font-bold tracking-tight"
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        
      </div>
      <span
        className="relative font-extrabold lg:text-3xl md:text-xl text-lg font-sans tracking-tight 
        bg-clip-text text-transparent 
        bg-gradient-to-tr from-indigo-700 via-indigo-600 to-indigo-800 
        dark:from-indigo-400 dark:via-indigo-500 dark:to-indigo-600
        drop-shadow-[1px_1px_2px_rgba(0,0,0,0.25)]
        dark:drop-shadow-[2px_2px_6px_rgba(80,80,180,0.7)]
        transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(80,100,255,0.7)] 
        cursor-pointer pl-20"
      >
        StreamVerse
      </span>

      {/* Search Bar */}
      <div className="flex-1 mx-4 max-w-lg">
        <input
          type="text"
          placeholder="Search videos, playlists, users..."
          className="bg-inherit w-full text-zinc-800 dark:text-zinc-200 font-mono ring-1 ring-indigo-300 focus:ring-2 focus:ring-indigo-400 dark:ring-indigo-500 dark:focus:ring-indigo-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg dark:focus:shadow-indigo-500 focus:shadow-indigo-400"
          autoComplete="off"
          name="text"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          className="flex items-center gap-2 px-4 py-1 rounded-lg font-bold tracking-tight
            bg-gradient-to-br from-indigo-500 via-indigo-300 to-indigo-400 
            dark:from-indigo-800 dark:via-indigo-950 dark:to-indigo-700
            text-black dark:text-white shadow hover:scale-110 hover:shadow-xl hover:brightness-110 transition-all duration-200
            focus:outline-none focus:ring-2 cursor-pointer focus:ring-indigo-400 focus:ring-offset-2"
        >
          <FiPlus className="h-4 w-4" />
          <span className="hidden md:inline">Create</span>
        </button>
        <button className="rounded-full p-1 bg-gradient-to-br from-indigo-700 via-indigo-300 to-indigo-400 dark:from-blue-900 dark:via-indigo-700 dark:to-indigo-900 shadow hover:shadow-xl hover:scale-110 transition-all duration-200 cursor-pointer border border-indigo-100 dark:border-indigo-900">
          <FaUserCircle className="h-7 w-7 text-black dark:text-white drop-shadow-sm" />
        </button>
      </div>
    </header>
  );
}