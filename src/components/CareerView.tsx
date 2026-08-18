import React, { useState } from 'react';
import { 
  Briefcase, 
  Users, 
  Award, 
  TrendingUp, 
  HeartHandshake, 
  GraduationCap, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send, 
  Mail, 
  Phone, 
  FileText, 
  ChevronRight, 
  Sparkles,
  HelpCircle,
  Building2,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
// @ts-ignore
import graduatesImg from '../assets/images/ugandan_graduates_real_1784109637417.jpg';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

const JOB_POSITIONS: JobPosition[] = [
  {
    id: 'marketing-agent',
    title: 'Marketing & Loan Acquisition Agents',
    department: 'Business Development & Sales',
    type: 'Full-Time & Part-Time',
    location: 'Nansana, Container Village & Kafumbe Mukasa',
    summary: 'Drive grassroots client acquisition, introduce tailored SME loan packages to market stall holders, and build lasting business relationships.',
    responsibilities: [
      'Conduct daily field outreach across designated markets, arcades, and shopping centres.',
      'Introduce vendors and entrepreneurs to Bumu Microfinance loan packages (Group, Kuza, Asset Financing).',
      'Assist prospective clients with KYC document compilation and loan application completion.',
      'Guide first-time borrowers into our compulsory financial literacy coaching sessions.',
      'Maintain strong relationship management with market vendor leadership committees.'
    ],
    requirements: [
      'Minimum Uganda Advanced Certificate of Education (UACE), Diploma or Degree in Business, Marketing, or related field.',
      'Passionate communicator fluent in English and Luganda (other local languages are an added advantage).',
      'Proactive, self-driven mindset with strong interpersonal and networking skills.',
      'Prior field marketing or customer-facing experience in Kampala or Wakiso is a plus.'
    ],
    benefits: [
      'Competitive base allowance plus high-yield performance commissions.',
      'Direct hands-on sales training from senior credit officers.',
      'Fast-track promotion pathway to full-time Credit Officer roles.'
    ]
  },
  {
    id: 'credit-officer',
    title: 'Credit & Loan Portfolio Officers',
    department: 'Credit Operations',
    type: 'Full-Time',
    location: 'Genesis Plaza & Donata Plaza Desks',
    summary: 'Appraise loan applications, evaluate borrower cash flow capacity, disburse facilities within SLA, and manage an active performing credit portfolio.',
    responsibilities: [
      'Conduct thorough on-site business appraisals and cash flow assessments for loan applicants.',
      'Verify KYC documents, store lease agreements, market permits, and guarantor viability.',
      'Present loan proposals to the Credit Committee for timely approval.',
      'Conduct mandatory pre-disbursement financial literacy coaching.',
      'Monitor loan repayment schedules, track portfolio at risk (PAR), and ensure timely settlements.'
    ],
    requirements: [
      'Diploma or Bachelor\'s Degree in Microfinance, Finance, Accounting, Economics, or Business Administration.',
      '1–3 years experience in Tier IV or commercial micro-lending in Uganda.',
      'Strong financial numeracy, analytical assessment skills, and high ethical integrity.',
      'Proficiency in standard microfinance spreadsheet models and loan management software.'
    ],
    benefits: [
      'Attractive fixed monthly salary with portfolio growth bonuses.',
      'Medical insurance coverage and annual performance incentives.',
      'Continuous professional development and leadership mentoring.'
    ]
  },
  {
    id: 'customer-cashier',
    title: 'Customer Relations & Cashier Representative',
    department: 'Branch Operations',
    type: 'Full-Time',
    location: 'Nansana & Genesis Plaza Branches',
    summary: 'Serve as the welcoming face of Bumu Microfinance, managing front-desk customer inquiries, transaction documentation, and agency banking cash desk reconciliations.',
    responsibilities: [
      'Warmly receive branch visitors, answer inquiries, and direct clients to relevant credit officers.',
      'Manage front-desk cash counter transactions and Mobile Money agency floats.',
      'Issue official loan repayment receipts and update daily cash collection ledgers.',
      'Resolve customer concerns promptly and escalate specialized inquiries.',
      'Maintain an organized, professional, and welcoming branch front-office environment.'
    ],
    requirements: [
      'Diploma or Bachelor\'s Degree in Accounting, Secretarial Studies, Business Administration, or related discipline.',
      'Exceptional customer care demeanor and patience in dealing with market traders.',
      'Flawless cash handling accuracy and reconciliation skills.',
      'Good computer literacy (MS Excel, Word, and point-of-sale systems).'
    ],
    benefits: [
      'Stable and supportive working environment with modern branch amenities.',
      'Structured working hours and lunch allowance.',
      'Opportunities to transition into credit management or branch accounting.'
    ]
  },
  {
    id: 'recovery-compliance',
    title: 'Field Recovery & Compliance Associate',
    department: 'Risk & Legal Compliance',
    type: 'Full-Time',
    location: 'Kampala Central & Wakiso Districts',
    summary: 'Work closely with clients encountering business volatility to restructure repayments respectfully, maintain asset collateral integrity, and ensure strict compliance.',
    responsibilities: [
      'Visit clients with overdue accounts to understand trade disruptions and provide financial restructuring advice.',
      'Negotiate realistic installment plans aligned with current market conditions.',
      'Ensure all collection procedures strictly follow MoFPED and Tier IV consumer protection guidelines.',
      'Maintain accurate field documentation and report daily to the Head of Recovery.'
    ],
    requirements: [
      'Diploma or Degree in Law, Business, Criminology, Social Work, or Finance.',
      'Proven track record in ethical debt counseling and resolution.',
      'High emotional intelligence, persuasive communication, and conflict-resolution skills.',
      'Valid driving/riding permit and familiarity with Kampala markets is advantageous.'
    ],
    benefits: [
      'Competitive monthly remuneration plus recovery success incentives.',
      'Field transport facilitation allowance.',
      'Legal and consumer protection training.'
    ]
  }
];

export default function CareerView() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(JOB_POSITIONS[0]);
  const [submitted, setSubmitted] = useState(false);
  const [filterDepartment, setFilterDepartment] = useState<string>('All');
  
  // Application form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: 'Marketing & Loan Acquisition Agents',
    branch: 'Genesis Plaza (Kampala)',
    experienceYears: '1-2 years',
    coverNote: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const departments = ['All', 'Business Development & Sales', 'Credit Operations', 'Branch Operations', 'Risk & Legal Compliance'];

  const filteredJobs = filterDepartment === 'All' 
    ? JOB_POSITIONS 
    : JOB_POSITIONS.filter(j => j.department === filterDepartment);

  const perks = [
    {
      icon: TrendingUp,
      title: "Fast-Track Career Growth",
      desc: "We promote from within. Our top credit and branch managers started as field marketing agents."
    },
    {
      icon: HeartHandshake,
      title: "Real Grassroots Impact",
      desc: "Directly uplift thousands of market vendors and women entrepreneurs with ethical capital and financial coaching."
    },
    {
      icon: GraduationCap,
      title: "Continuous Training",
      desc: "Receive structured coaching in credit appraisal, risk management, and client financial literacy mentorship."
    },
    {
      icon: Award,
      title: "Performance Rewards",
      desc: "Transparent commission structures and performance bonuses for high-performing team members."
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Banner */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-[#0047ab] to-slate-950 text-white shadow-xl border border-blue-900/40">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-cover bg-center" style={{ backgroundImage: `url(${graduatesImg})` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 md:py-20 grid lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffd700]/20 border border-[#ffd700]/40 text-[#ffd700] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="h-4 w-4" />
              <span>We Are Hiring • Join Our Growing Team</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Build an Impactful Career in <span className="text-[#ffd700]">Microfinance</span>
            </h1>

            <p className="text-slate-200 text-sm md:text-base leading-relaxed font-sans max-w-2xl">
              At <strong>Bumu Microfinance</strong>, our people are our greatest strength. We empower energetic, passionate, and high-integrity professionals to transform local businesses across Kampala and Wakiso.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#open-positions" 
                className="px-6 py-3.5 bg-[#ffd700] hover:bg-yellow-400 text-slate-950 font-bold text-sm rounded-xl shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>View Open Positions</span>
                <ChevronRight className="h-4 w-4" />
              </a>

              <a 
                href="mailto:careers@bumucfc.co.ug?subject=General%20Career%20Inquiry%20-%20Bumu%20Microfinance" 
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <Mail className="h-4 w-4 text-[#ffd700]" />
                <span>Email HR Desk</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-900/85 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl space-y-6">
              <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                <Building2 className="h-5 w-5 text-[#ffd700]" />
                <span>Why Join Bumu Microfinance?</span>
              </h3>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="font-display font-black text-2xl text-[#ffd700]">17+</div>
                  <div className="text-[10px] font-mono text-slate-300 uppercase mt-0.5">Years of Stability</div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="font-display font-black text-2xl text-[#ffd700]">4</div>
                  <div className="text-[10px] font-mono text-slate-300 uppercase mt-0.5">Physical Branches</div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="font-display font-black text-2xl text-[#ffd700]">10,000+</div>
                  <div className="text-[10px] font-mono text-slate-300 uppercase mt-0.5">Vendors Uplifted</div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="font-display font-black text-2xl text-[#ffd700]">100%</div>
                  <div className="text-[10px] font-mono text-slate-300 uppercase mt-0.5">MoFPED Compliant</div>
                </div>
              </div>

              <div className="p-3.5 bg-blue-950/60 border border-blue-800/60 rounded-xl text-xs text-slate-300 flex items-start gap-2.5">
                <Award className="h-4 w-4 text-[#ffd700] shrink-0 mt-0.5" />
                <span>We actively welcome both experienced microfinance professionals and energetic recent graduates ready to learn.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Pillars / Why Work Here */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold text-[#0047ab] dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full">
            Our Culture & Benefits
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-slate-900 dark:text-white">
            What You Can Expect at Bumu
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            We foster a high-performance environment underpinned by mutual respect, hands-on field mentorship, and clear career ladders.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 rounded-xl inline-block mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 dark:text-white text-base md:text-lg mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-sans">
                    {perk.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Open Positions Section */}
      <section id="open-positions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono font-bold text-[#0047ab] dark:text-blue-400 uppercase tracking-wider">
              Vacancies Available
            </span>
            <h2 className="font-display font-black text-2xl md:text-3.5xl text-slate-900 dark:text-white mt-1">
              Explore Active Openings
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm mt-1">
              Select a position to view the role specifications, required qualifications, and apply.
            </p>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setFilterDepartment(dept)}
                className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                  filterDepartment === dept
                    ? 'bg-[#0047ab] text-white dark:bg-blue-600'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Job Directory & Job Details */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Job List (Left) */}
          <div className="lg:col-span-5 space-y-4">
            {filteredJobs.map((job) => {
              const isSelected = selectedJob?.id === job.id;
              return (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer text-left ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 border-[#0047ab] dark:border-blue-500 shadow-md ring-2 ring-[#0047ab]/20 dark:ring-blue-500/20'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs'
                  }`}
                >
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#0047ab] dark:text-blue-400">
                      {job.department}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-semibold">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-base text-slate-900 dark:text-white mt-2 mb-1">
                    {job.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-3">
                    {job.summary}
                  </p>

                  <div className="flex items-center gap-4 text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-amber-500" />
                      {job.location}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Job Details Card (Right) */}
          <div className="lg:col-span-7 sticky top-24">
            {selectedJob ? (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                
                <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold bg-[#0047ab] text-white px-3 py-1 rounded-full">
                      {selectedJob.department}
                    </span>
                    <span className="text-xs font-mono font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-full">
                      {selectedJob.type}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
                    {selectedJob.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">
                    <MapPin className="h-4 w-4 text-amber-500" />
                    <span>Location: {selectedJob.location}</span>
                  </div>
                </div>

                {/* Role Summary */}
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                    Role Summary
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedJob.summary}
                  </p>
                </div>

                {/* Key Responsibilities */}
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedJob.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements & Qualifications */}
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                    Qualifications & Skills
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#0047ab] dark:bg-blue-400 shrink-0 mt-2" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Package & Benefits */}
                <div className="bg-amber-50/70 dark:bg-slate-800/50 border border-amber-200/60 dark:border-slate-700 p-4 sm:p-5 rounded-2xl space-y-2">
                  <h4 className="font-display font-bold text-xs text-amber-900 dark:text-amber-300 uppercase tracking-wider">
                    What We Offer for This Role
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedJob.benefits.map((ben, i) => (
                      <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <Sparkles className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#quick-application"
                    onClick={() => setFormData({ ...formData, position: selectedJob.title })}
                    className="flex-1 text-center py-3.5 px-6 bg-[#0047ab] hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md transition-colors cursor-pointer"
                  >
                    Apply for this Position
                  </a>

                  <a
                    href={`mailto:careers@bumucfc.co.ug?subject=Application%20for%20${encodeURIComponent(selectedJob.title)}`}
                    className="py-3.5 px-6 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-sm rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-[#0047ab] dark:text-blue-400" />
                    <span>Send CV via Email</span>
                  </a>
                </div>

              </div>
            ) : null}
          </div>

        </div>
      </section>

      {/* 4. Quick Application Form Section */}
      <section id="quick-application" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden border border-slate-800 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0047ab]/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          
          <div className="text-center space-y-3">
            <span className="text-[#ffd700] text-xs font-mono font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full inline-block">
              Direct Application Portal
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3.5xl text-white">
              Submit Your Job Application
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
              Fill out your contact profile below or email your CV directly to <span className="text-[#ffd700] font-mono">careers@bumucfc.co.ug</span>. Our HR team reviews all submissions within 48 hours.
            </p>
          </div>

          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-950/80 border border-emerald-500/40 p-8 rounded-2xl text-center space-y-4 max-w-lg mx-auto"
            >
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="font-display font-black text-xl text-white">Application Received!</h3>
              <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed font-sans">
                Thank you for applying for <strong>{formData.position}</strong>. Our HR recruitment desk has logged your candidate profile and will reach out to you via phone or email for interview scheduling.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800">
              <div className="grid sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Namubiru Sarah"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-hidden focus:border-[#ffd700] transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0772 123 456"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-hidden focus:border-[#ffd700] transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@gmail.com"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-hidden focus:border-[#ffd700] transition-colors"
                  />
                </div>

                {/* Position Applied For */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase">
                    Position of Interest *
                  </label>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-hidden focus:border-[#ffd700] transition-colors"
                  >
                    {JOB_POSITIONS.map((j) => (
                      <option key={j.id} value={j.title}>{j.title}</option>
                    ))}
                    <option value="General Spontaneous Application">Other / General Spontaneous Application</option>
                  </select>
                </div>

                {/* Preferred Branch */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase">
                    Preferred Branch Location *
                  </label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-hidden focus:border-[#ffd700] transition-colors"
                  >
                    <option value="Genesis Plaza (Container Village, Kampala)">Genesis Plaza (Container Village, Kampala)</option>
                    <option value="Donata Plaza (Kafumbe Mukasa Road, Kisenyi)">Donata Plaza (Kafumbe Mukasa Road, Kisenyi)</option>
                    <option value="Nansana Branch (Wakiso)">Nansana Branch (Wakiso)</option>
                    <option value="Flexible / Field Outreach Across Kampala">Flexible / Field Outreach Across Kampala</option>
                  </select>
                </div>

                {/* Years of Experience */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase">
                    Relevant Experience *
                  </label>
                  <select
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-hidden focus:border-[#ffd700] transition-colors"
                  >
                    <option value="Fresh Graduate / Entry Level">Fresh Graduate / Entry Level</option>
                    <option value="1-2 years">1–2 years in microfinance or sales</option>
                    <option value="3-5 years">3–5 years experienced</option>
                    <option value="5+ years">5+ years senior practitioner</option>
                  </select>
                </div>

              </div>

              {/* Brief Cover Statement */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase">
                  Brief Pitch / Summary of Qualifications
                </label>
                <textarea
                  rows={4}
                  value={formData.coverNote}
                  onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  placeholder="Tell us briefly about your background, key skills, and why you are excited to join Bumu Microfinance..."
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-hidden focus:border-[#ffd700] transition-colors"
                />
              </div>

              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl flex items-start gap-3 text-xs text-slate-400">
                <FileText className="h-4 w-4 text-[#ffd700] shrink-0 mt-0.5" />
                <span>
                  <strong>Tip:</strong> After submitting this quick profile, you may also email your detailed CV and copies of your National ID / academic papers to <strong className="text-white">careers@bumucfc.co.ug</strong>.
                </span>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#ffd700] hover:bg-yellow-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Application</span>
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* 5. Physical Drop-off & HR Contact Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 grid md:grid-cols-3 gap-6">
        
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-950 text-[#0047ab] dark:text-blue-400 rounded-xl shrink-0">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">HR Careers Desk</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Direct email for CV and document submissions:</p>
            <a href="mailto:careers@bumucfc.co.ug" className="text-xs font-mono font-bold text-[#0047ab] dark:text-blue-400 hover:underline mt-1 block">
              careers@bumucfc.co.ug
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">HR Inquiries Line</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Speak directly with our human resource team:</p>
            <div className="text-xs font-mono font-bold text-slate-900 dark:text-white mt-1 space-y-0.5">
              <div>0772 322 931</div>
              <div>0756 811 506</div>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 rounded-xl shrink-0">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">Physical Drop-off</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Genesis Plaza, Container Village, 2nd Floor, Room G2-10, Nakivubo Rd, Kampala.
            </p>
          </div>
        </div>

      </section>

      {/* 6. Recruitment FAQs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="font-display font-black text-2xl text-slate-900 dark:text-white">
            Frequently Asked Recruitment Questions
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Helpful answers for prospective applicants joining Bumu Microfinance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-[#0047ab] dark:text-blue-400 shrink-0" />
              <span>Does Bumu Microfinance hire fresh university or diploma graduates?</span>
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
              Yes! We actively recruit high-energy, ambitious fresh graduates for our marketing and loan acquisition positions. We provide hands-on field onboarding, credit appraisal coaching, and rapid career progression.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-[#0047ab] dark:text-blue-400 shrink-0" />
              <span>What is the standard recruitment timeline?</span>
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
              Applications are reviewed continuously. Selected candidates typically undergo an initial phone screening within 2 to 3 days, followed by an in-person assessment and interview at Genesis Plaza.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-[#0047ab] dark:text-blue-400 shrink-0" />
              <span>Are there part-time or flexible marketing agent roles?</span>
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
              Yes. Our marketing agent program offers flexible hours for university students and part-time professionals who can engage business communities and market stalls during morning or evening hours.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-[#0047ab] dark:text-blue-400 shrink-0" />
              <span>What documents should I bring to an interview?</span>
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
              Please come with your updated physical CV, copies of your Ugandan National ID, academic certificates / transcripts, and two professional or community reference letters.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
