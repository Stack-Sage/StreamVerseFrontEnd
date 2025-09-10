'use client'
import React, { useContext, useState, useEffect } from 'react'
import Image from 'next/image'
import { TakesContext } from '@/context/hotTakeContext'
import handleTakes from './handleTakes'
import { findTime } from '@/utils/findTimeAgo'
import { buttonStyle, cardStyle } from '@/styles/globals'
import { UserContext } from '@/context/UserContext'

const HotTakeList = () => {
  const { takes } = useContext(TakesContext)
  const { fetchAllTakes, rateCapTake, rateFactsTake, rateMidTake, deleteHotTake, updateHotTake } = handleTakes()
  const { user } = useContext(UserContext)
  const [editTakeId, setEditTakeId] = useState(null)

  const [showNumId, setShowNumId] = useState([])

  useEffect(() => {
    fetchAllTakes()
  }, [])

  return (
    <div className="  p-6">
      {takes.length === 0 ? (
        <div className={` text-center  text-lg text-muted-foreground mt-10  `}>Loading...</div>
      ) : (
        <div className={`   max-w-3xl mx-auto space-y-6 mb-20 `}>
          {takes.map((take) => (
            <div
              key={take._id}
              className={` ${cardStyle} rounded-2xl border border-border  shadow-lg p-6 hover:shadow-xl transition-all `}
            >
           
              <div className="flex items-center   gap-4 mb-4">
                <Image
                  className="rounded-full w-14 object-fill h-14"
                  width={48}
                  height={48}
                  src={take.owner.avatar || "/default-avatar.png"}
                  alt={take.owner.username || "User"}
                />
                <div>
                  <h1 className="text-base font-semibold">@{take.owner.username}</h1>
                  <p className="text-xs text-muted-foreground">{findTime(take.createdAt)}</p>
                </div>
              </div>
              <p className="text-lg ml-20 leading-relaxed text-foreground mb-4">Hot Take - {" "}{take.content}</p>


           
              <div className="flex gap-3 ml-20 mb-4">
                <button
                  className={`${buttonStyle} py-1.5 px-4 hue-rotate-180 rounded-xl`}
                  onClick={() => { rateCapTake(take._id); setShowNumId((prev) => [...prev, take._id]) }}
                >
                  🔥 {showNumId.includes(take._id) ? take.cap.length + 1 : ""} Cap
                </button>

                <button
                  className={`${buttonStyle} py-1.5 px-4 rounded-xl `}
                  onClick={() => { rateMidTake(take._id); setShowNumId((prev) => [...prev, take._id]) }}
                >
                  🧢 {showNumId.includes(take._id) ? take.mid.length + 1 : "" } Mid
                </button>

                <button
                  className={`${buttonStyle} py-1.5 px-4 -hue-rotate-90 rounded-xl`}
                  onClick={() => { rateFactsTake(take._id); setShowNumId((prev) => [...prev, take._id]) }}
                >
                  📊 {showNumId.includes(take._id) ? take.facts.length + 1 : ""  } Facts
                </button>
              </div>

              {user?._id === take.owner._id && (
                <div className="flex gap-3 justify-end mb-3">
                  <button
                    className={`${buttonStyle} py-1 px-3 rounded-lg hue-rotate-15 grayscale-50 `}
                    onClick={() => deleteHotTake(take._id)}
                  >
                    Delete
                  </button>
                  {/* <button
                    className={`${buttonStyle} py-1 px-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 hue-rotate-15 grayscale-50`}
                    onClick={() => {
                      updateHotTake(take._id)
                      setEditTakeId(take._id)
                    }}
                  >
                    Edit
                  </button> */}
                </div>
              )}

              {/* {editTakeId === take._id && (
                <div className="flex flex-col gap-3 mt-4">
                  <textarea
                    className="p-3 w-full rounded-lg border border-border bg-muted text-foreground resize-none "
                    defaultValue={take.content}
                  />
                  <div className="flex gap-3 justify-end ">
                    <button
                      onClick={() => {
                        updateHotTake(take._id)
                        setEditTakeId(null)
                      }}
                      className={`${buttonStyle} px-4 py-2 rounded-lg hue-rotate-90 grayscale-50`}
                    >
                      Save
                    </button>
                    <button
                      className={`${buttonStyle} px-4 py-2 rounded-lg  grayscale-75  `}
                      onClick={() => setEditTakeId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )} */}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default HotTakeList
