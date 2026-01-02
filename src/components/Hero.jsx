import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import profileImage from '../assets/profile.jpg';
import resumeFile from '../assets/Resume.pdf';

const Hero = () => {
  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div className="hero-content">
          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Hello, I'm</h2>
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', lineHeight: 1.1, marginBottom: '1rem' }}>
            Suraj Bhalerao
          </h1>
          <h3 style={{ fontSize: '2rem', color: '#888', marginBottom: '2rem' }}>
            Automation Test Engineer
          </h3>
          <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '2.5rem', maxWidth: '500px' }}>
            Specializing in building robust automation frameworks and ensuring software quality. Expert in Selenium, Appium, and CI/CD pipelines.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#projects" className="btn-primary" style={{ 
                padding: '12px 30px', 
                background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                borderRadius: '30px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: 'white'
              }}>
                View Work <ArrowRight size={20} />
              </a>
              <a href={resumeFile} download="Suraj_Bhalerao_Resume.pdf" className="btn-secondary" style={{ 
                padding: '12px 30px', 
                border: '1px solid var(--primary-color)',
                borderRadius: '30px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: 'var(--primary-color)'
              }}>
                Download Resume
              </a>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <a href="https://github.com/suraj-bhalerao" target="_blank" rel="noopener noreferrer" style={{ 
                width: '45px', 
                height: '45px', 
                background: 'rgba(255,255,255,0.1)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                transition: 'background 0.3s'
              }}>
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/suraj-bhalerao27" target="_blank" rel="noopener noreferrer" style={{ 
                width: '45px', 
                height: '45px', 
                background: 'rgba(255,255,255,0.1)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                transition: 'background 0.3s'
              }}>
                <Linkedin size={20} />
              </a>
              <a href="mailto:bhaleraosurajsa@gmail.com" style={{ 
                width: '45px', 
                height: '45px', 
                background: 'rgba(255,255,255,0.1)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                transition: 'background 0.3s'
              }}>
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-image" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{ 
            width: '450px', 
            height: '450px', 
            background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
            borderRadius: '50%',
            opacity: 0.2,
            filter: 'blur(100px)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: -1
          }}></div>
          <div className="glass-card" style={{ 
            padding: '10px', 
            borderRadius: '20px', 
            overflow: 'hidden',
            width: '350px',
            height: '450px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src={profileImage} 
              alt="Suraj Bhalerao" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: '16px'
              }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
