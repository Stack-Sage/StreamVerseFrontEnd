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
  FaStream,
  FaRunning,
} from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import { UserContext } from "@/context/UserContext";
import { showError, showSuccess } from "./toast";

// All routes for desktop sidebar
const navLinks = [
  { href: "/", label: "Home", icon: <FaHome /> },
  { href: "/profile", label: "Profile", icon: <FaUser /> },
  { href: "/dashboard", label: "Dashboard", icon: <FaThLarge /> },
  { href: "/settings", label: "Settings", icon: <FaStream /> },
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
  const { logoutMethod, isLoggedIn } = useContext(UserContext);
  const router = useRouter();

  async function logout() {
    const response = await logoutMethod();
    if (response.success) {
      showSuccess("Logout Successfully!");
      router.push("/login");
    } else {
      showError("Failed to Logout");
    }
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        onMouseOver={() => setCollapsed(false)}
        onMouseOut={() => setCollapsed(true)}
        className={`hidden md:flex fixed top-0 left-0 h-screen
          flex-col justify-between z-50
          backdrop-blur-xl shadow-black/30 dark:border-white/10 shadow-xl dark:shadow-blue-800/50
          transition-[width,padding,margin] duration-300  ease-out
          ${collapsed ? "w-20 px-2" : "w-56 px-6"}`}
        aria-label="Sidebar Navigation"
      >
        {/* Top Button / Logo */}
        <button
          className={`absolute top-2 p-2 rounded-3xl text-black dark:text-black text-2xl transition-all duration-300
            ${collapsed ? "right-6" : "left-8"}`}
          aria-label={collapsed ? "Expand sidebar " : "Collapse sidebar"}
        >
          {collapsed ? <FaStream /> : <span className="transition-all duration-300 ease-out text-center items-center">StreamVerse</span>}
        </button>

        <div className="flex flex-col items-center pt-16 pb-4"></div>

        {/* Navigation Links */}
        <nav
          className={`flex-1 bg-transparent lg:pt-0 md:pt-2 flex flex-col gap-2 text-center transition-[padding] duration-300   ease-in-out`}
          aria-label="Main Navigation"
        >
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`group flex hover:scale-[1.05] items-center gap-4 px-2 py-2 rounded-2xl font-semibold transition-all duration-200 ease-out relative
                ${
                  pathname === href
                    ? `bg-gradient-to-r from-indigo-400/60 via-blue-500/80 to-indigo-600/60 text-black hover:from-indigo-500/60 hover:via-blue-600/80 hover:to-indigo-700/90 dark:bg-[#221c3a] dark:text-white`
                    : `bg-gradient-to-r text-black hover:from-indigo-500/90 hover:via-blue-600/80 hover:to-indigo-700/90 hover:text-[#000000] dark:text-[#b0b3c6] dark:hover:bg-[#23235b] dark:hover:text-white`
                } ${collapsed ? "w-fit bg-transparent items-center" : "w-full items-center"} `}
              aria-current={pathname === href ? "page" : undefined}
            >
              <span
                className={`flex items-center transition-all duration-300 ease-out justify-center w-10 h-10 rounded-full
                  ${pathname === href ? "bg-[#7b2ff2] text-white" : "bg-[#e3eafe] text-[#7b2ff2] dark:bg-[#23235b] dark:text-[#7b2ff2]"}`}
              >
                {icon}
              </span>
              {!collapsed && <span className="text-base font-bold">{label}</span>}
              {collapsed && (
                <span className="absolute left-full ml-2 p-2 px-3 rounded-xl min-w-10 bg-[#08081d] dark:bg-black text-white text-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 ease-out">
                  {label}
                </span>
              )}
            </Link>
          ))}

          {/* Account Pages */}
          <div className="mt-8 mb-2 text-xs font-bold italic text-[#23235b] dark:text-white tracking-wide">
            {collapsed ? "|||" : "ACCOUNT PAGES"}
          </div>

          {isLoggedIn ? (
            <button
              onClick={logout}
              className="group flex items-center gap-4 px-3 py-1 rounded-2xl font-semibold transition-all
                text-[#23235b] hover:bg-[#e3eafe] hover:text-[#7b2ff2] dark:text-[#b0b3c6] dark:hover:bg-[#23235b] dark:hover:text-white"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#e3eafe] text-[#7b2ff2] dark:bg-[#23235b] dark:text-[#7b2ff2]">
                <FaRunning />
              </span>
              {!collapsed && <span>Logout</span>}
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="group flex items-center gap-4 px-3 py-1 rounded-2xl font-semibold transition-all
                text-[#23235b] hover:bg-[#e3eafe] hover:text-[#7b2ff2] dark:text-[#b0b3c6] dark:hover:bg-[#23235b] dark:hover:text-white"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#e3eafe] text-[#7b2ff2] dark:bg-[#23235b] dark:text-[#7b2ff2]">
                  <FaSignInAlt />
                </span>
                {!collapsed && <span className="text-base font-bold">Log In</span>}
              </Link>
              <Link
                href="/register"
                className="group flex items-center gap-4 px-3 py-1 rounded-2xl font-semibold transition-all
                text-[#23235b] hover:bg-[#e3eafe] hover:text-[#7b2ff2] dark:text-[#b0b3c6] dark:hover:bg-[#23235b] dark:hover:text-white"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#e3eafe] text-[#7b2ff2] dark:bg-[#23235b] dark:text-[#7b2ff2]">
                  <FaUserPlus />
                </span>
                {!collapsed && <span className="text-base font-bold">Sign Up</span>}
              </Link>
            </>
          )}
        </nav>
      </div>

      {/* Mobile Bottom Navbar */}
      <nav
        className="md:hidden fixed bottom-0 left-0 w-full shadow-inner dark:shadow-blue-900/50 shadow-black/40 flex justify-around items-center py-2 border-t
        bg-gradient-to-tr from-indigo-400/70 via-blue-400/100 to-indigo-300/90 dark:from-black/80 dark:via-slate-950 dark:to-black/80
        backdrop-blur-[1px] border-b border-[#c7d2fe] dark:border-[#23235b] z-50"
        aria-label="Mobile Navigation"
      >
        {mobileLinks.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center justify-center text-xs font-semibold px-2 py-1 transition-all
              ${pathname === href ? "text-[#7b2ff2]" : "text-[#23235b] dark:text-[#b0b3c6]"}`}
            aria-label={label}
          >
            <span className="text-xl">{icon}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
