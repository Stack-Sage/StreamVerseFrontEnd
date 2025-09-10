import React from 'react'
import { createPlaylistApi } from '@/services/playlist.service'
import { showError, showSuccess } from '../ui/toast'
import { useContext } from 'react'
const HandlePlaylist = () => {
   const {setPlaylistData} = useContext()
  
   const createPlaylist = async ()=>{

      try {
         const response = await createPlaylistApi(formData)
         if(response){
            showSuccess(response.message)
            setPlaylistData(response.data)

         }
         
      } catch (error) {
         showError("Error Creating Playlist! ")
      }

   }

  return {
   createPlaylist,


  }
}

export default HandlePlaylist