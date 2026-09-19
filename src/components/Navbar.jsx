import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import sumitAvatar from '../assets/images/sumit_avatar.jpg';
import {
  Sun,
  Moon,
  Menu,
  X,
  FileText,
  Code2,
  Send,
  User,
  Sliders,
  Briefcase,
  GraduationCap,
  Award,
  Terminal
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Sliders },
  { name: 'Projects', href: '#projects', icon: Code2 },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Certifications', href: '#certifications', icon: Award },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Send },
];

export const Navbar = ({ activeSection, onOpenResumeModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#0F172A]/92 backdrop-blur-xl border-b border-[#1E293B] shadow-lg shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center space-x-3 text-lg sm:text-xl font-extrabold tracking-tight text-[#F8FAFC] group"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shadow-md shadow-[#38BDF8]/25 group-hover:scale-105 group-hover:shadow-[#38BDF8]/40 transition-all duration-200 shrink-0 border border-[#38BDF8]/40 bg-[#0B0F19]">
            <img
              id="navbar-brand-logo-img"
              src={sumitAvatar}
              alt="Sumit Shaw Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover select-none"
            />
          </div>
          <span className="flex items-center space-x-1">
            <span>Sumit</span>
            <span className="text-[#38BDF8]">Shaw</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 bg-[#1E293B]/90 p-1.5 rounded-full border border-[#94A3B8]/20 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center space-x-1.5 ${
                  isActive
                    ? 'bg-[#38BDF8] text-[#0F172A] font-bold shadow-md shadow-[#38BDF8]/25'
                    : 'text-[#94A3B8] hover:text-[#0EA5E9] hover:bg-[#0F172A]/60'
                }`}
              >
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action Controls: Resume Button & Theme Toggle */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={onOpenResumeModal}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/30 hover:bg-[#38BDF8] hover:text-[#0F172A] transition-all duration-200 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-[#1E293B] text-[#94A3B8] border border-[#94A3B8]/20 hover:text-[#38BDF8] hover:border-[#38BDF8]/40 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[#38BDF8]" /> : <Moon className="w-4 h-4 text-[#38BDF8]" />}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[#1E293B] text-[#94A3B8] border border-[#94A3B8]/20 hover:text-[#38BDF8]"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[#38BDF8]" /> : <Moon className="w-4 h-4 text-[#38BDF8]" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#1E293B] text-[#F8FAFC] border border-[#94A3B8]/20 focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-[#0F172A]/95 backdrop-blur-2xl border-b border-[#1E293B] overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#38BDF8] text-[#0F172A] font-bold'
                        : 'text-[#94A3B8] hover:text-[#0EA5E9] hover:bg-[#1E293B]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </a>
                );
              })}

              <div className="pt-4 border-t border-[#1E293B]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-2xl bg-[#38BDF8]/15 text-[#38BDF8] font-bold text-sm border border-[#38BDF8]/30 hover:bg-[#38BDF8] hover:text-[#0F172A] transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
