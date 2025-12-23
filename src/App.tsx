import { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import SocialLinks from './components/SocialLinks';
import HeroFixed from './components/HeroFixed';
import ResumeButton from './components/resumeButton';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Simulate loading time to ensure components are ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-accent text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <div className="bg-primary min-h-screen overflow-x-hidden">
        <main className="relative flex">
          {/* Left fixed column */}
          <div className="fixed left-0 top-0 h-screen flex flex-col items-start px-12">
            <HeroFixed />
            <div className="absolute left-12 top-1/2 -translate-y-1/2">
              <ScrollIndicator />
            </div>

            <div className="absolute left-12 top-64 -translate-y-1/2">
              <SocialLinks />
            </div>

            <div className="mt-auto mb-8 gap-4">
                <ResumeButton />
            </div>
          </div>
          
          {/* Right scrollable content */}
          <div className="flex-1 ml-[400px]">
            <div className="max-w-7xl mx-auto px-4">
              <div className="pt-12 md:pt-16">
                <About />
                <Education />
                <Experience />
                <Skills />
                <Projects />
              </div>
            </div>
          </div>
        </main>
        <Footer className="ml-[300px]" />
      </div>
    </HelmetProvider>
  );
}

export default App;