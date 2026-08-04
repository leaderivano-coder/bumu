import React from 'react';
import BumuLogo from './BumuLogo';

export default function Header() {
  return (
    <header className="bg-[#0047ab] text-white py-4 px-6 border-b-4 border-[#ffd700] shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side: Title and Slogan */}
        <div className="flex items-center gap-4">
          <div className="text-center md:text-left space-y-1">
            <h1 className="font-display text-2xl md:text-4xl font-black tracking-tight drop-shadow-sm text-white">
              Bumu Microfinance
            </h1>
            
            {/* Highly Visible Slogan */}
            <p className="text-base md:text-xl font-extrabold text-[#ffd700] tracking-wider uppercase drop-shadow-xs">
              Your Vision, Our Passion
            </p>
          </div>
        </div>

        {/* Right Side: Exact Rendered Vector Logo */}
        <div className="flex items-center bg-white p-1 rounded-2xl shadow-lg border border-slate-200 hover:scale-105 transition-all duration-300">
          <BumuLogo className="h-20 md:h-24 w-auto" />
        </div>
      </div>
    </header>
  );
}

