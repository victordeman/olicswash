import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-navy pt-24 pb-12 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 -mr-24 -mb-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-4 md:grid-cols-2">
          <div className="space-y-8">
            <h3 className="text-3xl font-black tracking-tighter">
              OLICS<span className="text-primary-bright">WASH</span>
            </h3>
            <p className="text-gray-400 leading-relaxed font-medium text-lg">
              Port Harcourt&apos;s most reliable professional laundry and cleaning service.
              We bring the sparkle back to your fabrics with professional care.
              <span className="block mt-4 text-primary-bright font-black uppercase tracking-widest text-sm">Your Best Plug In</span>
            </p>
            <div className="flex gap-4">
              {[
                { icon: FaFacebookF, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaXTwitter, href: "#" },
                { icon: FaWhatsapp, href: "https://wa.me/2348108690772" }
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-primary transition-all hover:-translate-y-1 border border-white/10"
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-8 text-xl font-black text-white uppercase tracking-[0.2em] border-l-4 border-primary-bright pl-4">Quick Links</h4>
            <ul className="space-y-5">
              {[
                { name: 'Home', href: '/' },
                { name: 'Our Services', href: '/services' },
                { name: 'Prices', href: '/prices' },
                { name: 'Book a Wash', href: '/booking' },
                { name: 'Track Order', href: '/track' },
                { name: 'Contact Us', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center text-gray-400 hover:text-primary-bright transition-colors font-bold text-lg">
                    <ArrowRight className="h-4 w-4 mr-3 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-xl font-black text-white uppercase tracking-[0.2em] border-l-4 border-primary-bright pl-4">Our Locations</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-primary/10 text-primary-bright border border-primary/20 transition-colors group-hover:bg-primary group-hover:text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-gray-400 font-medium text-lg">33 Igboukwu Street, D/Line,<br/>Port Harcourt</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-xl font-black text-white uppercase tracking-[0.2em] border-l-4 border-primary-bright pl-4">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group">
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-success/10 text-success border border-success/20 transition-colors group-hover:bg-success group-hover:text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-gray-400 font-bold text-lg">0810 869 0772</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-success/10 text-success border border-success/20 transition-colors group-hover:bg-success group-hover:text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-gray-400 font-bold text-lg">0802 323 9944</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-primary/10 text-primary-bright border border-primary/20 transition-colors group-hover:bg-primary group-hover:text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-gray-400 font-medium truncate text-sm">olicslimited@gmail.com</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-primary/10 text-primary-bright border border-primary/20 transition-colors group-hover:bg-primary group-hover:text-white">
                  <Globe className="h-5 w-5" />
                </div>
                <span className="text-gray-400 font-medium text-lg">www.olics.com.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-black uppercase tracking-widest">
            © {new Date().getFullYear()} OLICS WASH. Professional Laundry.
          </p>
          <div className="flex gap-8 text-gray-500 text-sm font-bold uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
