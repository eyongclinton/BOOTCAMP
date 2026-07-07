import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: { name: string; icon: JSX.Element; level: number }[];
}

const SkillsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      skills: [
        {
          name: 'HTML5',
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.384-.002.69 8.01h9.126l-.326 3.426-2.91.804-2.956-.81-.188-2.11h-2.61l.29 1.885L12 18.115l5.416-4.242.254-2.976H5.177l.218 2.587 2.445.668 2.487-.67.196-2.277zm11.948 4.25l-2.996.864-2.694-.772-.238-2.856.262-2.856 4.434 1.294 2.952.868.224-2.622-13.384-.002.69 8.011h9.126l-.326 3.425-2.91.804-2.956-.81-.188-2.11h2.61l.29 1.885L12 18.115l5.416-4.242.254-2.976H5.177l.218 2.587 2.445.668 2.487-.67.196-2.277z" />
            </svg>
          ),
          level: 95,
        },
        {
          name: 'CSS3',
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.5 0h-15C2.02 0 0 2.02 0 4.5v15C0 21.98 2.02 24 4.5 24H10v-2.5H4.5C3.12 21.5 2 20.38 2 19.5V4.5C2 3.62 3.12 2.5 4.5 2.5h10C18.38 2.5 19.5 3.62 19.5 4.5V10H24v2.5h-4.5V24h2.58C24 21.98 21.98 20 19.5 20h-15C2.02 20 0 18.02 0 15.5V4.5C0 2.02 2.02 0 4.5 0h15zM12 12.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
            </svg>
          ),
          level: 90,
        },
        {
          name: 'JavaScript',
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l1.5 12.5L12 22l8.5-2.5L22 7 12 2zm-2 15.5V14H8v-2h2v-2H6v-2h4V8h2v2h4v2h-2v2h2v2h-4v2h-2z" />
            </svg>
          ),
          level: 90,
        },
        {
          name: 'TypeScript',
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l1.5 12.5L12 22l8.5-2.5L22 7 12 2zm0 2.31L19.5 8.5 12 12.69 4.5 8.5 12 4.31zM12 14.5l-6-3.5 6 3.5 6-3.5-6 3.5zm0 4.19l-6-3.5v7l6-3.5 6 3.5v-7l-6 3.5z" />
            </svg>
          ),
          level: 85,
        },
        {
          name: 'React',
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3.5-9c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm7 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-3.5 3c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4z" />
            </svg>
          ),
          level: 90,
        },
        {
          name: 'Next.js',
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l1.5 12.5L12 22l8.5-2.5L22 7 12 2zm0 2.31L19.5 8.5 12 12.69 4.5 8.5 12 4.31z" />
            </svg>
          ),
          level: 85,
        },
        {
          name: 'Tailwind CSS',
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l1.5 12.5L12 22l8.5-2.5L22 7 12 2zm0 2.31L19.5 8.5 12 12.69 4.5 8.5 12 4.31z" />
            </svg>
          ),
          level: 85,
        },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        {
          name: 'Node.js',
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l1.5 12.5L12 22l8.5-2.5L22 7 12 2zm0 2.31L19.5 8.5 12 12.69 4.5 8.5 12 4.31z" />
            </svg>
          ),
          level: 80,
        },
        {
          name: 'Express',
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l1.5 12.5L12 22l8.5-2.5L22 7 12 2zm0 2.31L19.5 8.5 12 12.69 4.5 8.5 12 4.31z" />
            </svg>
          ),
          level: 75,
        },
        {
          name: 'MongoDB',
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l1.5 12.5L12 22l8.5-2.5L22 7 12 2zm0 2.31L19.5 8.5 12 12.69 4.5 8.5 12 4.31z" />
            </svg>
          ),
          level: 75,
        },
        {
          name: 'PostgreSQL',
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3.5-9c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm7 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" />
            </svg>
          ),
          level: 70,
        },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        {
          name: 'Git',
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3.5-9c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm7 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" />
            </svg>
          ),
          level: 85,
        },
        {
          name: 'Docker',
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l1.5 12.5L12 22l8.5-2.5L22 7 12 2zm0 2.31L19.5 8.5 12 12.69 4.5 8.5 12 4.31z" />
            </svg>
          ),
          level: 70,
        },
        {
          name: 'AWS',
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l1.5 12.5L12 22l8.5-2.5L22 7 12 2zm0 2.31L19.5 8.5 12 12.69 4.5 8.5 12 4.31z" />
            </svg>
          ),
          level: 60,
        },
        {
          name: 'Figma',
          icon: (
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l1.5 12.5L12 22l8.5-2.5L22 7 12 2zm0 2.31L19.5 8.5 12 12.69 4.5 8.5 12 4.31z" />
            </svg>
          ),
          level: 75,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="section bg-white dark:bg-dark-900"
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800 mb-4">
            My Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-light-50 mb-4">
            What I Can Do
          </h2>
          <p className="text-lg text-dark-600 dark:text-light-400 max-w-2xl mx-auto">
            I have experience with a wide range of technologies and tools to
            build complete, scalable applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card"
            >
              <h3 className="text-2xl font-bold text-dark-900 dark:text-light-50 mb-8 pb-4 border-b border-dark-200 dark:border-light-800">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-dark-50 dark:bg-light-900/5 rounded-xl p-6 border border-dark-200 dark:border-light-800"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-primary-500 dark:text-primary-400">
                        {skill.icon}
                      </div>
                      <span className="font-semibold text-dark-900 dark:text-light-50">
                        {skill.name}
                      </span>
                    </div>
                    <div className="w-full bg-dark-200 dark:bg-light-800 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-cyan-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.3 + skillIndex * 0.1, duration: 1 }}
                      />
                    </div>
                    <p className="text-sm text-dark-500 dark:text-light-500 mt-2">
                      {skill.level}%
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
