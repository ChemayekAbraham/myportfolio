import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Clock,
  Phone,
  Sparkles,
  Copy,
  Check
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { TiltCard } from '../components/TiltCard';
import { triggerFireworks, triggerConfetti } from '../utils/confetti';
import { sound } from '../utils/sound';

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
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (text: string, field: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    sound.playChime();
    setTimeout(() => setCopiedField(null), 2000);
  };

  const applyPreset = (subject: string, message: string, service: string) => {
    sound.playClick();
    setFormData((prev) => ({
      ...prev,
      subject,
      service,
      message
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const emailSubject = formData.subject.trim() 
      ? `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`
      : `[Portfolio Inquiry] ${formData.service} - from ${formData.name}`;

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: emailSubject,
          _replyto: formData.email,
          _template: 'table',
          'Sender Name': formData.name,
          'Sender Email': formData.email,
          'Interested Service': formData.service,
          'Subject': formData.subject || 'Not specified',
          'Message': formData.message,
          '_captcha': 'false'
        })
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setSubmitted(true);
        sound.playChime();
        triggerFireworks();
      } else {
        throw new Error(data.message || 'Failed to deliver message directly.');
      }
    } catch (err: any) {
      console.warn('FormSubmit AJAX fallback:', err);
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(
        `Hi Chemayek,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.open(mailtoUrl, '_blank');
      setSubmitted(true);
      sound.playChime();
      triggerFireworks();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeader
          badge="Get in Touch"
          title="Let's Discuss Your"
          highlightedText="Next Project"
          subtitle="Have a question, a potential collaboration, or looking for a software engineer to build your next breakthrough product? Send a message below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-8">
          
          {/* Left Column: Direct Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Info Card */}
            <TiltCard glowColor="rgba(59, 130, 246, 0.2)">
              <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-blue-500/20">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-500" />
                  <span>Contact Information</span>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                  I am actively taking on new engineering opportunities, contract projects, media production, and AI system consultancies. Reach out directly anytime.
                </p>

                <div className="space-y-3.5 pt-2">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-black/5 dark:bg-[#16161c] border border-gray-200 dark:border-gray-800/80 hover:border-blue-500/40 transition-colors">
                    <div className="flex items-start gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-500 shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-gray-500 font-semibold uppercase">Email Address</div>
                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-500 transition-colors truncate block"
                        >
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                      className="p-2 rounded-xl text-slate-500 hover:text-blue-500 hover:bg-black/5 dark:hover:bg-white/5 transition-colors shrink-0 cursor-pointer"
                      title="Copy Email"
                    >
                      {copiedField === 'email' ? (
                        <span className="flex items-center gap-1 text-xs text-emerald-500 font-bold">
                          <Check className="w-4 h-4" /> Copied
                        </span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-black/5 dark:bg-[#16161c] border border-gray-200 dark:border-gray-800/80 hover:border-emerald-500/40 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
                      <WhatsappIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 font-semibold uppercase">WhatsApp Direct</div>
                      <a
                        href={PERSONAL_INFO.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          sound.playClick();
                          triggerConfetti(e);
                        }}
                        className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
                      >
                        {PERSONAL_INFO.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-2xl bg-black/5 dark:bg-[#16161c] border border-gray-200 dark:border-gray-800/80 hover:border-blue-500/40 transition-colors">
                    <div className="flex items-start gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-500 shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-gray-500 font-semibold uppercase">Direct Call / Phone</div>
                        <a
                          href={`tel:${PERSONAL_INFO.phone}`}
                          className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-500 transition-colors truncate block"
                        >
                          {PERSONAL_INFO.phoneFormatted}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                      className="p-2 rounded-xl text-slate-500 hover:text-blue-500 hover:bg-black/5 dark:hover:bg-white/5 transition-colors shrink-0 cursor-pointer"
                      title="Copy Phone"
                    >
                      {copiedField === 'phone' ? (
                        <span className="flex items-center gap-1 text-xs text-emerald-500 font-bold">
                          <Check className="w-4 h-4" /> Copied
                        </span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-black/5 dark:bg-[#16161c] border border-gray-200 dark:border-gray-800/80">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-500 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-semibold uppercase">Location</div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.location}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-black/5 dark:bg-[#16161c] border border-gray-200 dark:border-gray-800/80">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-semibold uppercase">Working Timezone</div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">East Africa Time (UTC+3)</div>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800/80">
                  <div className="text-xs text-slate-600 dark:text-gray-400 font-bold uppercase mb-3">
                    Connect On Socials:
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={PERSONAL_INFO.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => triggerConfetti(e)}
                      className="p-3 rounded-xl glass-card text-slate-700 dark:text-gray-300 hover:text-emerald-500 hover:border-emerald-500/40 transition-all flex items-center gap-2 text-xs font-semibold"
                    >
                      <WhatsappIcon className="w-4 h-4 text-emerald-500" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => triggerConfetti(e)}
                      className="p-3 rounded-xl glass-card text-slate-700 dark:text-gray-300 hover:text-blue-500 hover:border-blue-500/40 transition-all flex items-center gap-2 text-xs font-semibold"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => triggerConfetti(e)}
                      className="p-3 rounded-xl glass-card text-slate-700 dark:text-gray-300 hover:text-blue-500 hover:border-blue-500/40 transition-all flex items-center gap-2 text-xs font-semibold"
                    >
                      <LinkedinIcon className="w-4 h-4 text-blue-500" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Response Time Card */}
            <div className="p-5 rounded-2xl glass-card border border-emerald-500/30 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <p className="text-xs text-slate-700 dark:text-gray-300">
                <strong className="text-slate-900 dark:text-white">Fast Response:</strong> Typically replies within 24 hours.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <TiltCard glowColor="rgba(59, 130, 246, 0.2)">
              <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative border border-blue-500/20">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 mb-6 sm:mb-8">
                  Fill in the details below and I will get back to you promptly.
                </p>

                {submitted ? (
                  <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto text-2xl border border-emerald-500/40 shadow-lg shadow-emerald-500/10">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h4>
                    <p className="text-sm text-slate-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
                      Your inquiry has been transmitted directly to Chemayek Abraham's inbox (<span className="text-blue-500 font-semibold">{PERSONAL_INFO.email}</span>). You will receive a response promptly within 24 hours.
                    </p>
                    <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
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
                        className="px-6 py-2.5 rounded-xl text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 transition-colors cursor-pointer"
                      >
                        Send Another Message
                      </button>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
                      >
                        Open in Email Directly
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Quick Project Starters (Tap to Autofill) */}
                    <div className="mb-6 p-4 rounded-2xl bg-black/5 dark:bg-[#16161c] border border-gray-200 dark:border-gray-800/80 space-y-2.5">
                      <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-gray-300 font-semibold uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                        <span>Quick Project Starters (Tap to Autofill):</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => applyPreset(
                            'Full-Stack Web App Engineering',
                            'Hi Chemayek, I have an upcoming web application project and would like to discuss system architecture, timelines, and implementation with you.',
                            'Full-Stack Web Development'
                          )}
                          className="px-3 py-1.5 rounded-xl text-xs font-medium glass-card hover:border-blue-500/50 hover:text-blue-500 transition-all text-slate-700 dark:text-gray-300 cursor-pointer"
                        >
                          🚀 Web App / SaaS
                        </button>
                        <button
                          type="button"
                          onClick={() => applyPreset(
                            'Bug Squashing & Performance Optimization',
                            'Hi Chemayek, I heard you are a Professional Bug Creator & Squasher! We have performance bottlenecks and bugs in our codebase that need your debugging skills.',
                            'Full-Stack Web Development'
                          )}
                          className="px-3 py-1.5 rounded-xl text-xs font-medium glass-card hover:border-emerald-500/50 hover:text-emerald-400 transition-all text-slate-700 dark:text-gray-300 cursor-pointer"
                        >
                          🐛 Squash Our Bugs
                        </button>
                        <button
                          type="button"
                          onClick={() => applyPreset(
                            '4K Drone Cinematography & Video',
                            'Hi Chemayek, we are looking for high-resolution aerial cinematography and video production for an upcoming event or commercial showcase.',
                            'Cinematography & Drone Video'
                          )}
                          className="px-3 py-1.5 rounded-xl text-xs font-medium glass-card hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-slate-700 dark:text-gray-300 cursor-pointer"
                        >
                          🎥 4K Drone Filming
                        </button>
                        <button
                          type="button"
                          onClick={() => applyPreset(
                            'Hardware, Network & Lab Admin',
                            'Hi Chemayek, I would like to consult with you regarding computer hardware maintenance, network infrastructure, or IT lab management.',
                            'Hardware & Lab Admin'
                          )}
                          className="px-3 py-1.5 rounded-xl text-xs font-medium glass-card hover:border-purple-500/50 hover:text-purple-400 transition-all text-slate-700 dark:text-gray-300 cursor-pointer"
                        >
                          🛠️ Hardware & Lab
                        </button>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider">
                          Your Name <span className="text-blue-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alex Mercer"
                          className="w-full px-4 py-3 rounded-xl glass-card text-sm text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider">
                          Your Email <span className="text-blue-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@example.com"
                          className="w-full px-4 py-3 rounded-xl glass-card text-sm text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Project Inquiry / Job Opportunity"
                          className="w-full px-4 py-3 rounded-xl glass-card text-sm text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider">
                          Interested Service
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl glass-card text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                          <option value="Media Production & Graphic Editing">Media Production & Graphic Editing</option>
                          <option value="Computer Repair, Lab Admin & IT Support">Computer Repair, Lab Admin & IT Support</option>
                          <option value="Cloud Architecture & Backend APIs">Cloud Architecture & Backend APIs</option>
                          <option value="UI/UX & Frontend Engineering">UI/UX & Frontend Engineering</option>
                          <option value="Custom Software / Logistics Dashboard">Custom Software / Logistics Dashboard</option>
                          <option value="General Consultation / Other">General Consultation / Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wider">
                        Your Message <span className="text-blue-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project scope, goals, or timeline..."
                        className="w-full px-4 py-3 rounded-xl glass-card text-sm text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 cursor-pointer"
                    >
                      {loading ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                          <Sparkles className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                  </>
                )}
              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </div>
  );
};
