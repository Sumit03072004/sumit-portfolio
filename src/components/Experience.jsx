import React from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext.jsx';
import { Briefcase, Calendar, MapPin, CheckCircle2, Star, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export const Experience = () => {
  const { experiences } = usePortfolioData();
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Work & Virtual <span className="text-[#38BDF8]">Internships</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            Real-world software engineering virtual internships, virtual team collaboration, and practical industry experience.
          </p>
        </div>

        {/* Row & Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <div className="bg-[#1E293B] h-full flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-[#94A3B8]/20 hover:border-[#38BDF8]/60 shadow-xl hover:shadow-[#38BDF8]/10 transition-all duration-300">
                
                {/* Card Header */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#94A3B8] flex items-center bg-[#0F172A] px-3 py-1 rounded-full border border-[#94A3B8]/15">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 text-[#38BDF8]" />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight mb-2">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-[#38BDF8] mb-5">
                    <span className="flex items-center">
                      <Briefcase className="w-3.5 h-3.5 mr-1.5 text-[#38BDF8]" />
                      {exp.company}
                    </span>
                    <span className="text-[#94A3B8]">•</span>
                    <span className="flex items-center text-[#94A3B8]">
                      <MapPin className="w-3.5 h-3.5 mr-1" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Key Responsibilities */}
                  <div className="space-y-2.5 mb-5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="p-4 rounded-2xl bg-[#0F172A] border border-[#94A3B8]/20 mb-5">
                      <p className="text-xs font-bold text-[#38BDF8] flex items-center mb-2">
                        <Star className="w-3.5 h-3.5 mr-1.5" /> Key Highlights
                      </p>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="text-xs text-[#94A3B8] flex items-start space-x-2">
                            <span className="text-[#38BDF8] mt-0.5">•</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Tech Badges Footer */}
                <div className="pt-4 border-t border-[#94A3B8]/20 mt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-[#0F172A] text-[#F8FAFC] border border-[#94A3B8]/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
