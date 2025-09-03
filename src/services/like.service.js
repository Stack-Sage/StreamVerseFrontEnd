import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


const toggleVideoLikeApi = async (videoId) =>{
   try {
      console.log('videoId is : ', videoId)
      const response = await axios.post(`${BASE_URL}/likes/toggle/v/${videoId}`, {},
         {withCredentials: true}
      )
      if(response.data){
         console.log(response.data, "liked video")
         return response.data;
      }
      
   } catch (error) {
      throw error;
   }
}


const toggleCommentLikeApi = async (commentId) =>{
   try {
      const response = await axios.post(`${BASE_URL}/likes/toggle/c/${commentId}`,{},{withCredentials: true}
      )
      if(response.data){
         return response.data;
      }
      
   } catch (error) {
      throw error;
   }
}

const getLikedVideosApi = async () =>{
   try {
      const response = await axios.get(`${BASE_URL}/likes/likedVideos`,{}, {withCredentials: true}
      )
      if(response.data){
         return response.data;
      }

   } catch (error) {
      throw error;
   }
}


export {
   toggleVideoLikeApi,
   toggleCommentLikeApi,
   getLikedVideosApi
}
