import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getChannelStatsApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/dashboard/channel-stats`, {
      withCredentials: true,
    });
   
   
    return response.data;
  } catch (error) {
    console.error("Error fetching channel stats:", error.message);
    throw error;
  }
};
const getChannelVideosApi = async () => {
   try {
      const response = await axios.get(`${BASE_URL}/dashboard/channel-videos` , {
         withCredentials: true,
      });
      return response.data;
   } catch (error) {
      console.error("Error fetching channel videos:", error);
      throw error;
   }
};
const getChannelTakesApi = async () => {
   try {
      const response = await axios.get(`${BASE_URL}/dashboard/channel-takes`,  {
         withCredentials: true,
      });
      return response.data;
   } catch (error) {
      console.error("Error fetching channel takes:", error);
      throw error;
   }
};
export { getChannelStatsApi, getChannelVideosApi, getChannelTakesApi };
