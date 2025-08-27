import { UserProvider } from "@/context/UserContext";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import Navbar from "@/components/ui/Navbar";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/ui/theme-provider";
import TopBar from "@/components/ui/TopBar";
import ContentWrapper from "../utils/ContentWrapper";
import { GlobalProvider } from "@/context/globalContext";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
          bg-gradient-to-br from-indigo-50 via-gray-50 to-slate-200 
          dark:from-black dark:via-gray-950 dark:to-black  
          text-black dark:text-white font-sans font-medium
          min-h-screen w-full transition-colors duration-300 brightness-110  contrast-[1.05] overflow-clip
        `}
      >
         
          <ThemeProvider
            attribute="class"
            defaultTheme="dark" 
            enableSystem
            disableTransitionOnChange
            >
            <Toaster position="top-center" />
            <GlobalProvider>

            <ContentWrapper>
            <span className="fixed left-0 top-0  h-screen  z-50">

            <Navbar />
            </span>
              <UserProvider>
              <main className="  min-h-screen overflow-y-auto h-screen transition-all duration-300  scroll-smooth  ">
                {children}
              </main>
            </UserProvider>
            </ContentWrapper>
            </GlobalProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}