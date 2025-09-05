'use client'

import { getChannelStatsApi,getChannelTakesApi,getChannelVideosApi } from '@/services/dashboard.service'
import React, { useContext,useState } from 'react'

const handleDashboard = () => {

    const channelStats = async()=>{

      const stats = await getChannelStatsApi();
      if(!stats.success) throw new Error("Failed to fetch channel stats"  )
        console.log("Channel Stats:", stats.data)
    
      return stats.data
      
   }

   const channelTakes = async()=>{

      const takes = await getChannelTakesApi();
      if(!takes.success) throw new Error("Failed to fetch channel takes"  )
        console.log("Channel Takes:", takes.data)
      return takes.data;
   }

   const channelVideos = async()=>{

      const videos = await getChannelVideosApi();
      console.log("videos",videos);
      if(!videos.success) throw new Error("Failed to fetch channel videos"  )
        console.log("Channel Videos:", videos.data)
      return videos.data;
   }
  return { channelStats,channelTakes,channelVideos }        


}
export default handleDashboard;