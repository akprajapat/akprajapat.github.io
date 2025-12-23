import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from './data/personal';

const SocialLinks: FC = () => {
  const [showCopied, setShowCopied] = useState(false);
  
  const handlePhoneClick = () => {
    navigator.clipboard.writeText('+91 8319611719');
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: personalInfo.contact.github,
      iconColor: '#333333',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: personalInfo.contact.linkedin,
      iconColor: '#0077b5',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
      ),
    },
    {
      name: 'Email',
      url: `mailto:${personalInfo.contact.email}`,
      iconColor: '#EA4335',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      ),
    },
    {
      name: 'Phone',
      action: handlePhoneClick,
      iconColor: '#34A853',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <motion.div
        className="flex gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {socialLinks.map((link) => (
          <motion.div
            key={link.name}
            variants={itemVariants}
            className="relative"
          >
            {link.url ? (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:-translate-y-1 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                title={link.name}
                style={{ color: link.iconColor }}
              >
                {link.icon}
              </a>
            ) : (
              <button
                onClick={link.action}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:-translate-y-1 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                title={link.name}
                style={{ color: link.iconColor }}
              >
                {link.icon}
              </button>
            )}
          </motion.div>
        ))}
      </motion.div>
      
      <AnimatePresence>
        {showCopied && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-5xl shadow-lg"
          >
            Phone number copied!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SocialLinks;
