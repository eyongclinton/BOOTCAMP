import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="section min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800">
              Hello, I'm Clinton Eyong
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-dark-900 dark:text-light-50">
              Building Digital
            </span>
            <br />
            <span className="gradient-text">Experiences</span>
            <span className="text-dark-900 dark:text-light-50"> That</span>
            <br />
            <span className="text-dark-900 dark:text-light-50">Inspire</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-dark-600 dark:text-light-400 mb-8 max-w-2xl mx-auto"
          >
            Passionate about creating beautiful, functional, and user-centric
            web applications that solve real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              href="#projects"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>View My Work</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <span>Get In Touch</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-8 text-center"
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                50+
              </span>
              <span className="text-sm text-dark-600 dark:text-light-400">
                Projects Completed
              </span>
            </div>
            <div className="w-px h-12 bg-dark-200 dark:bg-light-700" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                3+
              </span>
              <span className="text-sm text-dark-600 dark:text-light-400">
                Years Experience
              </span>
            </div>
            <div className="w-px h-12 bg-dark-200 dark:bg-light-700" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                10+
              </span>
              <span className="text-sm text-dark-600 dark:text-light-400">
                Technologies
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link
          href="#about"
          className="w-12 h-12 rounded-full bg-primary-500 hover:bg-primary-600 text-white flex items-center justify-center transition-colors duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
