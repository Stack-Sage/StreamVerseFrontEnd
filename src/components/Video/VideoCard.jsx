"use client";

import { VideoContext } from "@/context/VideoContext";
import { useContext, useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  FaEllipsisV,
  FaFileDownload,
  FaPlusSquare,
  FaShareAlt,
  FaFlag,
} from "react-icons/fa";

import { useRouter } from "next/navigation";

const VideoCard = () => {

  const route = useRouter()
  const menuList = [
    { menu: "Add To Playlist", event: "addToPlaylist", link: "", icon: FaPlusSquare },
    { menu: "Download", event: "downloadVideo", link: "", icon: FaFileDownload },
    { menu: "Share", event: "shareVideo", link: "", icon: FaShareAlt },
    { menu: "Report Video", event: "reportVideo", link: "", icon: FaFlag },
  ];

  const { allVideos } = useContext(VideoContext);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [animateMenuId, setAnimateMenuId] = useState(null);
  const cardRefs = useRef({});

 
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!Object.values(cardRefs.current).some((ref) => ref?.contains(e.target))) {
        if (openMenuId) setAnimateMenuId(openMenuId);
        setOpenMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenuId]);


  useEffect(() => {
    if (!openMenuId && animateMenuId) {
      const timer = setTimeout(() => setAnimateMenuId(null), 200); 
      return () => clearTimeout(timer);
    }
  }, [openMenuId, animateMenuId]);

  const openVideoPlayer = (id)=>{
    console.log(id)
    route.push(`/videos/${id}`)
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-6 lg:gap-10">
      {allVideos?.map((video) => {
        const rect = cardRefs.current[video._id]?.getBoundingClientRect();
        const isMenuOpen = openMenuId === video._id;
        const isAnimating = animateMenuId === video._id && !isMenuOpen;

        const menuTop =
          rect && window.innerHeight - rect.bottom < 150
            ? rect.top - 150
            : rect?.bottom;

        return (
          <div
            onClick={() => {openVideoPlayer(video._id)}}
            key={video._id}
            ref={(el) => (cardRefs.current[video._id] = el)}
            className="group relative lg:w-[28em] md:w-[26em] md:h-[16em] h-[18em] w-[20em] lg:h-[22em] hover:bg-black/5 dark:hover:bg-blue-100/5 hover:scale-[1.01] ease-out transition-all duration-300 rounded-xl cursor-pointer hover:shadow-md hover:dark:shadow-lg overflow-visible hover:brightness-110 hover:saturate-[1.2] "
          >
          
            <div className="relative">
              <video
                src={video.videoFile}
                controls={false}
                poster={video.thumbnail}
                autoPlay={false}
                loop={false}
                muted={false}
                loading="lazy"
                className="rounded-lg lg:w-[28em] md:w-[26em] md:h-[15em] h-[12em] w-[20em] lg:h-[16em] object-cover group-hover:opacity-100  transition-all duration-200"
              />
              <span className="absolute bottom-2 right-10 bg-black/70 dark:bg-white/70 dark:text-black text-white text-xs px-2 py-0.5 rounded-md">
                {(Math.floor(video.duration * 100) / 100).toFixed(2)}s
              </span>
            </div>

            <div className="flex flex-row items-start gap-4 p-1 relative">
              <img
                className="w-14 h-14 rounded-full object-cover"
                src={video.owner.avatar}
                alt={`Avatar of ${video.owner.username}`}
              />

              <div className="flex-1 min-w-0">
                <h1 className="text-md lg:text-lg font-semibold tracking-tight flex flex-wrap truncate">
                  {video.title}
                </h1>
                <h2
                  onClick={() => {}}
                  className="italic tracking-wide text-sm hover:text-gray-900 hover:dark:text-gray-100 text-gray-700 dark:text-gray-400"
                >
                  @{video.owner.username}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {video.views} views ·{" "}
                  {(() => {
                    const created = new Date(video.createdAt);
                    const now = new Date();
                    const diffTime = now - created;
                    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                    if (diffDays === 0) return "Today";
                    if (diffDays === 1) return "1 day ago";
                    return `${diffDays} days ago`;
                  })()}
                </p>
              </div>

          
              <div
                className="absolute right-1 bottom-4 lg:bottom-8 md:bottom-5 text-gray-800 dark:hover:bg-gray-300/20 hover:bg-black/10 rounded-full p-3 dark:text-gray-200 hover:text-black dark:hover:text-white transition-all duration-200 ease-out z-20"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenuId(isMenuOpen ? null : video._id);
                  if (!isMenuOpen) setAnimateMenuId(video._id);
                }}
                aria-label="Video options"
              >
                <FaEllipsisV />
              </div>

              {/* Portal Animated Menu */}
              {(isMenuOpen || isAnimating) &&
                rect &&
                createPortal(
                  <div
                    className={`fixed z-50 bg-gray-300 dark:bg-gray-900 dark:text-white rounded-lg shadow-lg px-1 transform transition-all duration-200 ${
                      isMenuOpen
                        ? "opacity-100 scale-100 -translate-y-6"
                        : "opacity-0 scale-95 -translate-y-4"
                    }`}
                    style={{
                      top: menuTop,
                      left: rect.right - 160,
                      minWidth: "160px",

                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {menuList.map((item, idx) => (
                      <button
                        key={idx}
                        className="flex items-center hover:cursor-pointer gap-2 w-full text-left px-3 py-2 hover:bg-gray-100  hover:ring-1  dark:hover:ring-amber-100/20 hover:ring-neutral-900/20 text-sm rounded-sm dark:hover:bg-black   hover:scale-[1.03] transition-all duration-200 ease-out "
                        onClick={() => setOpenMenuId(null)}
                      >
                        <item.icon /> {item.menu}
                      </button>
                    ))}
                  </div>,
                  document.body
                )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoCard;
