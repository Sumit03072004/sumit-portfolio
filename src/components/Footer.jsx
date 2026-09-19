import React from 'react';
import { Link } from 'react-router-dom';
import { usePortfolioData } from '../context/PortfolioDataContext.jsx';
import sumitAvatar from '../assets/images/sumit_avatar.jpg';
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp, Shield } from 'lucide-react';

export const Footer = () => {
  const { personalInfo } = usePortfolioData();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0F172A] border-t border-[#94A3B8]/20 text-[#94A3B8] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#94A3B8]/20">
          
          {/* Left Brand */}
          <div className="flex items-center space-x-3 text-center md:text-left justify-center md:justify-start">
            <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-md shadow-[#38BDF8]/20 shrink-0 border border-[#38BDF8]/40 bg-[#0B0F19]">
              <img
                id="footer-brand-logo-img"
                src={sumitAvatar}
                alt="Sumit Shaw"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-[#F8FAFC]">
                Sumit <span className="text-[#38BDF8]">Shaw</span>
              </span>
              <p className="text-xs text-[#94A3B8] mt-0.5">
                {personalInfo.title || 'Aspiring Software Engineer'} • Java • Python • MERN • Django
              </p>
            </div>
          </div>

          {/* Middle Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold">
            <a href="#about" className="text-[#94A3B8] hover:text-[#0EA5E9] transition-colors">About</a>
            <a href="#skills" className="text-[#94A3B8] hover:text-[#0EA5E9] transition-colors">Skills</a>
            <a href="#projects" className="text-[#94A3B8] hover:text-[#0EA5E9] transition-colors">Projects</a>
            <a href="#experience" className="text-[#94A3B8] hover:text-[#0EA5E9] transition-colors">Experience</a>
            <a href="#education" className="text-[#94A3B8] hover:text-[#0EA5E9] transition-colors">Education</a>
            <a href="#contact" className="text-[#94A3B8] hover:text-[#0EA5E9] transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#1E293B] text-[#94A3B8] hover:text-[#0EA5E9] border border-[#94A3B8]/15 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#1E293B] text-[#94A3B8] hover:text-[#0EA5E9] border border-[#94A3B8]/15 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#1E293B] text-[#94A3B8] hover:text-[#0EA5E9] border border-[#94A3B8]/15 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-full bg-[#1E293B] text-[#94A3B8] hover:text-[#0EA5E9] border border-[#94A3B8]/15 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] gap-4">
          <p>© {currentYear} {personalInfo.name || 'Sumit Shaw'}. All rights reserved.</p>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/admin"
              className="inline-flex items-center space-x-1.5 text-xs text-[#94A3B8] hover:text-[#38BDF8] transition-colors py-1 px-2.5 rounded-lg bg-[#1E293B] border border-[#94A3B8]/15"
            >
              <Shield className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Admin Portal</span>
            </Link>

            <div className="flex items-center space-x-1">
              <span>Built with React &</span>
              <Heart className="w-3.5 h-3.5 text-[#38BDF8] fill-[#38BDF8] inline mx-0.5" />
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-[#94A3B8] hover:text-[#0EA5E9] font-semibold transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
