import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


const getAllTakesApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/takes/all`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getUserTakesApi = async()=>{
   try {
      const response = await axios.get(`${BASE_URL}/takes/user/${userId}`, {
         withCredentials: true,
      });
      return response.data;
   } catch (error) {
      throw error;   
   }
}

const updateHotTakeApi = async(takeId, newContent)=>{
   try {
      const response = await axios.patch(`${BASE_URL}/takes/${takeId}`, {
         content: newContent
      }, {
         withCredentials: true
      });
      return response.data;
   } catch (error) {
      throw error;   
   }
}

const deleteHotTakeApi = async(takeId)=>{
   try {
      const response = await axios.delete(`${BASE_URL}/takes/${takeId}`, {
         withCredentials: true
      });
      return response.data;
   } catch (error) {
      throw error;   
   }
}

const rateMidTakeApi = async(takeId)=>{
   try {
      const response = await axios.post(`${BASE_URL}/takes/rate/mid/${takeId}`, {}, {
         withCredentials: true
      });
      return response.data;
   } catch (error) {
      throw error;   
   }
}

const rateCapTakeApi = async(takeId)=>{
   try {
      const response = await axios.post(`${BASE_URL}/takes/rate/cap/${takeId}`, {}, {
         withCredentials: true
      });
      return response.data;
   } catch (error) {
      throw error;   
   }
}


const rateFactsTakeApi = async(takeId)=>{
   try {
      const response = await axios.post(`${BASE_URL}/takes/rate/facts/${takeId}`,{}, {
         withCredentials: true
      });
      return response.data;
   } catch (error) {
      throw error;   
   }
}

const createHotTakeApi = async(content)=>{
   try {
      const response = await axios.post(`${BASE_URL}/takes`, {
         content
      }, {
         withCredentials: true
      });
      return response.data;
   } catch (error) {
      throw error;   
   }
}

export {
   getAllTakesApi,
   getUserTakesApi,
   updateHotTakeApi,
   deleteHotTakeApi,
   rateMidTakeApi,
   rateCapTakeApi,
   rateFactsTakeApi,
   createHotTakeApi
}