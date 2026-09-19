import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#0F172A] text-[#F8FAFC] text-center">
      <div className="w-16 h-16 rounded-3xl bg-[#1E293B] border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] mb-6 shadow-xl">
        <Home className="w-8 h-8" />
      </div>
      <h1 className="text-6xl font-extrabold tracking-tight text-[#F8FAFC]">404</h1>
      <h2 className="text-xl font-bold mt-2 text-[#38BDF8]">Page Not Found</h2>
      <p className="text-sm text-[#94A3B8] max-w-md mt-3 mb-8">
        The requested page or route does not exist in Sumit Shaw's portfolio application.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-2xl bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#0F172A] font-bold text-xs flex items-center space-x-2 transition-colors shadow-lg shadow-[#38BDF8]/20"
      >
        <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
        <span>Return to Portfolio</span>
      </Link>
    </div>
  );
};
