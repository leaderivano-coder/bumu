import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// @ts-ignore
import serviceMicroInsurance from '../assets/images/micro_insurance_1783780060929.jpg';
// @ts-ignore
import serviceSchoolFees from '../assets/images/ugandan_graduates_real_1784109637417.jpg';
// @ts-ignore
import slide3 from '../assets/images/kuza_business_real_1784109179876.jpg';
// @ts-ignore
import solaceFamilyImage from '../assets/images/solace_family_real_1784109150276.jpg';

interface InsurancePlan {
  id: string;
  name: string;
  tagline: string;
  description: string;
  partner: string;
  image: string;
  badge: string;
  color: string;
  icon: string;
  premiumMinimum: string;
  keyHighlights: string[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  requirements: string[];
  steps: string[];
}

const INSURANCE_PLANS: InsurancePlan[] = [
  {
    id: "soma-plan",
    name: "Soma Plan",
    tagline: "Small Savings Can Add Up To Big Dreams",
    description: "An education protection and savings program designed with our licensed underwriting partners. It helps parents save systematically for their children's primary, secondary, or university tuition while offering absolute security against unexpected life changes.",
    partner: "Licensed Underwriters",
    image: serviceSchoolFees,
    badge: "Education Savings & Protection",
    color: "blue",
    icon: "GraduationCap",
    premiumMinimum: "UGX 50,000 / month",
    keyHighlights: [
      "Retrenchment premium protection (up to 6 months)",
      "Flexible stop & restart premium terms without penalties",
      "Partial withdrawals every 3 months after year 5",
      "No hidden costs or complex fine print"
    ],
    features: [
      {
        title: "A Guided & Affordable Approach",
        description: "Develop a structured savings plan tailored to your target school costs with our expert counselors.",
        icon: "Compass"
      },
      {
        title: "Retrenchment Protection",
        description: "Should you experience job loss or retrenchment, the underwriter pays your premiums for up to 6 months to ensure your child's education remains uninterrupted.",
        icon: "ShieldAlert"
      },
      {
        title: "Stop & Restart Flexibility",
        description: "We understand informal markets have volatile seasons. Pause and restart premium payments anytime without loss of accrued value or heavy penalties.",
        icon: "RefreshCw"
      },
      {
        title: "Transparent & Cheap Fees",
        description: "Simple fee structure: only 3% upfront charge on premiums and 3% annual administration fee on your investment account. Zero transaction fees.",
        icon: "Receipt"
      }
    ],
    requirements: [
      "Valid Ugandan National ID, Passport, or Driving Permit",
      "Active Mobile Money registered line or Bank Account",
      "Completion of a simple target education enrollment details form"
    ],
    steps: [
      "Select your target education level (Primary, High School, or University).",
      "Estimate future school fees in today's money. Our agents can help provide standard rates.",
      "Get a customized Soma savings proposal detailing your monthly deposits.",
      "Complete the application form and start saving securely."
    ]
  },
  {
    id: "kuza-plan",
    name: "Kuza Plan",
    tagline: "Save Today, Protect Tomorrow",
    description: "A dual-benefit wealth accumulation and health protection plan designed to grow your small business capital while shielding your family from major critical health emergencies and physical impairment shocks.",
    partner: "Licensed Underwriters",
    image: slide3,
    badge: "Investment & Critical Illness",
    color: "amber",
    icon: "TrendingUp",
    premiumMinimum: "UGX 50,000 / month",
    keyHighlights: [
      "Critical illness lump-sum coverage (Cancer, Heart Attack, Stroke, etc.)",
      "Physical impairment and total permanent disability protection",
      "Zero surrender penalties after the lock-in period",
      "Access to your funds before the end of the 5-year period"
    ],
    features: [
      {
        title: "Critical Illness Payout",
        description: "Receive a sudden cash lump-sum upon the diagnosis of critical health events including Cancer, Stroke, Heart Attack, or End-stage Kidney Failure.",
        icon: "Heart"
      },
      {
        title: "Capital Safety Assurance",
        description: "Your accumulated savings are locked in safe high-yield portfolios. If your circumstances change, recover 100% of your capital balance after the lock-in period.",
        icon: "Lock"
      },
      {
        title: "Budget-Friendly Premium Cycles",
        description: "Align your insurance with your real business sales. Pay premiums flexibly on a monthly, quarterly, or annual basis.",
        icon: "Calendar"
      },
      {
        title: "Accidental Death Protection",
        description: "Secures your immediate family with emergency cash in the event of accidental loss of life, keeping your family business afloat.",
        icon: "LifeBuoy"
      }
    ],
    requirements: [
      "Valid Ugandan National ID Card or Passport",
      "Proof of simple source of funds (e.g. mobile money trade records, shop rental slip, or payslip)",
      "Simple completed medical & health statement form"
    ],
    steps: [
      "Choose your savings target and comfortable monthly deposit (starting at UGX 50,000).",
      "Configure your critical illness or impairment protection ratios.",
      "Submit your National ID card and basic business trade proof.",
      "Receive your official insurance certificate within 5 working days."
    ]
  },
  {
    id: "solace-plan",
    name: "Solace Plan",
    tagline: "Financial Security in Uncertain Times",
    description: "Our Solace (Flexi Protect) plan offers a comprehensive safety net for you and your loved ones, providing critical financial support and funeral expenses coverage. It is underwritten by Bumu to guarantee peace of mind during life's most challenging transitions.",
    partner: "Bumu",
    image: solaceFamilyImage,
    badge: "Family Protection & Solace Funeral Cover",
    color: "purple",
    icon: "Heart",
    premiumMinimum: "Flexible / Budget-friendly",
    keyHighlights: [
      "Lump-sum funeral cash to cover expenses & rites",
      "Double accident benefit up to UGX 60,000,000",
      "Family remains covered 6 months premium-free upon principal death",
      "Covers up to 20 family members (3 spouses, children, parents)"
    ],
    features: [
      {
        title: "Waiver of Premium",
        description: "If the Principal Life Assured passes away, the family stays covered for six months with no premiums, provided the policy has been active for at least six months.",
        icon: "ShieldAlert"
      },
      {
        title: "Double Accident Benefit",
        description: "Double accident coverage is provided for both the policyholder and their spouse, guaranteeing a maximum payout of up to UGX 60,000,000.",
        icon: "Sparkles"
      },
      {
        title: "Allows Third Party Policies",
        description: "Allows you to pay premiums for third parties (such as relatives or employees) without them necessarily being directly under your coverage.",
        icon: "UserCheck"
      },
      {
        title: "Continuous Cover & Policy Security",
        description: "If you experience volatile business months and miss payments, your benefits are pro-rated instead of being completely terminated.",
        icon: "RefreshCw"
      }
    ],
    requirements: [
      "Main Insured & Spouse: Aged 18 to 69 years",
      "Parents & Parents-in-law: Aged 18 to 84 years",
      "Children & Extended Family: Newborn to 24 & 84 years respectively",
      "Valid Ugandan National ID, Passport, or Birth Certificates for children",
      "6-month waiting period applies for deaths resulting from natural causes"
    ],
    steps: [
      "List the family members (up to 20 members) you wish to cover on the policy.",
      "Select your comfortable Sum Assured option (ranging from UGX 1,250,000 to UGX 30,000,000).",
      "Provide copies of National IDs or documentation for covered members.",
      "Set up your convenient premium payment cycles through bank, mobile money, or card."
    ]
  }
];

export default function InsuranceView() {
  const [activePlanId, setActivePlanId] = useState<string>("all");

  const filteredPlans = activePlanId === "all" 
    ? INSURANCE_PLANS 
    : INSURANCE_PLANS.filter(p => p.id === activePlanId);

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className="h-5 w-5" /> : <LucideIcons.HelpCircle className="h-5 w-5" />;
  };

  return (
    <section className="bg-slate-50 dark:bg-slate-950/40 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl border border-slate-200/60 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Partnership Header */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 mb-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase text-[#0047ab] dark:text-blue-400 bg-[#0047ab]/10 dark:bg-blue-500/10">
              <LucideIcons.ShieldCheck className="h-3.5 w-3.5" /> Licensed Insurance Partnerships
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight">
              Grow with Confidence. Protect What Matters.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-sans">
              Bumu Microfinance has partnered with <strong className="text-slate-900 dark:text-white">Liberty Insurance Uganda</strong> (fully regulated by the Insurance Regulatory Authority of Uganda) to offer tailored, simple, and affordable savings-insurance programs directly to market vendors and business parents.
            </p>
          </div>
          <div className="flex-shrink-0 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 p-4 rounded-xl flex items-center justify-center h-20 w-44">
            <div className="text-center">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-black tracking-widest block">Underwritten by</span>
              <span className="font-display font-black text-[#0047ab] dark:text-blue-400 text-sm">LIBERTY INSURANCE</span>
              <span className="text-[9px] font-sans text-slate-500 block">Regulated by IRA Uganda</span>
            </div>
          </div>
        </div>

        {/* Dynamic Filters/Toggles */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActivePlanId("all")}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
              activePlanId === "all"
                ? 'bg-[#0047ab] text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            All Insurance Products
          </button>
          <button
            onClick={() => setActivePlanId("soma-plan")}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activePlanId === "soma-plan"
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <LucideIcons.GraduationCap className="h-4 w-4 text-blue-500" />
            Soma Plan (Education)
          </button>
          <button
            onClick={() => setActivePlanId("kuza-plan")}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activePlanId === "kuza-plan"
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <LucideIcons.TrendingUp className="h-4 w-4 text-amber-500" />
            Kuza Plan (Savings & Protection)
          </button>
          <button
            onClick={() => setActivePlanId("solace-plan")}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activePlanId === "solace-plan"
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <LucideIcons.Heart className="h-4 w-4 text-purple-500" />
            Solace Plan (Flexi Protect)
          </button>
        </div>

        {/* Separated Insurance Products Display */}
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredPlans.map((plan) => {
              const accentColor = plan.color === "blue" 
                ? "text-blue-600 dark:text-blue-400" 
                : plan.color === "purple"
                  ? "text-purple-600 dark:text-purple-400"
                  : "text-amber-600 dark:text-amber-400";
              const bgColor = plan.color === "blue" 
                ? "bg-blue-50/50 dark:bg-blue-950/20" 
                : plan.color === "purple"
                  ? "bg-purple-50/50 dark:bg-purple-950/20"
                  : "bg-amber-50/50 dark:bg-amber-950/20";
              const borderAccent = plan.color === "blue" 
                ? "border-blue-100 dark:border-blue-900/40" 
                : plan.color === "purple"
                  ? "border-purple-100 dark:border-purple-900/40"
                  : "border-amber-100 dark:border-amber-900/40";
              const btnColor = plan.color === "blue" 
                ? "bg-blue-600 hover:bg-blue-700 text-white" 
                : plan.color === "purple"
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-amber-600 hover:bg-amber-700 text-white";

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden"
                >
                  {/* Title banner split */}
                  <div className="grid lg:grid-cols-12 gap-0">
                    
                    {/* Visual Side */}
                    <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[250px] bg-slate-100">
                      <img 
                        src={plan.image} 
                        alt={plan.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent lg:bg-gradient-to-t" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/95 text-slate-900 shadow-sm">
                          {plan.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white p-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-300">Underwriter</span>
                        <h4 className="font-display font-black text-sm tracking-tight flex items-center gap-1.5">
                          <LucideIcons.ShieldCheck className="h-4 w-4 text-[#ffd700]" />
                          {plan.partner}
                        </h4>
                      </div>
                    </div>

                    {/* Description Side */}
                    <div className="lg:col-span-7 p-6 md:p-8 space-y-6 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-800 ${accentColor}`}>
                            {getIcon(plan.icon)}
                          </div>
                          <h3 className="font-display font-black text-2xl text-slate-900 dark:text-white">
                            {plan.name}
                          </h3>
                        </div>
                        <p className={`font-display font-bold text-sm ${accentColor} italic`}>
                          "{plan.tagline}"
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed font-sans">
                          {plan.description}
                        </p>
                      </div>

                      {/* Quick Highlight Pills */}
                      <div className={`p-4 rounded-xl border ${bgColor} ${borderAccent} space-y-2.5`}>
                        <div className="flex justify-between items-center border-b border-slate-200/60 dark:border-slate-800 pb-2">
                          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Premium Starts At</span>
                          <span className={`text-xs font-mono font-black ${accentColor}`}>{plan.premiumMinimum}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
                          {plan.keyHighlights.map((highlight, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-1.5 text-xs">
                              <LucideIcons.CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${accentColor}`} />
                              <span className="font-sans leading-tight font-medium text-[11px]">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Core Features Accordion style grid */}
                  <div className="border-t border-slate-100 dark:border-slate-800/80 p-6 md:p-8 bg-slate-50/50 dark:bg-slate-900/50">
                    <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-wider mb-6">
                      Why Choose the {plan.name}?
                    </h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800 shadow-xs space-y-2">
                          <div className={`w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800/80 flex items-center justify-center ${accentColor}`}>
                            {getIcon(feature.icon)}
                          </div>
                          <h5 className="font-display font-bold text-slate-900 dark:text-white text-xs">
                            {feature.title}
                          </h5>
                          <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed font-sans">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements & Action Steps */}
                  <div className="border-t border-slate-100 dark:border-slate-800/80 p-6 md:p-8 grid md:grid-cols-2 gap-8 bg-white dark:bg-slate-900">
                    
                    {/* Left Column: Requirements */}
                    <div className="space-y-4">
                      <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-wider">
                        Documents & Requirements
                      </h4>
                      <ul className="space-y-3">
                        {plan.requirements.map((req, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5">
                            <span className="h-4 w-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[9px] font-display font-black flex items-center justify-center shrink-0 mt-0.5 border border-slate-200 dark:border-slate-700">
                              {rIdx + 1}
                            </span>
                            <span className="text-slate-700 dark:text-slate-300 text-xs font-sans font-medium leading-relaxed">
                              {req}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column: Application Process */}
                    <div className="space-y-4">
                      <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-wider">
                        How to Get Started
                      </h4>
                      <div className="space-y-3">
                        {plan.steps.map((step, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2.5">
                            <div className={`p-1 rounded-md bg-slate-50 dark:bg-slate-800 shrink-0 mt-0.5 ${accentColor}`}>
                              <LucideIcons.ArrowRight className="h-3.5 w-3.5" />
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-xs font-sans leading-relaxed">
                              <span className="font-bold text-slate-800 dark:text-slate-200">Step {sIdx + 1}:</span> {step}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-[#0047ab] text-white rounded-2xl p-6 md:p-8 mt-16 text-center space-y-6 relative overflow-hidden">
          {/* Decorative Background Image overlay for depth */}
          <div className="absolute inset-0 opacity-15">
            <img 
              src={serviceMicroInsurance} 
              alt="Background Insurance" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-[#0047ab]/80 mix-blend-multiply" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <LucideIcons.HeartHandshake className="h-10 w-10 text-[#ffd700] mx-auto animate-bounce" />
            <h3 className="font-display font-black text-2xl md:text-3xl text-white">
              Ready to Secure Your Family's Big Dreams?
            </h3>
            <p className="text-slate-200 text-xs md:text-sm leading-relaxed font-sans">
              Don't wait for sudden disruptions to affect your children's education or deplete your business inventory. Contact a dedicated Bumu CFC credit-insurance expert to custom build your plan today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a 
                href="https://wa.me/256754064499" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#ffd700] hover:bg-[#ffe082] text-slate-950 text-xs font-bold rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <LucideIcons.MessageSquareCode className="h-4 w-4" />
                Register via WhatsApp (0754 064499)
              </a>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  // Dispatch a custom event to change the tab or let App handles it.
                  window.dispatchEvent(new CustomEvent('change-tab', { detail: 'contact' }));
                }}
                className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <LucideIcons.PhoneCall className="h-4 w-4" />
                Speak to our Agent
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
