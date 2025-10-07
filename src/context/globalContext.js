'use client'
import { showError } from "@/components/ui/toast";
import React,{createContext, useState,useEffect, use} from "react";
import { okayApi } from "@/services/user.service";

export const GlobalContext = createContext();

export const GlobalProvider = ({children})=>{

   useEffect(()=>{
      const  okayCall = async()=>{
         try {
            const response = await okayApi()
            console.log(response , "this is okay response from global context")
         } catch (error) {
            showError("Server not responding")
         }
      }
      okayCall()
   },[])

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