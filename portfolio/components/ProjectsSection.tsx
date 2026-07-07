import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

const ProjectsSection: React.FC = () => {
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

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product listings, cart functionality, and secure checkout using Stripe integration.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Stripe'],
      image: '/images/projects/ecommerce.jpg',
      githubUrl: 'https://github.com/eyongclinton/ecommerce-platform',
      liveUrl: 'https://ecommerce-clinton.vercel.app',
      featured: true,
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'A real-time social media analytics dashboard with interactive charts, user authentication, and data visualization.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
      image: '/images/projects/social-dashboard.jpg',
      githubUrl: 'https://github.com/eyongclinton/social-dashboard',
      liveUrl: 'https://social-dashboard-clinton.vercel.app',
      featured: true,
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and teams with drag-and-drop functionality and real-time collaboration.',
      technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      image: '/images/projects/task-manager.jpg',
      githubUrl: 'https://github.com/eyongclinton/task-manager',
      liveUrl: 'https://task-manager-clinton.vercel.app',
      featured: true,
    },
    {
      id: 4,
      title: 'Portfolio Template',
      description: 'A customizable portfolio template for developers and designers with dark/light mode, animations, and responsive design.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      image: '/images/projects/portfolio-template.jpg',
      githubUrl: 'https://github.com/eyongclinton/portfolio-template',
      liveUrl: 'https://portfolio-template-clinton.vercel.app',
      featured: false,
    },
    {
      id: 5,
      title: 'Weather Application',
      description: 'A weather forecasting application with location detection, 5-day forecasts, and beautiful weather visualizations.',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Tailwind CSS'],
      image: '/images/projects/weather-app.jpg',
      githubUrl: 'https://github.com/eyongclinton/weather-app',
      liveUrl: 'https://weather-app-clinton.vercel.app',
      featured: false,
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A Markdown-based blog platform with content management, categories, and search functionality.',
      technologies: ['Next.js', 'Markdown', 'Tailwind CSS', 'Vercel'],
      image: '/images/projects/blog-platform.jpg',
      githubUrl: 'https://github.com/eyongclinton/blog-platform',
      liveUrl: 'https://blog-clinton.vercel.app',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="section bg-light-50 dark:bg-dark-800"
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
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-light-50 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-dark-600 dark:text-light-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card group overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-500/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-500/30 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-primary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold text-dark-900 dark:text-light-50 mb-3">
                {project.title}
              </h3>
              <p className="text-dark-600 dark:text-light-400 mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium border border-primary-200 dark:border-primary-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-dark-900 dark:text-light-50 mb-4">
            Other Projects
          </h3>
          <p className="text-lg text-dark-600 dark:text-light-400 max-w-2xl mx-auto">
            Here are some additional projects I've worked on.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4 p-4 bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-light-800 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-dark-900 dark:text-light-50 truncate">
                  {project.title}
                </h4>
                <p className="text-sm text-dark-500 dark:text-light-500 line-clamp-1">
                  {project.description}
                </p>
              </div>
              <div className="flex space-x-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-dark-100 dark:bg-light-100/10 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-dark-600 dark:text-light-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-dark-100 dark:bg-light-100/10 hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-dark-600 dark:text-light-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="https://github.com/eyongclinton"
            target="_blank"
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <span>View All Projects on GitHub</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
