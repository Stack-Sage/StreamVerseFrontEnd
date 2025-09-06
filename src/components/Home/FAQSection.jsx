
import { FaQuestionCircle, FaCheckCircle, FaCloud, FaDatabase, FaRocket, FaPalette } from 'react-icons/fa';

const faqs = [
	{ q: 'Is StreamVerse free?', a: 'Yes, StreamVerse is free for all users.', icon: <FaCheckCircle /> },
	{ q: 'Can I upload any type of video?', a: 'As long as it follows our community guidelines.', icon: <FaQuestionCircle /> },
	{ q: 'How do I create a playlist?', a: 'Go to Playlists and click "Create Playlist".', icon: <FaQuestionCircle /> },
	{ q: 'Why use Next.js?', a: 'For fast, SEO-friendly, scalable frontend development.', icon: <FaRocket /> },
	{ q: 'Why MongoDB?', a: 'For flexible, scalable NoSQL data storage.', icon: <FaDatabase /> },
	{ q: 'Why Cloudinary?', a: 'For fast, secure media uploads and delivery.', icon: <FaCloud /> },
	{ q: 'Is there dark mode?', a: 'Yes, StreamVerse supports both dark and light themes.', icon: <FaPalette /> },
	{ q: 'Are there motion effects?', a: 'Yes, every section uses modern motion and animation.', icon: <FaRocket /> },
	{ q: 'How do I use 3D effects?', a: 'StreamVerse uses 3D tilt and animated backgrounds for a modern look.', icon: <FaRocket /> },
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

export default function FAQSection() {
       return (
	       <div className="w-full max-w-6xl mb-16 px-2 relative">
		       <SnowBackground />
		       <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 dark:from-blue-400 dark:via-pink-400 dark:to-yellow-300 mb-8 tracking-tight text-center drop-shadow-lg">FAQ</h2>
		       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full relative z-10">
			       {faqs.map((faq, i) => (
				       <div
					       key={faq.q}
					       className="flex flex-col items-center bg-gradient-to-br from-white via-blue-50 to-pink-50 dark:from-neutral-900 dark:via-blue-950 dark:to-pink-950 p-8 rounded-2xl shadow-xl ring-4 ring-blue-400/10 dark:ring-pink-400/10 transition-all duration-300 w-full max-w-xs hover:ring-8 hover:shadow-blue-400/40 dark:hover:shadow-pink-400/40 hover:scale-105 cursor-pointer"
				       >
					       <div className="text-3xl mb-4 text-blue-600 dark:text-pink-300 scale-100 group-hover:scale-110 transition-transform duration-300">
						       {faq.icon}
					       </div>
					       <span className="font-bold text-lg text-blue-700 dark:text-pink-300 mb-2">{faq.q}</span>
					       <p className="text-neutral-700 dark:text-neutral-200 text-center">{faq.a}</p>
				       </div>
			       ))}
		       </div>
	       </div>
       );
}
