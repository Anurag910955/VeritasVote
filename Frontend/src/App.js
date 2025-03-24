// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
      <div className="App">
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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/vote" component={Vote} />
          <Route path="/candidates" component={Candidates} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;