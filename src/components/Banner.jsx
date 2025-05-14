import React from 'react'
import { TruckIcon, DollarSignIcon, HeadphonesIcon } from 'lucide-react'

const features = [
  {
    icon: <TruckIcon className="w-8 h-8 text-[#ed3849] mb-3" />,
    title: 'Free Delivery',
    description: 'Offers convenience and the ability to shop from anywhere, anytime.',
  },
  {
    icon: <DollarSignIcon className="w-8 h-8 text-[#ed3849] mb-3" />,
    title: '100% Money Back Guaranty',
    description: 'E-commerce have a review system where customers can share feedback.',
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8 text-[#ed3849] mb-3" />,
    title: 'Strong Support',
    description: 'Offer customer support services to assist customers with queries and issues.',
  },
]

export default function Banner() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
      {features.map((item, idx) => (
        <div key={idx} className="space-y-2">
          <div className="flex justify-center">{item.icon}</div>
          <h4 className="text-lg font-extrabold font-serif text-slate-900">{item.title}</h4>
          <p className="text-slate-500">{item.description}</p>
        </div>
      ))}
    </section>
  )
}
