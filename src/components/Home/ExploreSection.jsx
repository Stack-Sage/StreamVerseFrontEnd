import Link from 'next/link';
import { FaUser, FaUserPlus, FaKey } from 'react-icons/fa';

const links = [
  { href: '/login', label: 'Log in', color: 'bg-blue-600 hover:bg-blue-700 ring-blue-400', icon: <FaUser /> },
  { href: '/register', label: 'Sign Up', color: 'bg-indigo-700 hover:bg-indigo-800 ring-indigo-400', icon: <FaUserPlus /> },
];

export default function ExploreSection() {
  return (
    <div className="w-full max-w-5xl mx-auto mb-16 px-4">
     
      <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white mb-8 tracking-tight text-center">
        Explore StreamVerse
      </h2>

 
      <div className="text-center mb-8 space-y-4">
        <p className="text-neutral-800 dark:text-neutral-200 text-lg">
          To unlock all pages and features, please{" "}
          <strong>log in</strong> or <strong>create an account</strong>.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300">
          Or, try our ready-made <strong>Demo Account</strong> 👇
        </p>

        <div className="inline-block px-6 py-4 bg-neutral-100 dark:bg-neutral-800 rounded-xl shadow-md">
          <h3 className="flex items-center gap-2 font-semibold text-blue-800 dark:text-blue-200 mb-1">
            <FaKey /> Demo Credentials
          </h3>
          <p className="text-blue-700 dark:text-blue-200">Username: <code>guest123</code></p>
          <p className="text-blue-700 dark:text-blue-200 mb-2">Password: <code>guest123</code></p>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 italic">
            Backend is complete; frontend is ~70% done. Feedback is welcome!
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
        {links.map(l => (
          <Link
            key={l.label}
            href={l.href}
            className={`flex flex-col items-center justify-center px-8 py-6 rounded-2xl text-white font-semibold shadow-lg ring-4 ${l.color} transition-all duration-300 w-full max-w-xs hover:ring-8 hover:shadow-xl hover:scale-105`}
          >
            <div className="text-3xl mb-3">{l.icon}</div>
            <span className="text-lg">{l.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
