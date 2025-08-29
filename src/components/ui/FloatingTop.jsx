import { AiOutlineFileText, AiOutlineInfoCircle, AiOutlineMail, AiFillStar } from "react-icons/ai";

export default function TooltipNav() {
  const links = [
    { label: "Docs", href: "/docs", icon: <AiOutlineFileText size={28} />, color: "hover:text-green-500" },
    { label: "About", href: "/about", icon: <AiOutlineInfoCircle size={28} />, color: "hover:text-red-500" },
    { label: "Contact", href: "/contact", icon: <AiOutlineMail size={28} />, color: "hover:text-blue-500" },
    { label: "Rate", href: "/rate", icon: <AiFillStar size={28} />, color: "hover:text-yellow-400" },
  ];

  return (
    <div className="flex justify-center items-center bg-black rounded-full p-5 h-[70px] w-[320px]">
      <ul className="flex space-x-6">
        {links.map(({ label, href, icon, color }) => (
          <li key={label} className="relative group">
            <a
              href={href}
              className={`flex justify-center items-center w-12 h-12 rounded-full text-white bg-black transition-all duration-300 ${color}`}
            >
              {icon}
            </a>

            {/* Tooltip - Top */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-top-14 transition-all duration-300 bg-white text-black text-sm font-semibold px-3 py-1  shadow-md">
              {label}
            </div>

            {/* Tooltip - Bottom */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-bottom-14 transition-all duration-300 bg-white text-black text-sm font-semibold px-3 py-1 rounded-md shadow-md">
              {label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
