

import { FaStar, FaRocket, FaMagic } from 'react-icons/fa';

const updates = [
  { date: '2025-09-01', title: 'New 3D Carousel for Skills', desc: 'Showcase your skills with interactive 3D effects.', icon: <FaRocket /> },
  { date: '2025-08-20', title: 'Glassmorphism Cards', desc: 'Modern card design for all sections.', icon: <FaMagic /> },
  { date: '2025-08-10', title: 'Animated Gradients', desc: 'Smooth transitions and backgrounds.', icon: <FaStar /> },
  { date: '2025-07-25', title: 'Dark/Light Mode', desc: 'Elegant support for both themes.', icon: <FaMagic /> },
  { date: '2025-07-10', title: 'Motion Animations', desc: 'Modern motion effects everywhere.', icon: <FaRocket /> },
];


export default function RecentUpdatesSection() {

  return (
    <section className="w-full max-w-6xl mb-16 px-2">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 dark:from-blue-400 dark:via-pink-400 dark:to-yellow-300 mb-8 tracking-tight text-center drop-shadow-lg">Recent Updates</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-stretch">
        {updates.map((u) => (
          <div
            key={u.title}
            className="flex flex-col items-center bg-gradient-to-br from-white via-blue-50 to-pink-50 dark:from-neutral-900 dark:via-blue-950 dark:to-pink-950 p-8 rounded-2xl shadow-xl ring-4 ring-blue-400/10 dark:ring-pink-400/10 transition-all duration-300 w-full max-w-xs hover:ring-8 hover:shadow-blue-400/40 dark:hover:shadow-pink-400/40 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <div className="text-3xl mb-4 text-blue-600 dark:text-pink-300 transition-transform duration-300 group-hover:scale-110 group-active:scale-90">
              {u.icon}
            </div>
            <span className="font-bold text-lg text-blue-700 dark:text-pink-300 mb-2">{u.date} — {u.title}</span>
            <p className="text-neutral-700 dark:text-neutral-200 text-center">{u.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
