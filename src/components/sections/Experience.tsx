import { FC } from 'react';
import ScrollReveal from '../ScrollReveal';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';

const Experience: FC = () => {
  return (
    <section id="experience" className="py-8">
      <ScrollReveal>
        <h2 className="flex items-center gap-2 text-3xl font-bold text-text-primary mb-4">
          Experience
        </h2>
      </ScrollReveal>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ScrollReveal key={index}>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-navy-light rounded-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex-grow">
                  <h3 className="text-text-primary text-2xl font-semibold mb-2">
                    {exp.role} <span className="text-accent">@ {exp.company}</span>
                  </h3>
                  <p className="font-mono text-sm text-accent">{exp.duration} | {exp.location}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start text-text-secondary"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-accent mr-3 font-mono">▹</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
