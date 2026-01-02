import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Contact from './components/Contact';

function App() {
  // Replace with your actual usernames
  const githubUsername = 'suraj-bhalerao'; 
  const leetcodeUsername = 'suraj-bhalerao'; 

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Projects username={githubUsername} />
      <Stats username={leetcodeUsername} />
      <Contact />
      
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--glass-border)', color: '#888' }}>
        <p>© {new Date().getFullYear()} Suraj Bhalerao. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
