import React, { useState } from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext.jsx';
import {
  Code2,
  Coffee,
  FileCode,
  Database,
  FileType,
  Atom,
  Layout,
  Palette,
  Layers,
  Zap,
  Server,
  Cpu,
  Globe,
  Share2,
  HardDrive,
  Table,
  GitBranch,
  Github,
  Terminal,
  Send,
  Binary,
  Box,
  DatabaseZap,
  Monitor,
  Wifi,
  Search,
  SlidersHorizontal
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const categories = [
  'All Skills',
  'Programming',
  'Frontend',
  'Backend',
  'Database',
  'Tools',
  'Core Subjects'
];

// Helper to render matching icon dynamically
const renderSkillIcon = (iconName) => {
  const iconMap = {
    Coffee: <Coffee className="w-5 h-5" />,
    Code2: <Code2 className="w-5 h-5" />,
    FileCode: <FileCode className="w-5 h-5" />,
    Database: <Database className="w-5 h-5" />,
    FileType: <FileType className="w-5 h-5" />,
    Atom: <Atom className="w-5 h-5" />,
    Layout: <Layout className="w-5 h-5" />,
    Palette: <Palette className="w-5 h-5" />,
    Layers: <Layers className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />,
    Server: <Server className="w-5 h-5" />,
    Cpu: <Cpu className="w-5 h-5" />,
    Globe: <Globe className="w-5 h-5" />,
    Share2: <Share2 className="w-5 h-5" />,
    HardDrive: <HardDrive className="w-5 h-5" />,
    Table: <Table className="w-5 h-5" />,
    GitBranch: <GitBranch className="w-5 h-5" />,
    Github: <Github className="w-5 h-5" />,
    Terminal: <Terminal className="w-5 h-5" />,
    Send: <Send className="w-5 h-5" />,
    Binary: <Binary className="w-5 h-5" />,
    Box: <Box className="w-5 h-5" />,
    DatabaseZap: <DatabaseZap className="w-5 h-5" />,
    Monitor: <Monitor className="w-5 h-5" />,
    Wifi: <Wifi className="w-5 h-5" />
  };

  return iconMap[iconName] || <Code2 className="w-5 h-5" />;
};

export const Skills = () => {
  const { skills } = usePortfolioData();
  const [selectedCategory, setSelectedCategory] = useState('All Skills');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = selectedCategory === 'All Skills' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Skills & <span className="text-[#38BDF8]">Proficiency</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            A comprehensive breakdown of technical skills, languages, frameworks, and core CS fundamentals.
          </p>
        </div>

        {/* Filter Controls: Category Tabs + Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-[#1E293B] p-1.5 rounded-2xl border border-[#94A3B8]/20 backdrop-blur-md w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#38BDF8] text-[#0F172A] font-bold shadow-md shadow-[#38BDF8]/20'
                    : 'text-[#94A3B8] hover:text-[#0EA5E9] hover:bg-[#0F172A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
            <input
              type="text"
              placeholder="Search skill (e.g., React, Java)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs font-medium bg-[#1E293B] border border-[#94A3B8]/20 rounded-2xl text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#38BDF8] transition-all"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.length === 0 ? (
              <div className="col-span-full text-center py-12 bg-[#1E293B] rounded-3xl border border-[#94A3B8]/20">
                <p className="text-[#94A3B8] text-sm">
                  No skills matching "{searchQuery}" in {selectedCategory}.
                </p>
              </div>
            ) : (
              filteredSkills.map((skill, idx) => (
                <div
                  key={skill.name}
                  className="bg-[#1E293B] p-5 rounded-2xl border border-[#94A3B8]/20 hover:border-[#38BDF8] hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-[#38BDF8]/15 text-[#38BDF8] group-hover:scale-110 transition-transform duration-200">
                        {renderSkillIcon(skill.iconName)}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#F8FAFC]">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] text-[#94A3B8] font-medium">
                          {skill.category} • {skill.experienceYears || 'Proficient'}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#38BDF8]">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="w-full h-2 bg-[#0F172A] rounded-full overflow-hidden p-0.5 border border-[#94A3B8]/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.05 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9]"
                    />
                  </div>
                </div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
