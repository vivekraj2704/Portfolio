import React, { useState, useEffect } from 'react';
import { Github, Mail, FileText, ExternalLink, Sun, Moon } from 'lucide-react';
import vivek from './assets/vivek.png'
import socialwave from './assets/socialwave.png'
import writingway from './assets/writingway.png'
import convosphere from './assets/convosphere.png'
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Social Wave",
      description: "Built a full-stack social media application using MERN (MongoDB, Express.js, React, Node.js), integrated with Socket.io for live updates and Chakra UI for a highly responsive design, leading to increased user engagement.",
      link: "https://social-wave-a0v0.onrender.com/",
      image: socialwave
    },
    {
      title: "The Writing Way",
      description: "Developed a full-stack blogging platform using Cloudflare serverless backend and Vercel frontend, improving deployment efficiency and reducing server costs.",
      link: "https://blogging-web-black.vercel.app/signin",
      image: writingway
    },
    {
      title: "Convo-Sphere",
      description: "Created a real-time messaging application using MERN stack and Socket.io, enabling live communication for hundreds of users simultaneously.",
      link: "https://convo-sphere.onrender.com/",
      image: convosphere
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-blue-900' : 'bg-gradient-to-br from-gray-50 to-blue-50'}`}>
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      {/* Fixed Navigation Dots with Lines */}
      <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="relative flex flex-col items-center">
          {/* Vertical Line */}
          <div className={`absolute h-full w-px top-0 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
          
          {/* Dots Container */}
          <div className="relative space-y-8">
            {['about', 'projects', 'contact'].map((section, index) => (
              <div key={section} className="relative">
                {/* Active Section Indicator Line */}
                {activeSection === section && (
                  <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 w-8 h-px bg-blue-500"></div>
                )}
                
                {/* Dot Button */}
                <button
                  onClick={() => scrollToSection(section)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 relative group ${
                    activeSection === section
                      ? 'bg-blue-500 scale-125'
                      : `${darkMode ? 'bg-gray-600' : 'bg-gray-300'} hover:bg-blue-400`
                  }`}
                >
                  {/* Section Label */}
                  <span className={`absolute right-full mr-6 py-1 px-2 rounded-md text-sm capitalize transition-all duration-300 whitespace-nowrap ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  } opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0`}>
                    {section}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-8 right-8 z-50 p-2 rounded-full transition-colors duration-300 ${
          darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-600'
        } hover:scale-110 transform shadow-lg`}
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <div className="relative inline-block">
              <div className={`absolute inset-0 rounded-full blur-xl transform animate-pulse ${darkMode ? 'bg-blue-900' : 'bg-blue-100'}`}></div>
              <img
                src= {vivek}
                alt="Profile"
                className="relative w-40 h-40 rounded-full mx-auto mb-4 object-cover ring-4 ring-white dark:ring-gray-800"
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
                Vivek Raj
              </h1>
              <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Full Stack Developer</p>
              <p className={`text-lg max-w-2xl mx-auto mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a passionate fresher with a strong foundation in web development. I specialize in React, Node.js, and modern web technologies, with experience building projects using the MERN stack and creating scalable, responsive applications.
              </p>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="https://drive.google.com/uc?export=download&id=1jEPLnu0Je6MvEM-xLk7z-hTg00_MNAGw"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border inline-block"
              >
                <div className={`px-6 py-3 rounded-md transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}>
                  <span className="inline-flex items-center text-sm font-medium text-blue-400">
                    <FileText className="mr-2 h-5 w-5" />
                    Download CV
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/vivekraj2704"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-6 py-3 border rounded-md shadow-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  darkMode 
                    ? 'border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center py-20">
          <div className="w-full">
            <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-16">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-500 transition-all duration-300 transform hover:translate-x-1"
              >
                <div 
                  key={index} 
                  className={`rounded-xl shadow-xl overflow-hidden hover-card ${
                    darkMode ? 'bg-gray-800/80' : 'bg-white/80'
                  } backdrop-blur-sm`}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transform transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
                      {project.title}
                    </h3>
                    <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    
                  </div>
                </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center py-20">
          <div className="w-full max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-16">
              Get in Touch
            </h2>
            <form className={`space-y-8 p-10 rounded-xl shadow-xl ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm`}>
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`block w-full rounded-lg shadow-sm transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-500 focus:ring-blue-500' 
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                  }`}
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`block w-full rounded-lg shadow-sm transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-500 focus:ring-blue-500' 
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                  }`}
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className={`block w-full rounded-lg shadow-sm transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-500 focus:ring-blue-500' 
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                  }`}
                />
              </div>
              <button
                type="submit"
                className="w-full gradient-border"
              >
                <div className={`flex justify-center items-center px-6 py-3 rounded-lg transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}>
                  <Mail className="mr-2 h-5 w-5 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">Send Message</span>
                </div>
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;