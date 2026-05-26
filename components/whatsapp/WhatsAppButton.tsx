import React from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/2340000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  )
}

export default WhatsAppButton
