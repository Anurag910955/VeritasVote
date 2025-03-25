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
      <nav style={{ backgroundColor: '#4CAF50', padding: '10px' }}>
        <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
          <li><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
          <li><Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>Register</Link></li>
          <li><Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link></li>
          <li><Link to="/vote" style={{ textDecoration: 'none', color: 'white' }}>Vote</Link></li>
          <li><Link to="/candidates" style={{ textDecoration: 'none', color: 'white' }}>Candidates</Link></li>
        </ul>
      </nav>

      <div style={{ padding: '20px', lineHeight: '1.6' }}>
        <h1>Welcome to VeritasVote</h1>
        <p>{message}</p>
        <p>
          VeritasVote is an innovative and transparent online voting system designed to ensure fair and secure elections. Our platform allows users to register, log in, and cast their votes seamlessly. With real-time updates and secure data handling, we aim to build trust in the voting process.
        </p>
        <p>
          This system provides a user-friendly interface where voters can view candidates, understand their manifestos, and make informed decisions. Built using modern web technologies, VeritasVote ensures scalability, reliability, and security.
        </p>
        <p>
          Join us in transforming the voting landscape by making elections more accessible and trustworthy. Whether you are a voter or a candidate, VeritasVote offers a streamlined experience tailored to meet the needs of modern elections.
        </p>
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
