import { FC } from 'react';
import { personalInfo } from './data/personal';

interface FooterProps {
  className?: string;
}

const Footer: FC<FooterProps> = ({ className = '' }) => {
  const year = new Date().getFullYear();

  return (
    <footer className={`bg-secondary py-8 mt-16 ${className}`}>
      <div className="container">
          <div className="text-text-secondary text-center">
            © {year} {personalInfo.name}. All rights reserved.
          </div>
     </div>
    </footer>
  );
};

export default Footer;
