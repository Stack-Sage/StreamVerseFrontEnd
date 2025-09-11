'use client'
import React, { useState } from 'react'
import { FaUpload, FaTimes } from 'react-icons/fa'
import { publishVideoApi } from '@/services/video.service'
import { showError, showInfo, showSuccess } from '../ui/toast'

const VideoUploadForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [thumbnailPreview, setThumbnailPreview] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [status , setStatus] = useState('Upload')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    try {
      showInfo("Uploading video...")
      setIsLoading(true)
      setStatus('Uploading...')
      const data = await publishVideoApi(formData)
      console.log('Video uploaded successfully:', data)
      setIsOpen(false)
      showSuccess("Video Uploaded Successfully")
      setThumbnailPreview(null)
      setIsLoading(false)
      setStatus('Uploaded')
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
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          {/* Background blur */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Centered modal */}
          <div className="relative bg-neutral-900 text-white p-6 rounded-2xl shadow-2xl w-full max-w-lg z-10 animate-fadeIn">
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
                required
                type="text"
                name="title"
                placeholder="Title"
                className="p-2 rounded-md bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-white text-white placeholder-gray-400"
              />
              <textarea
                required
                name="description"
                placeholder="Description"
                className="p-2 rounded-md bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-white text-white placeholder-gray-400"
              />

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-300">Thumbnail</label>
                <input
                  required
                  type="file"
                  name="thumbnail"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                  className="p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white file:mr-4 file:rounded-md file:border-0 file:bg-neutral-700 file:text-white hover:file:bg-neutral-600"
                />
                {thumbnailPreview && (
                  <img
                    src={thumbnailPreview}
                    alt="Thumbnail Preview"
                    className="mt-2 w-40 h-24 object-cover rounded-md border border-neutral-700"
                  />
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-300">Video</label>
                <input
                  required
                  type="file"
                  name="videoFile"
                  accept="video/*"
                  className="p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white file:mr-4 file:rounded-md file:border-0 file:bg-neutral-700 file:text-white hover:file:bg-neutral-600"
                />
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-neutral-200 transition"
              >
                {status}
              </button>
              {isLoading && (
                <p className="text-center text-blue-400">Uploading...</p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoUploadForm
