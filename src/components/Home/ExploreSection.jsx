
import Link from 'next/link';
import { FaVideo, FaListUl, FaFire, FaUserPlus } from 'react-icons/fa';

const links = [
  { href: '/videos', label: 'Videos', color: 'bg-blue-600 hover:bg-blue-700 ring-blue-400', icon: <FaVideo /> },
  { href: '/playlists', label: 'Playlists', color: 'bg-green-600 hover:bg-green-700 ring-green-400', icon: <FaListUl /> },
  { href: '/hot-takes', label: 'Hot Takes', color: 'bg-pink-600 hover:bg-pink-700 ring-pink-400', icon: <FaFire /> },
  { href: '/register', label: 'Sign Up', color: 'bg-yellow-500 hover:bg-yellow-600 ring-yellow-400', icon: <FaUserPlus /> },
];

export default function ExploreSection() {
  return (
    <div className="w-full max-w-6xl mb-16 px-2">
      <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white mb-8 tracking-tight text-center">Explore</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-stretch">
        {links.map(l => (
          <div
            key={l.label}
            className={`flex flex-col items-center px-8 py-6 rounded-2xl text-white font-semibold shadow-lg ring-4 ${l.color} transition-all duration-300 w-full max-w-xs hover:ring-8 hover:shadow-lg hover:scale-105 cursor-pointer`}
          >
            <div className="text-3xl mb-4">{l.icon}</div>
            <Link href={l.href} className="text-lg hover:underline transition-colors duration-200">
              {l.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
