import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Vote from './pages/Vote';
import Candidates from './pages/Candidates';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/users/test')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/vote">Vote</Link></li>
          <li><Link to="/candidates">Candidates</Link></li>
        </ul>
      </nav>
      <p>{message}</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/candidates" element={<Candidates />} />
      </Routes>
    </Router>
  );
}

export default App;
