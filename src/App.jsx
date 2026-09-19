import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { PortfolioDataProvider } from './context/PortfolioDataContext.jsx';
import { Home } from './pages/Home.jsx';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage.jsx';
import { AdminPage } from './pages/AdminPage.jsx';
import { NotFound } from './components/NotFound.jsx';
import { LoadingScreen } from './components/LoadingScreen.jsx';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated loading animation timer on initial app boot
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <PortfolioDataProvider>
        <AnimatePresence mode="wait">
          {loading && <LoadingScreen key="loader" />}
        </AnimatePresence>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetailsPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </PortfolioDataProvider>
    </ThemeProvider>
  );
}
