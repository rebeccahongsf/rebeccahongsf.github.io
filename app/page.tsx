'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'motion/react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const technologies = [
    'JavaScript',
    'React',
    'NextJS',
    'GatsbyJS',
    'TailwindCSS',
    'Styled-components',
    'Material-UI',
    'Redux Toolkit',
    'SASS',
    'Framer Motion',
    'React Hook Form',
  ];

  const tools = [
    'StoryBlok',
    'Drupal',
    'StoryBook',
    'Git',
    'CircleCI',
    'VS Code',
    'Postman',
    'Jest',
    'Cypress',
    'Figma',
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <Head>
        <title>Rebecca | Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio of Rebecca, Frontend Developer creating 'site'-seeing experiences"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.section
        className="relative py-20 md:py-32 overflow-hidden"
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
        variants={headerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <motion.div
                className="text-base max-w-prose mx-auto lg:max-w-none"
                variants={fadeIn}
              >
                <span className="block text-sage-600 font-semibold tracking-wide uppercase">
                  Frontend Developer
                </span>
                <h1 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  Hi, I&apos;m Rebecca
                </h1>
                <p className="mt-8 text-xl text-gray-500">
                  I&apos;m always looking for new ways to create
                  &apos;site&apos;-seeing experiences!
                </p>
                <div className="mt-5 flex gap-4">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sage-600 hover:bg-sage-700"
                  >
                    View Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-sage-700 bg-sage-100 hover:bg-sage-200"
                  >
                    Contact Me
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="mt-12 relative lg:mt-0 lg:col-span-5">
              <motion.div
                className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:max-w-none"
                variants={fadeIn}
              >
                <div className="aspect-w-10 aspect-h-12 rounded-xl shadow-xl overflow-hidden bg-lilac-100">
                  <div className="relative h-full w-full">
                    {/* Replace with your image later */}
                    <div className="absolute inset-0 flex items-center justify-center text-lilac-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-24 w-24"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-lilac-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-extrabold text-gray-900 text-center"
            variants={fadeIn}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto text-center"
            variants={fadeIn}
          >
            Check out some of the projects I&apos;ve worked on
          </motion.p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex-shrink-0 h-48 bg-sage-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-sage-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <div className="flex-1 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Stanford Alumni
                </h3>
                <p className="mt-3 text-base text-gray-500">
                  Redesign of the Stanford Alumni homesite in 2020 using
                  GatsbyJS, Storyblok, Tailwindcss
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-sage-100 text-sage-800">
                    GatsbyJS
                  </span>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-sage-100 text-sage-800">
                    Storyblok
                  </span>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-sage-100 text-sage-800">
                    TailwindCSS
                  </span>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <a
                  href="https://alumni.stanford.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-600 hover:text-sage-700 font-medium flex items-center"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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

            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex-shrink-0 h-48 bg-lilac-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-lilac-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="flex-1 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Stanford Engineering Centennial
                </h3>
                <p className="mt-3 text-base text-gray-500">
                  Static NextJS website built with TailwindCSS and Framer Motion
                  to showcase 100 years of Stanford Engineering.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-lilac-100 text-lilac-800">
                    NextJS
                  </span>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-lilac-100 text-lilac-800">
                    TailwindCSS
                  </span>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-lilac-100 text-lilac-800">
                    Framer Motion
                  </span>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <a
                  href="https://engineering100.stanford.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lilac-600 hover:text-lilac-700 font-medium flex items-center"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-lilac-700 bg-lilac-100 hover:bg-lilac-200"
            >
              View All Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-extrabold text-gray-900 text-center"
            variants={fadeIn}
          >
            Technical Skills
          </motion.h2>

          <div className="mt-12">
            <motion.h3
              className="text-xl font-semibold text-gray-900 mb-4"
              variants={fadeIn}
            >
              Languages & Frameworks
            </motion.h3>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={staggerContainer}
            >
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sage-500 bg-sage-50 border border-sage-200 text-sm font-medium"
                  variants={fadeIn}
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.h3
              className="text-xl font-semibold text-gray-900 mt-8 mb-4"
              variants={fadeIn}
            >
              Developer Tools
            </motion.h3>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={staggerContainer}
            >
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  className="px-4 py-2 rounded-full text-lilac-500 bg-lilac-50 border border-lilac-200 text-sm font-medium"
                  variants={fadeIn}
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  {tool}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white shadow-xl rounded-2xl overflow-hidden"
            variants={fadeIn}
          >
            <div className="px-6 py-12 sm:px-12 lg:px-16">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Let's Work Together
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Interested in collaborating or want to see more of my work?
                  I'd love to connect!
                </p>
                <div className="mt-8 flex justify-center space-x-6">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-sage-500 to-lilac-500 hover:from-sage-600 hover:to-lilac-600"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
