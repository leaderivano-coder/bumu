import React, { useState } from 'react';
import { SERVICES } from '../data';
import * as LucideIcons from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductDetail {
  purpose: string;
  targetClients: string;
  repaymentFlex: string;
  requirements: string[];
  benefits: string[];
}

const PRODUCT_DETAILS: Record<string, ProductDetail> = {
  "quick-loans": {
    purpose: "Tailored to meet your urgent financial needs, whether for essential working capital or unexpected family expenses. Unlike traditional loans, you do not need collateral, making it easier than ever to access the support you require.",
    targetClients: "Individual and group business operators requiring fast, collateral-free financing.",
    repaymentFlex: "Fast-tracked short-term repayment matching your immediate cash cycles.",
    requirements: [
      "A reliable source of income / business",
      "Identification documents and passport photos",
      "Guarantor(s)",
      "L.C recommendation"
    ],
    benefits: [
      "Zero collateral required for maximum speed and simplicity",
      "Tailored specifically for urgent personal or business needs",
      "Simple, direct documentation checklist"
    ]
  },
  "commercial-loans": {
    purpose: "Tailored for clients engaged in income-generating ventures who are eager to expand their businesses. With a generous maximum repayment period, they provide the flexibility you need to succeed.",
    targetClients: "Entrepreneurs, traders, and small to medium enterprise (SME) owners looking to scale up.",
    repaymentFlex: "Flexible terms spanning up to 18 months, custom-fit to your business budget.",
    requirements: [
      "A reliable source of income / business",
      "Identification and passport photos",
      "Security, e.g., land, motor vehicles or chattels such as household or business assets and guarantor(s)",
      "Proof of income such as business records, bank statements, etc.",
      "Proof of business ownership, i.e., Trading license, Rent receipts, etc.",
      "L.C recommendation",
      "Must be above 18 years of age"
    ],
    benefits: [
      "Fast approval, with funds available in just 24 hours",
      "Flexible loan sizes ranging from UGX 500,000 to UGX 50,000,000",
      "Convenient repayment terms of up to 18 months to fit your budget",
      "Minimal security requirements for greater accessibility",
      "Loans are insured against death and disability for your peace of mind"
    ]
  },
  "salary-loans": {
    purpose: "Designed specifically for employees of recognized private and public companies who earn a salary. It aims to empower them by addressing their immediate financial needs, such as funding for school fees, purchasing essential assets, and supporting the growth of their side businesses.",
    targetClients: "Salaried employees in private and public companies with stable, verifiable incomes.",
    repaymentFlex: "Easy monthly salary-deduction terms tailored to your pay structure.",
    requirements: [
      "Employment identity card and passport photos",
      "Copy of Employee Contract / Appointment letter",
      "Copy of Employee Confirmation letter",
      "Employer recommendation and undertaking",
      "Collateral security where applicable",
      "Official Bank Statement",
      "Recent pay slips"
    ],
    benefits: [
      "Empowers employees to cover immediate expenses (e.g. tuition, medical) instantly",
      "Acquire essential personal or business assets without wiping out savings",
      "Provides vital capital support to grow secondary or side-business ventures"
    ]
  },
  "asset-financing": {
    purpose: "Enables customers to acquire valuable business assets, physical properties, or commercial land plots without paying for them all at once. Bumu finances the acquisition of equipment, land, or building assets, and the asset itself forms the core security for the loan.",
    targetClients: "Entrepreneurs, developers, and growing business owners looking to secure commercial plots, build retail spaces, or acquire machinery and vehicles.",
    repaymentFlex: "Structured repayment schedules aligned with your asset's productivity, construction milestones, or land development cycles.",
    requirements: [
      "A reliable source of income (business)",
      "Identification and passport photos",
      "Proof of income such as business records, bank statements, etc.",
      "Proof of business ownership / land agreement documents",
      "L.C recommendation",
      "Own contribution of at least 50% of the cost of the asset"
    ],
    benefits: [
      "Bumu contributes up to 50% of the assets' or land's cost, making acquisition effortless",
      "The acquired plot, commercial property, or equipment forms the primary collateral",
      "Allows customers to secure land and develop commercial structures immediately to secure long-term business equity"
    ]
  },
  "group-loans": {
    purpose: "Loans extended to low-income entrepreneurs who lack traditional collateral. They form into groups with a membership ranging from five (5) to ten (10) individuals, who should all be operating small and micro businesses. The members self-select and guarantee themselves.",
    targetClients: "Micro-entrepreneurs and market vendors working in active business clusters.",
    repaymentFlex: "Cooperative peer-supported repayment structure matching collective sales.",
    requirements: [
      "Client Identification and passport photos",
      "Cash collateral of at least 25% of the loan amount",
      "L.C recommendation"
    ],
    benefits: [
      "Self-selection and mutual peer-guarantee replaces standard physical collateral",
      "Encourages community saving, networking, and business support",
      "Highly accessible for small and micro businesses lacking traditional assets"
    ]
  },
  "school-fees": {
    purpose: "Enables a parent, guardian, or student to access funds to clear school fees at once and pay later in manageable installments in a period of up to 6 months.",
    targetClients: "Parents and guardians aiming to secure un-interrupted education for their students.",
    repaymentFlex: "Flexible repayment terms of up to 6 months for your convenience.",
    requirements: [
      "Reliable source of income/business",
      "Documentation: Evidence of school fees payment, e.g., admission letter and student identity card where either is applicable",
      "Security where applicable"
    ],
    benefits: [
      "Flexible repayment terms of up to 6 months for your convenience",
      "A range of security options tailored to your needs",
      "Competitive interest rates that won't strain your finances",
      "Available for both new and existing clients on an individual basis",
      "You can access this loan product even with an existing loan at BUMU, provided you maintain a good repayment history and can manage both loans"
    ]
  }
};

export default function ServicesView() {
  const [selectedProduct, setSelectedProduct] = useState<typeof SERVICES[0] | null>(null);

  const productDetail = selectedProduct ? PRODUCT_DETAILS[selectedProduct.id] : null;

  return (
    <section className="bg-[#fff8dc] py-16 px-6 rounded-xl border border-[#ffe0b2] shadow-xs">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-xs uppercase font-mono tracking-widest text-amber-700 font-bold bg-amber-100/60 px-3 py-1 rounded-full inline-block mb-3 animate-pulse">
          Licensed & Customer-Centric
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-black text-[#0047ab] leading-tight mb-4">
          Financial Solutions Designed for Every Venture
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto font-sans text-sm md:text-base mb-12">
          Explore our tailored financing options. Click on any product below to view detailed specifications, benefits, and requirements, designed to keep your venture growing.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {SERVICES.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.HelpCircle;

            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProduct(service)}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-150 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {service.image && (
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-4 flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-white/95 text-[#0047ab] flex items-center justify-center shadow-lg border border-slate-100">
                          <IconComponent className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="font-display font-black text-[#0047ab] text-xl mb-2.5 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 font-sans line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {/* Learn More / Apply Link */}
                <div className="px-6 pb-6 pt-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0047ab] group-hover:text-amber-600 transition-colors border-t border-slate-100 pt-4">
                    <span>View Product Details</span>
                    <LucideIcons.ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 text-amber-500" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extra notice box */}
        <div className="bg-amber-50/50 rounded-lg p-5 border border-amber-200 mt-12 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-left">
          <div className="p-3 bg-white rounded-full text-[#0047ab] border border-amber-100 flex-shrink-0">
            <LucideIcons.BookOpen className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-slate-950 text-sm">Mandatory Credit Education</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans">
              To support your credit success, all applicants attend our brief, interactive 15-minute literacy seminar addressing market cash flows, stock rotation, and budget planning before disbursement.
            </p>
          </div>
        </div>
      </div>

      {/* --- Interactive Product Detail Modal --- */}
      <AnimatePresence>
        {selectedProduct && productDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col border border-slate-100 dark:border-slate-800"
            >
              {/* Header Image Accent */}
              <div className="relative h-40 bg-slate-900">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.title} 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors cursor-pointer"
                  title="Close Modal"
                >
                  <LucideIcons.X className="h-5 w-5" />
                </button>
                <div className="absolute bottom-4 left-6 text-white">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#ffd700]">BUMU PRODUCT PROFILE</span>
                  <h3 className="font-display font-black text-xl md:text-2xl">{selectedProduct.title}</h3>
                </div>
              </div>

              {/* Modal Content Scrollable Area */}
              <div className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[calc(90vh-160px)] text-left">
                
                {/* 1. Purpose & Overview */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-[#0047ab] dark:text-blue-400 uppercase tracking-wider flex items-center gap-2">
                    <LucideIcons.Compass className="h-4 w-4 text-amber-500" />
                    Product Purpose & Scope
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                    {productDetail.purpose}
                  </p>
                </div>

                {/* 3. Benefits Grid */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-[#0047ab] dark:text-blue-400 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-1.5">
                    <LucideIcons.Sparkles className="h-4 w-4 text-amber-500" />
                    Key Product Advantages
                  </h4>
                  <div className="grid gap-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 font-sans">
                    {productDetail.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <LucideIcons.CheckCircle className="h-4.5 w-4.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Requirements Checklist */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-[#0047ab] dark:text-blue-400 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-1.5">
                    <LucideIcons.FileText className="h-4 w-4 text-amber-500" />
                    What you need to get {selectedProduct.title}
                  </h4>
                  <div className="grid gap-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 font-sans">
                    {productDetail.requirements.map((r, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <LucideIcons.CheckCircle className="h-4.5 w-4.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action buttons inside modal */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const text = `Hello Bumu CFC! I would like to inquire about your ${selectedProduct.title} product details.`;
                      window.open(`https://wa.me/256754064499?text=${encodeURIComponent(text)}`, '_blank');
                    }}
                    className="flex-grow py-3 bg-[#25D366] hover:bg-[#1ebe55] text-white font-bold rounded-xl transition-colors text-center text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <LucideIcons.MessageSquare className="h-4.5 w-4.5" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    className="py-3 px-6 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl transition-colors text-sm cursor-pointer"
                  >
                    Close Details
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
