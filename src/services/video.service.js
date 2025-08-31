import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


const showAllVideosApi = async(filters)=>{
   try{

      const response = await axios.get(`${BASE_URL}/videos/all`
        ,
         {
            params:filters,
            withCredentials:true
         }
         
      )
      
      return response.data
   }
   catch(error){
      throw error
   }
}

const getVideoById = async(id) =>{
   try {
      const response = await axios.get(`${BASE_URL}/videos/${id}`,
         {
            withCredentials:true
         }
      )
      console.log("response is : ",response)
      return response.data
      
   } catch (error) {
      throw error
   }
}

export {
   showAllVideosApi,
   getVideoById,

}