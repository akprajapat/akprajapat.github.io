import { FC } from 'react';
import ScrollReveal from '../ScrollReveal';
import { personalInfo } from '../data/personal';

const About: FC = () => {
  return (
    <section id="about" className="py-8 max-w-5xl">
      <ScrollReveal>
        <h2 className="flex items-center gap-2 text-3xl font-bold text-text-primary mb-4">
          About Me
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-1 gap-4">
        <ScrollReveal>
          <div className="space-y-4 text-text-secondary prose prose-invert max-w-full">
            {personalInfo.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg whitespace-pre-line">
                {paragraph}
              </p>
            ))}

            {personalInfo.about.contributions && (
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-text-primary mb-2">Key Contributions</h3>
                <div className="">
                  {personalInfo.about.contributions.map((c, idx) => (
                    <div key={idx} className="ml-6 gap-1">
                      <span className="text-base font-medium text-accent">{c.title} :&nbsp;</span>
                      {c.description && <span className="text-base text-text-secondary">  {c.description}</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {personalInfo.about.finally && (
              <p className="text-lg mt-4">{personalInfo.about.finally}</p>
            ) }
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
