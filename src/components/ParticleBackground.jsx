import React from 'react';

export const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0F172A]">
      {/* Top Left Sky Blue Accent Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#38BDF8]/10 blur-3xl" />
      
      {/* Center Blue Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#0EA5E9]/10 blur-3xl" />
      
      {/* Bottom Sky Blue Glow */}
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-[#38BDF8]/10 blur-3xl" />
    </div>
  );
};
