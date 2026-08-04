import React, { useState, useEffect } from 'react';
import { CAROUSEL_SLIDES } from '../data';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  return (
    <div 
      className="relative w-full h-[320px] md:h-[500px] lg:h-[600px] bg-slate-900 overflow-hidden shadow-lg group"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Slide Images */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0.3, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.3 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img 
              src={CAROUSEL_SLIDES[currentIndex].image} 
              alt={CAROUSEL_SLIDES[currentIndex].alt}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Captions */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-12 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end text-white text-center md:text-left h-3/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="inline-block bg-[#ffd700] text-slate-900 font-mono text-xs font-bold px-2.5 py-1 rounded mb-3">
              FEATURED STORY
            </div>
            <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-black text-[#ffd700] leading-tight mb-3">
              {CAROUSEL_SLIDES[currentIndex].title}
            </h2>
            <p className="text-sm md:text-lg text-slate-200 font-sans max-w-2xl font-medium">
              {CAROUSEL_SLIDES[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual Controls */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-black/40 text-white hover:bg-[#ffd700] hover:text-slate-900 transition-colors duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-black/40 text-white hover:bg-[#ffd700] hover:text-slate-900 transition-colors duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Status indicators */}
      <div className="absolute bottom-6 right-6 z-30 hidden md:flex items-center gap-3">
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-white hover:text-[#ffd700] transition-colors p-1"
          title={isPlaying ? "Pause autoplay" : "Play autoplay"}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
        <div className="flex gap-2">
          {CAROUSEL_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-[#ffd700]' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
