import React, { useState } from 'react';
import { WhatsappIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Pre-filled message for immediate conversation
  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    "Hello Chemayek, I visited your portfolio and would like to discuss a project / job opportunity."
  )}`;

  return (
    <aside aria-label="WhatsApp Quick Contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-2.5 p-3.5 sm:p-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-emerald-900/25 hover:shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
        title={`Chat with Chemayek on WhatsApp (${PERSONAL_INFO.phoneFormatted})`}
        aria-label="Direct WhatsApp Chat"
      >
        <div className="relative flex items-center justify-center">
          <WhatsappIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-current transition-transform duration-300 group-hover:rotate-12" />
        </div>

        {/* Expandable Label on Hover */}
        <span
          className={`overflow-hidden transition-all duration-300 text-sm font-bold text-white whitespace-nowrap hidden sm:inline-block ${
            isHovered ? 'max-w-[200px] opacity-100 pr-1' : 'max-w-0 opacity-0'
          }`}
        >
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
