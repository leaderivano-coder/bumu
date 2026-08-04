import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, ShieldAlert, Scale, ShieldCheck } from 'lucide-react';
import BumuLogo from './BumuLogo';

interface FooterProps {
  setTab: (tab: string) => void;
}

export default function Footer({ setTab }: FooterProps) {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-white border-t-4 border-[#ffd700] pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => setTab('home')}
                className="cursor-pointer hover:opacity-90 text-left flex items-center gap-3 group"
              >
                <div className="bg-white/95 p-2 rounded-xl shadow-xs border border-yellow-500/30 transition-transform group-hover:scale-105 duration-200">
                  <BumuLogo className="h-10 w-auto" />
                </div>
                <span className="text-[#ffd700] font-display font-black text-xl md:text-2xl tracking-tight">
                  Bumu Microfinance
                </span>
              </button>
            </div>
            <p className="text-[#ffd700] italic font-black text-sm tracking-wider">
              “Empowering SMEs since 2009”
            </p>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Bumu Microfinance is Uganda's premier customer-centric Tier IV Microfinance Institution, dedicated to empowering micro, small, and medium market entrepreneurs with sustainable financing and financial coaching.
            </p>
            {/* Licensing details badge */}
            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
              <ShieldCheck className="h-5 w-5 text-emerald-400 flex-shrink-0" />
              <div className="text-[10px] text-slate-300 font-mono leading-tight">
                <strong>MoFPED LICENSED</strong><br />
                Licensed Tier IV Institution
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#ffd700]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-300">
              <li>
                <button onClick={() => setTab('home')} className="hover:text-[#ffd700] transition-colors cursor-pointer text-left">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => setTab('about')} className="hover:text-[#ffd700] transition-colors cursor-pointer text-left">
                  About Us & Management
                </button>
              </li>
              <li>
                <button onClick={() => setTab('services')} className="hover:text-[#ffd700] transition-colors cursor-pointer text-left">
                  Services Offered
                </button>
              </li>
              <li>
                <button onClick={() => setTab('loans_contacts')} className="hover:text-[#ffd700] transition-colors cursor-pointer text-left">
                  Loans Products & Contacts
                </button>
              </li>
              <li>
                <button onClick={() => setTab('insurance')} className="hover:text-[#ffd700] transition-colors cursor-pointer text-left">
                  Insurance Plans
                </button>
              </li>
            </ul>
          </div>

          {/* Legal / Regulatory Column */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#ffd700]">
              Regulatory & Legal
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-300">
              <li>
                <a href="#banking-regulations" className="hover:text-[#ffd700] transition-colors">
                  MoFPED Financial Guidelines
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="hover:text-[#ffd700] transition-colors">
                  Credit Terms & Disclaimers
                </a>
              </li>
              <li>
                <a href="#terms-conditions" className="hover:text-[#ffd700] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy-statement" className="hover:text-[#ffd700] transition-colors">
                  Privacy & Data Protection Policy
                </a>
              </li>
              <li>
                <a href="#info-security" className="hover:text-[#ffd700] transition-colors">
                  Information Security
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Interaction */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#ffd700]">
              Follow Our Journey
            </h4>
            <p className="text-xs text-slate-400 font-sans">
              Stay up-to-date with economic empowerment campaigns, business advice, and client stories.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-4 w-4 fill-current" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-4 w-4 fill-current" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-300"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                aria-label="Follow us on YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory Protection Callout */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row items-center gap-4 mb-8">
          <div className="p-2.5 bg-blue-950 text-[#ffd700] rounded-full border border-blue-900 flex-shrink-0">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <p className="text-[11px] md:text-xs text-slate-300 font-sans leading-relaxed text-center md:text-left">
            <strong>Regulatory Announcement:</strong> Bumu Microfinance is fully licensed by the <strong>Ministry of Finance, Planning and Economic Development (MoFPED)</strong>.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[10px] font-mono text-slate-500">
            &copy; {currentYear} Bumu Microfinance. All Rights Reserved.
          </p>
          <p className="text-[10px] font-mono text-slate-500">
            Designed for economic inclusion in Uganda's informal markets.
          </p>
        </div>
      </div>
    </footer>
  );
}
