import React, { useState, useEffect } from 'react';
import Hero from './components/Hero/Hero';
import SectionHeader from './components/SectionHeader/SectionHeader';
import HorizontalScroll from './components/HorizontalScroll/HorizontalScroll';
import ToolCard from './components/ToolCard/ToolCard';
import TemplateCard from './components/TemplateCard/TemplateCard';
import AboutSection from './components/AboutSection/AboutSection';
import Footer from './components/Footer/Footer';
import { tools } from './data/tools';
import { templates } from './data/templates';
import './App.css';

function App() {
  const [toolsScrollLeft, setToolsScrollLeft] = useState(0);
  const [notionScrollLeft, setNotionScrollLeft] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toolsOpacity = isMobile ? 1 : Math.max(0, Math.min(1, 1 - (toolsScrollLeft - 200) / 500));
  const notionOpacity = isMobile ? 1 : Math.max(0, Math.min(1, 1 - (notionScrollLeft - 200) / 500));

  return (
    <div className="app">
      <Hero />
      
      <div className="separator"></div>
      
      <section className="tools-section" id="tools-section">
        <div className="section-container">
          <SectionHeader 
            title="Tools."
            subtitle="Free calculators and web tools for design work."
            opacity={toolsOpacity}
          />
          <HorizontalScroll onScroll={setToolsScrollLeft}>
            {tools.map(tool => (
              <ToolCard 
                key={tool.id}
                icon={tool.icon}
                title={tool.title}
                description={tool.description}
                link={tool.link}
                buttonText={tool.buttonText}
              />
            ))}
          </HorizontalScroll>
        </div>
      </section>
      
      <div className="separator"></div>
      
      <section className="notion-section" id="notion-section">
        <div className="section-container">
          <SectionHeader 
            title="Notion."
            subtitle="Notion templates for freelance business and productivity."
            opacity={notionOpacity}
          />
          <HorizontalScroll onScroll={setNotionScrollLeft}>
            {templates.map(template => (
              <TemplateCard 
                key={template.id}
                image={template.image}
                title={template.title}
                price={template.price}
                description={template.description}
                link={template.link}
                buttonText={template.buttonText}
              />
            ))}
          </HorizontalScroll>
        </div>
      </section>
      
      <div className="separator"></div>
      
      <AboutSection />
      
      <div className="separator"></div>
      
      <Footer />
    </div>
  );
}

export default App;

