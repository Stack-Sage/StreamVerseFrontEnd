"use client";

import { VideoContext } from "@/context/VideoContext";
import { useContext } from "react";
import { FaCommentDots, FaDotCircle, FaEllipsisV } from "react-icons/fa";

const VideoCard = () => {
  const { allVideos } = useContext(VideoContext);

    const openVideo = async()=>{
      
    }

  return (
    <div className=" space-x-3 space-y-6 grid lg:grid-cols-3 grid-cols-1  ">
      {allVideos?.map((video) => (

        <div 

        onClick={openVideo}

         key={video._id} 
         className=" hover:bg-black/10 dark:hover:bg-blue-100/10 hover:scale-[1.01] ease-out transition-all duration-300  p-2 rounded-xl cursor-pointer"
         >
          <div className=" ">
          <video
            src={video.videoFile}
            controls

            poster = {video.thumbnail}
            
            autoPlay={false}
            loop = {false}
            muted = {false}
            height={300}
            width={400}
            className="rounded-xl  shadow-lg w-[28em] h-[16em]  object-cover "
          />
          </div>
          <div className="flex flex-col mx-2 ">

          <div className=" flex flex-row items-center w-full  justify-items-stretch  space-x-4  ">
            <div className="flex flex-row items-center w-full space-x-4">

          <img className="w-16 h-16 rounded-full " src={video.owner.avatar} alt="" />
          <div className="flex-col">

          <h1 className="text-xl "> {video.title.toUpperCase()} </h1>
          <h1 className=" italic  tracking-widest  text-lg">{video.owner.username}</h1>
          <p> {video.views} views - {(() => {
            const created = new Date(video.createdAt);
              const now = new Date();
              const diffTime = now - created; // in ms
              const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
              
              if (diffDays === 0) return "Today";
              if (diffDays === 1) return "1 day ago";
              return `${diffDays} days ago`;
            })()} </p>

              </div>
          </div>
          <div className=" mr-4 -mt-8 ">
            <FaEllipsisV/>
          </div>
          </div>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default VideoCard;
