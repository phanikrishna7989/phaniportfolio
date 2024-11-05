import React, { useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, GraduationCap, Award, Briefcase, FileText } from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import CertificationCard from './components/CertificationCard';
import ContactForm from './components/ContactForm';
import { useTheme } from './context/ThemeContext';

function App() {
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen font-['SF Pro Display', sans-serif] transition-colors duration-300
      ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-current origin-[0%]"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Navbar />

      {/* Hero Section */}
      <Section id="home" className="pt-32 pb-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Venkata Phani 
            </motion.h1>
            <motion.h2 
              className={`text-2xl md:text-3xl mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              .NET Full Stack Developer
            </motion.h2>
            <motion.p 
              className={theme === 'dark' ? 'text-lg text-gray-400' : 'text-lg text-gray-600'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Specialized in building scalable cloud solutions and microservices architecture with expertise in .NET ecosystem and modern web technologies.
            </motion.p>
          </div>
          <div className="md:w-1/3 flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="phaniprofile.jpg"
                alt="Phani Krishna"
                className="rounded-full w-64 h-64 object-cover mx-auto shadow-2xl mb-4"
              />
            </motion.div>
            <motion.a
              href="/PhaniKrishnaResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-colors duration-300 backdrop-blur-sm
                ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <FileText className="w-5 h-5" />
              View Resume
            </motion.a>
          </div>
        </div>
      </Section>

      {/* Rest of the sections remain the same */}
      {/* Projects Section */}
      <Section id="projects" className={theme === 'dark' ? 'py-20 bg-black/50' : 'py-20 bg-gray-50'}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Microservices & Cloud Migration"
              description="Led the transformation of monolithic architecture to microservices using .NET Core, implementing cloud-native solutions on Azure."
              icon="cloud"
            />
            <ProjectCard
              title="Real-Time Data Streaming"
              description="Developed a real-time data processing system using Azure Event Hubs and Stream Analytics for IoT device data."
              icon="activity"
            />
            <ProjectCard
              title="Enhanced API Design"
              description="Architected and implemented RESTful APIs following best practices, with comprehensive documentation and security measures."
              icon="code"
            />
          </div>
        </div>
      </Section>

      {/* Certifications Section */}
      <Section id="certifications" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <CertificationCard
              title="Microsoft Certified: Azure Fundamentals"
              code="AZ-900"
              status="Completed"
            />
            <CertificationCard
              title="Azure Developer Associate"
              code="AZ-204"
              status="In Progress"
            />
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" className={theme === 'dark' ? 'py-20 bg-black/50' : 'py-20 bg-gray-50'}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div 
              className={`rounded-lg p-6 backdrop-blur-sm ${
                theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8" />
                <div>
                  <h3 className="text-xl font-bold">Master's in Computer Information Systems</h3>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    New England College, New Hampshire, USA
                  </p>
                  <p className={theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}>2022</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className={`rounded-lg p-6 backdrop-blur-sm ${
                theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8" />
                <div>
                  <h3 className="text-xl font-bold">Bachelor's in Mechanical Engineering</h3>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    Lovely Professional University, India
                  </p>
                  <p className={theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}>2017–2021</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactForm />
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:venkataphani.63@gmail.com"
                  className={`flex items-center gap-3 ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-black'
                  } transition-colors`}
                >
                  <Mail className="w-6 h-6" />
                  venkataphani.63@gmail.com
                </a>
                <a 
                  href="https://www.linkedin.com/in/venkata-s-s-phani-krishna-sunkara-133b20293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-black'
                  } transition-colors`}
                >
                  <Linkedin className="w-6 h-6" />
                  LinkedIn Profile
                </a>
                <a 
                  href="https://github.com/phanikrishna7989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-black'
                  } transition-colors`}
                >
                  <Github className="w-6 h-6" />
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <footer className={`py-8 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
        <p>© 2024 Venkata S S Phani Krishna Sunkara. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;