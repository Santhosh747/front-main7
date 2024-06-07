import { useState, useEffect } from 'react';

const useFetchUsername = (userId) => {
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const storedUserId = sessionStorage.getItem('userId');
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:5000/api/auth/${storedUserId}`, {
          headers: {
            'Authorization': `Bearer ${token}` // Include token in Authorization header
          }
        });
        if (response.ok) {
          const user = await response.json();
          setUsername(user.username);
        } else {
          throw new Error('Failed to fetch username');
        }
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  return { username, loading, error };
};

export default useFetchUsername;
