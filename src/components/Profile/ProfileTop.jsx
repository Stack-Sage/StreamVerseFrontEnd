'use client'
import { FaFire, FaGithub } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { ThemeToggle } from "../ui/ThemeToggleButton";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function ProfileTop({
  navLinks = [],
  logo = "User Profile",
  version = "",
  subVersion = "",
  searchPlaceholder = "Search",
  showSearch = true,
  showGithub = true,
  showThemeToggle = true,
  leftContent = null,

  onSearchChange = () => {},
}) {
  const [showMenu, setShowMenu] = useState(false);
  const { collapsed, setCollapsed,user } = useContext(UserContext);

  return (
    <header
      className={`sticky top-0 left-0 w-full flex  z-30 items-center justify-between px-4 md:px-6
        bg-gradient-to-r from-white via-[#e3eafe] to-[#c7d2fe] dark:from-[#0b0b36] dark:via-[#010103] dark:to-[#0f0f55]
        border-b border-[#e3eafe] dark:border-[#23235b] shadow-sm 
        transition-all duration-300 ${collapsed ? "h-16 " : "h-14 "}`}
    >
      {/* Left: Collapse Button, Logo & Version */}
      <div className={`flex items-center gap-3 min-w-0  
          `}>
        {leftContent}
        
        <span className={`text-2xl ml-10 font-bold tracking-tight ${collapsed ? "text-xl" : ""} text-[#23235b] dark:text-white`}>
          StreamVerse
        </span>
    
              <span className="bg-[#e3eafe] dark:bg-[#23235b] text-[#7b2ff2] dark:text-[#7b2ff2] text-xs px-2 py-1 rounded-full font-mono">
                {}
              </span>

      
        </div>
     
      <div className="flex-1 flex items-center justify-center gap-6">
       
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label || link}
                  href={link.href || "#"}
                  className="text-[#23235b] dark:text-[#b0b3c6] hover:text-[#7b2ff2] dark:hover:text-white text-sm font-medium transition"
                >
                  {link.label || link}
                  {(link.label || link) === "Roadmap" && <span className="ml-1">↗</span>}
                </a>
              ))}
            </nav>
            {showSearch && (
              <div className="relative flex items-center ml-6 w-64">
                <input
                  type="text"
            
                  placeholder={searchPlaceholder}
                  className="w-full bg-[#e3eafe] dark:bg-[#23235b] text-[#23235b] dark:text-[#b0b3c6] text-sm rounded-full px-4 py-1 pl-8 border border-[#c7d2fe] dark:border-[#23235b] focus:border-[#7b2ff2] outline-none"
                />
                <FiSearch className="absolute left-2 top-2 text-[#7b2ff2] dark:text-[#7b2ff2]" />
                <span className="absolute right-2 top-1 text-xs text-[#7b2ff2] dark:text-[#b0b3c6] bg-[#e3eafe] dark:bg-[#23235b] px-2 py-0.5 rounded">^K</span>
              </div>
            )}
        
  
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
      
        {showThemeToggle && <ThemeToggle />}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center absolute right-4">
        <button
          className="text-[#23235b] dark:text-[#b0b3c6] p-2 rounded hover:bg-[#e3eafe] dark:hover:bg-[#23235b]"
          onClick={() => setShowMenu((m) => !m)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {showMenu && (
          <div className="absolute top-14 left-0 w-full bg-white dark:bg-[#181824] border-b border-[#e3eafe] dark:border-[#23235b] shadow-md flex flex-col items-center py-2 z-50">
            {navLinks.map((link) => (
              <a
                key={link.label || link}
                href={link.href || "/"}
                className="w-full text-center py-2 text-[#23235b] dark:text-[#b0b3c6] hover:bg-[#e3eafe] dark:hover:bg-[#23235b] transition"
                onClick={() => setShowMenu(false)}
              >
                {link.label || link}
                {(link.label || link) === "Roadmap" && <span className="ml-1">↗</span>}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}