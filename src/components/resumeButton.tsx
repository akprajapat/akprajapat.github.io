
import { FC } from 'react';
import { motion } from 'framer-motion';

const ResumeButton: FC = () => {
  return (
    <motion.a
      href="/resume.pdf"
      download="Arpit_Prajapat_Resume.pdf"
      className="inline-flex items-center gap-2 border-2 border-accent text-accent font-mono py-2.5 px-4 rounded-md hover:bg-accent/10 transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>Resume</span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 20 20" 
        fill="currentColor" 
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
      >
        <path 
          d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"
        />
        <path 
          d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"
        />
      </svg>
    </motion.a>
  );
};

export default ResumeButton;