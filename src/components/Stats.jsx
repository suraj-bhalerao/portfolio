import React from 'react';
import { motion } from 'framer-motion';
import { Github, Trophy, Target, Zap, BarChart3, Info } from 'lucide-react';
import useLeetCode from '../hooks/useLeetCode';
import useGitHubStats from '../hooks/useGitHubStats';

const Stats = ({ githubUsername, leetcodeUsername }) => {
  const { stats: leetStats, loading: leetLoading } = useLeetCode(leetcodeUsername);
  const { stats: gitStats, loading: gitLoading } = useGitHubStats(githubUsername);

  const fallbackLeet = {
    totalSolved: 450,
    easySolved: 150,
    totalEasy: 500,
    mediumSolved: 250,
    totalMedium: 1000,
    hardSolved: 50,
    totalHard: 400,
    ranking: '125,430'
  };

  const displayLeet = (leetStats && leetStats.status !== 'error') ? leetStats : fallbackLeet;

  const getContributionColor = (level) => {
    const colors = {
      dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
      light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
    };
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    return colors[theme][level] || colors[theme][0];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="stats" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Coding Performance</h2>
          
          {(leetLoading || gitLoading) && (
            <div className="text-center" style={{ color: '#888', marginBottom: '2rem' }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                style={{ display: 'inline-block', marginRight: '10px' }}
              >
                <Zap size={20} />
              </motion.div>
              Syncing live data...
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            
            {/* LeetCode Overview Card */}
            <motion.div variants={itemVariants} className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
                <div style={{ padding: '10px', background: 'rgba(255, 192, 30, 0.1)', borderRadius: '12px', color: '#ffc01e' }}>
                  <Trophy size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-color)' }}>LeetCode Mastery</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Problem Solving Progress</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
                <div style={{ position: 'relative', width: '120px', height: '120px' }}>
                  <svg width="120" height="120" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="var(--glass-border)" strokeWidth="10" />
                    <motion.circle 
                      cx="60" cy="60" r="54" fill="none" stroke="var(--primary-color)" strokeWidth="10" 
                      strokeDasharray="339.29"
                      initial={{ strokeDashoffset: 339.29 }}
                      whileInView={{ strokeDashoffset: 339.29 - (displayLeet.totalSolved / 2000) * 339.29 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      strokeLinecap="round"
                      transform="rotate(-90 60 60)"
                    />
                  </svg>
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>{displayLeet.totalSolved}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Solved</div>
                  </div>
                </div>
                
                <div style={{ flex: 1, display: 'grid', gap: '12px' }}>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Global Rank: <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>#{displayLeet.ranking}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <BarChart3 size={14} /> Top 10% of users
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gap: '1rem' }}>
                {[
                  { label: 'Easy', solved: displayLeet.easySolved, total: displayLeet.totalEasy, color: '#00b8a3' },
                  { label: 'Medium', solved: displayLeet.mediumSolved, total: displayLeet.totalMedium, color: '#ffc01e' },
                  { label: 'Hard', solved: displayLeet.hardSolved, total: displayLeet.totalHard, color: '#ff375f' }
                ].map((item) => (
                  <div key={item.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.85rem' }}>
                      <span style={{ color: item.color, fontWeight: '600' }}>{item.label}</span>
                      <span style={{ color: 'var(--text-color)' }}>{item.solved}<span style={{ color: 'var(--text-muted)' }}>/{item.total}</span></span>
                    </div>
                    <div style={{ height: '6px', background: 'var(--glass-border)', borderRadius: '3px', overflow: 'hidden' }}>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(item.solved / item.total) * 100}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{ height: '100%', background: item.color, borderRadius: '3px' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* GitHub Activity Card */}
            <motion.div variants={itemVariants} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
                <div style={{ padding: '10px', background: 'rgba(0, 242, 255, 0.1)', borderRadius: '12px', color: 'var(--primary-color)' }}>
                  <Github size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-color)' }}>GitHub Activity</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Open Source Contributions</p>
                </div>
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ 
                  width: '100%',
                  overflowX: 'auto',
                  padding: '10px 0',
                  WebkitOverflowScrolling: 'touch',
                  marginBottom: '1rem'
                }}>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(53, 1fr)', 
                    gap: '3px',
                    width: '100%',
                    minWidth: '600px',
                    aspectRatio: '53 / 7'
                  }}>
                    {gitStats && gitStats.contributions ? (
                      gitStats.contributions.slice(-371).map((day, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: (index % 53) * 0.01 }}
                          style={{ 
                            width: '100%', 
                            height: '100%',
                            background: getContributionColor(day.level),
                            borderRadius: '2px'
                          }}
                          title={`${day.date}: ${day.count} contributions`}
                        />
                      ))
                    ) : (
                      Array.from({ length: 371 }).map((_, i) => (
                        <div key={i} style={{ width: '100%', height: '100%', background: 'var(--glass-bg)', borderRadius: '2px' }}></div>
                      ))
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '12px', height: '12px', background: 'var(--primary-color)', borderRadius: '2px' }} />
                      <span>Active Days</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Info size={12} />
                      <span>Last 12 months</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    <span>Less</span>
                    {[0, 1, 2, 3, 4].map(level => (
                      <div key={level} style={{ width: '10px', height: '10px', background: getContributionColor(level), borderRadius: '2px' }}></div>
                    ))}
                    <span>More</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
                  <div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                      {gitStats?.totalContributions || '1.2k+'}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Total Commits</div>
                  </div>
                  <div style={{ width: '1px', background: 'var(--glass-border)' }} />
                  <div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--secondary-color)' }}>
                      {gitStats?.currentStreak || '45'}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Day Streak</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
