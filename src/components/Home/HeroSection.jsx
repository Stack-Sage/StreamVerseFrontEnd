export default function HeroSection() {
  return (
    <section className="w-full max-w-5xl mx-auto text-center  space-y-8 -mt-10">

      <h1
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400
                   dark:from-blue-400 dark:via-pink-400 dark:to-yellow-300
                   tracking-tight drop-shadow-lg transition-transform duration-300
                   hover:scale-105 active:scale-95 cursor-pointer animate-bounce-slow"
      >
        StreamVerse
      </h1>

  
      <p
        className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 font-medium
                   transition-opacity duration-300 hover:opacity-80 max-w-2xl mx-auto"
      >
        Discover, upload, and interact with videos. Share hot takes.
      </p>

   
      <div className="flex justify-center gap-3 mt-2">
        Upcoming Features Soon !!!
        {["Playlists", "Subscriptions", "Live Streams"].map((item, i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm md:text-base bg-neutral-100 dark:bg-neutral-800 
                       text-neutral-600 dark:text-neutral-300 rounded-full shadow-sm 
                       hover:scale-105 transition-transform"
          >
            {item}
          </span>
        ))}
      </div>

 
      <div className="grid md:grid-cols-2 gap-6 mt-10 text-left">
        <div className="p-5 border rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 flex items-start gap-3 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm">
          <span className="text-3xl">🛠️</span>
          <div>
            <h3 className="font-semibold text-lg">Custom Backend</h3>
            <p>Built with Express & MongoDB, supporting <strong>45+ APIs</strong>.</p>
          </div>
        </div>

        <div className="p-5 border rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 flex items-start gap-3 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm">
          <span className="text-3xl">🎨</span>
          <div>
            <h3 className="font-semibold text-lg">Frontend</h3>
            <p>Developed with Next.js, React, and Tailwind CSS.</p>
          </div>
        </div>

        <div className="p-5 border rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 flex items-start gap-3 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm">
          <span className="text-3xl">🔒</span>
          <div>
            <h3 className="font-semibold text-lg">Authentication</h3>
            <p>Secure login with encryption & JWT tokens.</p>
          </div>
        </div>

        <div className="p-5 border rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 flex items-start gap-3 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm">
          <span className="text-3xl">📹</span>
          <div>
            <h3 className="font-semibold text-lg">Video Features</h3>
            <p>Dynamic feeds, uploads, likes, and comments.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
