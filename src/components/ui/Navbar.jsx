"use client";

import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaVideo,
  FaFire,
  FaListUl,
  FaSignInAlt,
  FaUserPlus,
  FaThLarge,
  FaUserCircle,
  FaBars,
  FaChevronLeft,
  FaCog,
  FaQuestionCircle,
  FaToolbox,
  FaTools,
} from "react-icons/fa";


import { MdSubscriptions } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

import { useState, useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import { UserContext } from "@/context/UserContext";

import { showError, showSuccess } from "./toast";


// All routes for desktop sidebar
const navLinks = [
  { href: "/", label: "Home", icon: <FaHome /> },
  { href: "/dashboard", label: "Dashboard", icon: <FaThLarge /> },
  { href: "/settings", label: "Settings", icon: <FaTools /> },
  { href: "/videos", label: "Videos", icon: <FaVideo /> },
  { href: "/hot-takes", label: "Hot Takes", icon: <FaFire /> },
  { href: "/playlists", label: "Playlists", icon: <FaListUl /> },
  { href: "/subscriptions", label: "Subscriptions", icon: <MdSubscriptions /> },
];

// Only show these on mobile
const mobileLinks = [
  { href: "/", label: "Home", icon: <FaHome /> },
  { href: "/dashboard", label: "Dashboard", icon: <FaThLarge /> },
  { href: "/hot-takes", label: "Hot Takes", icon: <FaFire /> },
  { href: "/profile", label: "Profile", icon: <FaUser /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useContext(GlobalContext);
  const { logoutMethod,isLogged} = useContext(UserContext);
  const route = useRouter();

  async function logout() {
    const response = await logoutMethod();
    if (response.success) {
      showSuccess("Logout SuccessFully!");
      route.push("/login");
    
    } else {
      showError("Failed to Logout");
    }
  }

  return (

    <>
      <div
        //  onMouseOver={()=>setCollapsed((c)=> false)}
        //  onMouse={()=>setCollapsed((c)=> true)}
        className={` hidden   hover:-hue-rotate-15 md:flex fixed top-0 left-0 h-screen  
             border-b 
    flex-col justify-between z-40 
    backdrop-blur-xl border-r
    dark:border-white/10 shadow-lg ${
          collapsed ? "w-5rem hover:w-16rem transition-all duration-300 ease-out  " : "w-16rem transition-all duration-300 ease-out " 
        } border-white/20 dark:border-2 dark:border-white shadow-lg  dark:shadow-blue-900/50 shadow-black/30  hover:shadow-xl  
        flex-col justify-between z-50 border-none transition-all duration-300  `}
        aria-label="Sidebar Navigation"
       
      >
      
     
        <button
          className={`absolute top-2 p-2 rounded-3xl  hover:bg-[#0054fb] text-[#000000] dark:bg-[#0063bf] cursor-pointer dark:text-black dark:hover:bg-[#00d9ff] transition-all duration-300 ${
            collapsed ? "right-6 " : "right-4"
          } `}
          onClick={() => setCollapsed((c) => !c)}
         
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <FaBars /> : <FaChevronLeft />}
        </button>

        <div className="flex flex-col items-center pt-16 pb-4"></div>

        <nav
          className={` flex-1  bg-transparent lg:pt-0 md:pt-2 flex flex-col gap-2  text-center 
          ${collapsed ? "px-3 w-fit" : " px-6"}  `}
          aria-label="Main Navigation"
        >
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`group flex  items-center gap-4 px-2 py-2 rounded-2xl font-semibold transition-all relative   
              
              dark:from-indigo-700/50 dark:via-blue-800/60 dark:to-slate-900/70
              dark:hover:from-indigo-600 dark:hover:via-blue-700 dark:hover:to-slate-800

                ${
                  pathname === href
                    ? "bg-gradient-to-r from-indigo-400/60 via-blue-500/80 to-indigo-600/60 text-black hover:from-indigo-500/60 hover:via-blue-600/80 hover:to-indigo-700/90 transition-all duration-300 ease-in-out   dark:bg-[#221c3a]   dark:text-white"
                    : " bg-gradient-to-r from-indigo-300/40 via-blue-500/30 to-indigo-600/20 text-black hover:from-indigo-500/90 hover:via-blue-600/80 hover:to-indigo-700/90  hover:text-[#000000] dark:text-[#b0b3c6] dark:hover:bg-[#23235b] dark:hover:text-white"
                }`}
              aria-current={pathname === href ? "page" : undefined}
            >
              <span
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  pathname === href
                    ? "bg-[#7b2ff2] text-white"
                    : "bg-[#e3eafe] text-[#7b2ff2] dark:bg-[#23235b] dark:text-[#7b2ff2]"
                }`}
              >
                {icon}
              </span>
              <span
                className={`${
                  collapsed ? "hidden" : "block"
                } text-base font-bold`}
              >
                {label}
              </span>
              {/* Tooltip for collapsed sidebar */}
              {collapsed && (
                <span className="absolute left-full ml-2 p-2 px-3 rounded-xl min-w-10 bg-[#08081d] dark:bg-black text-white text-sm  opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                  {label}
                </span>
              )}
            </Link>

            
          ))}

   
          {!collapsed && (
            <>

              <div className="mt-8 mb-2 text-xs font-bold italic text-[#23235b] dark:text-white tracking-wide">
                ACCOUNT PAGES
              </div>
              <Link
                href="/profile"
                className={`group flex items-center gap-4 px-3 py-1 rounded-2xl font-semibold transition-all relative
                  ${
                    pathname === "/profile"
                      ? "bg-[#dbeafe] text-[#23235b] shadow-lg dark:bg-[#221c3a] dark:text-white"
                      : "text-[#23235b] hover:bg-[#e3eafe] hover:text-[#7b2ff2] dark:text-[#b0b3c6] dark:hover:bg-[#23235b] dark:hover:text-white"
                  }`}
                  
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#e3eafe] text-[#7b2ff2] dark:bg-[#23235b] dark:text-[#7b2ff2]">
                  <FaUser />
                </span>
                <span className="text-base font-bold">Profile</span>
              </Link>
      

              {isLogged?
                 <button
                href="/login"
                onClick={logout}
                className="group flex cursor-pointer flex-row items-center text-center gap-4 px-3 py-1  rounded-2xl font-semibold transition-all  text-[#23235b]  hover:bg-invert not-dark:bg-[#e3eafe] hover:text-[#7b2ff2] dark:text-[#b0b3c6] dark:hover:bg-[#23235b] dark:hover:text-white "
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#e3eafe] text-[#7b2ff2] dark:bg-[#23235b] dark:text-[#7b2ff2]">
                  <FaUserPlus />
                </span>
                Logout
              </button>
              : 
              <>
                 <Link
                href="/login"
                className="group flex items-center gap-4 px-3 py-1 rounded-2xl font-semibold transition-all text-[#23235b] hover:bg-[#e3eafe] hover:text-[#7b2ff2] dark:text-[#b0b3c6] dark:hover:bg-[#23235b] dark:hover:text-white "
                >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#e3eafe] text-[#7b2ff2] dark:bg-[#23235b] dark:text-[#7b2ff2]">
                  <FaSignInAlt />
                </span>
                <span className="text-base font-bold">Log In</span>
              </Link>
              <Link
                href="/register"
                className="group flex items-center gap-4 px-3 py-1 rounded-2xl font-semibold transition-all text-[#23235b] hover:bg-[#e3eafe] hover:text-[#7b2ff2] dark:text-[#b0b3c6] dark:hover:bg-[#23235b] dark:hover:text-white"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#e3eafe] text-[#7b2ff2] dark:bg-[#23235b] dark:text-[#7b2ff2]">
                  <FaUserPlus />
                </span>
                <span className="text-base font-bold">Sign Up</span>
              </Link>
                </>
              }
             

           
            </>
          )}
        </nav>
      </div>

      {/* Mobile Bottom Navbar */}
      <nav
        className="md:hidden fixed bottom-0 left-0 w-full  shadow-inner dark:shadow-blue-900/50 shadow-black/40 shadow-t flex justify-around items-center py-2 border-t  bg-gradient-to-tr from-indigo-400/70 hover:contrast-125 via-blue-400/100 to-indigo-300/90  dark:from-black/80 dark:via-slate-950 dark:to-black/80
             backdrop-blur-[1px] 
             border-b  border-[#c7d2fe] dark:border-[#23235b] z-50"
        aria-label="Mobile Navigation"
      >
        {mobileLinks.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center justify-center text-xs font-semibold px-2 py-1 transition-all
              ${
                pathname === href
                  ? "text-[#7b2ff2]"
                  : "text-[#23235b] dark:text-[#b0b3c6]"
              }`}
            aria-label={label}
          >
            <span className="text-xl">{icon}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
