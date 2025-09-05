'use client'

import handleDashboard from './handleDashboard'
import { UserContext } from '@/context/UserContext'
import React, { useState, useContext, useEffect } from 'react'

const ShowVideoStats = () => {
  const [vStats, setVStats] = useState(null)
  const { user } = useContext(UserContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { channelVideos } = handleDashboard()
        const stats = await channelVideos()
        setVStats(stats)
      } catch (error) {
        console.error("Error fetching video stats:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center ">Your Video </h1>
      {!vStats ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : vStats.length === 0 ? (
        <div className="text-center text-lg text-muted-foreground mt-10">No videos found.</div>
      ) : (
        <div className="overflow-x-auto pb-6">
          <div
            className="flex gap-8 px-2"
            style={{
              perspective: '1200px',
              scrollSnapType: 'x mandatory',
            }}
          >
            {vStats.map((video, idx) => (
              <div
                key={video._id}
                className="min-w-[320px] max-w-xs bg-white/80 dark:bg-gray-900 shadow-2xl rounded-2xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:-rotate-y-6 hover:shadow-blue-400"
                style={{
                  scrollSnapAlign: 'center',
                  transform: `rotateY(${(idx - vStats.length / 2) * 3}deg)`,
                }}
              >
                <span className="text-2xl font-bold mb-2">{video.title || "Untitled Video"}</span>
                <span className="text-sm text-gray-500 mb-2">{new Date(video.createdAt).toLocaleDateString()}</span>
                <div className="flex flex-col gap-1 mt-2 w-full">
                  <span className="text-md text-gray-700 dark:text-gray-200">Views: <span className="font-bold">{video.views ?? 0}</span></span>
                  <span className="text-md text-gray-700 dark:text-gray-200">Likes: <span className="font-bold">{video.likesCount ?? 0}</span></span>
                  <span className="text-md text-gray-700 dark:text-gray-200">Comments: <span className="font-bold">{video.comments?.length || 0}</span></span>
               \
                </div>
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">{video.content}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowVideoStats