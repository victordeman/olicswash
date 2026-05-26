import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight text-primary">
              OLICS <span className="text-primary-bright">WASH</span>
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">Home</Link>
          <Link href="/services" className="transition-colors hover:text-primary">Services</Link>
          <Link href="/track" className="transition-colors hover:text-primary">Track Order</Link>
          <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/book">
            <Button variant="bright">Book Now</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
