import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: 'Full-Stack Web Development',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ec4899', '#f43f5e', '#ffffff', '#38bdf8']
      });

      // Prepare mailto fallback
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject || formData.service} - from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hi Chemayek,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <div className="pt-28 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeader
          badge="Get in Touch"
          title="Let's Discuss Your"
          highlightedText="Next Project"
          subtitle="Have a question, a potential collaboration, or looking for a software engineer to build your next breakthrough product? Send a message below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
          
          {/* Left Column: Direct Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Info Card */}
            <div className="bg-[#121212] border border-gray-800/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-500" />
                <span>Contact Information</span>
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                I am actively taking on new engineering opportunities, contract projects, and AI system consultancies. Reach out directly anytime.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#181818] border border-gray-800/80">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold uppercase">Email Address</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-bold text-white hover:text-pink-400 transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#181818] border border-gray-800/80">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold uppercase">Location</div>
                    <div className="text-sm font-bold text-white">{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#181818] border border-gray-800/80">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold uppercase">Working Timezone</div>
                    <div className="text-sm font-bold text-white">East Africa Time (UTC+3)</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-gray-800/80">
                <div className="text-xs text-gray-400 font-semibold uppercase mb-3">
                  Connect On Socials:
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#1a1a1a] border border-gray-800 text-gray-300 hover:text-pink-400 hover:border-pink-500/40 transition-all flex items-center gap-2 text-xs font-semibold"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#1a1a1a] border border-gray-800 text-gray-300 hover:text-pink-400 hover:border-pink-500/40 transition-all flex items-center gap-2 text-xs font-semibold"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#1a1a1a] border border-gray-800 text-gray-300 hover:text-pink-400 hover:border-pink-500/40 transition-all flex items-center gap-2 text-xs font-semibold"
                  >
                    <TwitterIcon className="w-4 h-4" />
                    <span>Twitter / X</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Response Time Card */}
            <div className="p-5 rounded-2xl bg-[#141414] border border-gray-800/80 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
              <p className="text-xs text-gray-300">
                <strong className="text-white">Fast Response:</strong> Typically replies within 24 hours.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121212] border border-gray-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-gray-400 mb-8">
                Fill in the details below and I will get back to you promptly.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center mx-auto text-2xl border border-pink-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Thank You!</h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Your inquiry has been formulated. Your email client should launch with the details, or you can send directly to <span className="text-pink-400">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        service: 'Full-Stack Web Development',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold text-pink-400 bg-pink-500/10 hover:bg-pink-500/20 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                        Your Name <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                        Your Email <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry / Job Opportunity"
                        className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                        Interested Service
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-gray-800 text-sm text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                      >
                        <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                        <option value="AI & Machine Learning Solutions">AI & Machine Learning Solutions</option>
                        <option value="E-Commerce & Digital Marketplaces">E-Commerce & Digital Marketplaces</option>
                        <option value="Cloud Architecture & Backend APIs">Cloud Architecture & Backend APIs</option>
                        <option value="UI/UX & Frontend Engineering">UI/UX & Frontend Engineering</option>
                        <option value="Custom Software / Logistics Dashboard">Custom Software / Logistics Dashboard</option>
                        <option value="General Consultation / Other">General Consultation / Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Your Message <span className="text-pink-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project scope, goals, or timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 shadow-xl shadow-pink-600/30 hover:shadow-pink-600/50 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
