
// ...existing code...
import { FaUserPlus, FaSearch, FaUpload, FaComments } from 'react-icons/fa';

const steps = [
	{ title: 'Sign Up', desc: 'Create your account and join the community.', icon: <FaUserPlus /> },
	{ title: 'Discover', desc: 'Explore trending videos and playlists.', icon: <FaSearch /> },
	{ title: 'Upload', desc: 'Share your own videos and create playlists.', icon: <FaUpload /> },
	{ title: 'Interact', desc: 'Like, comment, and join hot takes.', icon: <FaComments /> },
];

function SnowBackground() {
	
	return (
		<div className="absolute inset-0 pointer-events-none z-0">
			{[...Array(60)].map((_, i) => (
				<div
					key={i}
					className="absolute rounded-full bg-white/70 dark:bg-blue-300/40"
					style={{
						top: `${Math.random() * 100}%`,
						left: `${Math.random() * 100}%`,
						width: `${Math.random() * 3 + 2}px`,
						height: `${Math.random() * 3 + 2}px`,
						opacity: Math.random() * 0.7 + 0.3,
						filter: 'blur(2px)',
					}}
				/>
			))}
		</div>
	);
}



export default function HowItWorksSection() {
       return (
	       <div className="w-full max-w-6xl mb-16 px-2 relative">
		       <SnowBackground />
		       <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-rose-500 to-blue-400 dark:from-blue-400 dark:via-rose-400 dark:to-blue-300 mb-8 tracking-tight text-center drop-shadow-lg">
			       How StreamVerse Works
		       </h2>
		       <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full relative z-10">
			       {steps.map((step, i) => (
				       <div
					       key={step.title}
					       className="flex flex-col items-center bg-gradient-to-br from-white via-blue-50 to-rose-50 dark:from-blue-950 dark:via-rose-900 dark:to-blue-900 p-10 rounded-3xl shadow-2xl ring-4 ring-blue-400/30 dark:ring-rose-400/30 w-full max-w-xs transition-all duration-300 hover:ring-8 hover:shadow-blue-400/40 dark:hover:shadow-rose-400/40 hover:scale-105 cursor-pointer"
				       >
					       <div className="text-5xl mb-4 text-blue-600 dark:text-rose-300 scale-100 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
					       <span className="font-bold text-2xl text-blue-700 dark:text-rose-300 mb-2">{i + 1}. {step.title}</span>
					       <p className="text-neutral-700 dark:text-blue-200 text-center text-lg">{step.desc}</p>
				       </div>
			       ))}
		       </div>
	       </div>
       );
}
