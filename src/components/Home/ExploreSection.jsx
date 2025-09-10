
import Link from 'next/link';
import { FaVideo, FaListUl, FaFire, FaUserPlus, FaUser } from 'react-icons/fa';

const links = [

  { href: '/login', label: 'Log in', color: 'bg-blue-600 hover:bg-blue-700 ring-blue-400', icon: <FaUser /> },
  { href: '/register', label: 'Sign Up', color: 'bg-indigo-700 hover:bg-indigo-700 ring-indigo-400', icon: <FaUserPlus /> },
];

export default function ExploreSection() {
  return (
    <div className="w-full max-w-6xl mb-16 px-2">
      <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white mb-8 tracking-tight text-center">Explore</h2>
      <span className='flex flex-wrap text-center items-center'>

      <h2 className=' text-neutral-900 dark:text-white mb-8 tracking-tight text-center '>If You Don't want to register and explore the Website, You can use this <p className='font-bold'>Demo Account</p> to login - Click on Login button and Fill up those Detials </h2>
      </span>
      <h3 className='text-blue-900 dark:text-blue-200 mb-8 tracking-tight text-center'> Username -  guest123 </h3>
      <h3 className='text-blue-900 dark:text-blue-200 mb-8 tracking-tight text-center'> Password - guest123 </h3>
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
