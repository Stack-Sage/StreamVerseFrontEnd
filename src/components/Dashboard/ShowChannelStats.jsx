'use client'
import React, { useState, useContext, useEffect } from 'react'
import handleDashboard from './handleDashboard'
import { UserContext } from '@/context/UserContext'
import { cardStyle } from '@/styles/globals'

const statCards = [
  { key: "totalVideos", label: "Videos", icon: "🎬" },
  { key: "totalViews", label: "Views", icon: "👁️" },
  { key: "totalLikes", label: "Likes", icon: "👍" },
  { key: "totalComments", label: "Comments", icon: "💬" },
  { key: "totalHotTakes", label: "Hot Takes", icon: "🔥" },
  { key: "totalPlaylists", label: "Playlists", icon: "📂" },
  { key: "totalSubscribers", label: "Subscribers", icon: "🧑‍🤝‍🧑" },
  { key: "avgLikes", label: "Avg Likes", icon: "⭐" },
  { key: "avgViews", label: "Avg Views", icon: "📊" },
]

const ShowChannelStats = () => {
  const [channelStats, setChannelStats] = useState(null)
  const { user } = useContext(UserContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { channelStats } = handleDashboard()
        const stats = await channelStats()
        setChannelStats(stats)
      } catch (error) {
        console.error("Error fetching channel stats:", error)
      }
    }
    fetchData()
  }, [])

  if (!channelStats) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 "></div>
      </div>
    )
  }

return (
   <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Channel Analytics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         {statCards.map(card => (
            <div
               key={card.key}
               className={`shadow-lg rounded-xl p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform ${cardStyle} not-dark:hue-rotate-60 not-dark:saturate-150 contrast-125`}
            >
               <span className="text-4xl mb-2">{card.icon}</span>
               <span className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-1">{card.label}</span>
               <p className="text-2xl font-bold mt-1">{channelStats[card.key] ?? 0}</p>
            </div>
         ))}
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className={`rounded-xl shadow p-6 flex flex-col items-center ${cardStyle} hue-rotate-30`}>
            <h2 className="text-xl font-bold mb-2 text-center">Most Liked Video</h2>
            {channelStats.mostLikedVideo ? (
               <div className="text-center">
                  <div className="font-semibold">{channelStats.mostLikedVideo.title}</div>
                  <div className="text-sm text-gray-500">Likes: {channelStats.mostLikedVideo.likesCount}</div>
                  <div className="text-sm text-gray-500">Views: {channelStats.mostLikedVideo.views}</div>
               </div>
            ) : (
               <div className="text-gray-400 text-center">No data available</div>
            )}
         </div>
         <div className={`rounded-xl shadow p-6 flex flex-col items-center ${cardStyle} hue-rotate-30`}>
            <h2 className="text-xl font-bold mb-2 text-center">Most Viewed Video</h2>
            {channelStats.mostViewedVideo ? (
               <div className="text-center">
                  <div className="font-semibold">{channelStats.mostViewedVideo.title}</div>
                  <div className="text-sm text-gray-500">Views: {channelStats.mostViewedVideo.views}</div>
                  <div className="text-sm text-gray-500">Likes: {channelStats.mostViewedVideo.likesCount}</div>
               </div>
            ) : (
               <div className="text-gray-400 text-center">No data available</div>
            )}
         </div>
      </div>
   </div>
)
}

export default ShowChannelStats