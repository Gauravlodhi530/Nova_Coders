import React from 'react';
import logo from "/logo.png";
export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-black overflow-hidden">
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .orbit-outer {
          animation: spin-slow 8s linear infinite;
        }
        .orbit-inner {
          animation: spin-reverse 6s linear infinite;
        }
        .logo-pulse {
          animation: pulse-scale 2s ease-in-out infinite;
        }
      `}</style>

      <div className="relative flex items-center justify-center">
        {/* Outer Orbit Ring */}
        <div className="absolute w-56 h-56 border-4 border-transparent border-t-cyan-400 border-l-cyan-400 rounded-full orbit-outer"
          style={{
            boxShadow: '0 0 15px rgba(0, 255, 255, 0.8)',
          }}>
        </div>

        {/* Inner Orbit Ring */}
        <div className="absolute w-40 h-40 border-4 border-transparent border-b-cyan-500 border-r-cyan-500 rounded-full orbit-inner"
          style={{
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)',
          }}>
        </div>

        {/* Center Logo Placeholder */}
        <div className="w-40 logo-pulse flex items-center justify-center"
         >
          
           <img src={logo} alt="" />
        
        </div>

   
      </div>
    </div>
  );
}