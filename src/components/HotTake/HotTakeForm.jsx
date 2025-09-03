'use client'
import React, { useState } from 'react'
import handleTakes from './handleTakes'
import { X } from 'lucide-react'

const HotTakeForm = () => {
  const [uploadHotTake, setUploadHotTake] = useState('')
  const [open, setOpen] = useState(false)
  const { createHotTake } = handleTakes()

  const handleSubmit = () => {
    if (!uploadHotTake.trim()) return
    createHotTake(uploadHotTake)
    setUploadHotTake('')
    setOpen(false) 
  }
  return (
    <div className="max-w-2xl mx-auto mt-8">

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition"
        >
          + Create Hot Take
        </button>
      )}

   
      {open && (
        <div className="relative mt-6 rounded-2xl border border-border bg-card shadow-xl p-6 animate-fadeIn">
        
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 p-2 rounded-full hover:bg-muted"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>

       
          <h2 className="text-xl font-semibold mb-4 text-foreground">🔥 Drop Your Hot Take</h2>

          
          <textarea
            onChange={(e) => setUploadHotTake(e.target.value)}
            value={uploadHotTake}
            className="p-4 w-full h-32 rounded-xl border border-border bg-muted text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            placeholder="What's your spiciest hot take?"
          />

       
          <div className="flex gap-4 mt-6 justify-end">
            <button
              onClick={handleSubmit}
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-md transition"
            >
              Submit
            </button>
            <button
              onClick={() => {
                setUploadHotTake('')
                setOpen(false)
              }}
              className="px-5 py-2.5 rounded-xl bg-gray-500 text-white font-medium hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}


export default HotTakeForm
