"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Prices', href: '/prices' },
  { name: 'Book Now', href: '/booking' },
  { name: 'Track Order', href: '/track' },
  { name: 'Contact', href: '/contact' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled
        ? "bg-white/95 backdrop-blur-md border-b shadow-premium py-2"
        : "bg-transparent py-6"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-1 group">
          <span className="text-3xl font-black tracking-tighter text-primary md:text-4xl transition-transform group-hover:scale-105">
            OLICS<span className="text-primary-bright">WASH</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-black text-navy uppercase tracking-widest hover:text-primary transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary-bright transition-all group-hover:w-full rounded-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/booking" className="hidden sm:block">
            <Button variant="primary" className="shadow-premium px-8 font-black uppercase tracking-wider">
              Book Now
            </Button>
          </Link>

          <button
            className="lg:hidden p-2 text-navy hover:bg-gray-100 rounded-xl transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-2xl transition-all duration-500 ease-in-out overflow-hidden",
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="container mx-auto px-4 py-10 flex flex-col gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-black text-navy hover:text-primary uppercase tracking-tighter"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/booking" onClick={() => setIsOpen(false)}>
            <Button variant="primary" className="w-full h-16 text-xl font-black uppercase">
              Book a Wash
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
