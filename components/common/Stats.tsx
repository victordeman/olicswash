import React from 'react'
import { Shield, Users, Award, Clock } from 'lucide-react'

const stats = [
  { label: 'Happy Customers', value: '5,000+', icon: Users, color: 'text-primary-bright' },
  { label: 'Items Processed', value: '50k+', icon: Shield, color: 'text-success' },
  { label: 'PH Locations', value: '02', icon: Clock, color: 'text-accent' },
  { label: 'Quality Rating', value: '4.9/5', icon: Award, color: 'text-yellow-500' },
]

export const Stats = () => {
  return (
    <section className="bg-navy py-20 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
         <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary rounded-full blur-[100px]" />
         <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent rounded-full blur-[100px]" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-5 group">
              <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 transition-all group-hover:bg-white group-hover:rotate-12">
                <stat.icon className={`h-10 w-10 ${stat.color} transition-transform group-hover:scale-110 group-hover:rotate-[-12deg]`} />
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-black md:text-5xl tracking-tighter">{stat.value}</p>
                <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
