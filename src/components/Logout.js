// src/components/Logout.js
import React from 'react';
import { signOut } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'

const Logout = () => {
 

  const handleLogout = async () => {
    try {
      await signOut(auth);
     ;
    } catch (error) {
      console.error("Error logging out: ", error.message);
    }
  };

  return (
    <div className='container logout'>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Logout;
