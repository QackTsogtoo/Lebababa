import React from 'react'
import headerImage from '../assets/fashion-model.png'

export default function Upper() {
  return (
    <div className='container mx-auto px-15 py-8'>
      <header className="bg-[#f4e5ec] px-30 py-10 rounded-b-2xl ">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl mx-auto md:mx-0">
            <h4 className="text-[#ed3849] font-medium text-sm uppercase tracking-wide">Up to 20% Discount On</h4>
            <h1 className="text-6xl font-extrabold text-slate-900 font-serif leading-tight">Girl's Fashion</h1>
            <p className="text-slate-500 text-base">
              Discover the latest trends and express your unique style with our Women's Fashion website. Explore a curated collection of clothing, accessories, and footwear that caters to every taste and occasion.
            </p>
            <button className="bg-[#ed3849] text-white font-medium py-3 px-6 rounded hover:bg-[#d23141] transition duration-300">
              EXPLORE NOW
            </button>
          </div>
          <div className="flex justify-center">
            <img src={headerImage} alt="Girl in red coat" className="max-w-md w-full object-contain -translate-y-8" />
          </div>
        </div>
      </header>
    </div>
  )
}
