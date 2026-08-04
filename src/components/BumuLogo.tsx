import React from 'react';
// @ts-ignore
import bumuLogoImg from '../assets/images/bumu_logo.png';

interface BumuLogoProps {
  className?: string;
  height?: number | string;
}

export default function BumuLogo({ className = "h-20 md:h-24 w-auto", height }: BumuLogoProps) {
  return (
    <img 
      src={bumuLogoImg} 
      alt="Bumu Microfinance Logo" 
      className={className} 
      style={height ? { height } : undefined}
      referrerPolicy="no-referrer"
    />
  );
}
