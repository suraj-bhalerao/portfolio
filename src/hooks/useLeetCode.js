import { useState, useEffect } from 'react';

const useLeetCode = (username) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchStats = async () => {
      try {
        // Using a public proxy for LeetCode API to avoid CORS
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        if (!response.ok) {
          throw new Error('Failed to fetch stats');
        }
        const data = await response.json();
        if (data.status === 'error') {
          throw new Error(data.message);
        }
        setStats(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  return { stats, loading, error };
};

export default useLeetCode;
