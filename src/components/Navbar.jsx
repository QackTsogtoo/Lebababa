import React from 'react'

export default function NavBar({ onLoginClick }) {
  return (
    <nav className="flex justify-between items-center px-8 py-6 max-w-screen-xl mx-auto">
      {/* Left side navigation */}
      <ul className="flex gap-8 font-medium text-slate-900">
        <li><a href="#" className="hover:text-slate-600 transition-colors">Home</a></li>
        <li><a href="#" className="hover:text-slate-600 transition-colors">Shop</a></li>
        <li><a href="#" className="hover:text-slate-600 transition-colors">Pages</a></li>
        <li><a href="#" className="hover:text-slate-600 transition-colors">Contact</a></li>
      </ul>

      {/* Center logo */}
      <div className="text-3xl font-bold text-slate-900">
        Lebaba<span className="text-red-600">.</span>
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-6">
        <button className="hover:text-slate-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button 
          onClick={onLoginClick}
          className="hover:text-slate-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
        <button className="hover:text-slate-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
