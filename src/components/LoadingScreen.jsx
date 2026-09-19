import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Code2 } from 'lucide-react';

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0F172A] text-[#F8FAFC] font-sans"
    >
      <div className="relative flex flex-col items-center">
        
        {/* Animated Glowing Ring */}
        <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-[#38BDF8]/20 border-t-[#38BDF8] border-r-[#0EA5E9] animate-spin" />
          <div className="p-4 rounded-2xl bg-[#1E293B] border border-[#94A3B8]/20 text-[#38BDF8] shadow-xl">
            <Terminal className="w-8 h-8 animate-pulse" />
          </div>
        </div>

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-extrabold tracking-wider text-[#F8FAFC]"
        >
          Sumit <span className="text-[#38BDF8]">Shaw</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs font-mono text-[#94A3B8] mt-2 flex items-center space-x-1.5"
        >
          <Code2 className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>Compiling Portfolio...</span>
        </motion.p>

      </div>
    </motion.div>
  );
};
