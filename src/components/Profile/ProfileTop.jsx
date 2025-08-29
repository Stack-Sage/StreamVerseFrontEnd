'use client'
import { FaFire, FaGithub } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { ThemeToggle } from "../ui/ThemeToggleButton";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function ProfileTop({
  navLinks = [],

  
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
      className={`fixed top-0 left-0 w-full flex 
             items-center justify-between px-4 md:px-6 h-14
             
          
             
             transition-all duration-300 z-40  ${collapsed ? "h-16 " : "h-14 "}`}
    >
      {/* Left: Collapse Button, Logo & Version */}
      <div className={`flex items-center gap-3 min-w-0  
          `}>
        {leftContent}
        
       
    
        

      
        </div>
     
      <div className="flex-1 flex absolute  items-center justify-center gap-6">
       
            <nav className=" md:flex items-center gap-6 bg-indigo-100 py-2 px-3 rounded-full  ">
              {navLinks.map((link) => (
                <a
                  key={link.label || link}
                  href={link.href || "#"}
                  className="text-[#23235b]  dark:text-[#b0b3c6] hover:text-[#7b2ff2] dark:hover:text-white text-sm font-medium transition"
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
      <div className="flex items-center not-dark:invert gap-3">
      
        {showThemeToggle && <ThemeToggle />}
      </div>

    
    </header>
  );
}