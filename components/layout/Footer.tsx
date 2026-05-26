import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t bg-navy text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">OLICS WASH</h3>
            <p className="text-sm text-gray-400">
              Professional laundry and cleaning services in Port Harcourt. Quality care for your clothes.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-primary-bright">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary-bright">Services</Link></li>
              <li><Link href="/book" className="hover:text-primary-bright">Book Now</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Dry Cleaning</li>
              <li>Wash & Fold</li>
              <li>Ironing</li>
              <li>Curtain Cleaning</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Port Harcourt, Nigeria</li>
              <li>Phone: +234 ...</li>
              <li>Email: info@olicswash.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} OLICS WASH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
