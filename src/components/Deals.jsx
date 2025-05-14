import React, { useEffect, useState } from 'react'
import dealsImg from '../assets/deals.png'

export default function Deals() {
  const calculateTimeLeft = () => {
    const target = new Date()
    target.setDate(target.getDate() + 10)
    const now = new Date()
    const difference = target - now

    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }

    return difference > 0 ? timeLeft : { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-[#f4e5ec] rounded-2xl max-w-screen-xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div className="relative flex justify-center">
        <img src={dealsImg} alt="Deals" className="max-w-sm w-full object-contain rounded-xl" />
      </div>
      <div className="space-y-6 max-w-xl">
        <h5 className="text-[#ed3849] font-medium text-sm uppercase">Get Up To 20% Discount</h5>
        <h4 className="text-3xl font-extrabold font-serif text-slate-900">Deals Of This Month</h4>
        <p className="text-slate-500">
          Our Women's Fashion Deals of the Month are here to make your style dreams a reality without breaking the bank. Discover a curated collection of exquisite clothing, accessories, and footwear, all handpicked to elevate your wardrobe.
        </p>
        <div className="flex gap-4">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Mins', value: timeLeft.minutes },
            { label: 'Secs', value: timeLeft.seconds },
          ].map((t, i) => (
            <div key={i} className="w-20 h-20 bg-white rounded-full shadow flex flex-col justify-center items-center text-sm font-semibold text-slate-900">
              <span className="text-xl font-bold">{String(t.value).padStart(2, '0')}</span>
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
