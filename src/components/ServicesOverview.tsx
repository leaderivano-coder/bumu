import React from 'react';
import { Landmark, ShieldCheck, HandCoins, ArrowRight, Activity, MapPin, CheckCircle2, Shield, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesOverviewProps {
  setTab: (tab: string) => void;
}

export default function ServicesOverview({ setTab }: ServicesOverviewProps) {
  const primaryServices = [
    {
      id: 'loans',
      title: 'Loans & Credit Solutions',
      tagline: 'Empowering Growth & Capital Needs',
      description: 'Flexible, low-barrier financing options custom-engineered for Kampala and Wakiso market vendors, business parents, and micro-entrepreneurs.',
      icon: HandCoins,
      color: 'bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-900/30',
      features: [
        'Quick Loans approved in 24 hours',
        'Business & Asset Loans up to UGX 50M',
        'Peer-guaranteed Group Loans',
        'Flexible repayments matching business cash-cycles'
      ],
      actionLabel: 'View Detailed Loan Products & Apply',
      actionTab: 'loans_contacts'
    },
    {
      id: 'insurance',
      title: 'Health Insurance & Protection',
      tagline: 'Partnered with Liberty Insurance Uganda',
      description: 'Simple, affordable health and life underwriting plans designed to shield business parents and micro-retailers from unforeseen challenges.',
      icon: ShieldCheck,
      color: 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30',
      features: [
        'School fees micro-insurance coverage',
        'Underwritten by Liberty Insurance Uganda',
        'Regulated by Insurance Regulatory Authority (IRA)',
        'Cushion your household & trade assets'
      ],
      actionLabel: 'Explore Insurance Savings Plans',
      actionTab: 'insurance'
    },
    {
      id: 'agency',
      title: 'Agency Banking & Mobile Money',
      tagline: 'Bringing Tier 1 Banking & Telecom Floats to the Grassroots',
      description: 'Facilitating seamless commercial transactions, bank deposit clearings, security holdings, and MTN MoMo & Airtel Mobile Money cash-in/cash-out settlements directly at our physical desks.',
      icon: Landmark,
      color: 'bg-blue-50 dark:bg-blue-950/20 text-[#0047ab] dark:text-blue-400 border-blue-100 dark:border-blue-900/30',
      features: [
        'Partnered with Uganda\'s Tier 1 Commercial Banks',
        'Centenary, dfcu, Equity, Finance Trust & Stanbic Bank integrations',
        'Official MTN MoMo & Airtel Money agent float clearances',
        'Fast deposits, cash-outs, and local ledger settlements'
      ],
      actionLabel: 'Find Our Branches & Counters',
      actionTab: 'loans_contacts' // Since branches list is on loans_contacts
    }
  ];

  const partnerBanks = [
    { name: "Centenary Bank", desc: "Grassroot Payments & Liquidity" },
    { name: "dfcu Bank", desc: "Commercial Trade & Settlements" },
    { name: "Equity Bank", desc: "Digital & Mobile Integrations" },
    { name: "Finance Trust Bank", desc: "Micro-savings Ledger Holdings" },
    { name: "Stanbic Bank", desc: "Sovereign Transactions clearing" }
  ];

  return (
    <div className="space-y-16">
      {/* 1. Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold text-[#0047ab] dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full inline-block">
          Our Three Core Pillars
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-black text-[#0047ab] dark:text-white leading-tight">
          Services Offered
        </h2>
        <p className="text-slate-600 dark:text-slate-300 font-sans text-sm md:text-base leading-relaxed">
          At Bumu Microfinance, we provide a holistic, regulatory-compliant suite of financial empowerment tools. Explore our key service structures tailored for local market sustainability.
        </p>
      </div>

      {/* 2. Core Services Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {primaryServices.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Icon & Title */}
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-2xl border ${service.color} shrink-0`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      Pillar 0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-lg md:text-xl leading-tight mt-0.5">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Subtag & Description */}
                <div>
                  <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 font-mono block mb-2">
                    {service.tagline}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>

                {/* Bullet list */}
                <div className="space-y-2 pt-2">
                  {service.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <button
                  onClick={() => setTab(service.actionTab)}
                  className="w-full py-2.5 px-4 bg-slate-50 hover:bg-yellow-400 dark:bg-slate-950 dark:hover:bg-[#ffd700] hover:text-slate-950 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer border border-slate-100 dark:border-slate-800"
                >
                  <span>{service.actionLabel}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 3. Agency Banking Strategic Network */}
      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-xs">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 dark:bg-blue-950 text-xs font-bold text-[#0047ab] dark:text-blue-400 rounded-full font-mono uppercase">
              <Landmark className="h-3.5 w-3.5" />
              Agency Banking Network
            </div>
            <h3 className="font-display font-black text-2xl md:text-3xl text-slate-900 dark:text-white leading-tight">
              Agency Banking Partner Network
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm font-sans leading-relaxed">
              We aggregate clearing networks to let you transact, deposit, clear checks, and manage savings ledger holdings securely across Uganda's premier commercial banks directly from Bumu branch desks.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {partnerBanks.map((bank, bidx) => (
                <div key={bidx} className="bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 hover:border-blue-400 dark:hover:border-blue-500/50 transition-colors shadow-xs">
                  <span className="text-xs font-black text-slate-900 dark:text-white font-display block">
                    {bank.name}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono font-medium block mt-1 uppercase">
                    {bank.desc}
                  </span>
                </div>
              ))}
              <div className="bg-[#ffd700]/10 dark:bg-[#ffd700]/5 p-4 rounded-xl border border-[#ffd700]/30 flex items-center justify-center text-center">
                <span className="text-xs font-black text-amber-800 dark:text-amber-400 font-mono uppercase tracking-wider block">
                  Regulated & SECURE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Footprint Grassroot Heritage section */}
      <div className="bg-[#0047ab] dark:bg-slate-950 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-md">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-24 -translate-y-24 pointer-events-none" />
        <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-400 text-slate-950 text-xs font-bold rounded-full font-mono uppercase">
              <MapPin className="h-3.5 w-3.5" />
              Strategic Regional Footprint
            </div>
            <h3 className="font-display font-black text-2xl md:text-4xl">
              Our Grassroot Heritage: Serving Kampala & Wakiso
            </h3>
            <p className="text-slate-200 font-sans text-xs md:text-sm leading-relaxed">
              We operate strictly in the heart of <strong>Kampala</strong> and <strong>Wakiso</strong> districts. Why? Because Uganda is too big to over-stretch, and micro-entrepreneurs need focused, reliable physical support. By concentrating on these major economic arteries, we ensure our loan officers can visit your stall weekly, understand your local market conditions, and keep services 100% responsive, high-impact, and close-knit.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-center">
            <div className="bg-white/10 border border-white/20 p-6 rounded-2xl text-center space-y-2 max-w-xs">
              <div className="font-display font-black text-4xl text-[#ffd700]">4 Active</div>
              <p className="text-xs font-mono uppercase font-black text-white tracking-widest">物理 Branch Desks</p>
              <div className="text-[10px] text-slate-300 font-sans pt-2 border-t border-white/10">
                Container Village • Kafumbe Mukasa Rd • Nansana • Owino Market Desk
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
