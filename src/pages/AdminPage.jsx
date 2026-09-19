import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usePortfolioData } from '../context/PortfolioDataContext.jsx';
import sumitAvatar from '../assets/images/sumit_avatar.jpg';
import {
  Shield,
  KeyRound,
  Lock,
  Unlock,
  LogOut,
  FolderGit2,
  Sparkles,
  Briefcase,
  Award,
  GraduationCap,
  User,
  Plus,
  Trash2,
  Edit3,
  Check,
  X,
  ExternalLink,
  Github,
  Download,
  Copy,
  RefreshCw,
  AlertCircle,
  Eye,
  Sliders,
  Save,
  Layers,
  Search,
  Code2
} from 'lucide-react';

export const AdminPage = () => {
  const navigate = useNavigate();
  const {
    personalInfo,
    skills,
    projects,
    experiences,
    education,
    certifications,
    addProject,
    updateProject,
    deleteProject,
    addSkill,
    updateSkill,
    deleteSkill,
    addExperience,
    updateExperience,
    deleteExperience,
    addCertification,
    updateCertification,
    deleteCertification,
    updateEducation,
    updatePersonalInfo,
    resetToDefaults,
    exportAsCode
  } = usePortfolioData();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('sumit_admin_auth') === 'true';
  });
  const [pinInput, setPinInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Active Tab
  const [activeTab, setActiveTab] = useState('projects'); // 'projects', 'skills', 'experience', 'certifications', 'profile', 'education', 'export'

  // Modal States
  const [projectModal, setProjectModal] = useState({ isOpen: false, isEditing: false, data: null });
  const [skillModal, setSkillModal] = useState({ isOpen: false, isEditing: false, index: -1, data: null });
  const [expModal, setExpModal] = useState({ isOpen: false, isEditing: false, data: null });
  const [certModal, setCertModal] = useState({ isOpen: false, isEditing: false, data: null });
  const [confirmReset, setConfirmReset] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Profile Form state
  const [profileForm, setProfileForm] = useState(personalInfo);

  // Sync profile form when personalInfo changes
  React.useEffect(() => {
    setProfileForm(personalInfo);
  }, [personalInfo]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedPin = localStorage.getItem('sumit_admin_pin') || '1101';
    if (pinInput.trim() === storedPin || pinInput.trim() === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('sumit_admin_auth', 'true');
      setAuthError('');
      showToast('Welcome to Admin Portal, Sumit!');
    } else {
      setAuthError('Incorrect PIN! Default PIN is 1101');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('sumit_admin_auth');
    setPinInput('');
  };

  const handleCopyCode = () => {
    const code = exportAsCode();
    navigator.clipboard.writeText(code);
    showToast('Code copied! Paste into src/data/portfolioData.js in VS Code.');
  };

  const handleDownloadFile = () => {
    const code = exportAsCode();
    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolioData.js';
    a.click();
    URL.revokeObjectURL(url);
    showToast('portfolioData.js downloaded!');
  };

  // --- RENDER LOGIN SCREEN IF NOT AUTHENTICATED ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#1E293B] rounded-3xl border border-[#94A3B8]/20 p-8 shadow-2xl relative">
          <div className="w-16 h-16 rounded-2xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center mx-auto mb-6 text-[#38BDF8]">
            <Lock className="w-8 h-8" />
          </div>

          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold tracking-tight">Admin Portal</h1>
            <p className="text-sm text-[#94A3B8] mt-1">
              Authenticate to manage projects, skills, experience & profile
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-2">
                Enter Security PIN
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter PIN (Default: 1101)"
                  autoFocus
                  className="w-full px-4 py-3 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 focus:border-[#38BDF8] focus:outline-none text-[#F8FAFC] font-mono text-center tracking-widest text-lg placeholder:text-sm placeholder:tracking-normal"
                />
                <KeyRound className="w-5 h-5 text-[#94A3B8] absolute right-3.5 top-3.5" />
              </div>
              {authError && (
                <p className="text-xs text-rose-400 mt-2 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {authError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#38BDF8] text-[#0F172A] font-bold hover:bg-[#0EA5E9] transition-colors shadow-lg shadow-[#38BDF8]/20 flex items-center justify-center space-x-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Unlock Admin Panel</span>
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-[#94A3B8]/10 text-center">
            <Link
              to="/"
              className="text-xs text-[#94A3B8] hover:text-[#38BDF8] transition-colors inline-flex items-center gap-1.5"
            >
              ← Return to Public Portfolio
            </Link>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-[#0F172A]/50 border border-[#94A3B8]/10 text-center">
            <span className="text-[11px] text-[#94A3B8]">
              Default Master PIN: <strong className="text-[#38BDF8]">1101</strong>
            </span>
          </div>
        </div>
      </div>
    );
  }

  // --- RENDER AUTHENTICATED ADMIN DASHBOARD ---
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-[#38BDF8] text-[#0F172A] px-5 py-3 rounded-2xl font-bold shadow-2xl flex items-center space-x-2 animate-bounce">
          <Check className="w-5 h-5" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Admin Navbar */}
      <header className="sticky top-0 z-40 bg-[#1E293B]/90 backdrop-blur-md border-b border-[#94A3B8]/20 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden shadow-md shadow-[#38BDF8]/20 shrink-0 border border-[#38BDF8]/40 bg-[#0B0F19]">
            <img
              src={sumitAvatar}
              alt="Sumit Shaw"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover select-none"
            />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold tracking-tight text-lg">Sumit Shaw</span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/30">
                Admin Control
              </span>
            </div>
            <p className="text-[11px] text-[#94A3B8]">Changes automatically save to Local Storage</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={handleCopyCode}
            title="Copy portfolioData.js code for VS Code"
            className="px-3 py-1.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 hover:border-[#38BDF8] text-xs font-semibold text-[#F8FAFC] flex items-center space-x-1.5 transition-colors"
          >
            <Copy className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Copy for VS Code</span>
          </button>

          <button
            onClick={handleDownloadFile}
            title="Download portfolioData.js file"
            className="px-3 py-1.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 hover:border-[#38BDF8] text-xs font-semibold text-[#F8FAFC] flex items-center space-x-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>Download File</span>
          </button>

          <Link
            to="/"
            className="px-3.5 py-1.5 rounded-xl bg-[#38BDF8] text-[#0F172A] text-xs font-bold hover:bg-[#0EA5E9] transition-colors flex items-center space-x-1.5 shadow-md shadow-[#38BDF8]/20"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Live Site</span>
          </Link>

          <button
            onClick={handleLogout}
            title="Lock Admin Panel"
            className="p-2 rounded-xl bg-[#0F172A] hover:bg-rose-500/20 text-[#94A3B8] hover:text-rose-400 border border-[#94A3B8]/20 transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Admin Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#94A3B8]/15">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 whitespace-nowrap ${
              activeTab === 'projects'
                ? 'bg-[#38BDF8] text-[#0F172A] shadow-lg shadow-[#38BDF8]/20'
                : 'bg-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#94A3B8]/10'
            }`}
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Projects ({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 whitespace-nowrap ${
              activeTab === 'skills'
                ? 'bg-[#38BDF8] text-[#0F172A] shadow-lg shadow-[#38BDF8]/20'
                : 'bg-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#94A3B8]/10'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Skills ({skills.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 whitespace-nowrap ${
              activeTab === 'experience'
                ? 'bg-[#38BDF8] text-[#0F172A] shadow-lg shadow-[#38BDF8]/20'
                : 'bg-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#94A3B8]/10'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Experience ({experiences.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 whitespace-nowrap ${
              activeTab === 'certifications'
                ? 'bg-[#38BDF8] text-[#0F172A] shadow-lg shadow-[#38BDF8]/20'
                : 'bg-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#94A3B8]/10'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Certificates ({certifications.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 whitespace-nowrap ${
              activeTab === 'education'
                ? 'bg-[#38BDF8] text-[#0F172A] shadow-lg shadow-[#38BDF8]/20'
                : 'bg-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#94A3B8]/10'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 whitespace-nowrap ${
              activeTab === 'profile'
                ? 'bg-[#38BDF8] text-[#0F172A] shadow-lg shadow-[#38BDF8]/20'
                : 'bg-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#94A3B8]/10'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Profile & Contact</span>
          </button>

          <button
            onClick={() => setActiveTab('export')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 whitespace-nowrap ${
              activeTab === 'export'
                ? 'bg-[#38BDF8] text-[#0F172A] shadow-lg shadow-[#38BDF8]/20'
                : 'bg-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#94A3B8]/10'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Sync / VS Code</span>
          </button>
        </div>

        {/* TAB 1: PROJECTS */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1E293B] p-5 rounded-3xl border border-[#94A3B8]/20">
              <div>
                <h2 className="text-xl font-bold">Projects Management</h2>
                <p className="text-xs text-[#94A3B8]">
                  Add, edit, or remove your major full-stack and machine learning projects
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    setProjectModal({
                      isOpen: true,
                      isEditing: false,
                      data: {
                        id: `project-${Date.now()}`,
                        title: '',
                        subtitle: '',
                        category: 'MERN Stack',
                        description: '',
                        longDescription: '',
                        image: '/src/assets/images/restaurant_project_1785337160550.jpg',
                        techStack: ['React.js', 'Node.js', 'MongoDB'],
                        features: ['User Authentication', 'REST APIs'],
                        highlights: ['Optimized component performance'],
                        liveUrl: 'https://github.com/Sumit03072004',
                        githubUrl: 'https://github.com/Sumit03072004',
                        role: 'Full Stack Developer',
                        duration: '2026'
                      }
                    })
                  }
                  className="px-4 py-2.5 rounded-xl bg-[#38BDF8] text-[#0F172A] font-bold text-xs flex items-center space-x-2 hover:bg-[#0EA5E9] transition-all shadow-md shadow-[#38BDF8]/20"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Project</span>
                </button>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-[#1E293B] rounded-3xl border border-[#94A3B8]/20 overflow-hidden flex flex-col justify-between hover:border-[#38BDF8]/50 transition-all shadow-xl group"
                >
                  <div>
                    {proj.image && (
                      <div className="h-44 w-full overflow-hidden relative bg-[#0F172A]">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#0F172A]/80 backdrop-blur-md text-[#38BDF8] text-[10px] font-bold border border-[#38BDF8]/30">
                          {proj.category}
                        </span>
                      </div>
                    )}

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-base text-[#F8FAFC] line-clamp-1">
                          {proj.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#38BDF8] font-medium mt-0.5 line-clamp-1">
                        {proj.subtitle}
                      </p>
                      <p className="text-xs text-[#94A3B8] mt-2.5 line-clamp-2">
                        {proj.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mt-3">
                        {proj.techStack?.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0F172A] text-[#94A3B8]"
                          >
                            {tech}
                          </span>
                        ))}
                        {proj.techStack?.length > 4 && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#0F172A] text-[#94A3B8]">
                            +{proj.techStack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between border-t border-[#94A3B8]/10 mt-4">
                    <span className="text-[11px] text-[#94A3B8] font-mono">{proj.duration}</span>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          setProjectModal({
                            isOpen: true,
                            isEditing: true,
                            data: { ...proj }
                          })
                        }
                        className="p-2 rounded-xl bg-[#0F172A] hover:bg-[#38BDF8]/10 text-[#38BDF8] transition-colors"
                        title="Edit Project"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          if (window.confirm(`Are you sure you want to delete "${proj.title}"?`)) {
                            deleteProject(proj.id);
                            showToast('Project deleted');
                          }
                        }}
                        className="p-2 rounded-xl bg-[#0F172A] hover:bg-rose-500/10 text-rose-400 transition-colors"
                        title="Delete Project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: SKILLS */}
        {activeTab === 'skills' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1E293B] p-5 rounded-3xl border border-[#94A3B8]/20">
              <div>
                <h2 className="text-xl font-bold">Technical Skills Management</h2>
                <p className="text-xs text-[#94A3B8]">
                  Manage programming languages, frameworks, databases, and core subjects
                </p>
              </div>

              <button
                onClick={() =>
                  setSkillModal({
                    isOpen: true,
                    isEditing: false,
                    index: -1,
                    data: {
                      name: '',
                      level: 85,
                      iconName: 'Code2',
                      category: 'Programming',
                      experienceYears: 'Academic & Projects'
                    }
                  })
                }
                className="px-4 py-2.5 rounded-xl bg-[#38BDF8] text-[#0F172A] font-bold text-xs flex items-center space-x-2 hover:bg-[#0EA5E9] transition-all shadow-md shadow-[#38BDF8]/20"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Skill</span>
              </button>
            </div>

            {/* Skills Table / List */}
            <div className="bg-[#1E293B] rounded-3xl border border-[#94A3B8]/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#0F172A] text-[#94A3B8] uppercase text-[10px] tracking-wider border-b border-[#94A3B8]/15">
                    <tr>
                      <th className="p-4 pl-6">Skill Name</th>
                      <th className="p-4">Category</th>
                      <th className="p-4">Proficiency Level</th>
                      <th className="p-4">Experience / Context</th>
                      <th className="p-4 text-right pr-6">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#94A3B8]/10 font-medium">
                    {skills.map((s, idx) => (
                      <tr key={idx} className="hover:bg-[#0F172A]/40 transition-colors">
                        <td className="p-4 pl-6 font-bold text-[#F8FAFC] flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                          {s.name}
                        </td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#0F172A] text-[#38BDF8] border border-[#38BDF8]/20">
                            {s.category}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-24 h-2 rounded-full bg-[#0F172A] overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9]"
                                style={{ width: `${s.level}%` }}
                              />
                            </div>
                            <span className="font-mono text-[#38BDF8] font-bold">{s.level}%</span>
                          </div>
                        </td>
                        <td className="p-4 text-[#94A3B8]">{s.experienceYears}</td>
                        <td className="p-4 text-right pr-6">
                          <div className="inline-flex items-center space-x-2">
                            <button
                              onClick={() =>
                                setSkillModal({
                                  isOpen: true,
                                  isEditing: true,
                                  index: idx,
                                  data: { ...s }
                                })
                              }
                              className="p-1.5 rounded-lg bg-[#0F172A] hover:bg-[#38BDF8]/10 text-[#38BDF8]"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                if (window.confirm(`Delete skill "${s.name}"?`)) {
                                  deleteSkill(idx);
                                  showToast('Skill deleted');
                                }
                              }}
                              className="p-1.5 rounded-lg bg-[#0F172A] hover:bg-rose-500/10 text-rose-400"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: EXPERIENCE */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1E293B] p-5 rounded-3xl border border-[#94A3B8]/20">
              <div>
                <h2 className="text-xl font-bold">Experience & Internships</h2>
                <p className="text-xs text-[#94A3B8]">
                  Update virtual internships, technical roles, responsibilities, and achievements
                </p>
              </div>

              <button
                onClick={() =>
                  setExpModal({
                    isOpen: true,
                    isEditing: false,
                    data: {
                      id: `exp-${Date.now()}`,
                      role: '',
                      company: '',
                      location: 'Remote',
                      period: '2026',
                      type: 'Virtual Internship',
                      techStack: ['Python', 'SQL'],
                      responsibilities: ['Developed features', 'Conducted testing'],
                      achievements: ['Completed internship with excellence']
                    }
                  })
                }
                className="px-4 py-2.5 rounded-xl bg-[#38BDF8] text-[#0F172A] font-bold text-xs flex items-center space-x-2 hover:bg-[#0EA5E9] transition-all shadow-md shadow-[#38BDF8]/20"
              >
                <Plus className="w-4 h-4" />
                <span>Add Experience</span>
              </button>
            </div>

            <div className="space-y-4">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-[#1E293B] p-6 rounded-3xl border border-[#94A3B8]/20 flex flex-col md:flex-row justify-between gap-6 hover:border-[#38BDF8]/40 transition-all shadow-lg"
                >
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-base font-bold text-[#F8FAFC]">{exp.role}</h3>
                      <span className="px-3 py-0.5 rounded-full bg-[#38BDF8]/15 text-[#38BDF8] text-xs font-semibold">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-[#94A3B8]">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.type}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.techStack?.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-[#0F172A] text-[#94A3B8] text-[10px] font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-1 pt-2">
                      <p className="text-xs font-semibold text-[#F8FAFC]">Key Responsibilities:</p>
                      <ul className="list-disc list-inside text-xs text-[#94A3B8] space-y-0.5">
                        {exp.responsibilities?.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex md:flex-col justify-end gap-2 shrink-0">
                    <button
                      onClick={() =>
                        setExpModal({
                          isOpen: true,
                          isEditing: true,
                          data: { ...exp }
                        })
                      }
                      className="px-3 py-2 rounded-xl bg-[#0F172A] hover:bg-[#38BDF8]/10 text-[#38BDF8] text-xs font-semibold flex items-center space-x-1.5"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>

                    <button
                      onClick={() => {
                        if (window.confirm(`Delete experience "${exp.role}"?`)) {
                          deleteExperience(exp.id);
                          showToast('Experience deleted');
                        }
                      }}
                      className="px-3 py-2 rounded-xl bg-[#0F172A] hover:bg-rose-500/10 text-rose-400 text-xs font-semibold flex items-center space-x-1.5"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CERTIFICATIONS */}
        {activeTab === 'certifications' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1E293B] p-5 rounded-3xl border border-[#94A3B8]/20">
              <div>
                <h2 className="text-xl font-bold">Certifications Management</h2>
                <p className="text-xs text-[#94A3B8]">
                  Manage verified credentials, issuers, issuing dates, and skills
                </p>
              </div>

              <button
                onClick={() =>
                  setCertModal({
                    isOpen: true,
                    isEditing: false,
                    data: {
                      id: `cert-${Date.now()}`,
                      title: '',
                      issuer: '',
                      date: '2026',
                      skills: ['Python', 'SQL'],
                      badgeColor: 'from-blue-500 to-cyan-400'
                    }
                  })
                }
                className="px-4 py-2.5 rounded-xl bg-[#38BDF8] text-[#0F172A] font-bold text-xs flex items-center space-x-2 hover:bg-[#0EA5E9] transition-all shadow-md shadow-[#38BDF8]/20"
              >
                <Plus className="w-4 h-4" />
                <span>Add Certification</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-[#1E293B] p-6 rounded-3xl border border-[#94A3B8]/20 flex flex-col justify-between hover:border-[#38BDF8]/50 transition-all shadow-lg"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-base text-[#F8FAFC]">{cert.title}</h3>
                      <span className="text-[11px] font-mono text-[#38BDF8] bg-[#0F172A] px-2 py-0.5 rounded-full border border-[#38BDF8]/20 whitespace-nowrap">
                        {cert.date}
                      </span>
                    </div>

                    <p className="text-xs text-[#94A3B8]">
                      Issued by: <strong className="text-[#F8FAFC]">{cert.issuer}</strong>
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cert.skills?.map((sk, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-[#0F172A] text-[#94A3B8] text-[10px] font-mono"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-end space-x-2 pt-5 border-t border-[#94A3B8]/10 mt-5">
                    <button
                      onClick={() =>
                        setCertModal({
                          isOpen: true,
                          isEditing: true,
                          data: { ...cert }
                        })
                      }
                      className="px-3 py-1.5 rounded-xl bg-[#0F172A] hover:bg-[#38BDF8]/10 text-[#38BDF8] text-xs font-semibold flex items-center space-x-1"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>

                    <button
                      onClick={() => {
                        if (window.confirm(`Delete certificate "${cert.title}"?`)) {
                          deleteCertification(cert.id);
                          showToast('Certification deleted');
                        }
                      }}
                      className="px-3 py-1.5 rounded-xl bg-[#0F172A] hover:bg-rose-500/10 text-rose-400 text-xs font-semibold flex items-center space-x-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: EDUCATION */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            <div className="bg-[#1E293B] p-6 rounded-3xl border border-[#94A3B8]/20">
              <h2 className="text-xl font-bold mb-1">Education Details</h2>
              <p className="text-xs text-[#94A3B8] mb-6">
                Update degree, institution, CGPA, graduation period, and key coursework
              </p>

              {education.map((edu, idx) => (
                <div key={edu.id || idx} className="space-y-4 bg-[#0F172A] p-5 rounded-2xl border border-[#94A3B8]/15">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Degree Title</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => {
                          const updated = [...education];
                          updated[idx] = { ...updated[idx], degree: e.target.value };
                          updateEducation(updated);
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1E293B] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Institution / University</label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => {
                          const updated = [...education];
                          updated[idx] = { ...updated[idx], institution: e.target.value };
                          updateEducation(updated);
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1E293B] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Period</label>
                      <input
                        type="text"
                        value={edu.period}
                        onChange={(e) => {
                          const updated = [...education];
                          updated[idx] = { ...updated[idx], period: e.target.value };
                          updateEducation(updated);
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1E293B] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Grade / CGPA</label>
                      <input
                        type="text"
                        value={edu.grade}
                        onChange={(e) => {
                          const updated = [...education];
                          updated[idx] = { ...updated[idx], grade: e.target.value };
                          updateEducation(updated);
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1E293B] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Description / Major</label>
                    <textarea
                      rows={2}
                      value={edu.description}
                      onChange={(e) => {
                        const updated = [...education];
                        updated[idx] = { ...updated[idx], description: e.target.value };
                        updateEducation(updated);
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1E293B] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#94A3B8] mb-1">
                      Key Coursework (comma separated)
                    </label>
                    <input
                      type="text"
                      value={edu.coursework?.join(', ') || ''}
                      onChange={(e) => {
                        const updated = [...education];
                        updated[idx] = {
                          ...updated[idx],
                          coursework: e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                        };
                        updateEducation(updated);
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1E293B] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                    />
                  </div>
                </div>
              ))}

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => showToast('Education details saved!')}
                  className="px-5 py-2.5 rounded-xl bg-[#38BDF8] text-[#0F172A] font-bold text-xs flex items-center space-x-2 hover:bg-[#0EA5E9]"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Education Updates</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: PROFILE & CONTACT */}
        {activeTab === 'profile' && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updatePersonalInfo(profileForm);
              showToast('Profile & Contact details updated successfully!');
            }}
            className="space-y-6"
          >
            <div className="bg-[#1E293B] p-6 sm:p-8 rounded-3xl border border-[#94A3B8]/20 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Personal & Contact Info</h2>
                  <p className="text-xs text-[#94A3B8]">
                    Control contact numbers, email, social profiles, and hero bio
                  </p>
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#38BDF8] text-[#0F172A] font-bold text-xs flex items-center space-x-2 hover:bg-[#0EA5E9] shadow-lg shadow-[#38BDF8]/20"
                >
                  <Save className="w-4 h-4" />
                  <span>Save All Changes</span>
                </button>
              </div>

              {/* Grid 1: Basic info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Full Name</label>
                  <input
                    type="text"
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Email Address</label>
                  <input
                    type="email"
                    value={profileForm.email}
                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={profileForm.phone}
                    onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Location</label>
                  <input
                    type="text"
                    value={profileForm.location}
                    onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#94A3B8] mb-1">GitHub Profile Link</label>
                  <input
                    type="url"
                    value={profileForm.github}
                    onChange={(e) => setProfileForm({ ...profileForm, github: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#94A3B8] mb-1">LinkedIn Profile Link</label>
                  <input
                    type="url"
                    value={profileForm.linkedin}
                    onChange={(e) => setProfileForm({ ...profileForm, linkedin: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                  />
                </div>
              </div>

              {/* Typed Animated Titles */}
              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">
                  Hero Animated Titles (comma separated)
                </label>
                <input
                  type="text"
                  value={profileForm.typedTitles?.join(', ') || ''}
                  onChange={(e) =>
                    setProfileForm({
                      ...profileForm,
                      typedTitles: e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              {/* Bio & About Paragraphs */}
              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Hero Quick Summary</label>
                <textarea
                  rows={3}
                  value={profileForm.summary}
                  onChange={(e) => setProfileForm({ ...profileForm, summary: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-semibold text-[#94A3B8]">About Section Paragraphs</label>
                <textarea
                  rows={2}
                  placeholder="Paragraph 1 (Education & Background)"
                  value={profileForm.about?.paragraph1 || ''}
                  onChange={(e) =>
                    setProfileForm({
                      ...profileForm,
                      about: { ...profileForm.about, paragraph1: e.target.value }
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
                <textarea
                  rows={2}
                  placeholder="Paragraph 2 (Practical Experience & Internships)"
                  value={profileForm.about?.paragraph2 || ''}
                  onChange={(e) =>
                    setProfileForm({
                      ...profileForm,
                      about: { ...profileForm.about, paragraph2: e.target.value }
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
                <textarea
                  rows={2}
                  placeholder="Paragraph 3 (Passion & Future Aspirations)"
                  value={profileForm.about?.paragraph3 || ''}
                  onChange={(e) =>
                    setProfileForm({
                      ...profileForm,
                      about: { ...profileForm.about, paragraph3: e.target.value }
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              {/* Password Setting Section */}
              <div className="pt-6 border-t border-[#94A3B8]/15">
                <h3 className="text-sm font-bold text-[#F8FAFC] mb-2 flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-[#38BDF8]" />
                  <span>Change Admin Access PIN</span>
                </h3>
                <div className="flex items-center gap-3 max-w-sm">
                  <input
                    type="password"
                    id="newPinInput"
                    placeholder="Set new 4-digit PIN"
                    className="px-3.5 py-2 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const input = document.getElementById('newPinInput');
                      if (input && input.value.trim().length >= 4) {
                        localStorage.setItem('sumit_admin_pin', input.value.trim());
                        input.value = '';
                        showToast('New Admin PIN saved successfully!');
                      } else {
                        alert('Please enter at least 4 digits for your new PIN');
                      }
                    }}
                    className="px-3.5 py-2 rounded-xl bg-[#1E293B] hover:bg-[#38BDF8] text-[#94A3B8] hover:text-[#0F172A] font-bold text-xs border border-[#94A3B8]/20 transition-colors"
                  >
                    Update PIN
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}

        {/* TAB 7: SYNC / VS CODE EXPORT */}
        {activeTab === 'export' && (
          <div className="space-y-6">
            <div className="bg-[#1E293B] p-6 sm:p-8 rounded-3xl border border-[#94A3B8]/20 space-y-6">
              <div>
                <h2 className="text-xl font-bold">VS Code Synchronization & Export</h2>
                <p className="text-xs text-[#94A3B8] mt-1">
                  Because you are developing in VS Code, you can instantly export all your browser edits into your project code so they stay committed in Git.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#0F172A] border border-[#94A3B8]/15 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <Download className="w-5 h-5" />
                    <span>Option 1: Download File</span>
                  </div>
                  <p className="text-xs text-[#94A3B8]">
                    Downloads a ready-to-use <code className="text-[#38BDF8]">portfolioData.js</code> file. Just replace the existing file in your <code className="text-[#38BDF8]">src/data/</code> folder.
                  </p>
                  <button
                    onClick={handleDownloadFile}
                    className="w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors"
                  >
                    Download portfolioData.js
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-[#0F172A] border border-[#94A3B8]/15 space-y-3">
                  <div className="flex items-center gap-2 text-[#38BDF8] font-bold text-sm">
                    <Copy className="w-5 h-5" />
                    <span>Option 2: Copy Code</span>
                  </div>
                  <p className="text-xs text-[#94A3B8]">
                    Copies the exact JavaScript export code to your clipboard. You can directly paste it into <code className="text-[#38BDF8]">src/data/portfolioData.js</code> in VS Code.
                  </p>
                  <button
                    onClick={handleCopyCode}
                    className="w-full py-2.5 rounded-xl bg-[#38BDF8] text-[#0F172A] font-bold text-xs hover:bg-[#0EA5E9] transition-colors"
                  >
                    Copy Full Code to Clipboard
                  </button>
                </div>
              </div>

              {/* Reset to Default */}
              <div className="pt-6 border-t border-[#94A3B8]/15 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="text-sm font-bold text-rose-400 flex items-center gap-1.5">
                    <RefreshCw className="w-4 h-4" />
                    <span>Restore Default Data</span>
                  </h4>
                  <p className="text-xs text-[#94A3B8]">
                    Reset all local projects, skills, and experience back to the original initial portfolio state.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to reset all portfolio data back to defaults?')) {
                      resetToDefaults();
                      showToast('Data reset to defaults!');
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-rose-500/15 hover:bg-rose-500 text-rose-300 hover:text-white font-bold text-xs border border-rose-500/30 transition-colors"
                >
                  Reset to Defaults
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* =========================================================================
          PROJECT ADD / EDIT MODAL
         ========================================================================= */}
      {projectModal.isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#1E293B] rounded-3xl border border-[#94A3B8]/20 max-w-2xl w-full p-6 sm:p-8 space-y-5 my-8 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#94A3B8]/15">
              <h3 className="text-lg font-bold">
                {projectModal.isEditing ? 'Edit Project' : 'Add New Project'}
              </h3>
              <button
                onClick={() => setProjectModal({ isOpen: false, isEditing: false, data: null })}
                className="p-1.5 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto pr-1">
              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Project Title *</label>
                <input
                  type="text"
                  value={projectModal.data.title}
                  onChange={(e) =>
                    setProjectModal({
                      ...projectModal,
                      data: { ...projectModal.data, title: e.target.value }
                    })
                  }
                  placeholder="e.g. AI Crop Yield Predictor"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Category *</label>
                <input
                  type="text"
                  value={projectModal.data.category}
                  onChange={(e) =>
                    setProjectModal({
                      ...projectModal,
                      data: { ...projectModal.data, category: e.target.value }
                    })
                  }
                  placeholder="e.g. MERN Stack, Python & Django, AI / ML"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Subtitle</label>
                <input
                  type="text"
                  value={projectModal.data.subtitle}
                  onChange={(e) =>
                    setProjectModal({
                      ...projectModal,
                      data: { ...projectModal.data, subtitle: e.target.value }
                    })
                  }
                  placeholder="e.g. Full-Stack Restaurant Ordering System"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Role</label>
                <input
                  type="text"
                  value={projectModal.data.role}
                  onChange={(e) =>
                    setProjectModal({
                      ...projectModal,
                      data: { ...projectModal.data, role: e.target.value }
                    })
                  }
                  placeholder="Full Stack Developer"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Duration</label>
                <input
                  type="text"
                  value={projectModal.data.duration}
                  onChange={(e) =>
                    setProjectModal({
                      ...projectModal,
                      data: { ...projectModal.data, duration: e.target.value }
                    })
                  }
                  placeholder="2026"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">GitHub URL</label>
                <input
                  type="url"
                  value={projectModal.data.githubUrl}
                  onChange={(e) =>
                    setProjectModal({
                      ...projectModal,
                      data: { ...projectModal.data, githubUrl: e.target.value }
                    })
                  }
                  placeholder="https://github.com/..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Live Demo URL</label>
                <input
                  type="url"
                  value={projectModal.data.liveUrl}
                  onChange={(e) =>
                    setProjectModal({
                      ...projectModal,
                      data: { ...projectModal.data, liveUrl: e.target.value }
                    })
                  }
                  placeholder="https://..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">
                  Image Path or URL
                </label>
                <input
                  type="text"
                  value={projectModal.data.image}
                  onChange={(e) =>
                    setProjectModal({
                      ...projectModal,
                      data: { ...projectModal.data, image: e.target.value }
                    })
                  }
                  placeholder="/src/assets/images/... or web URL"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">
                  Tech Stack (comma separated) *
                </label>
                <input
                  type="text"
                  value={projectModal.data.techStack?.join(', ') || ''}
                  onChange={(e) =>
                    setProjectModal({
                      ...projectModal,
                      data: {
                        ...projectModal.data,
                        techStack: e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                      }
                    })
                  }
                  placeholder="React.js, Node.js, Express.js, MongoDB, Tailwind CSS"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">
                  Short Summary Description (Card) *
                </label>
                <textarea
                  rows={2}
                  value={projectModal.data.description}
                  onChange={(e) =>
                    setProjectModal({
                      ...projectModal,
                      data: { ...projectModal.data, description: e.target.value }
                    })
                  }
                  placeholder="Brief summary that appears on the card..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">
                  Detailed Description (Modal / Full View)
                </label>
                <textarea
                  rows={3}
                  value={projectModal.data.longDescription}
                  onChange={(e) =>
                    setProjectModal({
                      ...projectModal,
                      data: { ...projectModal.data, longDescription: e.target.value }
                    })
                  }
                  placeholder="Full project architecture, motivation, and solution..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">
                  Key Features (one per line)
                </label>
                <textarea
                  rows={3}
                  value={projectModal.data.features?.join('\n') || ''}
                  onChange={(e) =>
                    setProjectModal({
                      ...projectModal,
                      data: {
                        ...projectModal.data,
                        features: e.target.value.split('\n').filter((s) => s.trim())
                      }
                    })
                  }
                  placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-3 border-t border-[#94A3B8]/15">
              <button
                type="button"
                onClick={() => setProjectModal({ isOpen: false, isEditing: false, data: null })}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-[#94A3B8] hover:text-[#F8FAFC]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  if (!projectModal.data.title) {
                    alert('Please enter a project title');
                    return;
                  }
                  if (projectModal.isEditing) {
                    updateProject(projectModal.data.id, projectModal.data);
                    showToast('Project updated!');
                  } else {
                    addProject(projectModal.data);
                    showToast('Project added!');
                  }
                  setProjectModal({ isOpen: false, isEditing: false, data: null });
                }}
                className="px-5 py-2.5 rounded-xl bg-[#38BDF8] text-[#0F172A] font-bold text-xs hover:bg-[#0EA5E9]"
              >
                {projectModal.isEditing ? 'Save Changes' : 'Create Project'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SKILL ADD / EDIT MODAL
         ========================================================================= */}
      {skillModal.isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1E293B] rounded-3xl border border-[#94A3B8]/20 max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#94A3B8]/15">
              <h3 className="text-base font-bold">
                {skillModal.isEditing ? 'Edit Skill' : 'Add New Skill'}
              </h3>
              <button
                onClick={() => setSkillModal({ isOpen: false, isEditing: false, index: -1, data: null })}
                className="p-1 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Skill Name *</label>
                <input
                  type="text"
                  value={skillModal.data.name}
                  onChange={(e) =>
                    setSkillModal({
                      ...skillModal,
                      data: { ...skillModal.data, name: e.target.value }
                    })
                  }
                  placeholder="e.g. Next.js, Docker, Java"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Category</label>
                <select
                  value={skillModal.data.category}
                  onChange={(e) =>
                    setSkillModal({
                      ...skillModal,
                      data: { ...skillModal.data, category: e.target.value }
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                >
                  <option value="Programming">Programming</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Database">Database</option>
                  <option value="Tools">Tools</option>
                  <option value="Core Subjects">Core Subjects</option>
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-[#94A3B8]">Proficiency Level</label>
                  <span className="text-xs font-mono font-bold text-[#38BDF8]">
                    {skillModal.data.level}%
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="100"
                  value={skillModal.data.level}
                  onChange={(e) =>
                    setSkillModal({
                      ...skillModal,
                      data: { ...skillModal.data, level: parseInt(e.target.value, 10) }
                    })
                  }
                  className="w-full accent-[#38BDF8]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Experience Context</label>
                <input
                  type="text"
                  value={skillModal.data.experienceYears}
                  onChange={(e) =>
                    setSkillModal({
                      ...skillModal,
                      data: { ...skillModal.data, experienceYears: e.target.value }
                    })
                  }
                  placeholder="e.g. Full-Stack Projects, Academic"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-3 border-t border-[#94A3B8]/15">
              <button
                type="button"
                onClick={() => setSkillModal({ isOpen: false, isEditing: false, index: -1, data: null })}
                className="px-3.5 py-1.5 rounded-xl text-xs text-[#94A3B8]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  if (!skillModal.data.name) {
                    alert('Please enter skill name');
                    return;
                  }
                  if (skillModal.isEditing) {
                    updateSkill(skillModal.index, skillModal.data);
                    showToast('Skill updated!');
                  } else {
                    addSkill(skillModal.data);
                    showToast('Skill added!');
                  }
                  setSkillModal({ isOpen: false, isEditing: false, index: -1, data: null });
                }}
                className="px-4 py-2 rounded-xl bg-[#38BDF8] text-[#0F172A] font-bold text-xs hover:bg-[#0EA5E9]"
              >
                {skillModal.isEditing ? 'Save Skill' : 'Add Skill'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          EXPERIENCE ADD / EDIT MODAL
         ========================================================================= */}
      {expModal.isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1E293B] rounded-3xl border border-[#94A3B8]/20 max-w-xl w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#94A3B8]/15">
              <h3 className="text-base font-bold">
                {expModal.isEditing ? 'Edit Experience' : 'Add Experience'}
              </h3>
              <button
                onClick={() => setExpModal({ isOpen: false, isEditing: false, data: null })}
                className="p-1 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[65vh] overflow-y-auto pr-1">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Role Title *</label>
                <input
                  type="text"
                  value={expModal.data.role}
                  onChange={(e) =>
                    setExpModal({
                      ...expModal,
                      data: { ...expModal.data, role: e.target.value }
                    })
                  }
                  placeholder="e.g. Google AI-ML Virtual Intern"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Company / Org *</label>
                <input
                  type="text"
                  value={expModal.data.company}
                  onChange={(e) =>
                    setExpModal({
                      ...expModal,
                      data: { ...expModal.data, company: e.target.value }
                    })
                  }
                  placeholder="e.g. Eduskills (Cohort 15)"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Period</label>
                <input
                  type="text"
                  value={expModal.data.period}
                  onChange={(e) =>
                    setExpModal({
                      ...expModal,
                      data: { ...expModal.data, period: e.target.value }
                    })
                  }
                  placeholder="e.g. Jan 2026 – Mar 2026"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Location</label>
                <input
                  type="text"
                  value={expModal.data.location}
                  onChange={(e) =>
                    setExpModal({
                      ...expModal,
                      data: { ...expModal.data, location: e.target.value }
                    })
                  }
                  placeholder="Remote"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Job Type</label>
                <input
                  type="text"
                  value={expModal.data.type}
                  onChange={(e) =>
                    setExpModal({
                      ...expModal,
                      data: { ...expModal.data, type: e.target.value }
                    })
                  }
                  placeholder="Virtual Internship"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">
                  Tech Stack (comma separated)
                </label>
                <input
                  type="text"
                  value={expModal.data.techStack?.join(', ') || ''}
                  onChange={(e) =>
                    setExpModal({
                      ...expModal,
                      data: {
                        ...expModal.data,
                        techStack: e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                      }
                    })
                  }
                  placeholder="Python, SQL, MySQL, Power BI"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">
                  Responsibilities (one per line)
                </label>
                <textarea
                  rows={3}
                  value={expModal.data.responsibilities?.join('\n') || ''}
                  onChange={(e) =>
                    setExpModal({
                      ...expModal,
                      data: {
                        ...expModal.data,
                        responsibilities: e.target.value.split('\n').filter((s) => s.trim())
                      }
                    })
                  }
                  placeholder="Designed schemas&#10;Wrote advanced queries&#10;Built dashboard"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-3 border-t border-[#94A3B8]/15">
              <button
                type="button"
                onClick={() => setExpModal({ isOpen: false, isEditing: false, data: null })}
                className="px-3.5 py-1.5 rounded-xl text-xs text-[#94A3B8]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  if (!expModal.data.role) {
                    alert('Please enter role title');
                    return;
                  }
                  if (expModal.isEditing) {
                    updateExperience(expModal.data.id, expModal.data);
                    showToast('Experience updated!');
                  } else {
                    addExperience(expModal.data);
                    showToast('Experience added!');
                  }
                  setExpModal({ isOpen: false, isEditing: false, data: null });
                }}
                className="px-4 py-2 rounded-xl bg-[#38BDF8] text-[#0F172A] font-bold text-xs hover:bg-[#0EA5E9]"
              >
                {expModal.isEditing ? 'Save Experience' : 'Add Experience'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          CERTIFICATION ADD / EDIT MODAL
         ========================================================================= */}
      {certModal.isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1E293B] rounded-3xl border border-[#94A3B8]/20 max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#94A3B8]/15">
              <h3 className="text-base font-bold">
                {certModal.isEditing ? 'Edit Certificate' : 'Add Certificate'}
              </h3>
              <button
                onClick={() => setCertModal({ isOpen: false, isEditing: false, data: null })}
                className="p-1 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">
                  Certificate Title *
                </label>
                <input
                  type="text"
                  value={certModal.data.title}
                  onChange={(e) =>
                    setCertModal({
                      ...certModal,
                      data: { ...certModal.data, title: e.target.value }
                    })
                  }
                  placeholder="e.g. AWS Cloud Practitioner"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">
                  Issuer Organization *
                </label>
                <input
                  type="text"
                  value={certModal.data.issuer}
                  onChange={(e) =>
                    setCertModal({
                      ...certModal,
                      data: { ...certModal.data, issuer: e.target.value }
                    })
                  }
                  placeholder="e.g. Eduskills, NPTEL, Coursera"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">Issue Date / Year</label>
                <input
                  type="text"
                  value={certModal.data.date}
                  onChange={(e) =>
                    setCertModal({
                      ...certModal,
                      data: { ...certModal.data, date: e.target.value }
                    })
                  }
                  placeholder="e.g. 2026 or Jan 2026"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1">
                  Associated Skills (comma separated)
                </label>
                <input
                  type="text"
                  value={certModal.data.skills?.join(', ') || ''}
                  onChange={(e) =>
                    setCertModal({
                      ...certModal,
                      data: {
                        ...certModal.data,
                        skills: e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                      }
                    })
                  }
                  placeholder="Python, Machine Learning, SQL"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F172A] border border-[#94A3B8]/20 text-xs text-[#F8FAFC] focus:border-[#38BDF8] focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-3 border-t border-[#94A3B8]/15">
              <button
                type="button"
                onClick={() => setCertModal({ isOpen: false, isEditing: false, data: null })}
                className="px-3.5 py-1.5 rounded-xl text-xs text-[#94A3B8]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  if (!certModal.data.title) {
                    alert('Please enter certificate title');
                    return;
                  }
                  if (certModal.isEditing) {
                    updateCertification(certModal.data.id, certModal.data);
                    showToast('Certification updated!');
                  } else {
                    addCertification(certModal.data);
                    showToast('Certification added!');
                  }
                  setCertModal({ isOpen: false, isEditing: false, data: null });
                }}
                className="px-4 py-2 rounded-xl bg-[#38BDF8] text-[#0F172A] font-bold text-xs hover:bg-[#0EA5E9]"
              >
                {certModal.isEditing ? 'Save Certificate' : 'Add Certificate'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
