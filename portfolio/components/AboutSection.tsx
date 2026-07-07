import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Tailwind CSS',
    'Git',
    'Docker',
    'AWS',
  ];

  return (
    <section
      id="about"
      className="section bg-light-50 dark:bg-dark-800"
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-cyan-500/20 rounded-2xl blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border-4 border-primary-500/30 dark:border-primary-400/30">
              <Image
                src="/images/profile.jpg"
                alt="Clinton Eyong - Profile Picture"
                width={500}
                height={600}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/placeholder.jpg';
                }}
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl" />
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <span className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800 mb-4">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-light-50">
                Passionate About{' '}
                <span className="gradient-text">Web Development</span>
              </h2>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-dark-600 dark:text-light-400 leading-relaxed"
            >
              I'm a dedicated web developer with a strong foundation in building
              modern, responsive, and user-friendly web applications. I specialize
              in creating digital experiences that not only look great but also
              perform exceptionally well.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-dark-600 dark:text-light-400 leading-relaxed"
            >
              With a background in computer science and a passion for continuous
              learning, I stay updated with the latest industry trends and best
              practices. I thrive on solving complex problems and turning ideas
              into reality through code.
            </motion.p>

            {/* Skills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-4"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: '#0ea5e9' }}
                  className="px-4 py-2 bg-dark-100 dark:bg-light-100/10 text-dark-700 dark:text-light-300 rounded-lg text-sm font-medium border border-dark-200 dark:border-light-800 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Download Resume Button */}
            <motion.div variants={itemVariants}>
              <a
                href="/files/resume.pdf"
                download="Clinton_Eyong_Resume.pdf"
                className="inline-flex items-center space-x-2 btn-primary"
              >
                <span>Download Resume</span>
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
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
