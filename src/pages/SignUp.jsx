import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState('');
  const [fullname, setFullname] = useState(''); // Added state for fullname
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
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password, category, fullname }) // Included fullname in the request body
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData.message);
        return;
      }

      const responseData = await response.json();
      console.log('Success:', responseData);
      sessionStorage.setItem('userId', responseData._id);
      
      navigate("/home");
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="w-[400px]">
        <center><h1>Sign Up</h1></center>
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label htmlFor="username" className="block mb-2">Username</label>
            <input 
              type="text" 
              id="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded bg-gray-800 text-white"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="fullname" className="block mb-2">Full Name</label> {/* Added input field for fullname */}
            <input 
              type="text" 
              id="fullname" 
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full px-3 py-2 border rounded bg-gray-800 text-white"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-3 py-2 border rounded bg-gray-800 text-white ${emailError ? 'border-red-500' : ''}`}
            />
            {emailError && <p className="text-red-500 mt-1">{emailError}</p>}
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="block mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-3 py-2 border rounded bg-gray-800 text-white ${passwordError ? 'border-red-500' : ''}`}
            />
            {passwordError && <p className="text-red-500 mt-1">{passwordError}</p>}
          </div>
          <div className="mb-8">
            <label htmlFor="category" className="block mb-2">Category</label>
            <select 
              id="category" 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded bg-gray-800 text-white"
            >
              <option value=""></option>
              <option value="individual">Individual</option>
              <option value="company">Company</option>
              <option value="farmer">Farmer</option>
              <option value="worker">Worker</option>
            </select>
          </div>
          <div>
            <center>
              <button
                type="submit"
                style={{
                  display: 'block',
                  width: '80px',
                  padding: '10px',
                  border: 'none',
                  borderRadius: '5px',
                  backgroundColor: '#34cc54',
                  color: '#000',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
              >
                SignUp
              </button>
            </center>
          </div>
        </form>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>Already have an account? <a href="/login" className="text-green-500">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
