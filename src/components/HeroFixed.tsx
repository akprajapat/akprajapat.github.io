import { FC } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../components/data/personal';
import SocialLinks from './SocialLinks';


const container = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { x: 20, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

const HeroFixed: FC = () => {
  return (
    <motion.div
      className="flex flex-col items-start gap-4 z-40 pt-12"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div variants={item} className="flex items-center gap-4">
        <div className="text-right">
          <h1 className="text-5xl font-bold text-text-primary bg-gradient-to-r from-blue-50 via-blue-200 to-blue-400 bg-clip-text text-transparent">{personalInfo.name}</h1>
          <p className="text-lg text-text-secondary text-center">{personalInfo.role}</p>
        </div>
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-accent">
          <img
            src="/images/my.png"
            alt={personalInfo.name}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      <motion.p variants={item} className="text-lg text-text-secondary max-w-[450px] text-left">
        {personalInfo.one_liner}
      </motion.p>

    </motion.div>

  );
};

export default HeroFixed;
