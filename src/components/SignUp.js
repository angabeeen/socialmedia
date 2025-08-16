// src/components/SignUp.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';  // Import Firebase auth methods
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import { auth } from '../firebase';  // Import Firebase auth instance

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  // To handle error messages
  const navigate = useNavigate();  // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Try to create a user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      
      // After successful sign-up, navigate to the Feed page
      navigate('/feed');
    } catch (error) {
      // Check if the error is due to email already being in use
      if (error.code === 'auth/email-already-in-use') {
        setError('Email is already in use. Redirecting to Login...');
        
        // Redirect the user to the Login page if the email already exists
        setTimeout(() => {
          navigate('/login');
        }, 2000);  // Redirect after 2 seconds to show error message
      } else {
        setError(error.message);  // Display other error messages
      }
    }
  };

  return (
    <div className='container signup'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      
      {/* Display error message if there is any */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignUp;
