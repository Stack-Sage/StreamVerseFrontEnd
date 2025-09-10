import axios from "axios"
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;



const createPlaylistApi = async (formData)=>{
   try {
      const response = await axios.post(`${BASE_URL}/playlist/`, formData, 
         {withCredentials: true}
      )

      console.log(response.data)
      return response.data;      
   } catch (error) {
      throw error
   }
}



export {
   createPlaylistApi,

}