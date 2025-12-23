import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
];

const ScrollIndicator: FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-12 flex flex-col items-start gap-6 z-50">
      {sections.map((section, index) => (
        <motion.button
          key={section.id}
          onClick={() => {
            const element = document.getElementById(section.id);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="group flex items-center gap-4 flex-row-reverse"
          whileHover={{ x: 4 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <span 
            className={`text-sm whitespace-nowrap ${
              activeSection === section.id 
                ? 'text-accent' 
                : 'text-text-secondary'
            } hover:text-accent transition-colors duration-200`}
          >
            {section.label}
          </span>
          <motion.div
            className={`w-2 h-2 rounded-full ${
              activeSection === section.id 
                ? 'bg-accent' 
                : 'bg-text-secondary/50'
            }`}
            animate={{
              scale: activeSection === section.id ? 1 : 0.5,
              opacity: activeSection === section.id ? 1 : 0.5
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>
      ))}
    </motion.div>
    </>
  );
};

export default ScrollIndicator;
