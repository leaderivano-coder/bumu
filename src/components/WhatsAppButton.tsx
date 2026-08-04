import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  const phoneNumber = "256754064499";
  const defaultText = "Hello Bumu Microfinance, I am visiting your website and would like to learn more about your microfinance services.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultText)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.a
        href={url}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [1, 1.05, 1], opacity: 1 }}
        transition={{
          opacity: { duration: 0.4 },
          scale: {
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut"
          }
        }}
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe55] text-white px-4 py-3 rounded-full shadow-2xl transition-colors duration-300 font-sans font-bold text-sm select-none relative group cursor-pointer"
      >
        {/* Animated Green Ripple Ring in background */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75 group-hover:opacity-0 transition-opacity pointer-events-none" />

        {/* WhatsApp Icon wrapper */}
        <div className="relative">
          <MessageCircle className="h-5 w-5 fill-current" />
          
          {/* Unread notification Badge "1" */}
          <span className="absolute -top-2.5 -right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-[10px] font-black text-white ring-2 ring-white animate-bounce">
            1
          </span>
        </div>

        <span className="tracking-wide">Let’s Talk</span>
      </motion.a>
    </div>
  );
}
