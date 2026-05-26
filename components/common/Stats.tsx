import React from 'react'
import { Shield, Users, Award, Clock } from 'lucide-react'

const stats = [
  { label: 'Happy Customers', value: '5,000+', icon: Users, color: 'text-primary-bright' },
  { label: 'Garments Processed', value: '50k+', icon: Shield, color: 'text-success' },
  { label: 'Service Locations', value: 'PH City', icon: Clock, color: 'text-accent' },
  { label: 'Quality Rating', value: '4.9/5', icon: Award, color: 'text-yellow-500' },
]

export const Stats = () => {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div>
                <p className="text-3xl font-extrabold md:text-4xl">{stat.value}</p>
                <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
