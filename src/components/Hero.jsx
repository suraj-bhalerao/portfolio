import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, MousePointer2, Code2, Award, Clock } from 'lucide-react';
import profileImage from '../assets/profile.jpg';
import resumeFile from '../assets/Resume.pdf';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    'Automation Test Engineer',
    'SDET Specialist',
    'QA Automation Expert',
    'Framework Developer'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const quickStats = [
    { icon: <Clock size={16} />, label: 'Experience', value: 'Aug 2024 - Present' },
    { icon: <Code2 size={16} />, label: 'Expertise', value: '15+ Tools' },
    { icon: <Award size={16} />, label: 'LeetCode', value: '500+' }
  ];

  return (
    <section id="home" className="section hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Animated Blobs */}
      <div className="hero-bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="container grid-2" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: '500' }}
          >
            Hello, I'm
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', fontWeight: '800', lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.02em' }}
          >
            Suraj <span className="gradient-text">Bhalerao</span>
          </motion.h1>

          <div style={{ height: '3rem', marginBottom: '1.5rem' }}>
            <AnimatePresence mode="wait">
              <motion.h3 
                key={titleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{ fontSize: '2rem', color: 'var(--text-muted)', fontWeight: '600' }}
              >
                {titles[titleIndex]}
              </motion.h3>
            </AnimatePresence>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '540px', lineHeight: '1.7' }}
          >
            Crafting robust automation solutions to ensure software excellence. Expert in building scalable frameworks with Selenium, Appium, and Java, seamlessly integrated with modern CI/CD pipelines.
          </motion.p>

          {/* Quick Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}
          >
            {quickStats.map((stat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ color: 'var(--primary-color)', background: 'var(--glass-bg)', padding: '8px', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-color)' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary" style={{ 
                padding: '14px 35px', 
                background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                borderRadius: '30px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: 'white',
                boxShadow: '0 10px 20px rgba(0, 242, 255, 0.2)'
              }}>
                View Work <ArrowRight size={20} />
              </a>
              <a href={resumeFile} download="Suraj_Bhalerao_Resume.pdf" className="btn-secondary" style={{ 
                padding: '14px 35px', 
                border: '1px solid var(--glass-border)',
                background: 'var(--glass-bg)',
                borderRadius: '30px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: 'var(--text-color)',
                backdropFilter: 'blur(10px)'
              }}>
                Download Resume
              </a>
            </div>

            <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
              {[
                { icon: <Github size={20} />, href: "https://github.com/suraj-bhalerao", title: "GitHub" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/suraj-bhalerao27", title: "LinkedIn" },
                { icon: <Mail size={20} />, href: "mailto:bhaleraosurajsa@gmail.com", title: "Email" },
                { 
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-11.71 11.593a1.384 1.384 0 0 0 0 1.98l1.113 1.1 a1.358 1.358 0 0 0 1.93 0l1.13-1.113a1.384 1.384 0 0 0 0-1.98l-1.13-1.113a1.358 1.358 0 0 0-1.93 0l-1.113 1.1a1.384 1.384 0 0 0 0 1.98l11.71 11.593a1.374 1.374 0 0 0 1.922 0l11.71-11.593a1.384 1.384 0 0 0 0-1.98L14.444.414a1.374 1.374 0 0 0-.961-.414zM12 14.4l-2.4-2.4 2.4-2.4 2.4 2.4-2.4 2.4z"/>
                    </svg>
                  ), 
                  href: "https://leetcode.com/Suraj_b_27", 
                  title: "LeetCode" 
                }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title={social.title}
                  whileHover={{ y: -5, background: 'var(--primary-color)', color: 'white' }}
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    background: 'var(--glass-bg)', 
                    borderRadius: '12px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'var(--text-color)',
                    border: '1px solid var(--glass-border)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-image-container"
          style={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="glass-card hero-image-card"
            style={{ 
              padding: '15px', 
              borderRadius: '30px', 
              overflow: 'hidden',
              width: '100%',
              maxWidth: '420px',
              height: 'auto',
              aspectRatio: '4 / 5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <img 
              src={profileImage} 
              alt="Suraj Bhalerao" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: '20px'
              }} 
            />
            {/* Floating Badge */}
            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                position: 'absolute',
                bottom: '30px',
                right: '-20px',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(10px)',
                padding: '12px 20px',
                borderRadius: '15px',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
              }}
            >
              <div style={{ width: '10px', height: '10px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-color)' }}>Available for Hire</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          color: 'var(--text-muted)'
        }}
      >
        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            width: '24px',
            height: '40px',
            border: '2px solid var(--glass-border)',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px'
          }}
        >
          <motion.div 
            animate={{ opacity: [1, 0, 1], y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: '4px', height: '8px', background: 'var(--primary-color)', borderRadius: '2px' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
