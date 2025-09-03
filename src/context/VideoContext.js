'use client'

import React, { createContext, useState, useEffect } from "react";
import { showAllVideosApi } from "@/services/video.service";
import { showError, showSuccess } from "@/components/ui/toast";

export const VideoContext = createContext();


export const VideoProvider = ({ children }) => {

 
  const [allVideos, setAllVideos] = useState([]);
  const [comments,setComments] = useState([])
  const [currentVideo,setCurrentVideo] = useState(null)
  const [videoLike,setVideoLike] = useState(null)
  const [commentLike,setCommentLike] = useState(null)
  const [videoFilters ,setVideoFilters] = useState({
      page: 1 || "",
      limit: 50 | "",
      query : "",
      sortBy: "createdAt" || "",
      sortType: "desc" || ""
  })

  useEffect(() => {
    async function fetchVideos() {
      try {
         
         const response = await showAllVideosApi(videoFilters);
   
   
         if(response && response.success){
           
            console.log("success is ",response.message)
            setAllVideos(response?.data || []);
         }
      } catch (error) {
         throw error
      }
       }
    fetchVideos();
  }, [videoFilters]);
  console.log(allVideos)

  return (
    <VideoContext.Provider value={{ 
      allVideos,
     setAllVideos,
      comments,
      setComments,
      currentVideo,
      setCurrentVideo,
      videoLike,
      setVideoLike,
      commentLike,
      setCommentLike
      }}>
      {children}
    </VideoContext.Provider>
  );
};