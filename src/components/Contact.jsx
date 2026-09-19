import React, { useState } from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext.jsx';
import { sendContactEmail } from '../utils/email.js';
import confetti from 'canvas-confetti';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Copy,
  Check,
  Sparkles,
  Loader2,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { motion } from 'motion/react';

export const Contact = () => {
  const { personalInfo } = usePortfolioData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: null,
    text: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', text: 'Please fill in all required fields (Name, Email, Message).' });
      return;
    }

    setLoading(true);
    setStatus({ type: null, text: '' });

    const result = await sendContactEmail(formData);
    setLoading(false);

    if (result.success) {
      setStatus({ type: 'success', text: result.message });
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#818cf8', '#c084fc']
      });
    } else {
      setStatus({ type: 'error', text: result.message });
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Contact <span className="text-[#38BDF8]">Me</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            Have an open Software Engineer role, project inquiry, or technical question? Feel free to reach out anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#1E293B] p-6 sm:p-8 rounded-3xl border border-[#94A3B8]/20 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-[#F8FAFC] flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-[#38BDF8]" />
                <span>Let's Connect</span>
              </h3>

              <p className="text-sm text-[#94A3B8] leading-relaxed">
                I am actively seeking full-time Software Engineer positions. Whether you're a recruiter, engineering manager, or developer founder, I'd love to discuss how I can contribute to your team.
              </p>

              {/* Email Item */}
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-[#94A3B8]/20 flex items-center justify-between">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-[#38BDF8]/15 text-[#38BDF8] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-[#94A3B8] font-medium">Direct Email</p>
                    <p className="text-xs sm:text-sm font-bold text-[#F8FAFC] truncate">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-2 text-[#94A3B8] hover:text-[#0EA5E9] focus:outline-none shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Item */}
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-[#94A3B8]/20 flex items-center justify-between">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-[#38BDF8]/15 text-[#38BDF8] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#94A3B8] font-medium">Phone</p>
                    <p className="text-xs sm:text-sm font-bold text-[#F8FAFC]">
                      {personalInfo.phone}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-2 text-[#94A3B8] hover:text-[#0EA5E9] focus:outline-none shrink-0"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Item */}
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-[#94A3B8]/20 flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-[#38BDF8]/15 text-[#38BDF8] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#94A3B8] font-medium">Location</p>
                  <p className="text-xs sm:text-sm font-bold text-[#F8FAFC]">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#94A3B8]/20">
                <p className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-3">
                  Social Channels
                </p>
                <div className="flex items-center space-x-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-[#0F172A] text-[#94A3B8] hover:text-[#0EA5E9] border border-[#94A3B8]/15 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-[#0F172A] text-[#94A3B8] hover:text-[#0EA5E9] border border-[#94A3B8]/15 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-[#0F172A] text-[#94A3B8] hover:text-[#0EA5E9] border border-[#94A3B8]/15 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive EmailJS Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#1E293B] p-6 sm:p-8 rounded-3xl border border-[#94A3B8]/20 shadow-2xl space-y-5"
            >
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">
                Send a Direct Message
              </h3>

              {/* Status Banner */}
              {status.text && (
                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm flex items-start space-x-2.5 ${
                    status.type === 'success'
                      ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400'
                      : 'bg-rose-500/15 border border-rose-500/30 text-rose-400'
                  }`}
                >
                  {status.type === 'success' ? (
                    <Check className="w-5 h-5 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  )}
                  <span>{status.text}</span>
                </div>
              )}

              {/* Name & Email Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 text-sm bg-[#0F172A] border border-[#94A3B8]/20 rounded-2xl text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#38BDF8] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 text-sm bg-[#0F172A] border border-[#94A3B8]/20 rounded-2xl text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#38BDF8] transition-all"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Software Engineer Role / Project Inquiry"
                  className="w-full px-4 py-3 text-sm bg-[#0F172A] border border-[#94A3B8]/20 rounded-2xl text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#38BDF8] transition-all"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Hello Sumit, I came across your portfolio and would love to discuss..."
                  required
                  className="w-full px-4 py-3 text-sm bg-[#0F172A] border border-[#94A3B8]/20 rounded-2xl text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#38BDF8] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#0F172A] font-bold text-sm shadow-lg shadow-[#38BDF8]/25 hover:shadow-[#38BDF8]/40 hover:scale-[1.01] active:scale-98 disabled:opacity-50 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
