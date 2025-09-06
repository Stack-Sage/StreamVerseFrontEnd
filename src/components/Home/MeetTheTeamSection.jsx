
// ...existing code...

const team = [
  { name: 'Stack-Sage', role: 'Full Stack Developer', avatar: 'https://randomuser.me/api/portraits/men/12.jpg', bio: 'Creator and maintainer of StreamVerse.' },
  { name: 'Jane Doe', role: 'UI/UX Designer', avatar: 'https://randomuser.me/api/portraits/women/22.jpg', bio: 'Designs beautiful, modern interfaces.' },
  { name: 'John Smith', role: 'Backend Engineer', avatar: 'https://randomuser.me/api/portraits/men/34.jpg', bio: 'Ensures robust and scalable backend.' },
];

export default function MeetTheTeamSection() {
  return (
    <div className="w-full max-w-4xl mb-10 space-y-6">
      <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white mb-4 tracking-tight">Meet the Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map((member, i) => (
          <div
            key={member.name}
            className="bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 dark:from-blue-900 dark:via-pink-900 dark:to-yellow-900 p-6 rounded-xl shadow-2xl ring-2 ring-blue-400/30 dark:ring-pink-400/30 hover:ring-4 hover:shadow-blue-400/40 dark:hover:shadow-pink-400/40 transition-all duration-300 flex flex-col items-center hover:scale-105 cursor-pointer"
          >
            <img src={member.avatar} alt={member.name} className="w-16 h-16 rounded-full shadow-lg ring-2 ring-pink-400/40 mb-3 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-bold text-blue-700 dark:text-pink-300 text-lg mb-1">{member.name}</span>
            <span className="text-sm text-neutral-700 dark:text-neutral-200 mb-2">{member.role}</span>
            <p className="text-neutral-700 dark:text-neutral-200 text-center">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
