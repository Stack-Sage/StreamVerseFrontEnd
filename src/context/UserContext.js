'use client'
import { showError, showSuccess } from "@/components/ui/toast";
import { loginUserApi, logoutUserApi } from "@/services/user.service";
import React,{createContext, useState,useEffect} from "react";

export const UserContext = createContext();

export const UserProvider = ({children})=>{

   
   
   const [user,setUser] = useState(null);

   useEffect(()=>{
      const storedUser = localStorage.getItem("user");
      if(storedUser){
         setUser(JSON.parse(storedUser))
      }
   },[])

   
   const loginMethod = async (userData)=>{
      try{
         const response = await loginUserApi(userData)
         if(response && response?.data?.user){
              setUser(response.data.user)
               localStorage.setItem("user",JSON.stringify(response.data.user))
            }
            return response;
         }
   
         catch(error){
            showError(error?.response?.data?.message ||"Login Failed")
            throw error;
         }
      }

      const logoutMethod = async()=>{
         try{
            const response = await logoutUserApi()
            if(response.success){
               setUser(null)
               localStorage.removeItem("user")
            }
            return response;
         }
         catch(error){
            showError(error?.response?.data?.message || "Logout Failed")
            throw error;
         }
      }
      
      const changeAvatar = async()=>{

      }



return (
   <UserContext.Provider value = {{
      user,
   setUser, 
   loginMethod,
   logoutMethod,

   }} >
      {children}
   </UserContext.Provider>
)
};