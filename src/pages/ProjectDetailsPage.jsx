import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePortfolioData } from '../context/PortfolioDataContext.jsx';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Calendar, UserCheck, Layers, Sparkles } from 'lucide-react';

export const ProjectDetailsPage = () => {
  const { id } = useParams();
  const { projects } = usePortfolioData();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#0F172A] text-[#F8FAFC]">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <Link to="/" className="px-5 py-2.5 rounded-xl bg-[#38BDF8] text-[#0F172A] font-semibold text-xs hover:bg-[#0EA5E9] transition-colors">
          Return to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link
          to="/#projects"
          className="inline-flex items-center space-x-2 text-xs font-bold text-[#38BDF8] hover:text-[#0EA5E9] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio Projects</span>
        </Link>

        <div>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1E293B] text-[#38BDF8] border border-[#38BDF8]/30">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-3 text-[#F8FAFC]">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-2">
            {project.subtitle}
          </p>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden border border-[#94A3B8]/20 shadow-2xl">
          <img src={project.image} alt={project.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#1E293B] border border-[#94A3B8]/20 text-xs">
          <div>
            <span className="text-[#94A3B8] flex items-center space-x-1 mb-1">
              <UserCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Role</span>
            </span>
            <p className="font-bold text-[#F8FAFC]">{project.role}</p>
          </div>
          <div>
            <span className="text-[#94A3B8] flex items-center space-x-1 mb-1">
              <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Duration</span>
            </span>
            <p className="font-bold text-[#F8FAFC]">{project.duration}</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="text-[#94A3B8] flex items-center space-x-1 mb-1">
              <Layers className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Category</span>
            </span>
            <p className="font-bold text-[#F8FAFC]">{project.category}</p>
          </div>
        </div>

        <div className="space-y-4 bg-[#1E293B] p-6 rounded-3xl border border-[#94A3B8]/20 shadow-xl">
          <h3 className="text-lg font-bold text-[#38BDF8] flex items-center space-x-2">
            <Sparkles className="w-5 h-5" />
            <span>Project Deep-Dive</span>
          </h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            {project.longDescription}
          </p>

          <h4 className="text-sm font-bold text-[#F8FAFC] pt-4">Key Features</h4>
          <div className="space-y-2">
            {project.features.map((f, i) => (
              <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-[#94A3B8]">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>{f}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 flex flex-wrap items-center gap-4 border-t border-[#94A3B8]/20">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#0F172A] font-bold text-xs transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Application Demo</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-[#F8FAFC] hover:border-[#38BDF8] font-bold text-xs transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
