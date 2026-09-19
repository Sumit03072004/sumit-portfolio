import React from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext.jsx';
import sumitAvatar from '../assets/images/sumit_avatar.jpg';
import { useTyped } from '../hooks/useTyped.js';
import {
  FileText,
  Send,
  Github,
  Linkedin,
  Terminal,
  Sparkles,
  ArrowDown,
  Code2,
  Database,
  Cpu
} from 'lucide-react';
import { motion } from 'motion/react';

export const Hero = ({ onOpenResumeModal }) => {
  const { personalInfo } = usePortfolioData();
  const typedTitles = personalInfo?.typedTitles && personalInfo.typedTitles.length > 0
    ? personalInfo.typedTitles
    : ['Software Engineer', 'Full Stack Developer', 'Problem Solver'];
  const typedText = useTyped(typedTitles, 70, 40, 2000);

  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Intro */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Greeting Pill */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#1E293B] border border-[#94A3B8]/20 text-[#F8FAFC] text-xs font-semibold shadow-sm backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse" />
              <span>Available for Software Engineer Roles</span>
              <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F8FAFC]">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="text-[#38BDF8]">{personalInfo.name}</span>
            </h1>

            {/* Typed Animation Line */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <p className="text-xl sm:text-2xl font-bold font-mono text-[#38BDF8] flex items-center space-x-2">
                <Terminal className="w-6 h-6 text-[#0EA5E9] shrink-0" />
                <span>{typedText}</span>
                <span className="w-2 h-6 bg-[#38BDF8] animate-pulse inline-block ml-1" />
              </p>
            </div>

            {/* Summary Paragraph */}
            <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-2xl bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#0F172A] font-bold text-sm shadow-lg shadow-[#38BDF8]/25 hover:shadow-[#0EA5E9]/40 hover:scale-[1.02] active:scale-98 transition-all duration-200 flex items-center space-x-2 border border-[#38BDF8]"
              >
                <Send className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-6 py-3.5 rounded-2xl bg-[#1E293B] text-[#F8FAFC] font-bold text-sm border border-[#94A3B8]/20 hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all duration-200 flex items-center space-x-2"
              >
                <FileText className="w-4 h-4 text-[#38BDF8]" />
                <span>View & Print Resume</span>
              </button>
            </div>

            {/* Quick Links & Location */}
            <div className="pt-4 flex items-center justify-center lg:justify-start space-x-6 text-xs text-[#94A3B8] font-medium">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-[#0EA5E9] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <span>•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-[#0EA5E9] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

          </motion.div>

          {/* Right Hero Image / Floating Card Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              
              {/* Outer Glowing Gradient Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#38BDF8] to-[#0EA5E9] blur-2xl opacity-30 animate-pulse" />

              {/* Avatar Image Container - Original photo completely intact without zoom or modification */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0B0F19] shadow-2xl shadow-[#38BDF8]/20 border border-[#38BDF8]/40">
                <img
                  id="hero-profile-avatar"
                  src={sumitAvatar}
                  alt={personalInfo.name || "Sumit Shaw"}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none"
                />
              </div>

              {/* Floating Badge 1: Core Tech */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-3 -left-3 bg-[#1E293B] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl border border-[#94A3B8]/20 shadow-xl flex items-center space-x-2.5 text-xs font-bold text-[#F8FAFC]"
              >
                <div className="p-1.5 rounded-xl bg-[#38BDF8]/15 text-[#38BDF8]">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-[#94A3B8] font-medium">Core Stack</p>
                  <p>Java & Python</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Full-Stack */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 -right-3 bg-[#1E293B] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl border border-[#94A3B8]/20 shadow-xl flex items-center space-x-2.5 text-xs font-bold text-[#F8FAFC]"
              >
                <div className="p-1.5 rounded-xl bg-[#0EA5E9]/15 text-[#38BDF8]">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-[#94A3B8] font-medium">Web Architecture</p>
                  <p>MERN & Django</p>
                </div>
              </motion.div>

              {/* Floating Badge 3: CGPA */}
              <motion.div
                animate={{ x: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -right-6 sm:-right-8 -translate-y-1/2 bg-[#1E293B] px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl border border-[#94A3B8]/20 shadow-xl flex items-center space-x-2 text-xs font-bold text-[#F8FAFC]"
              >
                <div className="p-1.5 rounded-xl bg-[#38BDF8]/15 text-[#38BDF8]">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-[#94A3B8] font-medium">B.Tech IT</p>
                  <p>7.86 CGPA</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 text-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center text-xs font-semibold text-[#94A3B8] hover:text-[#0EA5E9] transition-colors"
          >
            <span className="mb-1">Scroll to explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#38BDF8]" />
          </a>
        </div>

      </div>
    </section>
  );
};
