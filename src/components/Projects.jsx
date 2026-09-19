import React, { useState } from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext.jsx';
import { Link } from 'react-router-dom';
import {
  Code2,
  ExternalLink,
  Github,
  Sparkles,
  ArrowRight,
  Layers,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Projects = () => {
  const { projects } = usePortfolioData();
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  const categories = [
    'All Projects',
    ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))
  ];

  const filteredProjects = projects.filter(project => {
    if (selectedCategory === 'All Projects') return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Major <span className="text-[#38BDF8]">Software Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            Production-grade full-stack web applications featuring secure authentication, role-based controls, ORMs, and REST APIs.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-[#1E293B] p-1.5 rounded-2xl border border-[#94A3B8]/20 backdrop-blur-md">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#38BDF8] text-[#0F172A] font-bold shadow-md shadow-[#38BDF8]/20'
                    : 'text-[#94A3B8] hover:text-[#0EA5E9] hover:bg-[#0F172A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="bg-[#1E293B] rounded-3xl border border-[#94A3B8]/20 hover:border-[#38BDF8] shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-[#0F172A]">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-[#0F172A]/90 backdrop-blur-md text-[#38BDF8] border border-[#94A3B8]/20">
                      {project.category}
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs font-medium text-[#38BDF8] mt-1 mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-[#94A3B8] line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-[#0F172A] text-[#F8FAFC] border border-[#94A3B8]/15"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Links */}
                <div className="px-6 pb-6 pt-3 border-t border-[#94A3B8]/20 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-[#0F172A] text-[#94A3B8] hover:text-[#0EA5E9] hover:border-[#0EA5E9] border border-[#94A3B8]/15 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-[#0F172A] text-[#94A3B8] hover:text-[#0EA5E9] hover:border-[#0EA5E9] border border-[#94A3B8]/15 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-[#38BDF8] hover:text-[#0EA5E9] hover:underline"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
