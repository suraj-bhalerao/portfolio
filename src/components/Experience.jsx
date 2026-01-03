import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Automation Test Engineer',
      company: 'Accolade Electronics Pvt. Ltd',
      duration: 'Aug 2024 - Present',
      responsibilities: [
        'Participate in daily sync-up meetings to align on project goals and progress.',
        'Maintain and optimize existing automation test cases to ensure reliable test execution.',
        'Design and write new automated test cases for new features and bug fixes.',
        'Maintain comprehensive test case documentation for better traceability and knowledge sharing.'
      ]
    },
    // {
    //   title: '',
    //   company: 'Previous Company / Internship',
    //   duration: 'Before Aug 2024',
    //   responsibilities: [
    //     'Learned core automation testing concepts and tools.',
    //     'Assisted in manual testing and bug reporting.',
    //     'Developed basic test scripts using Java and Selenium.'
    //   ]
    // }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>My Professional Journey</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-dot">
                <Briefcase size={14} color="white" />
              </div>
              <div className="glass-card timeline-content">
                <div className="timeline-date">
                  <Calendar size={14} /> {exp.duration}
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>{exp.title}</h3>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-color)', marginBottom: '1rem', opacity: 0.9 }}>{exp.company}</h4>
                
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} style={{ 
                      position: 'relative', 
                      paddingLeft: '1.2rem', 
                      marginBottom: '0.6rem', 
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      lineHeight: '1.5'
                    }}>
                      <span style={{ 
                        position: 'absolute', 
                        left: 0, 
                        top: '8px', 
                        width: '5px', 
                        height: '5px', 
                        background: 'var(--primary-color)', 
                        borderRadius: '50%' 
                      }} />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
