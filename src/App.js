// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import Feed from './components/Feed';
import Logout from './components/Logout';
import Home from './components/home';
import Navbar from './components/navbar';
import './App.css'
 

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>

        <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/create-post" element={<CreatePost/>} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/logout" element={<Logout/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
