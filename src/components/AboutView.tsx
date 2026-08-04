import React from 'react';
import { BookOpen, ShieldCheck, Milestone, Handshake, Users, Briefcase, Target, Compass, Sparkles, UserCheck, ArrowRight, Mail, MapPin, User } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutViewProps {
  showExtra?: boolean;
}

export default function AboutView({ showExtra = false }: AboutViewProps) {
  const pillars = [
    {
      icon: BookOpen,
      title: "Financial Literacy",
      desc: "We train first-time borrowers in cash flow, debt management, and daily bookkeeping to ensure sustainable enterprise growth."
    },
    {
      icon: ShieldCheck,
      title: "MoFPED Licensed",
      desc: "Licensed as a Tier IV Microfinance Institution and money lender, operating with full transparency, compliance, and consumer protection."
    },
    {
      icon: Milestone,
      title: "Grassroots Heritage",
      desc: "Deep roots supporting market vendors and retailers. We operate primarily in Kampala and Wakiso districts, focusing on close-knit local enterprise growth rather than over-stretching across the nation."
    },
    {
      icon: Handshake,
      title: "Empowering Partners",
      desc: "More than a lender, we act as a business partner, structuring repayments aligned with your actual market cash flow cycles."
    }
  ];

  const careers = [
    {
      title: "Marketing Agents",
      type: "Full-Time & Part-Time • Nansana Branch",
      desc: "Promote Bumu's microfinance loan products, onboard new market vendor and retail clients, and conduct community outreach in Nansana and surrounding areas."
    }
  ];

  return (
    <div className="space-y-12">
      {/* 1. Core Profile & USP Card */}
      <section className="bg-[#e3f2fd] border-l-8 border-[#ffd700] py-10 px-6 md:px-10 rounded-r-2xl shadow-sm">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Main Copy */}
          <div className="lg:w-1/2 space-y-5">
            <h2 className="font-display text-2xl md:text-3.5xl font-black text-[#0047ab] leading-tight">
              Evolving into a Highly Trusted, Licensed Financial Anchor
            </h2>
            
            <p className="text-slate-700 leading-relaxed font-sans text-sm md:text-base">
              <strong>Bumu Microfinance</strong> is a customer-centric Tier IV Microfinance Institution licensed by the <strong>Ministry of Finance, Planning and Economic Development (MoFPED)</strong>.
            </p>

            <p className="text-slate-700 leading-relaxed font-sans text-sm md:text-base">
              Founded in 2009 from mutual savings and credit circles, Bumu Microfinance has grown into a formal licensed institution. We serve micro, small, and medium-sized entrepreneurs (MSMEs), market vendors, and families with accessible credit and tailored asset financing.
            </p>

            {/* Unique Selling Point Callout */}
            <div className="bg-white p-5 rounded-xl border-l-4 border-[#ffd700] shadow-sm">
              <h4 className="font-display font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 bg-[#ffd700] rounded-full"></span>
                Our Compulsory Financial Literacy Focus
              </h4>
              <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed font-sans">
                Unlike general money lenders, Bumu Microfinance integrates <strong>compulsory financial literacy training</strong> into our core processes. We coach borrowers on separate bookkeeping, debt calculations, and cash flow structures, significantly reducing default rates and protecting livelihoods.
              </p>
            </div>
          </div>

          {/* Pillars and Metrics Grid */}
          <div className="lg:w-1/2 w-full space-y-8">
            <div className="grid sm:grid-cols-2 gap-5">
              {pillars.map((p, index) => {
                const Icon = p.icon;
                return (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -3 }}
                    className="bg-white p-5 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 border border-slate-100"
                  >
                    <div className="p-2 bg-blue-50 text-[#0047ab] rounded-lg inline-block mb-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-bold text-slate-900 text-sm md:text-base mb-1">{p.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">{p.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Metrics */}
            <div className="bg-[#0047ab] text-white rounded-xl p-5 grid grid-cols-3 gap-4 text-center shadow-md">
              <div>
                <div className="font-display font-black text-xl md:text-2xl text-[#ffd700]">17+</div>
                <div className="text-[9px] font-mono uppercase text-slate-300 mt-0.5">Years Active</div>
              </div>
              <div className="border-x border-blue-800">
                <div className="font-display font-black text-xl md:text-2xl text-[#ffd700]">10,000+</div>
                <div className="text-[9px] font-mono uppercase text-slate-300 mt-0.5">Clients Served</div>
              </div>
              <div>
                <div className="font-display font-black text-xl md:text-2xl text-[#ffd700]">4</div>
                <div className="text-[9px] font-mono uppercase text-slate-300 mt-0.5">Physical Branches</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, and Core Values Section */}
      <section className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision card */}
          <div className="bg-gradient-to-br from-[#0047ab]/5 to-[#0047ab]/10 dark:from-[#0047ab]/10 dark:to-[#0047ab]/20 border-2 border-blue-200 dark:border-blue-900/60 rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-center min-h-[220px] shadow-xs">
            <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/5 rounded-full translate-x-10 -translate-y-10 pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/40 text-[#0047ab] dark:text-blue-400 rounded-2xl inline-block">
                <Compass className="h-8 w-8" />
              </div>
              <h3 className="font-display font-black text-[#0047ab] dark:text-blue-400 text-2xl md:text-3xl uppercase tracking-tight">Our Vision</h3>
              <p className="text-slate-900 dark:text-white font-sans text-base md:text-xl font-extrabold leading-relaxed">
                To be a leading financial solutions provider for SMEs.
              </p>
            </div>
          </div>

          {/* Mission card */}
          <div className="bg-gradient-to-br from-amber-500/5 to-amber-500/10 dark:from-amber-500/10 dark:to-amber-500/20 border-2 border-amber-200 dark:border-amber-900/60 rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-center min-h-[220px] shadow-xs">
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/5 rounded-full translate-x-10 -translate-y-10 pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 rounded-2xl inline-block">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="font-display font-black text-amber-600 dark:text-amber-400 text-2xl md:text-3xl uppercase tracking-tight">Our Mission</h3>
              <p className="text-slate-900 dark:text-white font-sans text-base md:text-xl font-extrabold leading-relaxed">
                To provide innovative demand driven financial services to SMEs in Uganda.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values card (Prominent & Clean, descriptions removed as requested) */}
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-12 rounded-3xl space-y-8 shadow-xs">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="font-display font-black text-slate-950 dark:text-white text-3xl md:text-4xl">
              Our Core Values
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm">
              The fundamental pillars that guide Bumu Microfinance’s operations across Uganda.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 pt-4">
            {[
              { name: "Solidarity", color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900/30" },
              { name: "Accountability", color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900/30" },
              { name: "Equity", color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-100 dark:border-amber-900/30" },
              { name: "Innovative", color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border-purple-100 dark:border-purple-900/30" },
              { name: "Integrity", color: "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 border-red-100 dark:border-red-900/30" }
            ].map((val, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center justify-center p-6 rounded-2xl border text-center shadow-xs hover:scale-105 transition-all duration-300 ${val.color}`}
              >
                <h4 className="font-display font-black text-slate-900 dark:text-white text-base md:text-lg tracking-tight">
                  {val.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Management and Careers Sections (Only visible if showExtra is true) */}
      {showExtra && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-16 pt-6"
        >
          {/* Corporate Leadership Section */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[#0047ab] text-xs font-mono font-bold uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                Organizational Strength
              </span>
              <h3 className="font-display font-black text-2xl md:text-3.5xl text-slate-950 mt-3">
                Corporate Leadership
              </h3>
              <p className="text-slate-600 font-sans text-xs md:text-sm mt-2">
                Managed by seasoned microfinance practitioners committed to transparency, compliance, and inclusive economic growth.
              </p>
            </div>

            {/* Management Team Container */}
            <div className="max-w-5xl mx-auto px-4 py-8">
              <h4 className="font-sans font-bold text-[#0047ab] text-lg flex items-center gap-2 border-b border-slate-100 pb-2 mb-6">
                <svg className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Management Team
              </h4>

              {/* 4-Column Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Card 1: General Manager */}
                <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                  {/* Image Wrapper */}
                  <div className="aspect-[4/5] overflow-hidden bg-slate-50 relative border-b border-slate-100">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1lyPt1GBhhjxvlmsPWIhvpCpo94gaOsrc" 
                      alt="Mr. Lwasa Joseph" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  {/* Info Content */}
                  <div className="p-5 flex-1 flex flex-col justify-center">
                    <div className="space-y-1.5">
                      <h5 className="font-display font-black text-slate-900 text-base md:text-lg leading-snug group-hover:text-[#0047ab] transition-colors duration-200">
                        Mr. Lwasa Joseph
                      </h5>
                      <p className="text-xs md:text-sm font-bold text-[#0047ab] dark:text-blue-400">
                        General Manager
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2: Credit Manager */}
                <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden bg-slate-50 relative border-b border-slate-100">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1q-ZK4M8XIMBS2JcrXZPEDWrQXQc8GcWi" 
                      alt="Mr. Male Paul" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-center">
                    <div className="space-y-1.5">
                      <h5 className="font-display font-black text-slate-900 text-base md:text-lg leading-snug group-hover:text-[#0047ab] transition-colors duration-200">
                        Mr. Male Paul
                      </h5>
                      <p className="text-xs md:text-sm font-bold text-[#0047ab] dark:text-blue-400">
                        Credit Manager
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3: Finance Manager */}
                <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden bg-slate-50 relative border-b border-slate-100">
                    <img 
                      src="https://lh3.googleusercontent.com/d/14kxlGTSY3cwdIw_WpgqURam8qCi4inPn" 
                      alt="Ms. Kayiwa Cathy Nakalembe" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-center">
                    <div className="space-y-1.5">
                      <h5 className="font-display font-black text-slate-900 text-base md:text-lg leading-snug group-hover:text-[#0047ab] transition-colors duration-200">
                        Ms. Kayiwa Cathy Nakalembe
                      </h5>
                      <p className="text-xs md:text-sm font-bold text-[#0047ab] dark:text-blue-400">
                        Finance Manager
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4: HR Manager */}
                <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden bg-slate-50 relative border-b border-slate-100">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1vAk79gb0eC7Ek2XmeiiDEtIcgy2kSHoU" 
                      alt="Mr. Ssenjobe Samuel" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-center">
                    <div className="space-y-1.5">
                      <h5 className="font-display font-black text-slate-900 text-base md:text-lg leading-snug group-hover:text-[#0047ab] transition-colors duration-200">
                        Mr. Ssenjobe Samuel
                      </h5>
                      <p className="text-xs md:text-sm font-bold text-[#0047ab] dark:text-blue-400">
                        Human Resource Manager
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Careers Section */}
          <section className="bg-slate-950 text-white rounded-3xl p-6 md:p-10 relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full translate-x-20 -translate-y-20 pointer-events-none" />
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[#ffd700] text-xs font-mono font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full inline-block">
                  Build Your Future With Us
                </span>
                <h3 className="font-display font-black text-2xl md:text-3.5xl text-white">
                  Career Opportunities
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-sans">
                  At Bumu Microfinance, we are dedicated to helping our staff grow professionally. We offer dynamic field experience, structural micro-lending exposure, and an environment rooted in integrity.
                </p>
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2 text-xs text-slate-300 font-sans">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#ffd700]" />
                    <span>careers@bumucfc.co.ug</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#ffd700]" />
                    <span>Genesis Plaza Main Office, Kampala</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h4 className="font-display font-bold text-[#ffd700] text-sm uppercase tracking-wider mb-2">
                  Active Vacancies
                </h4>
                <div className="space-y-4">
                  {careers.map((job, idx) => (
                    <div 
                      key={idx} 
                      className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2 hover:border-slate-700 transition-colors duration-200"
                    >
                      <div className="flex flex-wrap justify-between items-center gap-2">
                        <h5 className="font-display font-bold text-white text-sm md:text-base">{job.title}</h5>
                        <span className="text-[10px] font-mono font-bold bg-[#0047ab]/20 border border-[#0047ab]/30 text-[#ffd700] px-2.5 py-0.5 rounded-full uppercase">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans">{job.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="text-right pt-2">
                  <a 
                    href="mailto:careers@bumucfc.co.ug?subject=Application%20for%20Career%20at%20Bumu"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#ffd700] hover:text-yellow-400 cursor-pointer"
                  >
                    <span>Submit General Resume</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

            </div>
          </section>
        </motion.div>
      )}
    </div>
  );
}
