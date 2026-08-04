import React, { useState } from 'react';
import { Phone, Mail, Facebook, Send, Clock, MapPin, CheckCircle, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate inquiry submission with immediate visual success feedback
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 4000);
  };

  return (
    <section className="bg-[#f2faf5] py-16 px-6 rounded-xl border border-emerald-100 shadow-xs">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-700 font-bold bg-emerald-100 px-3 py-1 rounded-full inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-[#0047ab] leading-tight mb-4">
            Connect with Our Finance Experts
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-sans text-sm md:text-base">
            Have questions about our rates, application procedures, or need help restructuring? Fill in the form or call us directly. Our officers are always ready to assist.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Numbers card */}
            <div className="bg-white p-6 rounded-xl border border-emerald-50 shadow-xs">
              <h3 className="font-display font-bold text-slate-900 text-base flex items-center gap-2 mb-4">
                <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                  <Phone className="h-5 w-5" />
                </span>
                Direct Call Lines
              </h3>
              <div className="space-y-3 font-sans text-sm text-slate-700">
                <p className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span>General Manager / Inquiries:</span>
                  <a href="tel:+256754064499" className="font-mono font-bold text-[#0047ab] hover:underline">+256 754 064499</a>
                </p>
                <p className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span>Primary Support (WhatsApp):</span>
                  <a href="tel:+256754064499" className="font-mono font-bold text-[#0047ab] hover:underline">+256 754 064499</a>
                </p>
                <p className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span>Owino Market Desk:</span>
                  <a href="tel:+256754064499" className="font-mono font-bold text-[#0047ab] hover:underline">+256 754 064499</a>
                </p>
                <p className="flex justify-between items-center">
                  <span>Nansana Desk (WhatsApp):</span>
                  <a href="tel:+256707950229" className="font-mono font-bold text-[#0047ab] hover:underline">0707 950229</a>
                </p>
              </div>
            </div>

            {/* Email & Facebook card */}
            <div className="bg-white p-6 rounded-xl border border-emerald-50 shadow-xs">
              <h3 className="font-display font-bold text-slate-900 text-base flex items-center gap-2 mb-4">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Mail className="h-5 w-5" />
                </span>
                Online Channels
              </h3>
              <div className="space-y-4 font-sans text-sm">
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Email Address</span>
                  <a href="mailto:info@bumu-cfc.com" className="font-semibold text-[#0047ab] hover:underline text-base mt-0.5 block">
                    info@bumu-cfc.com
                  </a>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Facebook Page</span>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 font-semibold text-blue-700 hover:underline text-sm mt-1"
                  >
                    <Facebook className="h-4 w-4 fill-current" />
                    Bumu Microfinance Facebook Page
                  </a>
                </div>
              </div>
            </div>

            {/* Office details card */}
            <div className="bg-white p-6 rounded-xl border border-emerald-50 shadow-xs">
              <h3 className="font-display font-bold text-slate-900 text-base flex items-center gap-2 mb-4">
                <span className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                  <Clock className="h-5 w-5" />
                </span>
                Office Hours & HQ
              </h3>
              <div className="space-y-3 font-sans text-xs md:text-sm text-slate-600 leading-relaxed">
                <div className="flex gap-2">
                  <MapPin className="h-4 w-4 text-slate-400 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Registered Office Address:</strong><br />
                    Ssebaana Kizito Road, Kampala, Uganda, 10108
                  </p>
                </div>
                <div className="flex gap-2 border-t border-slate-100 pt-3">
                  <Clock className="h-4 w-4 text-slate-400 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Working Schedule:</strong><br />
                    Monday – Saturday: 8:00 AM – 5:00 PM<br />
                    Official Public Holidays: 8:00 AM – 12:00 PM (Midday)<br />
                    Sunday: Always Closed
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Message Submission Form */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-xl mb-2">Message Sent Successfully!</h3>
                <p className="text-slate-600 max-w-md font-sans text-sm">
                  Thank you for contacting Bumu Microfinance. A customer service representative will evaluate your inquiry and get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-4 py-2 border border-slate-300 rounded-md text-sm text-slate-600 hover:bg-slate-50 font-semibold cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-slate-900 text-lg border-b border-slate-100 pb-3">
                  Inquire Online
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Kato John"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0047ab] focus:border-[#0047ab]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Phone Number (UGX)</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +256 754 064499"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0047ab] focus:border-[#0047ab]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Email Address (Optional)</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. example@domain.com"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0047ab] focus:border-[#0047ab]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Subject of Interest</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#0047ab] focus:border-[#0047ab]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Quick Cash Loan">Quick Cash Loan</option>
                      <option value="Business Loan">Business Loan</option>
                      <option value="Group & Vendor Loans">Group & Vendor Loans</option>
                      <option value="Asset Financing">Asset Financing</option>
                      <option value="School Fees Program">School Fees Program</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your business or financing needs..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0047ab] focus:border-[#0047ab]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0047ab] hover:bg-[#003480] text-white font-bold rounded-lg shadow-sm transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
