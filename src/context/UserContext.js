'use client'
import { showError, showSuccess } from "@/components/ui/toast";
import { getCurrentUserApi, loginUserApi, logoutUserApi } from "@/services/user.service";
import React,{createContext, useState,useEffect, useRef} from "react";

export const UserContext = createContext();

export const UserProvider = ({children})=>{

   const [profile,setProfile] = useState(null)
   const [isLoggedIn,setIsLoggedIn]= useState(false);
   const [user,setUser] = useState(null);
   
   
   useEffect(()=>{
      async function verifyUser(){
         try {
            // console.log("before api");
            
            const response = await getCurrentUserApi();
            // console.log("after api");
            
            if(response && response.data){
               // console.log("after res",response.data);
               
               // console.log("response is :",response.data.user)
               setUser(response.data.user)
               setIsLoggedIn(true)
               localStorage.setItem("user",JSON.stringify(response.user))
            }
            
         } catch (error) {
            setUser(null);
            setIsLoggedIn(false);
            localStorage.removeItem("user")
         }
      }
      verifyUser()
   },[])

   
   const loginMethod = async (userData)=>{
      try{
         const response = await loginUserApi(userData)
         if(response && response?.data?.user){
              setUser(response.data.user)
              localStorage.setItem("user",JSON.stringify(response.data.user))
              
                setIsLoggedIn(true)
             
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
               setIsLoggedIn(false)
            }
            return response;
         }
         catch(error){
            showError(error?.response?.data?.message || "Logout Failed")
            throw error;
         }
      }
      
   


return (
   <UserContext.Provider value = {{
      user,
   setUser, 
   loginMethod,
   logoutMethod,
   isLoggedIn,
   profile,
   setProfile

   }} >
      {children}
   </UserContext.Provider>
)
};


