'use client'
import { createContext, useContext,useEffect,useState } from "react";

const PlaylistContext = createContext()

export const PlaylistProvider = ({ children }) => {
 
   const [playlist, setPlaylist] = useState()



   return (
    <PlaylistContext.Provider value={{

      playlist,
      setPlaylist
    }}>
      {children}
    </PlaylistContext.Provider>
  );
};


