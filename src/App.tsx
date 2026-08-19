import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import ServicesOverview from './components/ServicesOverview';
import BranchesView from './components/BranchesView';
import ContactView from './components/ContactView';
import ApplyView from './components/ApplyView';
import InsuranceView from './components/InsuranceView';
import CareerView from './components/CareerView';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTopButton from './components/BackToTopButton';
import { TESTIMONIALS } from './data';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  HelpCircle, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  Award, 
  UserCheck, 
  FileText, 
  TrendingUp, 
  ArrowRight,
  BookOpen,
  Star,
  Search,
  X,
  Building2
} from 'lucide-react';

const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: "How long does loan processing take?",
    answer: "Most of our standard Quick Cash and Group loans are processed and approved within 24 hours once all simplified KYC documents and guarantor details are submitted.",
    category: "Processing & Timeline"
  },
  {
    id: 'faq-2',
    question: "What are your interest rates and fees?",
    answer: "We offer highly competitive and flexible repayment terms with absolutely zero hidden administration fees. Each facility is structured individually in alignment with your specific business needs.",
    category: "Rates & Fees"
  },
  {
    id: 'faq-3',
    question: "Do you require physical collateral (like land titles)?",
    answer: "No, land titles are not mandatory. We understand that micro-retailers may not own land. We accept alternative securities, including business stock pledges, guarantor recommendations, and community endorsements.",
    category: "Collateral & Security"
  },
  {
    id: 'faq-4',
    question: "Is Bumu Microfinance a licensed bank?",
    answer: "Bumu Microfinance is a Tier IV Microfinance Institution licensed by the Ministry of Finance, Planning and Economic Development (MoFPED). We do not operate as a fully commercial tier I bank but as a regulated microfinance provider.",
    category: "Licensing & Safety"
  },
  {
    id: 'faq-5',
    question: "What are the loan repayment channels?",
    answer: "Repayments can be made easily via Mobile Money (MTN MoMo or Airtel Money), direct bank transfers, or cash deposits at any of our physical branch desks.",
    category: "Repayment"
  },
  {
    id: 'faq-6',
    question: "Who can act as a guarantor for my loan?",
    answer: "A guarantor should usually be a fellow registered market vendor, a community leader, or an active business owner in Kampala who knows your character and trade.",
    category: "Requirements"
  }
];

export default function App() {
  const [tab, setTab] = useState<string>('home');
  const [faqSearchQuery, setFaqSearchQuery] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  // Apply dark class to document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Listen for programmatical tab changes from other components
  useEffect(() => {
    const handleTabChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setTab(customEvent.detail);
      }
    };
    window.addEventListener('change-tab', handleTabChange);
    return () => window.removeEventListener('change-tab', handleTabChange);
  }, []);

  // Smooth scroll to top when changing views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [tab]);

  // Filter FAQs based on keyword search query
  const filteredFAQs = FAQ_ITEMS.filter(item => {
    const query = faqSearchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  });

  // Step-by-step loan application cycle
  const applicationSteps = [
    {
      num: "01",
      title: "Inquire & Select",
      desc: "Speak with an officer online or visit our branches at Genesis Plaza Container Village, Donata Plaza Kafumbe Mukasa, or Nansana to select a product."
    },
    {
      num: "02",
      title: "Quick Validation",
      desc: "Provide basic KYC documents (National ID, trading licence, or recommendation letter from your market leadership committee)."
    },
    {
      num: "03",
      title: "Literacy Briefing",
      desc: "Attend a brief 15-minute cash flow seminar to align your repayment milestones with your business cash cycles."
    },
    {
      num: "04",
      title: "Fast Disbursement",
      desc: "Get funds disbursed within 24 hours directly to your account or mobile wallet so you never miss a market opportunity."
    }
  ];

  const loanRequirements = [
    "Valid Ugandan National ID or Passport",
    "Active trading register, store lease, or market stand permit",
    "3 months of simplified business records or mobile money statements",
    "One guarantor (usually a fellow registered market vendor or community leader)",
    "Commitment to participate in the Bumu CFC Financial Literacy Briefing"
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-100 selection:bg-[#ffd700] selection:text-slate-900 flex flex-col justify-between transition-colors duration-300">
      
      {/* 1. Header with logo and naming */}
      <Header />

      {/* 2. Sticky Navigation Bar */}
      <Navbar currentTab={tab} setTab={setTab} darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

      {/* 3. Main Content Area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          
          {/* ================= HOME VIEW ================= */}
          {tab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-16 pb-16"
            >
              {/* Interactive Carousel */}
              <Carousel />

              {/* Highlights & Quick Stats */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-[#0047ab] to-blue-800 dark:from-slate-900 dark:to-slate-800 dark:border dark:border-slate-800 rounded-2xl text-white p-8 md:p-12 shadow-xl relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/4 -translate-y-1/4" />
                  <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-8 space-y-4">
                      <span className="text-xs uppercase font-mono tracking-widest text-[#ffd700] font-black">
                        UGANDA'S CHOSEN micro-finance partner
                      </span>
                      <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight leading-tight">
                        Empowering SMEs with essential working capital since 2009
                      </h2>
                      <p className="text-blue-100 text-sm md:text-base leading-relaxed max-w-2xl">
                        At Bumu Microfinance, we believe that formal financial structures shouldn't lock out hard-working market vendors. We provide fast-tracked credit and essential coaching to unlock their potential.
                      </p>
                      <div className="flex flex-wrap gap-4 pt-4">
                        <button 
                          onClick={() => setTab('loans_contacts')}
                          className="px-6 py-3 bg-[#ffd700] hover:bg-yellow-400 text-slate-950 font-bold rounded-xl shadow-md transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                        >
                          <span>Explore Loan Products</span>
                          <ChevronRight className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => setTab('contact')}
                          className="px-6 py-3 bg-blue-900/60 hover:bg-blue-900/80 text-white font-semibold rounded-xl border border-blue-500/30 transition-colors duration-200 cursor-pointer"
                        >
                          Find a Branch
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-4 grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                        <div className="font-display font-black text-2xl lg:text-3xl text-[#ffd700]">UGX 50B+</div>
                        <p className="text-[10px] font-mono uppercase text-slate-300 mt-1">Funds Disbursed</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                        <div className="font-display font-black text-2xl lg:text-3xl text-[#ffd700]">10k+</div>
                        <p className="text-[10px] font-mono uppercase text-slate-300 mt-1">Traders Empowered</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                        <div className="font-display font-black text-2xl lg:text-3xl text-[#ffd700]">98%</div>
                        <p className="text-[10px] font-mono uppercase text-slate-300 mt-1">Success Rate</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                        <div className="font-display font-black text-2xl lg:text-3xl text-[#ffd700]">100%</div>
                        <p className="text-[10px] font-mono uppercase text-slate-300 mt-1">MoFPED Licensed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Brief About US section */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AboutView />
                <div className="mt-6 text-center">
                  <button 
                    onClick={() => setTab('about')}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0047ab] hover:text-blue-800 hover:underline cursor-pointer"
                  >
                    <span>Read our complete story from 2009</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Step-by-Step application timeline guide */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 shadow-md">
                  <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="text-[#ffd700] text-xs font-mono font-bold uppercase">The Bumu Credit Path</span>
                    <h3 className="font-display font-black text-2xl md:text-3xl text-white mt-2">
                      Four Simple Steps to Secure Funding
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {applicationSteps.map((step, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-3">
                        <div className="font-display font-black text-3xl text-[#ffd700]">{step.num}</div>
                        <h4 className="font-display font-bold text-white text-base">{step.title}</h4>
                        <p className="text-slate-300 text-xs leading-relaxed font-sans">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Strategic Partnerships & Regulatory Licensing */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 md:p-12 shadow-xs transition-all duration-300">
                  <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="text-[#0047ab] dark:text-blue-400 text-xs font-mono font-bold uppercase tracking-widest bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full inline-block">
                      Trust & Compliance Network
                    </span>
                    <h3 className="font-display font-black text-2xl md:text-3xl text-slate-900 dark:text-white mt-3">
                      Strategic Partnerships & Regulatory Licensing
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 font-sans text-xs md:text-sm mt-2">
                      Fully integrated with leading regulatory, insurance, and banking networks across Uganda to assure compliance, secure operations, and seamless transactions.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* MoFPED Card */}
                    <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-100 dark:border-slate-900/40 flex flex-col justify-between">
                      <div>
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/40 text-[#0047ab] dark:text-blue-400 rounded-lg inline-block mb-4">
                          <ShieldCheck className="h-6 w-6" />
                        </div>
                        <h4 className="font-display font-bold text-slate-900 dark:text-white text-base mb-2">
                          MoFPED Licensing
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-sans">
                          Bumu Microfinance is fully licensed by the <strong>Ministry of Finance, Planning and Economic Development (MoFPED)</strong>. This guarantees fully transparent operations and regulatory compliance.
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-[#0047ab] dark:text-blue-400 font-bold">
                        <span>Licensed Partner</span>
                        <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-950 text-xs rounded-md">MoFPED</span>
                      </div>
                    </div>

                    {/* FIA Partnership Card */}
                    <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-100 dark:border-slate-900/40 flex flex-col justify-between">
                      <div>
                        <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-lg inline-block mb-4">
                          <Building2 className="h-6 w-6" />
                        </div>
                        <h4 className="font-display font-bold text-slate-900 dark:text-white text-base mb-2">
                          FIA Partnership
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-sans">
                          Partnered with the <strong>Financial Intelligence Authority (FIA)</strong> to ensure strict anti-money laundering compliance, transparent reporting, and complete financial integrity.
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                        <span>Compliance Partner</span>
                        <span className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-950 text-xs rounded-md">FIA Partner</span>
                      </div>
                    </div>

                    {/* Liberty Insurance Card */}
                    <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-100 dark:border-slate-900/40 flex flex-col justify-between">
                      <div>
                        <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-lg inline-block mb-4">
                          <Award className="h-6 w-6" />
                        </div>
                        <h4 className="font-display font-bold text-slate-900 dark:text-white text-base mb-2">
                          Liberty Insurance Partnership
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-sans">
                          In collaboration with <strong>Liberty Insurance Uganda</strong>, we offer highly specialized, accessible underwriting solutions. Our customers benefit from school fees protection and business security.
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                        <span>Underwriting Partner</span>
                        <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-xs rounded-md">Liberty</span>
                      </div>
                    </div>

                    {/* Partner Commercial Banks Card */}
                    <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-100 dark:border-slate-900/40 flex flex-col justify-between">
                      <div>
                        <div className="p-3 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 rounded-lg inline-block mb-4">
                          <CheckCircle2 className="h-6 w-6" />
                        </div>
                        <h4 className="font-display font-bold text-slate-900 dark:text-white text-base mb-2">
                          Partner Commercial Banks
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-sans">
                          We clear our transactions and facilitate direct payments, mobile money settlements, and security holdings seamlessly with Uganda's premier commercial banks:
                        </p>
                        {/* Banks tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {["Centenary Bank", "dfcu Bank", "Equity Bank", "Finance Trust Bank", "Stanbic Bank"].map((bank, bidx) => (
                            <span key={bidx} className="bg-amber-100/60 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 text-[10px] font-semibold px-2 py-1 rounded-md border border-amber-200 dark:border-amber-800/50">
                              {bank}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-amber-600 dark:text-amber-400 font-bold">
                        <span>Clearing Intermediaries</span>
                        <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-950 text-xs rounded-md">Partner Banks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Testimonials */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-amber-50/50 dark:bg-slate-900/40 border border-amber-200/60 dark:border-slate-800 rounded-2xl p-8 md:p-12 shadow-xs text-center transition-colors duration-300">
                  <span className="text-xs font-mono font-black text-amber-700 dark:text-amber-400 uppercase">Trusted by thousands of vendors</span>
                  <h3 className="font-display font-black text-2xl md:text-3xl text-[#0047ab] dark:text-blue-400 mt-2 mb-10">
                    What Our Valued Entrepreneurs Say
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6 text-left">
                    {TESTIMONIALS.map((t) => (
                      <div key={t.id} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-amber-100 dark:border-slate-800 shadow-xs flex flex-col justify-between transition-colors duration-300">
                        <div>
                          {/* Stars */}
                          <div className="flex gap-1 mb-4 text-[#ffd700]">
                            {[...Array(t.rating || 5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                          <p className="text-slate-600 dark:text-slate-300 text-sm italic leading-relaxed font-sans">
                            "{t.quote}"
                          </p>
                        </div>
                        <div className="mt-6 border-t border-slate-100 dark:border-slate-800/80 pt-4 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-amber-500/15 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 font-display font-black text-xs flex items-center justify-center">
                            {t.avatar}
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-xs text-slate-900 dark:text-white">{t.name}</h4>
                            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono font-bold">{t.role}</p>
                            <p className="text-[9px] text-slate-400 dark:text-slate-500 font-mono">{t.location}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Branches Map Preview */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BranchesView />
              </div>
            </motion.div>
          )}

          {/* ================= ABOUT PAGE VIEW ================= */}
          {tab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8"
            >
              {/* Page header */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
                <span className="text-xs font-mono font-bold text-[#0047ab] uppercase">Corporate Overview</span>
                <h2 className="font-display text-3xl md:text-5xl font-black text-[#0047ab] dark:text-blue-400 mt-1">About Bumu Microfinance</h2>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-sm md:text-base mt-2 max-w-2xl">
                  Providing inclusive financial solutions and sustainable training for micro, small, and medium-sized enterprises across Uganda.
                </p>
              </div>

              {/* Integrated Modular Profile, Management and Careers */}
              <AboutView showExtra={true} />
            </motion.div>
          )}

          {/* ================= SERVICES PAGE VIEW ================= */}
          {tab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
              <ServicesOverview setTab={setTab} />
            </motion.div>
          )}

          {/* ================= LOANS PRODUCTS & CONTACTS VIEW ================= */}
          {tab === 'loans_contacts' && (
            <motion.div
              key="loans_contacts"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16"
            >
              {/* Page header */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
                <span className="text-xs font-mono font-bold text-[#0047ab] dark:text-blue-400 uppercase">Financing Solutions & Branch Desks</span>
                <h2 className="font-display text-3xl md:text-5xl font-black text-[#0047ab] dark:text-white mt-1">Loans & Contacts</h2>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-sm md:text-base mt-2 max-w-2xl">
                  Explore our carefully engineered credit facilities, learn how to apply, and reach out to our active branch desks across Kampala and Wakiso.
                </p>
              </div>

              {/* 1. Services Cards */}
              <div className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Our Loan Products</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Click on any card to view detailed specifications, benefits, and requirements.</p>
                </div>
                <ServicesView />
              </div>

              {/* 2. Requirements & FAQ */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Requirements Card */}
                <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-md">
                  <h3 className="font-display font-bold text-lg text-[#ffd700] flex items-center gap-2 mb-6">
                    <FileText className="h-5 w-5" />
                    Loan Application Requirements
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                    We keep our application structures simple to ensure accessibility. Below are the basic requirements to secure approval at Bumu Microfinance:
                  </p>
                  <ul className="space-y-4 text-xs md:text-sm">
                    {loanRequirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="h-5 w-5 rounded-full bg-[#ffd700] text-slate-950 font-display font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-slate-200 leading-relaxed font-medium">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-6 text-xs text-slate-300 leading-relaxed">
                    <strong>Have questions about these requirements?</strong> If you do not have business registrations or guarantors, visit any branch or speak to our officer. We can explore alternatives!
                  </div>
                </div>

                {/* FAQ Card */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                    <h3 className="font-display font-bold text-lg text-slate-950 dark:text-white flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-[#0047ab] dark:text-blue-400" />
                      Frequently Asked Questions (FAQs)
                    </h3>
                  </div>

                  {/* Search Bar Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                    </div>
                    <input
                      type="text"
                      id="faq-search-bar"
                      value={faqSearchQuery}
                      onChange={(e) => setFaqSearchQuery(e.target.value)}
                      placeholder="Search FAQ questions or keywords..."
                      className="block w-full pl-10 pr-10 py-3 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-hidden focus:border-[#0047ab] focus:ring-1 focus:ring-[#0047ab] transition-all"
                    />
                    {faqSearchQuery && (
                      <button
                        id="clear-faq-search-btn"
                        onClick={() => setFaqSearchQuery('')}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        title="Clear search"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  {/* Quick Filters */}
                  <div className="flex flex-wrap gap-1.5">
                    {['All', 'Rates', 'Collateral', 'Processing', 'Repayment'].map((cat) => {
                      const isActive = 
                        (cat === 'All' && !faqSearchQuery) || 
                        (cat !== 'All' && faqSearchQuery.toLowerCase() === cat.toLowerCase());
                      return (
                        <button
                          key={cat}
                          id={`faq-filter-${cat.toLowerCase()}`}
                          onClick={() => setFaqSearchQuery(cat === 'All' ? '' : cat)}
                          className={`text-xs px-3 py-1.5 rounded-lg border font-semibold transition-all duration-200 cursor-pointer ${
                            isActive 
                              ? 'bg-[#0047ab] text-white border-[#0047ab] dark:bg-blue-600 dark:border-blue-600 shadow-xs'
                              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80'
                          }`}
                        >
                          {cat}
                        </button>
                      );
                    })}
                  </div>

                  {/* FAQ Items Loop */}
                  <div className="space-y-4">
                    {filteredFAQs.length > 0 ? (
                      filteredFAQs.map((faq) => (
                        <div 
                          key={faq.id} 
                          id={faq.id}
                          className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-sm transition-all duration-300"
                        >
                          <div className="flex justify-between items-start gap-3">
                            <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white leading-snug">
                              {faq.question}
                            </h4>
                            <span className="text-[9px] font-mono font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 px-2 py-1 rounded-md whitespace-nowrap">
                              {faq.category}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed font-sans">
                            {faq.answer}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 text-center space-y-3">
                        <HelpCircle className="h-8 w-8 text-slate-400 dark:text-slate-600 mx-auto" />
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                          No FAQs matched "{faqSearchQuery}"
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Try searching for another keyword like "collateral", "interest", "repayment", or "processing".
                        </p>
                        <button
                          id="reset-search-faq"
                          onClick={() => setFaqSearchQuery('')}
                          className="px-4 py-2 bg-[#0047ab]/10 dark:bg-blue-500/10 hover:bg-[#0047ab]/20 dark:hover:bg-blue-500/20 text-xs font-bold text-[#0047ab] dark:text-blue-400 rounded-lg transition-colors cursor-pointer"
                        >
                          Show All FAQs
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 3. How to Apply */}
              <div className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">How to Apply</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Simple, customer-centric steps to get your loan disbursed.</p>
                </div>
                <ApplyView />
              </div>

              {/* 4. Branches View */}
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Our Branches</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Visit any of our 4 physical branch desks for direct assistance.</p>
                </div>
                <BranchesView />
              </div>

              {/* 5. Contact Form */}
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Contact Us</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Send us an inquiry or reach us by phone or WhatsApp.</p>
                </div>
                <ContactView />
              </div>
            </motion.div>
          )}

          {/* ================= INSURANCE VIEW ================= */}
          {tab === 'insurance' && (
            <motion.div
              key="insurance"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
              <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-8">
                <span className="text-xs font-mono font-bold text-[#0047ab] dark:text-blue-400 uppercase">Insurance Savings & Protection</span>
                <h2 className="font-display text-3xl md:text-5xl font-black text-[#0047ab] dark:text-white mt-1">Insurance Savings & Protection</h2>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-sm md:text-base mt-2 max-w-2xl">
                  Discover simple, certified insurance savings plans designed with our licensed underwriting partners to secure your children's future and cushion your trade.
                </p>
              </div>

              <InsuranceView />
            </motion.div>
          )}

          {/* ================= CAREERS VIEW ================= */}
          {tab === 'careers' && (
            <motion.div
              key="careers"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
              <CareerView />
            </motion.div>
          )}

          {/* ================= CONTACT & BRANCHES VIEW ================= */}
          {tab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12"
            >
              {/* Page header */}
              <div className="border-b border-slate-200 pb-6">
                <span className="text-xs font-mono font-bold text-[#0047ab] uppercase">Reach Us Anytime</span>
                <h2 className="font-display text-3xl md:text-5xl font-black text-[#0047ab] mt-1">Branches & Contact Desks</h2>
                <p className="text-slate-600 font-sans text-sm md:text-base mt-2 max-w-2xl">
                  Reach out to our customer service desk, send digital inquiries, or visit any of our physical branch desks.
                </p>
              </div>

              {/* Live Branches Selector with Map */}
              <BranchesView />

              {/* Green Contact Us section */}
              <ContactView />

            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* 4. Footer with integrated copyright and quick state change */}
      <Footer setTab={setTab} />

      {/* 5. Floating Back to Top Button */}
      <BackToTopButton />

      {/* 6. Floating Pulsing WhatsApp Button */}
      <WhatsAppButton />

    </div>
  );
}
