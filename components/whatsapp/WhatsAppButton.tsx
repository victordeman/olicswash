import React from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const phoneNumber = "2348032399944"
  const message = "Hello OLICS WASH, I want to book a laundry service."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#22C55E] text-white shadow-2xl transition-all hover:scale-110 hover:rotate-6 active:scale-95 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#22C55E] animate-ping opacity-20" />
      <MessageCircle className="h-9 w-9" />

      {/* Tooltip */}
      <span className="absolute right-20 scale-0 rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white transition-all group-hover:scale-100 whitespace-nowrap shadow-xl">
        Chat with us! 👋
      </span>
    </a>
  )
}

export default WhatsAppButton
