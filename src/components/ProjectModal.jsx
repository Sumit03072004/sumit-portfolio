import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Calendar, UserCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0F172A]/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#1E293B] rounded-3xl border border-[#94A3B8]/20 shadow-2xl overflow-hidden text-[#F8FAFC] my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar with Title & Close button */}
          <div className="flex items-center justify-between p-6 border-b border-[#94A3B8]/20 sticky top-0 bg-[#1E293B] z-10">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#0F172A] text-[#38BDF8] border border-[#38BDF8]/30 mb-1">
                {project.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F8FAFC]">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full hover:bg-[#0F172A] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
            
            {/* Project Cover Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-video border border-[#94A3B8]/20 shadow-md">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent flex items-end p-4">
                <p className="text-xs sm:text-sm text-[#F8FAFC] font-medium">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Quick Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs">
              <div>
                <span className="text-[#94A3B8] flex items-center space-x-1 mb-0.5">
                  <UserCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>My Role</span>
                </span>
                <p className="font-semibold text-[#F8FAFC]">{project.role}</p>
              </div>
              <div>
                <span className="text-[#94A3B8] flex items-center space-x-1 mb-0.5">
                  <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Duration</span>
                </span>
                <p className="font-semibold text-[#F8FAFC]">{project.duration}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[#94A3B8] flex items-center space-x-1 mb-0.5">
                  <Layers className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Primary Stack</span>
                </span>
                <p className="font-semibold text-[#F8FAFC]">{project.techStack.slice(0, 3).join(', ')}</p>
              </div>
            </div>

            {/* Detailed Description */}
            <div>
              <h3 className="text-base font-bold mb-2 flex items-center space-x-2 text-[#38BDF8]">
                <Sparkles className="w-4 h-4" />
                <span>Overview & Problem Statement</span>
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-base font-bold mb-3 text-[#F8FAFC]">
                Key Features & Engineering Highlights
              </h3>
              <div className="space-y-2">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#94A3B8]">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Measurable Impact / Highlights */}
            <div className="p-4 rounded-2xl bg-[#0F172A] border border-[#38BDF8]/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-2">
                Engineering Results & Metrics
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#94A3B8]">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            {/* Technologies Badges */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-[#0F172A] text-[#38BDF8] border border-[#94A3B8]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer with Action Buttons */}
          <div className="p-6 border-t border-[#94A3B8]/20 bg-[#1E293B] flex items-center justify-end space-x-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#0F172A] text-[#F8FAFC] border border-[#94A3B8]/20 hover:border-[#38BDF8] font-semibold text-xs transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repo</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#0F172A] font-semibold text-xs shadow-md transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
