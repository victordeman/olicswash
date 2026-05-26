import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Globe } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-navy pt-20 pb-10 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tighter">
              OLICS<span className="text-primary-bright">WASH</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Port Harcourt&apos;s most reliable professional laundry and cleaning service.
              We bring the sparkle back to your fabrics with professional care.
            </p>
            <div className="flex gap-4">
              {[
                { icon: FaFacebookF, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaXTwitter, href: "#" }
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/" className="hover:text-primary-bright transition-colors font-medium">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary-bright transition-colors font-medium">Services</Link></li>
              <li><Link href="/booking" className="hover:text-primary-bright transition-colors font-medium">Book Now</Link></li>
              <li><Link href="/track" className="hover:text-primary-bright transition-colors font-medium">Track Order</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-white uppercase tracking-wider">Our Locations</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-bright shrink-0" />
                <span>14 Khana Street, D/Line, Port Harcourt</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-bright shrink-0" />
                <span>33 Igboukwu Street, D/Line, Port Harcourt</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-white uppercase tracking-wider">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-primary-bright shrink-0" />
                <span>0811 442 2088</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-primary-bright shrink-0" />
                <span>0810 869 0772</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-primary-bright shrink-0" />
                <span className="text-sm">olicslimited@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Globe className="h-5 w-5 text-primary-bright shrink-0" />
                <span className="text-sm">www.olics.com.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-10 text-center">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} OLICS WASH. Professional Laundry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
