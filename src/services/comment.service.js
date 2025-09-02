import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


const getVideoCommentsApi = async(videoId,page = 1, limit = 10)=>{
   try {
      const response = await axios.get(`${BASE_URL}/comments/${videoId}?page=${page}&limit=${limit}`,
         {withCredentials : true}
      )

      console.log(response.data)
      return response.data

   } catch (error) {
      throw error
   }
}

const addCommentApi = async(videoId, content)=>{
   try {
      const response = await axios.post(`${BASE_URL}/comments/${videoId}`, { content }, { withCredentials: true });
     
      return response.data;
   } catch (error) {
      throw error;
   }
}

const updateCommentApi = async(commentId, newComment)=>{
   try {
      const response = await axios.put(`${BASE_URL}/comments/c/${commentId}`, { content: newComment }, { withCredentials: true });
    
      return response.data;
   } catch (error) {
      throw error;
   }
}

const deleteCommentApi = async(commentId)=>{
   try {
      const response = await axios.delete(`${BASE_URL}/comments/c/${commentId}`, { withCredentials: true });

      return response.data;
   } catch (error) {
      throw error;   
   }
}

export {
   getVideoCommentsApi,
   addCommentApi,
   updateCommentApi,
   deleteCommentApi  
}
