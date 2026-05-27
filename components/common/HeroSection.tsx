import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CircleCheck, ArrowRight } from "lucide-react"

export const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-white pt-20">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="max-w-2xl space-y-10 text-left animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center rounded-2xl bg-blue-50 px-6 py-2.5 text-sm font-black text-primary uppercase tracking-widest border border-primary/10">
              <span className="mr-3 flex h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
              #1 Professional Laundry in Port Harcourt
            </div>

            <h1 className="text-6xl font-black tracking-tighter text-navy sm:text-7xl xl:text-8xl leading-[0.9]">
              Your Best <br />
              <span className="text-gradient">Plug In</span>
            </h1>

            <p className="text-2xl text-gray-500 leading-relaxed md:text-3xl font-medium max-w-xl">
              Professional laundry and cleaning services delivered with care.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {['Express Delivery', 'Premium Care', 'Eco-Friendly'].map((item) => (
                <div key={item} className="flex items-center gap-4 text-navy font-bold text-lg">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-success/10 text-success border border-success/20">
                    <CircleCheck className="h-5 w-5" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-5 pt-6 sm:flex-row">
              <Link href="/booking" className="flex-1">
                <Button size="lg" className="w-full text-xl h-20 shadow-premium">
                  Book a Wash Now <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/services" className="flex-1">
                <Button size="lg" variant="outline" className="w-full text-xl h-20 border-2">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto animate-in fade-in zoom-in duration-1000">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3.5rem] border-[16px] border-white shadow-premium">
              {/* Image Placeholder - Matching flyer style (Woman with laundry) */}
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white p-16 text-center">
                <div className="mb-10 h-40 w-40 rounded-3xl bg-white flex items-center justify-center shadow-vibrant rotate-3">
                  <svg className="h-20 w-20 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-navy uppercase tracking-tighter leading-none">Professional<br/><span className="text-primary-bright">Laundry</span></h3>
                <p className="mt-6 text-xl text-gray-400 font-bold max-w-xs">
                  Premium image of woman with laundry basket (as seen on flyer)
                </p>
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute bottom-10 left-10 right-10 animate-bounce-slow">
                <div className="glass-card flex items-center gap-5 rounded-[2rem] p-6 border border-white/50 shadow-2xl">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-success text-white shadow-lg">
                    <CircleCheck className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-xl font-black text-navy uppercase tracking-tight">100% Quality</p>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Satisfaction Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
