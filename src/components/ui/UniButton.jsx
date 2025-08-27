import React from 'react';

// Recreate UniButton: accessible, reusable, and forwards props.
export default function UniButton({
  children = "Let's get started",
  className = '',
  type = 'button',
  onClick,
  disabled = false,
  ariaLabel,
  innerBgLight = 'bg-white',
  innerBgDark = 'dark:bg-gray-950',
  ...rest
}) {
  return (
    <div className={`inline-block group ${className}`}>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
        className={`relative inline-block p-px font-semibold leading-6 text-white bg-transparent shadow-md cursor-pointer rounded-xl transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        {...rest}
      >
        {/* Gradient ring: mid-light indigo/blue in light mode; slightly lighter in dark mode */}
        <span
          className={`absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-400 via-indigo-500 to-blue-400 dark:from-indigo-300 dark:via-indigo-400 dark:to-blue-300 p-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
          aria-hidden="true"
        />

        {/* Inner panel - visible area of the button */}
        <span className={`relative z-10 px-6 py-3 rounded-xl ${innerBgLight} ${innerBgDark} flex items-center justify-center`}> 
          <span className="transition-all duration-300 group-hover:translate-x-1">{children}</span>
          <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd" />
          </svg>
        </span>
      </button>
    </div>
  );
}
