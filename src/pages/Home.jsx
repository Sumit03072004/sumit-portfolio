import React, { useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection.js';
import { Navbar } from '../components/Navbar.jsx';
import { Hero } from '../components/Hero.jsx';
import { About } from '../components/About.jsx';
import { Skills } from '../components/Skills.jsx';
import { Projects } from '../components/Projects.jsx';
import { Experience } from '../components/Experience.jsx';
import { Certifications } from '../components/Certifications.jsx';
import { Education } from '../components/Education.jsx';
import { Contact } from '../components/Contact.jsx';
import { Footer } from '../components/Footer.jsx';
import { ScrollToTop } from '../components/ScrollToTop.jsx';
import { ScrollProgress } from '../components/ScrollProgress.jsx';
import { ParticleBackground } from '../components/ParticleBackground.jsx';
import { CursorGlow } from '../components/CursorGlow.jsx';
import { ResumeModal } from '../components/ResumeModal.jsx';

const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'certifications', 'education', 'contact'];

export const Home = () => {
  const activeSection = useActiveSection(sectionIds, 200);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] relative selection:bg-[#38BDF8] selection:text-[#0F172A]">
      {/* Background Interactive Effects */}
      <ParticleBackground />
      <CursorGlow />
      <ScrollProgress />

      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Helpers */}
      <ScrollToTop />

      {/* Printable / Viewable Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};
