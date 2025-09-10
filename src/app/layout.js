import { UserProvider } from "@/context/UserContext";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import Navbar from "@/components/ui/Navbar";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/ui/theme-provider";
import ContentWrapper from "../utils/ContentWrapper";
import { GlobalProvider } from "@/context/globalContext";

import { VideoProvider } from "@/context/VideoContext";
import { TakesProvider } from "@/context/hotTakeContext";
import { PlaylistProvider } from "@/context/Playlist.Context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "StreamVerse",
  description: "Video Streaming Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning  = "true"  >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
          text-black dark:text-white font-sans font-medium
          w-screen  bg-gradient-to-tr  transition-colors duration-300 brightness-110 
        contrast-[1.1] dark:from-black/70 dark:via-slate-950/90
          dark:to-black/60 h-screen overflow-hidden
       
       
           from-indigo-500/40 via-indigo-400/30 to-indigo-400/50
      backdrop-blur-3xl backdrop-saturate-200 backdrop-contrast-125
          `}
      >


        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          >
          <Toaster position="top-center" />
          <GlobalProvider>
            <ContentWrapper>
              <UserProvider>
                <VideoProvider>
                  <TakesProvider>
                    <PlaylistProvider>




                <Navbar />

      
                <div className="flex flex-col  h-screen">

                  
                  <main className="flex-1 overflow-y-auto scroll-smooth scrollbar-track-transparent     ">

           
                    {children}
            
                  </main>
                </div>
                
                    </PlaylistProvider>
                  </TakesProvider>
                </VideoProvider>
              </UserProvider>
              
            </ContentWrapper>
          </GlobalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
