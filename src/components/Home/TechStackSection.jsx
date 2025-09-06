

const stack = [
  { name: 'Next.js', color: 'bg-blue-100 dark:bg-blue-900', purpose: 'Frontend framework for SSR, SSG, and fast development.' },
  { name: 'React', color: 'bg-cyan-100 dark:bg-cyan-900', purpose: 'Component-based UI library for interactive interfaces.' },
  { name: 'Tailwind CSS', color: 'bg-pink-100 dark:bg-pink-900', purpose: 'Utility-first CSS for rapid, responsive design.' },
  { name: 'Express.js', color: 'bg-green-100 dark:bg-green-900', purpose: 'Backend framework for REST APIs and routing.' },
  { name: 'MongoDB', color: 'bg-yellow-100 dark:bg-yellow-900', purpose: 'NoSQL database for scalable, flexible data.' },
  { name: 'Mongoose', color: 'bg-purple-100 dark:bg-purple-900', purpose: 'MongoDB ODM for schema and validation.' },
  { name: 'JWT', color: 'bg-gray-100 dark:bg-gray-900', purpose: 'Authentication and authorization.' },
  { name: 'Cloudinary', color: 'bg-indigo-100 dark:bg-indigo-900', purpose: 'Media upload, storage, and delivery.' },
];

export default function TechStackSection() {
  return (
    <section className="w-full max-w-6xl mb-16 px-2">
      <h2 className="text-4xl font-extrabold text-neutral-900 dark:text-white mb-8 tracking-tight text-center">Tech Stack & Purpose</h2>
      <div className="flex flex-wrap gap-6 justify-center text-base w-full">
        {stack.map((s) => (
          <div
            key={s.name}
            className={`px-6 py-4 rounded-2xl font-semibold ${s.color} text-neutral-800 dark:text-white shadow-lg hover:ring-4 hover:ring-blue-400 dark:hover:ring-pink-400 transition-all duration-300 w-full max-w-xs flex flex-col items-center hover:scale-105 active:scale-95 cursor-pointer`}
          >
            <span className="text-lg font-bold mb-2 transition-transform duration-300 group-hover:scale-110 group-active:scale-90">{s.name}</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-300 text-center">{s.purpose}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
