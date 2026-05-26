import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CircleCheck } from "lucide-react"

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white pt-20">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl space-y-8 text-left">
            <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-bold text-primary">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              #1 Professional Laundry in Port Harcourt
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-navy sm:text-7xl">
              Clean Clothes, <br />
              <span className="text-gradient">Fresh Start!</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed md:text-2xl">
              Experience premium laundry and cleaning services tailored for you.
              We don&apos;t just wash; we care for your garments like they&apos;re ours.
            </p>

            <ul className="space-y-3">
              {['Free Pickup & Delivery', 'Express 24h Turnaround', 'Eco-friendly Detergents'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-navy font-medium">
                  <CircleCheck className="h-5 w-5 text-success" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link href="/book">
                <Button size="lg" className="w-full text-lg shadow-xl shadow-primary/20">
                  Book a Wash Now
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full text-lg">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-[12px] border-white shadow-2xl">
              {/* This will be replaced by the flyer image of the woman with a laundry basket */}
              <div className="flex h-full w-full flex-col items-center justify-center bg-gray-100 p-12 text-center">
                <div className="mb-6 h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy">High-Quality Service Image</h3>
                <p className="mt-2 text-gray-500">Woman with laundry basket (as seen in flyers)</p>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 animate-bounce">
                <div className="glass-card flex items-center gap-4 rounded-2xl p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success text-white">
                    <CircleCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy">Quality Guaranteed</p>
                    <p className="text-xs text-gray-500">100% Customer Satisfaction</p>
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
