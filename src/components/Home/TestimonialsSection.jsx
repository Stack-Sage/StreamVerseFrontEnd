
// ...existing code...

const testimonials = [
  { name: 'Alex', text: 'StreamVerse made sharing my videos so easy and fun!', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Priya', text: 'The playlists feature is a game changer for my study content.', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Sam', text: 'Hot Takes let me interact with the community instantly.', avatar: 'https://randomuser.me/api/portraits/men/65.jpg' },
];

export default function TestimonialsSection() {
  return (
    <div className="w-full max-w-6xl mb-16 px-2">
      <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white mb-8 tracking-tight text-center">Testimonials</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-stretch">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="flex flex-col items-center bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 dark:from-blue-900 dark:via-pink-900 dark:to-yellow-900 p-8 rounded-2xl shadow-2xl ring-4 ring-blue-400/30 dark:ring-pink-400/30 hover:ring-8 hover:shadow-blue-400/40 dark:hover:shadow-pink-400/40 transition-all duration-300 w-full max-w-xs hover:scale-105 cursor-pointer"
          >
            <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mb-4 shadow-lg ring-4 ring-pink-400/40 transition-transform duration-300 group-hover:scale-110" />
            <p className="text-neutral-700 dark:text-neutral-200 mb-3 text-center">{t.text}</p>
            <span className="font-bold text-blue-700 dark:text-pink-300 text-lg">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
