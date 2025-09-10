'use client'

import handleDashboard from './handleDashboard'
import { UserContext } from '@/context/UserContext'
import { cardStyle } from '@/styles/globals'
import React, { useState, useContext, useEffect } from 'react'

const ShowTakesStats = () => {
  const [tStats, setTStats] = useState(null)
  const { user } = useContext(UserContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { channelTakes } = handleDashboard()
        const stats = await channelTakes()
        setTStats(stats)
      } catch (error) {
        console.error("Error fetching channel takes stats:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8 text-center ">Your Uploaded HotTakes </h1>
      {!tStats ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      ) : tStats.length === 0 ? (
        <div className="text-center text-lg text-muted-foreground mt-10">No Takes are uploaded yet</div>
      ) : (
        <div className="overflow-x-auto pb-6">
          <div
            className="flex gap-8 px-2"
            style={{
              perspective: '1200px',
              scrollSnapType: 'x mandatory',
            }}
          >
            {tStats.map((take, idx) => (
              <div
                key={take._id}
                className= {` ${cardStyle} not-dark:hue-rotate-90 contrast-125  min-w-[320px] max-w-xs  shadow-2xl rounded-2xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:-rotate-y-6 hover:shadow-black/50 `}  
                style={{
                  scrollSnapAlign: 'center',
                  transform: `rotateY(${(idx - tStats.length / 2) * 3}deg)`,
                }}
              >
               
                <div className={`    mb-2 text-center  `}>{take.content.toUpperCase()}</div>
                <div className="flex gap-2  dark:invert  m-2">
                  <span className="bg-red-100  text-red-600 px-2 py-1 rounded-full text-sm">Cap: {take.cap.length}</span>
                  <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-sm">Mid: {take.mid.length}</span>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm">Facts: {take.facts.length}</span>
                </div>
                <div className="text-sm bottom-2  fixed  mt-2">{new Date(take.createdAt).toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowTakesStats