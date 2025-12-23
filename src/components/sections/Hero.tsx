import { FC } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personal';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const Hero: FC = () => {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col justify-center"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="max-w-4xl flex items-start gap-8">
        <div className="flex-grow">
          <motion.h1 variants={item} className="text-6xl font-bold text-text-primary mb-4">
            {personalInfo.name}.
          </motion.h1>
          <div className="md:hidden mb-6">
            <motion.div variants={item} className="w-20 h-20 rounded-full overflow-hidden border-2 border-accent">
              <img
                src="/images/profile-photo.png"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
        <div className="hidden md:block">
          <motion.div variants={item} className="w-32 h-32 rounded-full overflow-hidden border-2 border-accent">
            <img
              src="/images/profile-photo.png"
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <motion.h2 variants={item} className="text-5xl font-bold text-text-secondary mb-6">
          {personalInfo.role}
        </motion.h2>
        <motion.p variants={item} className="text-text-secondary max-w-2xl text-lg mb-12">
          {personalInfo.one_liner}
        </motion.p>
        <motion.div variants={item}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-accent text-accent font-mono py-4 px-8 rounded hover:bg-accent/10 transition-colors"
          >
            View Resume
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
