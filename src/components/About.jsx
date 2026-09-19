import React from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext.jsx';
import { Code, Cpu, Database, Globe, Brain, Rocket, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const About = () => {
  const { personalInfo } = usePortfolioData();
  const aboutInfo = personalInfo?.about || {};
  const metrics = personalInfo?.metrics || [];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            About <span className="text-[#38BDF8]">Me</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            A software engineer with a strong computer science foundation, passion for clean architecture, and continuous technical growth.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Story & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-[#1E293B] p-6 sm:p-8 rounded-3xl space-y-4 text-[#94A3B8] border border-[#94A3B8]/20 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] flex items-center space-x-2">
                <Rocket className="w-6 h-6 text-[#38BDF8]" />
                <span>My Journey & Passion</span>
              </h3>
              
              <p className="leading-relaxed text-[#94A3B8]">
                {aboutInfo.paragraph1}
              </p>
              
              <p className="leading-relaxed text-[#94A3B8]">
                {aboutInfo.paragraph2}
              </p>
              
              <p className="leading-relaxed text-[#94A3B8]">
                {aboutInfo.paragraph3}
              </p>

              {/* Core Strengths Bullet Points */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-[#94A3B8]/20">
                {[
                  'Full-Stack Web Architecture',
                  'MERN Stack & REST APIs',
                  'Java & Python Development',
                  'Data Structures & Algorithms',
                  'Database Optimization (SQL/NoSQL)',
                  'Agile Collaboration & Version Control'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-sm font-medium text-[#F8FAFC]">
                    <CheckCircle className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Key Metrics & Stat Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-[#1E293B] p-6 rounded-3xl border border-[#94A3B8]/20 shadow-lg hover:border-[#38BDF8] hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#38BDF8]/15 flex items-center justify-center text-[#38BDF8] mb-4 font-bold">
                    {idx === 0 && <Brain className="w-5 h-5" />}
                    {idx === 1 && <Code className="w-5 h-5" />}
                    {idx === 2 && <Globe className="w-5 h-5" />}
                    {idx === 3 && <Cpu className="w-5 h-5" />}
                  </div>
                  <h4 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
                    {metric.value}
                  </h4>
                  <p className="text-sm font-semibold text-[#38BDF8] mt-1">
                    {metric.label}
                  </p>
                </div>
                <p className="text-xs text-[#94A3B8] mt-3 pt-3 border-t border-[#94A3B8]/20">
                  {metric.suffix}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
