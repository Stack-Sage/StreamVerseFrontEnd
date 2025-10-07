"use client"
import Link from "next/link";
import SpringWrapper from "@/utils/SpringWrapper";
import HeroSection from "@/components/Home/HeroSection";

import TechStackSection from "@/components/Home/TechStackSection";
import ExploreSection from "@/components/Home/ExploreSection";
import HowItWorksSection from "@/components/Home/HowItWorksSection";
import FAQSection from "@/components/Home/FAQSection";

import RecentUpdatesSection from "@/components/Home/RecentUpdatesSection";
import ContactSection from "@/components/Home/ContactSection";
import MeetTheTeamSection from "@/components/Home/MeetTheTeamSection";
import SkillsCarouselSection from "@/components/Home/SkillsCarouselSection";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-4 pt-20 pb-16 bg-transparent transition-colors duration-300">
      <HeroSection />
     
      <ExploreSection />
      <TechStackSection />
      <HowItWorksSection />
      <FAQSection />

  
      <SkillsCarouselSection />

    
      <SpringWrapper delay={900} className="w-full max-w-2xl mb-10 space-y-2">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
          Documentation & Source
        </h2>
        <div className="flex flex-wrap gap-4 mt-4 justify-center">
          <SpringWrapper className="transition-transform duration-200 hover:scale-105">
            <Link
              href="https://github.com/Stack-Sage/StreamVerseFrontEnd"
              target="_blank"
              rel="noopener"
              className="px-5 py-2 rounded-lg bg-neutral-800 text-white font-semibold hover:bg-neutral-700 transition"
            >
              Frontend Repo
            </Link>
          </SpringWrapper>
          <SpringWrapper className="transition-transform duration-200 hover:scale-105">
            <Link
              href="https://github.com/Stack-Sage/MERN-Project-"
              target="_blank"
              rel="noopener"
              className="px-5 py-2 rounded-lg bg-neutral-800 text-white font-semibold hover:bg-neutral-700 transition"
            >
              Backend Repo
            </Link>
          </SpringWrapper>
        </div>
      </SpringWrapper>

      <SpringWrapper
        delay={1100}
        className="w-full max-w-2xl mb-10 space-y-2 text-center"
      >
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
          About the Developer
        </h2>
        <p className="mb-2 text-neutral-700 dark:text-neutral-300">
          Built by <span className="font-bold">Adarsh Pathania </span>
        </p>
        <div className="flex gap-4 justify-center">
          <SpringWrapper className="transition-transform duration-200 hover:scale-110">
            <Link
              href="https://github.com/Stack-Sage"
              target="_blank"
              rel="noopener"
              className="underline text-blue-600 dark:text-blue-400"
            >
              GitHub
            </Link>
          </SpringWrapper>
          <SpringWrapper className="transition-transform duration-200 hover:scale-110">
            <Link
              href="https://www.linkedin.com/in/adarsh-pathania177/"
              target="_blank"
              rel="noopener"
              className="underline text-blue-600 dark:text-blue-400"
            >
              Linkedin
            </Link>
          </SpringWrapper>
          <SpringWrapper className="transition-transform duration-200 hover:scale-110">
            <Link
              href="https://adarsh-dev11.onrender.com/"
              target="_blank"
              rel="noopener"
              className="underline text-blue-600 dark:text-blue-400"
            >
              Personal Portfolio
            </Link>
          </SpringWrapper>
        </div>
      </SpringWrapper>

      {/* How It Works Section */}
      <SpringWrapper delay={1300} className="w-full max-w-2xl mb-10 space-y-2">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
          How StreamVerse Works
        </h2>
        <ol className="space-y-4">
          <SpringWrapper
            delay={1400}
            className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg shadow transition-transform duration-200 hover:scale-105"
          >
            <span className="font-bold">1. Sign Up</span> — Create your account
            and join the community.
          </SpringWrapper>
          <SpringWrapper
            delay={1500}
            className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg shadow transition-transform duration-200 hover:scale-105"
          >
            <span className="font-bold">2. Discover</span> — Explore trending
            videos and playlists.
          </SpringWrapper>
          <SpringWrapper
            delay={1600}
            className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg shadow transition-transform duration-200 hover:scale-105"
          >
            <span className="font-bold">3. Upload</span> — Share your own videos
            and create playlists.
          </SpringWrapper>
          <SpringWrapper
            delay={1700}
            className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg shadow transition-transform duration-200 hover:scale-105"
          >
            <span className="font-bold">4. Interact</span> — Like, comment, and
            join hot takes.
          </SpringWrapper>
        </ol>
      </SpringWrapper>

     

     

      {/* Footer */}
      <footer className="w-full max-w-2xl mx-auto text-center py-6 text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800 mt-8">
        &copy; {new Date().getFullYear()} StreamVerse. All rights reserved.
      </footer>
    </main>
  );
}
