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
} from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggleButton";
import { useState, useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
// All routes for desktop sidebar
const navLinks = [
  { href: "/", label: "Home", icon: <FaHome /> },
  { href: "/dashboard", label: "Dashboard", icon: <FaThLarge /> },
  { href: "/profile", label: "Profile", icon: <FaUser /> },
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
  const { collapsed, setCollapsed, user } = useContext(GlobalContext);

  return (
    <>
   
      <aside
        className={` hidden md:flex lg:flex lg:fixed  fixed top-0 left-0 h-screen bg-gradient-to-br 
          from-white via-[#e3eafe] to-[#c7d2fe] dark:from-[#0b0a2b] dark:via-[#000000] dark:to-[#23235b]
          shadow-2xl flex-col justify-between z-50 border-none transition-all duration-300  `}
        aria-label="Sidebar Navigation"
        style={{ minWidth: collapsed ? "6rem" : "18rem"  }}
      >
        {/* Collapse Button */}
        <button
          className={`absolute top-6  p-2 rounded-3xl bg-[#e3eafe] hover:bg-[#7b2ff2] text-[#23235b] dark:bg-[#23235b] dark:text-white dark:hover:bg-[#7b2ff2] transition-all ${collapsed? "right-8 ": "right-4"} `}
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <FaBars /> : <FaChevronLeft />}
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center pt-8 pb-4">
     
      
        </div>

        {/* Nav Links */}
        <nav className="flex-1 pt-4 flex flex-col gap-2 px-3" aria-label="Main Navigation">
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`group flex items-center gap-4 px-4 py-2 rounded-2xl font-semibold transition-all relative
                ${
                  pathname === href
                    ? "bg-[#dbeafe] text-[#23235b] shadow-lg dark:bg-[#221c3a] dark:text-white"
                    : "text-[#23235b] hover:bg-[#e3eafe] hover:text-[#7b2ff2] dark:text-[#b0b3c6] dark:hover:bg-[#23235b] dark:hover:text-white"
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
              <span className={`${collapsed ? "hidden" : "block"} text-base font-bold`}>
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

          {/* Account Pages Section */}
          {!collapsed && (
            <>
              <div className="mt-8 mb-2 text-xs font-bold text-[#23235b] dark:text-white tracking-wide">
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
              <Link
                href="/login"
                className="group flex items-center gap-4 px-5 py-3 rounded-2xl font-semibold transition-all text-[#23235b] hover:bg-[#e3eafe] hover:text-[#7b2ff2] dark:text-[#b0b3c6] dark:hover:bg-[#23235b] dark:hover:text-white"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#e3eafe] text-[#7b2ff2] dark:bg-[#23235b] dark:text-[#7b2ff2]">
                  <FaSignInAlt />
                </span>
                <span className="text-base font-bold">Sign In</span>
              </Link>
              <Link
                href="/register"
                className="group flex items-center gap-4 px-5 py-3 rounded-2xl font-semibold transition-all text-[#23235b] hover:bg-[#e3eafe] hover:text-[#7b2ff2] dark:text-[#b0b3c6] dark:hover:bg-[#23235b] dark:hover:text-white"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#e3eafe] text-[#7b2ff2] dark:bg-[#23235b] dark:text-[#7b2ff2]">
                  <FaUserPlus />
                </span>
                <span className="text-base font-bold">Sign Up</span>
              </Link>
            </>
          )}
        </nav>

     
      </aside>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#e3eafe] dark:bg-[#181824] shadow-t flex justify-around items-center py-2 border-t border-[#c7d2fe] dark:border-[#23235b] z-50" aria-label="Mobile Navigation">
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