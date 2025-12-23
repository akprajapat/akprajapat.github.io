import { FC, useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects: FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="projects" className="py-8">
      <ScrollReveal>
        <h2 className="flex items-center gap-2 text-3xl font-bold text-text-primary mb-4">
          Projects
        </h2>
      </ScrollReveal>

      <ScrollReveal className="grid md:grid-cols-[200px_1fr] gap-3">
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-hide">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 gap-2 border-b-2 md:border-l-2 md:border-b-0 border-navy-light text-sm font-mono whitespace-nowrap transition-all duration-200
                ${
                  activeTab === index
                    ? 'text-accent border-accent bg-navy-light/100'
                    : 'text-text-secondary hover:text-accent hover:bg-navy-light/60'
                }
              `}
            >
              {project.name}
            </button>
          ))}
        </div>

        <div className="relative min-h-[420px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: activeTab === index ? 1 : 0,
                x: activeTab === index ? 0 : 20,
              }}
              transition={{ duration: 0.2 }}
              className={`absolute top-0 left-0 w-full ${
                activeTab === index ? 'block' : 'hidden'
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex-grow">
                  <h3 className="text-xl text-text-primary font-medium mb-2">
                    {project.name}
                  </h3>
                  <p className="font-mono text-sm text-accent">{project.duration}</p>
                </div>
                <div className="flex gap-4">
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors"
                      aria-label="View source code"
                    >
                      <span className="inline-flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                      </svg>Source Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors"
                      aria-label="View live demo"
                    >
                      <span>{project.liveName}</span>
                    </a>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {project.details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start text-text-secondary"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <span className="text-accent mr-3 font-mono">▹</span>
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {project.tech_stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-accent font-mono text-sm bg-navy/50 px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Projects;
