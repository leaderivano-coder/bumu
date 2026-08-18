import React, { useState } from 'react';
import { Menu, X, Landmark, Info, ClipboardList, ShieldCheck, Sun, Moon, Home, Briefcase } from 'lucide-react';
import BumuLogo from './BumuLogo';

interface NavbarProps {
  currentTab: string;
  setTab: (tab: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Navbar({ currentTab, setTab, darkMode, onToggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'services', label: 'Services', icon: ClipboardList },
    { id: 'loans_contacts', label: 'Loans Products & Contacts', icon: Landmark },
    { id: 'insurance', label: 'Insurance', icon: ShieldCheck },
    { id: 'careers', label: 'Careers', icon: Briefcase },
  ];

  return (
    <nav className="bg-[#ffd700] text-slate-900 dark:bg-slate-950 dark:text-slate-100 dark:border-slate-800 sticky top-0 z-50 shadow-md border-b-2 border-yellow-500 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand/Logo shorthand */}
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={() => { setTab('home'); setIsOpen(false); }}
              className="flex items-center hover:opacity-90 transition-opacity cursor-pointer py-1"
              title="Bumu Microfinance - Go to Home"
            >
              <BumuLogo className="h-10 md:h-11 w-auto rounded-lg object-contain bg-white/95 p-1 border border-yellow-400 dark:border-slate-800 shadow-sm" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <div className="flex items-center space-x-2 lg:space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setTab(item.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs lg:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#0047ab] text-white dark:bg-[#ffd700] dark:text-slate-950 shadow-sm'
                        : 'text-slate-900 dark:text-slate-200 hover:bg-yellow-400 dark:hover:bg-slate-800 hover:text-black dark:hover:text-yellow-400'
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Dark Mode Toggle (Desktop) */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg text-slate-900 dark:text-slate-300 hover:bg-yellow-400 dark:hover:bg-slate-800 transition-colors cursor-pointer ml-1"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5" />}
            </button>

            <div className="hidden xl:block text-xs italic font-bold text-slate-900 dark:text-[#ffd700] border-l border-yellow-600/60 dark:border-slate-800 pl-4 py-1 whitespace-nowrap">
              Empowering SMEs since 2009
            </div>
          </div>

          {/* Mobile Actions (Toggle + Hamburger) */}
          <div className="flex md:hidden items-center gap-2">
            {/* Dark Mode Toggle (Mobile) */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg text-slate-900 dark:text-slate-300 hover:bg-yellow-400 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile hamburger menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-900 dark:text-slate-100 hover:bg-yellow-400 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0047ab]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden bg-[#ffe53b] dark:bg-slate-900 border-t border-yellow-500 dark:border-slate-800 transition-all duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-2.5 w-full text-left px-4 py-3 rounded-md text-base font-semibold transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0047ab] text-white dark:bg-[#ffd700] dark:text-slate-950'
                      : 'text-slate-900 dark:text-slate-300 hover:bg-yellow-400 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
