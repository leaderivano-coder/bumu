import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * BackToTopButton Component
 * Renders a floating, high-contrast button that appears when the user scrolls down.
 * Clicking the button smoothly scrolls the page to the top.
 * 
 * Perfect for editing and code-highlighting in Adobe Dreamweaver!
 */
export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Monitor window scroll offset to toggle visibility
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if page is scrolled more than 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Smoothly scroll back to coordinates (0, 0)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div 
          id="back-to-top-container" 
          className="fixed bottom-[88px] right-6 z-50"
        >
          <motion.button
            id="back-to-top-btn"
            onClick={scrollToTop}
            initial={{ scale: 0.5, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 15 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-11 h-11 bg-[#0047ab] dark:bg-slate-800 text-white dark:text-amber-400 hover:bg-[#ffd700] hover:text-slate-900 dark:hover:bg-amber-400 dark:hover:text-slate-950 rounded-full shadow-2xl transition-all duration-300 border border-slate-200/20 dark:border-slate-700/80 cursor-pointer focus:outline-hidden"
            title="Scroll Back to Top"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
