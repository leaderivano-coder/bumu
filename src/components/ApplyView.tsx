import React, { useState, useEffect } from 'react';
import { 
  ClipboardList, 
  CheckCircle2, 
  BookOpen, 
  Clock, 
  FileText, 
  UserCheck, 
  HelpCircle, 
  MapPin, 
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Search,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  Building,
  Calendar,
  User,
  Activity,
  Banknote,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TrackedApplication {
  id: string;
  name: string;
  phone: string;
  loanType: string;
  amountRequested: string;
  branch: string;
  hasDocs: boolean;
  status: string;
  step: number;
  date: string;
  notes: string;
}

const MOCK_APPLICATIONS: TrackedApplication[] = [
  {
    id: "BUMU-2026-9481",
    name: "Joseph Mukasa",
    phone: "0754 064499",
    loanType: "Asset Financing",
    amountRequested: "1500000",
    branch: "Genesis Plaza Container Village",
    hasDocs: true,
    status: "Approved & Ready for Cash Out",
    step: 4,
    date: "July 08, 2026",
    notes: "Your verification is 100% complete! Your capital is ready. Please visit our Genesis Plaza Container Village branch with your National ID to finalize cash disbursement or authorize a Mobile Money transfer."
  },
  {
    id: "BUMU-2026-1052",
    name: "Sarah Nsubuga",
    phone: "0709 704653",
    loanType: "Bumu School Fees Loans",
    amountRequested: "800000",
    branch: "Genesis Plaza Container Village",
    hasDocs: true,
    status: "Financial Literacy Briefing Scheduled",
    step: 3,
    date: "July 10, 2026",
    notes: "Guarantor details have been verified successfully. To release the funds, please attend our mandatory 15-minute Financial Literacy Briefing at our Genesis Plaza Container Village branch, scheduled for tomorrow at 10:00 AM."
  },
  {
    id: "BUMU-2026-3392",
    name: "John Kato",
    phone: "0793 193191",
    loanType: "Bumu Quick Loans",
    amountRequested: "500000",
    branch: "Donata Plaza Kafumbe Mukasa",
    hasDocs: false,
    status: "Awaiting Document Submission",
    step: 2,
    date: "July 11, 2026",
    notes: "Pre-screening approved! To proceed to approval, please submit a clear picture of your National ID and a letter/recommendation from your market chairperson or rental receipt. You can upload or present these at Donata Plaza Kafumbe Mukasa branch."
  }
];

export default function ApplyView() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    loanType: 'Bumu Quick Loans',
    amountRequested: '1000000',
    branch: 'Genesis Plaza Container Village',
    hasDocs: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [newlyGeneratedId, setNewlyGeneratedId] = useState('');

  // Tracking section state
  const [searchId, setSearchId] = useState('');
  const [trackingResult, setTrackingResult] = useState<TrackedApplication | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, hasDocs: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a unique dynamic Tracking ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const trackingId = `BUMU-2026-${randomSuffix}`;

    // Construct WhatsApp message with user's choices
    const message = `Hello Bumu Microfinance! I'd like to apply for a loan.
*Tracking ID:* ${trackingId}
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Loan Type:* ${formData.loanType}
*Amount requested:* UGX ${Number(formData.amountRequested).toLocaleString('en-UG')}
*Preferred Branch:* ${formData.branch}
*I have prepared my documents:* ${formData.hasDocs ? 'Yes' : 'Not yet'}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/256754064499?text=${encodedMessage}`, '_blank');

    // Create the tracked application in localStorage
    const newApp: TrackedApplication = {
      id: trackingId,
      name: formData.name,
      phone: formData.phone,
      loanType: formData.loanType,
      amountRequested: formData.amountRequested,
      branch: formData.branch,
      hasDocs: formData.hasDocs,
      status: "Received & Under Quick Review",
      step: 1,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      notes: "Your digital inquiry was received! We have prepared your WhatsApp draft. Once you send it, our officer will finalize step 1 and guide you through document validation (Step 2) in less than 2 hours."
    };

    try {
      const stored = localStorage.getItem('bumu_tracked_loans');
      const list = stored ? JSON.parse(stored) : [];
      localStorage.setItem('bumu_tracked_loans', JSON.stringify([newApp, ...list]));
    } catch (err) {
      console.error("Failed to save to localStorage", err);
    }

    setNewlyGeneratedId(trackingId);
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      phone: '',
      loanType: 'Quick Loans',
      amountRequested: '1000000',
      branch: 'Genesis Plaza, Nakivubo',
      hasDocs: false
    });
    setSubmitted(false);
    setNewlyGeneratedId('');
  };

  const handleTrack = (e?: React.FormEvent, targetId?: string) => {
    if (e) e.preventDefault();
    const query = (targetId || searchId).trim().toUpperCase();
    if (!query) return;

    let customLoans: TrackedApplication[] = [];
    try {
      const stored = localStorage.getItem('bumu_tracked_loans');
      if (stored) {
        customLoans = JSON.parse(stored);
      }
    } catch (err) {
      console.error(err);
    }

    const allLoans = [...customLoans, ...MOCK_APPLICATIONS];
    const match = allLoans.find(app => app.id.toUpperCase() === query);

    setTrackingResult(match || null);
    setHasSearched(true);
    if (targetId) {
      setSearchId(targetId);
    }
  };

  const handleTrackNewApp = () => {
    if (!newlyGeneratedId) return;
    setSearchId(newlyGeneratedId);
    handleTrack(undefined, newlyGeneratedId);

    setTimeout(() => {
      const el = document.getElementById('app-tracking-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div className="space-y-12">
      {/* Hero Header */}
      <section className="text-center">
        <span className="text-xs uppercase font-mono tracking-widest text-amber-700 dark:text-amber-400 font-bold bg-amber-100 dark:bg-amber-950/60 px-3 py-1 rounded-full inline-block mb-3">
          Direct & Transparent Support
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-black text-[#0047ab] dark:text-blue-400 leading-tight mb-4">
          Contact a Credit Officer
        </h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-sans text-sm md:text-base">
          Getting a credit facility with Bumu Microfinance is straightforward and client-centric. Rather than complicated administrative paperwork, we prioritize direct communication and personalized assistance. Fill in your details below or visit any branch to begin.
        </p>
      </section>

      {/* Interactive Quick Application Form Section */}
      <section className="bg-slate-950 text-white rounded-3xl p-6 md:p-10 relative overflow-hidden border border-slate-800 shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full translate-x-24 -translate-y-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full -translate-x-24 translate-y-24 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-8 space-y-6 max-w-2xl mx-auto"
              >
                <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2 text-emerald-400">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold block">Inquiry Registered</span>
                  <h3 className="font-display font-black text-2xl md:text-3xl text-white">
                    Ready to Connect on WhatsApp!
                  </h3>
                  <p className="text-slate-300 text-xs md:text-sm max-w-lg mx-auto font-sans leading-relaxed">
                    We have launched your official inquiry pre-filled with your requirements. If the WhatsApp chat did not pop up automatically, you can utilize your Tracking ID below to track its review.
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl max-w-md mx-auto space-y-4">
                  <div className="space-y-1 text-center">
                    <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">Your Unique Bumu Tracking ID</span>
                    <div className="flex items-center justify-center gap-2">
                      <code className="text-lg md:text-2xl font-black font-mono text-[#ffd700] select-all bg-slate-950 px-4 py-1.5 rounded-lg border border-slate-800">
                        {newlyGeneratedId}
                      </code>
                      <button 
                        type="button"
                        onClick={() => handleCopyId(newlyGeneratedId)}
                        className="p-2.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer"
                        title="Copy Application ID"
                      >
                        {copiedId === newlyGeneratedId ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                    {copiedId === newlyGeneratedId && (
                      <span className="text-[10px] text-emerald-400 font-mono block animate-pulse">Copied!</span>
                    )}
                  </div>

                  <p className="text-[11px] text-slate-400 leading-normal font-sans pt-1">
                    Use this ID below in our <strong>Application Status Tracker</strong> to monitor the progress of document check, briefing schedule, and money payout in real-time!
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleTrackNewApp}
                      className="px-4 py-2.5 bg-[#ffd700] hover:bg-yellow-400 text-slate-950 font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Track Status Now</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-xs transition-colors cursor-pointer"
                    >
                      New Inquiry
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#ffd700] font-bold block mb-1">
                    FAST TRACK INQUIRY
                  </span>
                  <h3 className="font-display font-black text-2xl md:text-3xl text-white">
                    Interactive Loan Inquiry Desk
                  </h3>
                  <p className="text-slate-400 max-w-xl mx-auto text-xs md:text-sm mt-2 font-sans">
                    Fill in your preliminary requirements below. Submitting will prepare a formal secure message directly to our credit officers via WhatsApp for rapid feedback.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 items-start">
                  
                  {/* Form Fields Column */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1 font-mono">
                        Your Full Name
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Joseph Mukasa"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:border-[#ffd700] focus:outline-hidden font-sans focus:ring-1 focus:ring-[#ffd700]/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1 font-mono">
                        Active Phone Number (WhatsApp Enabled)
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 0754 064499"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:border-[#ffd700] focus:outline-hidden font-mono focus:ring-1 focus:ring-[#ffd700]/50"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1 font-mono">
                          Select Loan Type
                        </label>
                        <select 
                          name="loanType"
                          value={formData.loanType}
                          onChange={handleInputChange}
                          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2.5 text-xs text-white focus:border-[#ffd700] focus:outline-hidden font-sans"
                        >
                          <option value="Bumu Quick Loans">Bumu Quick Loans</option>
                          <option value="Bumu Business Loans">Bumu Business Loans</option>
                          <option value="Bumu Salary Loans">Bumu Salary Loans</option>
                          <option value="Bumu Asset Financing Loans">Bumu Asset Financing Loans</option>
                          <option value="Bumu Group Loans">Bumu Group Loans</option>
                          <option value="Bumu School Fees Loans">Bumu School Fees Loans</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1 font-mono">
                          Amount (UGX)
                        </label>
                        <input 
                          type="number" 
                          name="amountRequested"
                          required
                          value={formData.amountRequested}
                          onChange={handleInputChange}
                          placeholder="e.g. 1000000"
                          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2.5 text-xs text-white focus:border-[#ffd700] focus:outline-hidden font-mono focus:ring-1 focus:ring-[#ffd700]/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1 font-mono">
                        Select Nearest Bumu Branch
                      </label>
                      <select 
                        name="branch"
                        value={formData.branch}
                        onChange={handleInputChange}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-xs text-white focus:border-[#ffd700] focus:outline-hidden font-sans"
                      >
                        <option value="Genesis Plaza Container Village">Genesis Plaza Container Village, Kampala</option>
                        <option value="Donata Plaza Kafumbe Mukasa">Donata Plaza Kafumbe Mukasa, Kampala</option>
                        <option value="Nansana Branch">Nansana Branch (Njovu Building, Nansana)</option>
                        <option value="Owino Market Branch">Owino Market Branch (St. Balikuddembe, Kampala)</option>
                      </select>
                    </div>

                    <div className="flex items-start gap-2.5 pt-2">
                      <input 
                        type="checkbox" 
                        id="hasDocs" 
                        checked={formData.hasDocs}
                        onChange={handleCheckboxChange}
                        className="mt-1 accent-[#ffd700] h-4 w-4 rounded-sm border-slate-800 bg-slate-900"
                      />
                      <label htmlFor="hasDocs" className="text-xs text-slate-400 select-none cursor-pointer leading-normal font-sans">
                        I confirm that I have prepared a copy of my National ID and proof of business venue.
                      </label>
                    </div>
                  </div>

                  {/* Live Pre-rendered Summary Column */}
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4 self-stretch flex flex-col justify-between">
                    <div>
                      <h4 className="font-display font-bold text-[#ffd700] text-sm uppercase tracking-wide border-b border-slate-800 pb-2">
                        WhatsApp Message Preview
                      </h4>
                      <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 mt-4 text-xs font-mono text-emerald-400 leading-relaxed whitespace-pre-wrap max-h-[190px] overflow-y-auto">
                        {`Hello Bumu Microfinance! I'd like to apply for a loan.
*Name:* ${formData.name || '(Your Name)'}
*Phone:* ${formData.phone || '(Your Phone)'}
*Loan Type:* ${formData.loanType}
*Amount requested:* UGX ${Number(formData.amountRequested || 0).toLocaleString('en-UG')}
*Preferred Branch:* ${formData.branch}
*I have prepared my documents:* ${formData.hasDocs ? 'Yes' : 'Not yet'}`}
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full py-3 bg-[#25D366] hover:bg-[#1ebe55] text-slate-950 font-black rounded-xl text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md hover:shadow-emerald-500/10"
                      >
                        <span>Send via Official WhatsApp</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <p className="text-[10px] text-center text-slate-500 mt-2 font-mono">
                        Submitting opens WhatsApp in a new tab securely.
                      </p>
                    </div>
                  </div>

                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ================= APPLICATION STATUS TRACKER ================= */}
      <section 
        id="app-tracking-section"
        className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-3xl p-6 md:p-10 shadow-xs relative transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-[#0047ab] dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full inline-block">
              Secure Self-Service Desk
            </span>
            <h3 className="font-display font-black text-2xl md:text-3xl text-slate-950 dark:text-white">
              Application Status Tracker
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-xs md:text-sm leading-relaxed font-sans">
              Enter your Bumu Application ID to trace processing milestones, verification reviews, and direct cash disbursements.
            </p>
          </div>

          {/* Search Box / Input Container */}
          <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 space-y-6">
            <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                  <Search className="h-5 w-5" />
                </div>
                <input 
                  type="text"
                  required
                  placeholder="Enter ID, e.g. BUMU-2026-9481"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm font-mono text-slate-950 dark:text-white focus:outline-hidden focus:border-[#0047ab] dark:focus:border-blue-400 font-bold placeholder:font-sans placeholder:font-normal placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-1 focus:ring-blue-500/50"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-[#0047ab] hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                <span>Track Status</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </form>

            {/* Quick Sample IDs selection */}
            <div className="space-y-2.5 pt-2">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider block">
                💡 Demonstration tracking IDs:
              </span>
              <div className="flex flex-wrap gap-2">
                {MOCK_APPLICATIONS.map((app) => (
                  <button
                    key={app.id}
                    type="button"
                    onClick={() => handleTrack(undefined, app.id)}
                    className="px-3.5 py-1.5 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-mono font-bold text-slate-700 dark:text-slate-300 transition-all flex items-center gap-1.5 shadow-3xs cursor-pointer hover:border-slate-400 dark:hover:border-slate-700"
                  >
                    <span>{app.id}</span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-[10px] text-[#0047ab] dark:text-blue-400 font-sans font-medium">
                      {app.step === 4 ? "Approved" : app.step === 3 ? "Briefing" : "Verify Docs"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tracking Results Area */}
          <AnimatePresence mode="wait">
            {hasSearched && (
              <motion.div
                key={trackingResult ? trackingResult.id : 'not-found'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 pt-2"
              >
                {trackingResult ? (
                  <div className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-xs">
                    
                    {/* Status Ribbon Header */}
                    <div className="bg-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700">
                          <Activity className="h-5 w-5 text-[#ffd700]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider animate-pulse">Application Live Tracking</span>
                            <span className="text-xs text-slate-600">•</span>
                            <span className="text-xs text-slate-400 font-sans">{trackingResult.date}</span>
                          </div>
                          <h4 className="text-base md:text-lg font-black font-mono text-white flex items-center gap-2">
                            <span>ID: {trackingResult.id}</span>
                            <button
                              type="button"
                              onClick={() => handleCopyId(trackingResult.id)}
                              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                              title="Copy Tracking ID"
                            >
                              {copiedId === trackingResult.id ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                            </button>
                          </h4>
                        </div>
                      </div>

                      {/* Dynamic status badge styling */}
                      <span className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider ${
                        trackingResult.step === 4 
                          ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 dark:text-emerald-400'
                          : trackingResult.step === 3
                          ? 'bg-purple-500/10 border border-purple-500/30 text-purple-500 dark:text-purple-400'
                          : trackingResult.step === 2
                          ? 'bg-amber-500/10 border border-amber-500/30 text-amber-500 dark:text-amber-400'
                          : 'bg-blue-500/10 border border-blue-500/30 text-blue-500 dark:text-blue-400'
                      }`}>
                        ● {trackingResult.status}
                      </span>
                    </div>

                    <div className="p-6 md:p-8 space-y-8">
                      
                      {/* Visual Stepper Milestone */}
                      <div className="space-y-4">
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider block">
                          Inquiry Stage:
                        </span>
                        
                        {/* Stepper Pipeline */}
                        <div className="relative py-4">
                          <div className="absolute top-[34px] left-[24px] right-[24px] h-0.5 bg-slate-200 dark:bg-slate-800 -z-1" />
                          <div 
                            className="absolute top-[34px] left-[24px] h-0.5 bg-[#0047ab] dark:bg-blue-500 -z-1 transition-all duration-500" 
                            style={{ width: `${((trackingResult.step - 1) / 3) * 100}%` }}
                          />

                          <div className="grid grid-cols-4 gap-2 text-center relative z-10">
                            
                            {/* Step 1: Inquiry */}
                            <div className="flex flex-col items-center">
                              <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 text-xs font-bold transition-all ${
                                trackingResult.step >= 1 
                                  ? 'bg-[#0047ab] text-white border-[#0047ab] dark:bg-blue-600 dark:border-blue-600 shadow-md shadow-blue-500/10' 
                                  : 'bg-white text-slate-400 border-slate-200 dark:bg-slate-900 dark:border-slate-800'
                              }`}>
                                {trackingResult.step > 1 ? <Check className="h-4 w-4" /> : "1"}
                              </div>
                              <span className="text-[10px] md:text-xs font-bold mt-2 text-slate-900 dark:text-slate-100">Inquiry</span>
                              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-mono hidden md:inline">Submitted</span>
                            </div>

                            {/* Step 2: Verification */}
                            <div className="flex flex-col items-center">
                              <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 text-xs font-bold transition-all ${
                                trackingResult.step >= 2 
                                  ? 'bg-[#0047ab] text-white border-[#0047ab] dark:bg-blue-600 dark:border-blue-600 shadow-md shadow-blue-500/10' 
                                  : 'bg-white text-slate-400 border-slate-200 dark:bg-slate-900 dark:border-slate-800'
                              }`}>
                                {trackingResult.step > 2 ? <Check className="h-4 w-4" /> : "2"}
                              </div>
                              <span className="text-[10px] md:text-xs font-bold mt-2 text-slate-900 dark:text-slate-100">Docs Check</span>
                              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-mono hidden md:inline">KYC Details</span>
                            </div>

                            {/* Step 3: Briefing */}
                            <div className="flex flex-col items-center">
                              <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 text-xs font-bold transition-all ${
                                trackingResult.step >= 3 
                                  ? 'bg-[#0047ab] text-white border-[#0047ab] dark:bg-blue-600 dark:border-blue-600 shadow-md shadow-blue-500/10' 
                                  : 'bg-white text-slate-400 border-slate-200 dark:bg-slate-900 dark:border-slate-800'
                              }`}>
                                {trackingResult.step > 3 ? <Check className="h-4 w-4" /> : "3"}
                              </div>
                              <span className="text-[10px] md:text-xs font-bold mt-2 text-slate-900 dark:text-slate-100">Briefing</span>
                              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-mono hidden md:inline">Literacy</span>
                            </div>

                            {/* Step 4: Approved */}
                            <div className="flex flex-col items-center">
                              <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 text-xs font-bold transition-all ${
                                trackingResult.step >= 4 
                                  ? 'bg-emerald-500 text-white border-emerald-500 dark:bg-emerald-600 dark:border-emerald-600 shadow-md shadow-emerald-500/10' 
                                  : 'bg-white text-slate-400 border-slate-200 dark:bg-slate-900 dark:border-slate-800'
                              }`}>
                                {trackingResult.step > 4 ? <Check className="h-4 w-4" /> : "4"}
                              </div>
                              <span className="text-[10px] md:text-xs font-bold mt-2 text-slate-900 dark:text-slate-100">Disbursement</span>
                              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-mono hidden md:inline">Release</span>
                            </div>

                          </div>
                        </div>
                      </div>

                      {/* Details Table Grid */}
                      <div className="grid md:grid-cols-2 gap-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 p-5 rounded-xl">
                        
                        <div className="space-y-4">
                          <h5 className="font-display font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-slate-800 pb-1.5 flex items-center gap-1.5">
                            <User className="h-4 w-4 text-[#0047ab] dark:text-blue-400" />
                            Inquirer Details
                          </h5>
                          <div className="grid grid-cols-12 gap-y-2.5 text-xs font-sans">
                            <div className="col-span-5 text-slate-500 dark:text-slate-400 font-medium">Inquirer Name:</div>
                            <div className="col-span-7 text-slate-950 dark:text-white font-bold">{trackingResult.name}</div>

                            <div className="col-span-5 text-slate-500 dark:text-slate-400 font-medium">Phone Contact:</div>
                            <div className="col-span-7 text-slate-950 dark:text-white font-mono font-semibold">{trackingResult.phone}</div>

                            <div className="col-span-5 text-slate-500 dark:text-slate-400 font-medium">Prepared Docs:</div>
                            <div className="col-span-7 font-semibold">
                              {trackingResult.hasDocs ? (
                                <span className="text-emerald-600 dark:text-emerald-400">✓ Prepared</span>
                              ) : (
                                <span className="text-amber-600 dark:text-amber-400">⚠️ Pending</span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h5 className="font-display font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-slate-800 pb-1.5 flex items-center gap-1.5">
                            <Banknote className="h-4 w-4 text-[#0047ab] dark:text-blue-400" />
                            Credit Inquiry Request
                          </h5>
                          <div className="grid grid-cols-12 gap-y-2.5 text-xs font-sans">
                            <div className="col-span-5 text-slate-500 dark:text-slate-400 font-medium">Requested Capital:</div>
                            <div className="col-span-7 text-emerald-600 dark:text-emerald-400 font-black font-mono">
                              UGX {Number(trackingResult.amountRequested).toLocaleString('en-UG')}
                            </div>

                            <div className="col-span-5 text-slate-500 dark:text-slate-400 font-medium">Loan Product:</div>
                            <div className="col-span-7 text-slate-950 dark:text-white font-semibold">{trackingResult.loanType}</div>

                            <div className="col-span-5 text-slate-500 dark:text-slate-400 font-medium">Preferred Branch:</div>
                            <div className="col-span-7 text-slate-950 dark:text-white font-medium">{trackingResult.branch}</div>
                          </div>
                        </div>

                      </div>

                      {/* Officer Notes box */}
                      <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 p-5 rounded-xl space-y-2">
                        <h5 className="text-xs font-bold font-mono uppercase text-[#0047ab] dark:text-blue-400 flex items-center gap-1.5">
                          <MessageSquare className="h-4 w-4" />
                          Credit Officer Discussion Notes
                        </h5>
                        <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                          {trackingResult.notes}
                        </p>
                      </div>

                    </div>
                  </div>
                ) : (
                  <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 p-6 rounded-2xl text-center space-y-2 max-w-md mx-auto">
                    <AlertCircle className="h-8 w-8 text-red-500 mx-auto" />
                    <h5 className="font-display font-bold text-red-950 dark:text-red-400 text-sm">Application ID Not Found</h5>
                    <p className="text-xs text-red-700 dark:text-red-300 font-sans leading-relaxed">
                      Please check the ID characters and try again. Ensure it resembles <code>BUMU-2026-XXXX</code>. If you just registered, your ID has been copied to your clipboard.
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

    </div>
  );
}
