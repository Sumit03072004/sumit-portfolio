import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  PERSONAL_INFO as DEFAULT_PERSONAL_INFO,
  SKILLS as DEFAULT_SKILLS,
  PROJECTS as DEFAULT_PROJECTS,
  EXPERIENCES as DEFAULT_EXPERIENCES,
  EDUCATION as DEFAULT_EDUCATION,
  CERTIFICATIONS as DEFAULT_CERTIFICATIONS
} from '../data/portfolioData.js';

const STORAGE_KEY = 'sumit_portfolio_master_data_v1';

const PortfolioDataContext = createContext(null);

export const PortfolioDataProvider = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_personal`);
      return saved ? JSON.parse(saved) : DEFAULT_PERSONAL_INFO;
    } catch {
      return DEFAULT_PERSONAL_INFO;
    }
  });

  const [skills, setSkills] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_skills`);
      return saved ? JSON.parse(saved) : DEFAULT_SKILLS;
    } catch {
      return DEFAULT_SKILLS;
    }
  });

  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_projects`);
      return saved ? JSON.parse(saved) : DEFAULT_PROJECTS;
    } catch {
      return DEFAULT_PROJECTS;
    }
  });

  const [experiences, setExperiences] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_experiences`);
      return saved ? JSON.parse(saved) : DEFAULT_EXPERIENCES;
    } catch {
      return DEFAULT_EXPERIENCES;
    }
  });

  const [education, setEducation] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_education`);
      return saved ? JSON.parse(saved) : DEFAULT_EDUCATION;
    } catch {
      return DEFAULT_EDUCATION;
    }
  });

  const [certifications, setCertifications] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_certifications`);
      return saved ? JSON.parse(saved) : DEFAULT_CERTIFICATIONS;
    } catch {
      return DEFAULT_CERTIFICATIONS;
    }
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_personal`, JSON.stringify(personalInfo));
    } catch (e) {
      console.warn('LocalStorage save error', e);
    }
  }, [personalInfo]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_skills`, JSON.stringify(skills));
    } catch (e) {
      console.warn('LocalStorage save error', e);
    }
  }, [skills]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_projects`, JSON.stringify(projects));
    } catch (e) {
      console.warn('LocalStorage save error', e);
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_experiences`, JSON.stringify(experiences));
    } catch (e) {
      console.warn('LocalStorage save error', e);
    }
  }, [experiences]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_education`, JSON.stringify(education));
    } catch (e) {
      console.warn('LocalStorage save error', e);
    }
  }, [education]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_certifications`, JSON.stringify(certifications));
    } catch (e) {
      console.warn('LocalStorage save error', e);
    }
  }, [certifications]);

  // Project handlers
  const addProject = (newProject) => {
    const projectWithId = {
      ...newProject,
      id: newProject.id || `proj-${Date.now()}`
    };
    setProjects((prev) => [projectWithId, ...prev]);
    return projectWithId;
  };

  const updateProject = (id, updatedFields) => {
    setProjects((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item))
    );
  };

  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((item) => item.id !== id));
  };

  // Skill handlers
  const addSkill = (newSkill) => {
    setSkills((prev) => [...prev, newSkill]);
  };

  const updateSkill = (index, updatedSkill) => {
    setSkills((prev) =>
      prev.map((item, idx) => (idx === index ? updatedSkill : item))
    );
  };

  const deleteSkill = (index) => {
    setSkills((prev) => prev.filter((_, idx) => idx !== index));
  };

  // Experience handlers
  const addExperience = (newExp) => {
    const expWithId = {
      ...newExp,
      id: newExp.id || `exp-${Date.now()}`
    };
    setExperiences((prev) => [expWithId, ...prev]);
    return expWithId;
  };

  const updateExperience = (id, updatedExp) => {
    setExperiences((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedExp } : item))
    );
  };

  const deleteExperience = (id) => {
    setExperiences((prev) => prev.filter((item) => item.id !== id));
  };

  // Certification handlers
  const addCertification = (newCert) => {
    const certWithId = {
      ...newCert,
      id: newCert.id || `cert-${Date.now()}`
    };
    setCertifications((prev) => [certWithId, ...prev]);
    return certWithId;
  };

  const updateCertification = (id, updatedCert) => {
    setCertifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedCert } : item))
    );
  };

  const deleteCertification = (id) => {
    setCertifications((prev) => prev.filter((item) => item.id !== id));
  };

  // Education handlers
  const updateEducation = (newEduList) => {
    setEducation(newEduList);
  };

  // Personal Info handler
  const updatePersonalInfo = (newInfo) => {
    setPersonalInfo((prev) => ({ ...prev, ...newInfo }));
  };

  // Reset all to defaults
  const resetToDefaults = () => {
    setPersonalInfo(DEFAULT_PERSONAL_INFO);
    setSkills(DEFAULT_SKILLS);
    setProjects(DEFAULT_PROJECTS);
    setExperiences(DEFAULT_EXPERIENCES);
    setEducation(DEFAULT_EDUCATION);
    setCertifications(DEFAULT_CERTIFICATIONS);
    try {
      localStorage.removeItem(`${STORAGE_KEY}_personal`);
      localStorage.removeItem(`${STORAGE_KEY}_skills`);
      localStorage.removeItem(`${STORAGE_KEY}_projects`);
      localStorage.removeItem(`${STORAGE_KEY}_experiences`);
      localStorage.removeItem(`${STORAGE_KEY}_education`);
      localStorage.removeItem(`${STORAGE_KEY}_certifications`);
    } catch {
      // ignore
    }
  };

  // Export current state as valid JavaScript for src/data/portfolioData.js
  const exportAsCode = () => {
    return `// Auto-generated portfolioData.js
export const PERSONAL_INFO = ${JSON.stringify(personalInfo, null, 2)};

export const SKILLS = ${JSON.stringify(skills, null, 2)};

export const PROJECTS = ${JSON.stringify(projects, null, 2)};

export const EXPERIENCES = ${JSON.stringify(experiences, null, 2)};

export const EDUCATION = ${JSON.stringify(education, null, 2)};

export const CERTIFICATIONS = ${JSON.stringify(certifications, null, 2)};
`;
  };

  const value = {
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
  };

  return (
    <PortfolioDataContext.Provider value={value}>
      {children}
    </PortfolioDataContext.Provider>
  );
};

export const usePortfolioData = () => {
  const context = useContext(PortfolioDataContext);
  if (!context) {
    throw new Error('usePortfolioData must be used within a PortfolioDataProvider');
  }
  return context;
};
