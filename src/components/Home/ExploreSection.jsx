import Link from 'next/link';
import { FaUser, FaUserPlus } from 'react-icons/fa';

const links = [
  { href: '/login', label: 'Log in', color: 'bg-blue-600 hover:bg-blue-700 ring-blue-400', icon: <FaUser /> },
  { href: '/register', label: 'Sign Up', color: 'bg-indigo-700 hover:bg-indigo-800 ring-indigo-400', icon: <FaUserPlus /> },
];

export default function ExploreSection() {
  return (
    <div className="w-full max-w-6xl mb-16 px-4">
      <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white mb-6 tracking-tight text-center">
        Explore
      </h2>

      <div className="text-center mb-6">
        <p className="text-neutral-900 dark:text-white mb-2">
          Please <strong>log in</strong> or <strong>register</strong> first to explore all the pages and features of the website.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 mb-4">
          Alternatively, you can use the <strong>Demo Account</strong> below to log in quickly:
        </p>
        <h3 className="text-blue-900 dark:text-blue-200 mb-1">Username: guest123</h3>
        <h3 className="text-blue-900 dark:text-blue-200 mb-4">Password: guest123</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Note: This project is still in development. The backend is fully implemented, but some frontend pages, APIs, and features are still in progress. Overall, it's around 70% complete. You can explore it and give feedback. Thank you!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-stretch">
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
