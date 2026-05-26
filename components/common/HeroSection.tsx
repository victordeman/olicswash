import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CircleCheck } from "lucide-react"

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-20">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl space-y-8 text-left animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-bold text-primary">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              #1 Professional Laundry in Port Harcourt
            </div>

            <h1 className="text-5xl font-black tracking-tight text-navy sm:text-6xl xl:text-7xl">
              Premium Laundry & <br />
              <span className="text-gradient">Cleaning Services</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed md:text-2xl font-medium">
              Self Service • Bulk Orders • Pick-up & Delivery • Fumigation • Industrial Cleaning
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {['Fast Delivery', 'Professional Care', 'Eco-Friendly'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-navy font-bold">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/10 text-success">
                    <CircleCheck className="h-4 w-4" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link href="/book">
                <Button size="lg" className="w-full text-lg shadow-xl shadow-primary/20">
                  Book Pickup & Delivery
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full text-lg">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto animate-in fade-in zoom-in duration-1000">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-[12px] border-white shadow-2xl">
              {/* This will be replaced by the flyer image of the woman with a laundry basket */}
              <div className="flex h-full w-full flex-col items-center justify-center bg-blue-50 p-12 text-center">
                <div className="mb-6 h-32 w-32 rounded-full bg-white flex items-center justify-center shadow-xl">
                  <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-navy uppercase tracking-tight">Professional Laundry</h3>
                <p className="mt-4 text-gray-500 font-medium">Woman with afro hair holding a laundry basket (Flyer reference)</p>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 animate-bounce">
                <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-lg">
                    <CircleCheck className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-lg font-black text-navy">Quality Guaranteed</p>
                    <p className="text-sm font-medium text-gray-500">100% Customer Satisfaction</p>
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
