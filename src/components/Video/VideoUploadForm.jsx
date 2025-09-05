'use client'
import React, { useState } from 'react'
import { FaUpload, FaTimes } from 'react-icons/fa'
import { publishVideoApi } from '@/services/video.service'
import { showError, showInfo, showSuccess } from '../ui/toast'

const VideoUploadForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [thumbnailPreview, setThumbnailPreview] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    try {

      showInfo("Uploading video...")
      const data = await publishVideoApi(formData)
      console.log('Video uploaded successfully:', data)
      setIsOpen(false)
      showSuccess("Video Uploaded Successfully")
      setThumbnailPreview(null) 
    } catch (error) {
      showError("Video Upload Failed")
      console.error('Error uploading video:', error)
    }
  }

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const previewUrl = URL.createObjectURL(file)
      setThumbnailPreview(previewUrl)
    } else {
      setThumbnailPreview(null)
    }
  }

  return (
    <div>
 
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-black text-white rounded-md hover:bg-neutral-800 transition flex items-center gap-2"
      >
        <FaUpload /> Create Video
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
         
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="relative bg-neutral-900 text-white p-6 rounded-2xl shadow-xl w-full max-w-lg z-10">
           
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <FaTimes size={18} />
            </button>

            <h1 className="text-xl font-semibold mb-4 text-center">
              Upload Video
            </h1>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="p-2 rounded-md bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-white text-white placeholder-gray-400"
              />
              <textarea
                name="description"
                placeholder="Description"
                className="p-2 rounded-md bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-white text-white placeholder-gray-400"
              />

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-300">Thumbnail</label>
                <input
                  type="file"
                  name="thumbnail"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                  className="p-2 rounded-md bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-white text-white file:mr-4 file:rounded-md file:border-0 file:bg-neutral-700 file:text-white hover:file:bg-neutral-600"
                />
                {thumbnailPreview && (
                  <img
                    src={thumbnailPreview}
                    alt="Thumbnail Preview"
                    className="mt-2 rounded-md border border-neutral-700 max-h-40 object-contain"
                  />
                )}
              </div>

        
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-300">Video</label>
                <input
                  type="file"
                  name="videoFile"
                  accept="video/*"
                  className="p-2 rounded-md bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-white text-white file:mr-4 file:rounded-md file:border-0 file:bg-neutral-700 file:text-white hover:file:bg-neutral-600"
                />
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-neutral-200 transition"
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoUploadForm
