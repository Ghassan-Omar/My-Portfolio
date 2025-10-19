import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <p className="text-slate-400 text-sm">
            Designed & Built by{' '}
            <span className="text-emerald-400 font-medium">Ghassan Emran</span>
          </p>
          
          <div className="flex items-center justify-center space-x-1 text-slate-400 text-sm">
            <span>Made with love</span>
            <Heart size={16} className="text-red-400 fill-current" />
          </div>
          
          <p className="text-slate-500 text-xs">
            © {currentYear} Ghassan Emran. All rights reserved.
          </p>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center justify-center w-12 h-12 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-emerald-400/40 hover:bg-emerald-400/10 transition-all duration-200 group"
          >
            <svg 
              className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

