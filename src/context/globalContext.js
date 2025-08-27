'use client'
import { showError } from "@/components/ui/toast";
import React,{createContext, useState,useEffect} from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children})=>{

   const [collapsed,setCollapsed] = useState(false)


return (
   <GlobalContext.Provider value = {{
      collapsed,
      setCollapsed,
      
      }} >
      {children}
   </GlobalContext.Provider>
)
};