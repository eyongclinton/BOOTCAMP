import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    } else if (savedTheme === 'light') {
      setDarkMode(false);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Default to dark mode if system prefers it
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Head>
        <title>Clinton Eyong | Personal Portfolio</title>
        <meta name="description" content="Personal portfolio of Clinton Eyong - Web Developer & Designer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
}
