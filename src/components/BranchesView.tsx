import React, { useState } from 'react';
import { BRANCHES } from '../data';
import { MapPin, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function BranchesView() {
  const [selectedBranchIdx, setSelectedBranchIdx] = useState(0);
  const activeBranch = BRANCHES[selectedBranchIdx];

  return (
    <section className="bg-[#f5f5f5] py-16 px-6 rounded-xl border border-slate-200 shadow-xs">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-blue-700 font-bold bg-blue-100 px-3 py-1 rounded-full inline-block mb-3">
            Our Physical Presence
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-[#0047ab] leading-tight mb-4">
            Locate a Bumu Microfinance Branch Near You
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-sans text-sm md:text-base">
            Visit any of our 4 conveniently located branches in Kampala and Nansana for custom financial consultations, cash transactions, and program registrations.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: Branch Selector List */}
          <div className="lg:w-5/12 space-y-4">
            {BRANCHES.map((branch, index) => {
              const isSelected = selectedBranchIdx === index;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedBranchIdx(index)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#0047ab] shadow-md ring-2 ring-blue-500/10'
                      : 'bg-slate-100/70 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className={`p-3 rounded-lg flex-shrink-0 ${
                    isSelected ? 'bg-blue-50 text-[#0047ab]' : 'bg-slate-200 text-slate-500'
                  }`}>
                    <MapPin className="h-5 w-5" />
                  </div>
                  
                  <div className="flex-grow min-w-0">
                    <h3 className="font-display font-bold text-slate-900 text-base leading-tight mb-1">
                      {branch.name}
                    </h3>
                    <p className="text-xs text-slate-600 truncate mb-1">
                      {branch.address}
                    </p>
                    <p className="text-xs font-mono text-slate-500">
                      {branch.room}
                    </p>

                    {/* Quick Contacts */}
                    <div className="flex items-center gap-4 mt-3 text-xs text-[#0047ab] font-semibold">
                      {branch.phone && (
                        <span className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {branch.phone}
                        </span>
                      )}
                      {branch.whatsapp && (
                        <span className="flex items-center gap-1 text-[#25D366]">
                          <MessageSquare className="h-3 w-3 fill-current" />
                          {branch.whatsapp}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Map Viewer Card */}
          <div className="lg:w-7/12 flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Currently Selected Branch</span>
                <h3 className="font-display font-bold text-slate-900 text-base flex items-center gap-2">
                  {activeBranch.name}
                </h3>
              </div>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeBranch.name + ", " + activeBranch.address)}`}
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1 text-xs text-[#0047ab] font-bold hover:underline"
              >
                <span>Get Directions</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Embedded Iframe Container */}
            <div className="relative flex-grow h-[350px] md:h-[400px] w-full bg-slate-100">
              <iframe
                title={`Google Map for ${activeBranch.name}`}
                src={activeBranch.googleMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Location contextual guide info */}
            <div className="p-4 bg-slate-50 text-xs text-slate-500 leading-relaxed border-t border-slate-100 font-sans">
              <strong>How to find us:</strong> Located at <strong>{activeBranch.room}</strong>. If you are arriving from downtown Kampala, look out for key transport hubs near Nakivubo or Owino main entry points. Our agents can be contacted directly for route guides.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
