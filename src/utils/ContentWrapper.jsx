'use client'
import { useContext } from "react"
import { GlobalContext } from "@/context/globalContext";

export default function ContentWrapper({children}){
   const {collapsed} = useContext(GlobalContext)

   return (
    <div className={`min-h-screen transition-all ${collapsed ? "md:ml-20" : "md:ml-64"}`}>
      {children}
    </div>
  );
}
