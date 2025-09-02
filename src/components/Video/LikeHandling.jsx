import { useState } from "react";
import { toggleVideoLikeApi,toggleCommentLikeApi,getLikedVideosApi } from "@/services/like.service";

export function useLikeHandling() {
  const [likedVideos, setLikedVideos] = useState([]);
  


  const handleVideoLike = async (videoId) => {
   
    try {
      const result = await toggleVideoLikeApi(videoId);
     console.log(result)
      return result;
    } catch (error) {

      throw error;
    } 
  };


  const handleCommentLike = async (commentId) => {
   
    try {
      const result = await toggleCommentLikeApi(commentId);
      console.log(result)
      return result;
    } catch (error) {
      throw error;
    } 
  };

  
  const fetchLikedVideos = async () => {
    try {
      const result = await getLikedVideosApi();
      setLikedVideos(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  return {
    likedVideos,

    handleVideoLike,
    handleCommentLike,
    fetchLikedVideos,
  };
}