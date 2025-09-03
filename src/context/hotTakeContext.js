'use client'

import { createContext,useState } from "react"

export const TakesContext = createContext();

export const TakesProvider = ({ children }) => {

   const [takes, setTakes] = useState([]);
   const [userTakes,setUserTakes] = useState([]);


  return (
    <TakesContext.Provider value={{
      takes,
      setTakes,
      userTakes,
      setUserTakes
    }}>
      {children}
    </TakesContext.Provider>
  );
};