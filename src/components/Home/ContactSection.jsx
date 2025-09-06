
"use client";
import { useState } from "react";



export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="w-full max-w-2xl mb-10 space-y-2">
      <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white mb-4 tracking-tight">Contact / Feedback</h2>
      <div className="bg-gradient-to-br from-white via-blue-50 to-pink-50 dark:from-neutral-900 dark:via-blue-950 dark:to-pink-950 p-6 rounded-xl shadow-lg ring-2 ring-blue-400/10 dark:ring-pink-400/10 flex flex-col gap-4">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" className="p-2 rounded bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 mb-2" required />
          <input type="email" placeholder="Your Email" className="p-2 rounded bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 mb-2" required />
          <textarea placeholder="Your Message" className="p-2 rounded bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 mb-2" required />
          <button type="submit" className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition cursor-pointer hover:scale-105">Send</button>
          {submitted && <span className="text-green-600 dark:text-green-400 mt-2">Thank you for your feedback!</span>}
        </form>
      </div>
    </div>
  );
}
