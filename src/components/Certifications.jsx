import React from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext.jsx';
import { Award, ExternalLink, ShieldCheck, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const Certifications = () => {
  const { certifications } = usePortfolioData();
  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Certifications & <span className="text-[#38BDF8]">Achievements</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            Validated industry certifications across cloud computing, full-stack engineering, and advanced algorithm design.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#1E293B] p-6 sm:p-8 rounded-3xl border border-[#94A3B8]/20 hover:border-[#38BDF8] shadow-xl transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Accent top line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#38BDF8]" />

              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-[#38BDF8]/15 text-[#38BDF8]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#0F172A] text-[#94A3B8] border border-[#94A3B8]/15">
                    Issued: {cert.date}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-xs font-semibold text-[#38BDF8] mt-1 mb-4">
                  Issuer: {cert.issuer}
                </p>

                {/* Verified Skills */}
                <div className="space-y-1.5 mb-6">
                  {cert.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center space-x-2 text-xs text-[#94A3B8]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Credential Footer */}
              <div className="pt-4 border-t border-[#94A3B8]/20 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#94A3B8] truncate max-w-[200px]">
                  ID: {cert.credentialId}
                </span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-xs font-bold text-[#38BDF8] hover:text-[#0EA5E9] hover:underline"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
