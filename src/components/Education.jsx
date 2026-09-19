import React from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext.jsx';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import { motion } from 'motion/react';

export const Education = () => {
  const { education } = usePortfolioData();
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Education <span className="text-[#38BDF8]">History</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            Formal computer science degree and secondary science education with top academic marks.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="bg-[#1E293B] p-6 sm:p-8 rounded-3xl border border-[#94A3B8]/20 hover:border-[#38BDF8] shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-[#38BDF8]/15 text-[#38BDF8]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="flex items-center space-x-1 text-xs font-mono font-bold text-[#94A3B8]">
                    <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>{edu.period}</span>
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#F8FAFC]">
                  {edu.degree}
                </h3>
                
                <p className="text-sm font-semibold text-[#38BDF8] mt-1">
                  {edu.institution}
                </p>

                <div className="flex items-center space-x-1 text-xs text-[#94A3B8] mt-1 mb-4">
                  <MapPin className="w-3 h-3 text-[#38BDF8]" />
                  <span>{edu.location}</span>
                </div>

                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold mb-4">
                  <Award className="w-3.5 h-3.5" />
                  <span>{edu.grade}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {edu.description}
                </p>
              </div>

              {/* Coursework Tags */}
              <div className="pt-4 border-t border-[#94A3B8]/20">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] flex items-center mb-2">
                  <BookOpen className="w-3.5 h-3.5 mr-1 text-[#38BDF8]" /> Key Coursework
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#0F172A] text-[#F8FAFC] border border-[#94A3B8]/15"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
