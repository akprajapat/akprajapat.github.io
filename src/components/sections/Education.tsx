import { FC } from 'react';
import ScrollReveal from '../ScrollReveal';
import { education } from '../data/personal';
import { motion } from 'framer-motion';

const Education: FC = () => {
  return (
    <section id="education" className="py-16">
      <ScrollReveal>
        <h2 className="flex items-center gap-2 text-3xl font-bold text-text-primary mb-6">
          Education
        </h2>
      </ScrollReveal>

      <ScrollReveal>
        <div className="space-y-8">
          <div className="bg-navy-light p-8 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl font-semibold text-text-primary">{education.institution}</h3>
              <span className="font-mono text-accent">{education.duration}</span>
            </div>
            <p className="text-text-primary mb-4">{education.degree}</p>
            <ul className="space-y-3">
              {education.achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  className="flex items-start text-text-secondary"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-accent mr-2">▹</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Education;
