import React from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext.jsx';
import { X, Download, Printer, CheckCircle, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ResumeModal = ({ isOpen, onClose }) => {
  const { personalInfo, projects, skills, experiences, education, certifications } = usePortfolioData();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text representation of resume
    const textContent = `
================================================================
${(personalInfo.name || 'SUMIT SHAW').toUpperCase()} - ${(personalInfo.title || 'SOFTWARE ENGINEER').toUpperCase()}
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}
================================================================

SUMMARY:
${personalInfo.summary}

WORK EXPERIENCE:
${experiences.map(exp => `
* ${exp.role} | ${exp.company} (${exp.period})
  Location: ${exp.location}
  Responsibilities:
  ${(exp.responsibilities || []).map(r => `  - ${r}`).join('\n')}
  Key Impact:
  ${(exp.achievements || []).map(a => `  - ${a}`).join('\n')}
`).join('\n')}

FEATURED PROJECTS:
${projects.map(proj => `
* ${proj.title} (${proj.category})
  Subtitle: ${proj.subtitle}
  Tech Stack: ${(proj.techStack || []).join(', ')}
  Features:
  ${(proj.features || []).map(f => `  - ${f}`).join('\n')}
`).join('\n')}

EDUCATION:
${education.map(edu => `
* ${edu.degree} | ${edu.institution} (${edu.period})
  Grade: ${edu.grade}
  Coursework: ${(edu.coursework || []).join(', ')}
`).join('\n')}

CERTIFICATIONS:
${certifications.map(cert => `
* ${cert.title} - ${cert.issuer} (${cert.date})
`).join('\n')}
`;

    const blob = new Blob([textContent.trim()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${(personalInfo.name || 'Sumit_Shaw').replace(/\s+/g, '_')}_Software_Engineer_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[180] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0F172A]/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#1E293B] rounded-3xl border border-[#94A3B8]/20 shadow-2xl overflow-hidden text-[#F8FAFC] my-6 max-h-[92vh] flex flex-col"
        >
          {/* Top Bar Controls */}
          <div className="flex items-center justify-between p-5 border-b border-[#94A3B8]/20 bg-[#1E293B] z-10 sticky top-0">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#38BDF8]" />
              <h2 className="text-lg font-bold text-[#F8FAFC]">Curriculum Vitae / Resume</h2>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleDownload}
                className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-[#38BDF8]/15 text-[#38BDF8] hover:bg-[#38BDF8]/25 font-semibold text-xs transition-colors"
                title="Download Resume TXT"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-[#38BDF8]/15 text-[#38BDF8] hover:bg-[#38BDF8]/25 font-semibold text-xs transition-colors"
                title="Print Resume"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#0F172A] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content Container */}
          <div id="printable-resume" className="p-6 sm:p-10 overflow-y-auto space-y-8 flex-1 font-sans text-[#94A3B8]">
            
            {/* Header */}
            <div className="border-b border-[#94A3B8]/20 pb-6 text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F8FAFC]">
                {personalInfo.name}
              </h1>
              <p className="text-base font-bold text-[#38BDF8] mt-1">
                {personalInfo.title} • MERN Stack • Java & Python Developer
              </p>
              
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-xs text-[#94A3B8] font-medium">
                <span className="flex items-center"><Mail className="w-3.5 h-3.5 mr-1 text-[#38BDF8]" /> {personalInfo.email}</span>
                <span className="flex items-center"><Phone className="w-3.5 h-3.5 mr-1 text-[#38BDF8]" /> {personalInfo.phone}</span>
                <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1 text-[#38BDF8]" /> {personalInfo.location}</span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-2 border-b border-[#38BDF8]/30 pb-1">
                Professional Summary
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#94A3B8]">
                {personalInfo.summary}
              </p>
            </div>

            {/* Technical Skills Summary */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-3 border-b border-[#38BDF8]/30 pb-1">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {skills && skills.length > 0 ? (
                  skills.map((skillGroup, idx) => (
                    <div key={skillGroup.id || idx}>
                      <strong className="text-[#F8FAFC]">{skillGroup.title}:</strong>{' '}
                      {(skillGroup.skills || []).map(s => s.name).join(', ')}
                    </div>
                  ))
                ) : (
                  <>
                    <div><strong className="text-[#F8FAFC]">Languages:</strong> Java, Python, JavaScript, SQL</div>
                    <div><strong className="text-[#F8FAFC]">Frontend:</strong> React.js, HTML5, CSS3, Tailwind CSS</div>
                  </>
                )}
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-4 border-b border-[#38BDF8]/30 pb-1">
                Work Experience
              </h3>
              <div className="space-y-4">
                {experiences.map(exp => (
                  <div key={exp.id} className="space-y-1">
                    <div className="flex flex-wrap items-center justify-between font-bold text-xs sm:text-sm text-[#F8FAFC]">
                      <span>{exp.role} — <span className="text-[#38BDF8]">{exp.company}</span></span>
                      <span className="text-[#94A3B8] font-mono text-xs">{exp.period}</span>
                    </div>
                    <p className="text-[11px] text-[#94A3B8]">{exp.location}</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-[#94A3B8] pt-1">
                      {(exp.responsibilities || []).map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-4 border-b border-[#38BDF8]/30 pb-1">
                Key Software Projects
              </h3>
              <div className="space-y-4">
                {projects.map(proj => (
                  <div key={proj.id} className="space-y-1">
                    <div className="flex items-center justify-between font-bold text-xs sm:text-sm text-[#F8FAFC]">
                      <span>{proj.title} ({proj.category})</span>
                    </div>
                    <p className="text-xs text-[#94A3B8] font-mono">Tech Stack: {(proj.techStack || []).join(', ')}</p>
                    <ul className="list-disc list-inside space-y-0.5 text-xs text-[#94A3B8] pt-1">
                      {(proj.features || []).slice(0, 3).map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-3 border-b border-[#38BDF8]/30 pb-1">
                Education
              </h3>
              <div className="space-y-3">
                {education.map(edu => (
                  <div key={edu.id} className="flex justify-between items-start text-xs">
                    <div>
                      <p className="font-bold text-[#F8FAFC]">{edu.degree}</p>
                      <p className="text-[#94A3B8]">{edu.institution} | {edu.grade}</p>
                    </div>
                    <span className="font-mono text-[#94A3B8] text-[11px]">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-3 border-b border-[#38BDF8]/30 pb-1">
                Certifications & Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {certifications.map(cert => (
                  <div key={cert.id} className="p-2 rounded-xl bg-[#0F172A] border border-[#94A3B8]/15">
                    <p className="font-bold text-[#F8FAFC]">{cert.title}</p>
                    <p className="text-[#94A3B8] text-[11px]">{cert.issuer} • {cert.date}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-[#94A3B8]/20 bg-[#1E293B] flex items-center justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-[#0F172A] text-[#F8FAFC] border border-[#94A3B8]/20 font-semibold text-xs hover:bg-[#38BDF8] hover:text-[#0F172A] transition-colors"
            >
              Close Resume View
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
