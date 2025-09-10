export default function HeroSection() {
  return (
    <section className="w-full max-w-4xl text-center mb-12 space-y-4">
   
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400
                     dark:from-blue-400 dark:via-pink-400 dark:to-yellow-300
                     tracking-tight drop-shadow-lg transition-transform duration-300
                     hover:scale-105 active:scale-95 cursor-pointer animate-bounce-slow">
        StreamVerse
      </h1>

    
      <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 font-medium
                    transition-opacity duration-300 hover:opacity-80">
        Discover, upload, and interact with videos. Share hot takes. 
       
      </p>

      

      <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 mt-4">
        Future-additions : Playlists, Subscriptions, Live Streams. 
      </p>

     

     <p className="text-md text-neutral-800 dark:text-neutral-500 mt-2">
  <strong>Important:</strong> StreamVerse highlights full-stack development skills:
      </p>
      <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-500 mt-2 space-y-1">
        <li>Custom backend built with Express and MongoDB, supporting <strong>45+ APIs</strong></li>
        <li>Frontend developed in Next.js, React, and Tailwind CSS</li>
        <li>User authentication and with Encyrption and Tokens </li>
        <li>Video uploads, dynamic feeds, likes, and comments</li>
      </ul>

    </section>
  );
}
