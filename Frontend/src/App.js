import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Vote from './pages/Vote';
import Candidates from './pages/Candidates';
import './styles/style.css';


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/users/test')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <nav style={{ padding: '1rem', backgroundColor: '#4CAF50' }}>
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '1rem' }}>
          <li><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
          <li><Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>Register</Link></li>
          <li><Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link></li>
          <li><Link to="/vote" style={{ textDecoration: 'none', color: 'white' }}>Vote</Link></li>
          <li><Link to="/candidates" style={{ textDecoration: 'none', color: 'white' }}>Candidates</Link></li>
        </ul>
      </nav>
      <div style={{ padding: '1rem' }}>
        <h2>Welcome to VeritasVote</h2>
        <p>{message}</p>
      </div>
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
