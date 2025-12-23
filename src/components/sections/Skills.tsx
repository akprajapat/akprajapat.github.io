import { FC } from 'react';
import ScrollReveal from '../ScrollReveal';
import { motion } from 'framer-motion';
import { skills } from '../data/personal';
import { SkillCategory as ISkillCategory } from '../../lib/types';

const Skills: FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const SkillItem = ({ skill }: { skill: string }) => {
    return (
      <motion.div variants={item} className="bg-navy-light px-3 py-1.5 rounded text-sm text-text-secondary">
        {skill}
      </motion.div>
    );
  };

  const SkillCategory = ({ category }: { category: ISkillCategory }) => (
    <div>
      <h3 className="text-lg font-medium text-accent mb-3">{category.name}</h3>
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-[repeat(auto-fill,minmax(120px,auto))] gap-2">
        {category.skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </motion.div>
    </div>
  );

  return (
    <section id="skills" className="py-8">
      <ScrollReveal>
        <h2 className="flex items-center gap-2 text-3xl font-bold text-text-primary mb-4">
          Skills
        </h2>
      </ScrollReveal>

      <ScrollReveal>
        <div className="space-y-8">
          <SkillCategory category={skills.languages} />
          <SkillCategory category={skills.frameworks} />
          <SkillCategory category={skills.databases} />
          <SkillCategory category={skills.technologies} />
          <SkillCategory category={skills.tools} />
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Skills;
