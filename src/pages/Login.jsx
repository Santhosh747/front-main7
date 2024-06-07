import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    if (!email.includes('@')) {
      setEmailError('Invalid email format');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData.message);
        alert('Invalid username or password'); // Display alert for incorrect username or password
        return;
      }

      const responseData = await response.json();
      console.log('Success:', responseData);
      
      // Store user ID in session storage
      sessionStorage.setItem('userId', responseData._id);
      sessionStorage.setItem('token', responseData.token);
      localStorage.setItem('userId', responseData._id);
      localStorage.setItem('token', responseData.token);

      // Redirect user to dashboard
      navigate("/home");

    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <style>
        {`
          body {
            background-color: #000;
            color: #fff;
          }
        `}
      </style>
      <div
        style={{
          width: '400px',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <center><h1>Login</h1></center>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
              style={{
                width: '100%',
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#34cc54',
                color: '#000',
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              style={{
                width: '100%',
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#34cc54',
                color: '#000',
              }}
            />
            {emailError && <p style={{ color: '#ff4444', marginTop: '5px' }}>{emailError}</p>}
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              style={{
                width: '100%',
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#34cc54',
                color: '#000',
              }}
            />
            {passwordError && <p style={{ color: '#ff4444', marginTop: '5px' }}>{passwordError}</p>}
          </div>
          <center>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#34cc54',
                color: '#000',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
            >
              Login
            </button>
          </center>
        </form>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>Don't have an account? <Link to="/signup" className="text-green-500">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
