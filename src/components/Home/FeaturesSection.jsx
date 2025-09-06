

import { FaUpload, FaListUl, FaFire } from 'react-icons/fa';

const features = [
  {
    title: 'Upload Videos',
    desc: 'Share your content with the world in seconds.',
    color: 'from-blue-500 to-purple-500',
    icon: <FaUpload />,
  },
  {
    title: 'Create Playlists',
    desc: 'Organize your favorite videos and share collections.',
    color: 'from-green-400 to-blue-500',
    icon: <FaListUl />,
  },
  {
    title: 'Hot Takes',
    desc: 'React and share your opinions instantly.',
    color: 'from-pink-500 to-yellow-400',
    icon: <FaFire />,
  },
];

export default function FeaturesSection() {

  return (
    <section className="w-full max-w-6xl mb-16 px-2">
      <h2 className="text-4xl font-extrabold text-neutral-900 dark:text-white mb-8 tracking-tight text-center">Features</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-stretch">
        {features.map((f) => (
          <div
            key={f.title}
            className={`flex flex-col items-center bg-gradient-to-br ${f.color} dark:from-neutral-800 dark:to-neutral-900 p-8 rounded-2xl shadow-2xl ring-4 ring-blue-400/30 dark:ring-pink-400/30 hover:ring-8 hover:shadow-blue-400/40 dark:hover:shadow-pink-400/40 transition-all duration-300 w-full max-w-xs hover:scale-105 active:scale-95 cursor-pointer`}
          >
            <div className="text-4xl mb-4 text-white dark:text-pink-200 transition-transform duration-300 group-hover:scale-110 group-active:scale-90">
              {f.icon}
            </div>
            <h3 className="font-semibold text-xl mb-2 text-white dark:text-pink-200 drop-shadow">{f.title}</h3>
            <p className="text-white/90 dark:text-pink-100/80 text-center">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

