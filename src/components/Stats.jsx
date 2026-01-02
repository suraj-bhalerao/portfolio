import React from 'react';
import useLeetCode from '../hooks/useLeetCode';

const Stats = ({ username }) => {
  const { stats, loading, error } = useLeetCode(username);

  // Fallback data if API fails
  const fallbackStats = {
    totalSolved: 450,
    easySolved: 150,
    totalEasy: 500,
    mediumSolved: 250,
    totalMedium: 1000,
    hardSolved: 50,
    totalHard: 400,
    ranking: '125,430'
  };

  const displayStats = (stats && stats.status !== 'error') ? stats : fallbackStats;

  return (
    <section id="stats" className="section">
      <div className="container">
        <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Coding Stats</h2>
        
        {loading && <div className="text-center" style={{ color: '#888' }}>Loading stats from LeetCode...</div>}

        <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            
            <div className="stat-item" style={{ padding: '1rem', border: '1px solid var(--glass-border)', borderRadius: '12px', background: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#888', marginBottom: '0.5rem' }}>Total Solved</h3>
              <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>{displayStats.totalSolved}</div>
            </div>

            <div className="stat-item" style={{ padding: '1rem', border: '1px solid var(--glass-border)', borderRadius: '12px', background: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#00b8a3', marginBottom: '0.5rem' }}>Easy</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{displayStats.easySolved}</div>
              <div style={{ fontSize: '0.9rem', color: '#888' }}>/ {displayStats.totalEasy}</div>
            </div>

            <div className="stat-item" style={{ padding: '1rem', border: '1px solid var(--glass-border)', borderRadius: '12px', background: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#ffc01e', marginBottom: '0.5rem' }}>Medium</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{displayStats.mediumSolved}</div>
              <div style={{ fontSize: '0.9rem', color: '#888' }}>/ {displayStats.totalMedium}</div>
            </div>

            <div className="stat-item" style={{ padding: '1rem', border: '1px solid var(--glass-border)', borderRadius: '12px', background: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#ff375f', marginBottom: '0.5rem' }}>Hard</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{displayStats.hardSolved}</div>
              <div style={{ fontSize: '0.9rem', color: '#888' }}>/ {displayStats.totalHard}</div>
            </div>

          </div>
          
          
          {/* GitHub-style Heatmap */}
          <div style={{ marginTop: '4rem' }}>
            <div className="glass-card" style={{ padding: '2rem', overflowX: 'auto' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-color)', marginBottom: '1.5rem', textAlign: 'center' }}>Contribution Activity</h3>
              
              <div style={{ 
                display: 'flex', 
                gap: '4px', 
                justifyContent: 'center',
                minWidth: '600px' // Ensure scrolling on small screens
              }}>
                {/* Generate 52 weeks */}
                {Array.from({ length: 52 }).map((_, weekIndex) => (
                  <div key={weekIndex} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {/* Generate 7 days per week */}
                    {Array.from({ length: 7 }).map((_, dayIndex) => {
                      // Simulate activity levels: 0 (empty), 1 (low), 2 (medium), 3 (high), 4 (very high)
                      const activityLevel = Math.random() > 0.7 ? Math.floor(Math.random() * 5) : 0;
                      
                      let bgColor = 'rgba(255, 255, 255, 0.05)'; // Default empty
                      if (activityLevel === 1) bgColor = 'rgba(0, 242, 255, 0.2)';
                      if (activityLevel === 2) bgColor = 'rgba(0, 242, 255, 0.4)';
                      if (activityLevel === 3) bgColor = 'rgba(0, 242, 255, 0.7)';
                      if (activityLevel === 4) bgColor = 'var(--primary-color)';

                      return (
                        <div key={dayIndex} style={{ 
                          width: '12px', 
                          height: '12px', 
                          background: bgColor,
                          borderRadius: '2px',
                          transition: 'all 0.3s ease'
                        }} title={`Activity Level: ${activityLevel}`}></div>
                      );
                    })}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '8px', marginTop: '1.5rem', fontSize: '0.85rem', color: '#888' }}>
                <span>Less</span>
                <div style={{ width: '12px', height: '12px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '2px' }}></div>
                <div style={{ width: '12px', height: '12px', background: 'rgba(0, 242, 255, 0.2)', borderRadius: '2px' }}></div>
                <div style={{ width: '12px', height: '12px', background: 'rgba(0, 242, 255, 0.4)', borderRadius: '2px' }}></div>
                <div style={{ width: '12px', height: '12px', background: 'rgba(0, 242, 255, 0.7)', borderRadius: '2px' }}></div>
                <div style={{ width: '12px', height: '12px', background: 'var(--primary-color)', borderRadius: '2px' }}></div>
                <span>More</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '1.1rem' }}>Global Ranking: <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>{displayStats.ranking}</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
