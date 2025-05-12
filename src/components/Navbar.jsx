import React from 'react'

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center px-4 py-6 max-w-screen-xl mx-auto">
      <ul className="flex gap-8 font-medium text-slate-900">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Pages</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="text-2xl font-extrabold text-slate-900 font-serif">
        Lebaba<span className="text-red-600">.</span>
      </div>
      <div className="flex gap-6 text-xl text-slate-900">
        <a href="#"><i className="ri-search-line"></i></a>
        <a href="#"><i className="ri-user-line"></i></a>
        <a href="#"><i className="ri-shopping-bag-line"></i></a>
      </div>
    </nav>
  )
}
