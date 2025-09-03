'use client'
import { useContext, useState } from "react";
import { toggleVideoLikeApi,toggleCommentLikeApi,getLikedVideosApi } from "@/services/like.service";
import { VideoContext } from "@/context/VideoContext";
import { showSuccess } from "../ui/toast";
import { useCommentFunctions } from "./uploadComment";

export function useLikeHandling() {
  const [likedVideos, setLikedVideos] = useState([]);
  const {setVideoLike,setCommentLike,setCurrentVideo,currentVideo,setComments} = useContext(VideoContext)
  const {fetchVideoComments} = useCommentFunctions()

  const handleVideoLike = async (videoId) => {
   
    try {

      const result = await toggleVideoLikeApi(videoId);

    
      showSuccess(result.message)
      setVideoLike(result.data);
      setCurrentVideo(prev =>({
        ...prev,likesCount:result.data.likesCount
      }));
      return result;
    } catch (error) {

      throw error;
    } 
  };



const handleCommentLike = async (commentId) => {
  try {
    const result = await toggleCommentLikeApi(commentId);
    showSuccess(result.message);

    setComments(prev =>
      prev.map(com =>
        com._id === commentId
          ? { ...com, likesCount: result.data.likesCount }
          : com
      )
    );
 
    await fetchVideoComments(currentVideo._id);
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