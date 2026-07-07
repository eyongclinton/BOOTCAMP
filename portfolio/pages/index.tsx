import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

interface IndexPageProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Home: NextPage<IndexPageProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};

export default Home;
