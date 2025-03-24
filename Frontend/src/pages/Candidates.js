// frontend/src/pages/Candidates.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Candidates() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios.get('/api/candidates')
      .then(response => setCandidates(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Candidates</h1>
      <ul>
        {candidates.map(candidate => (
          <li key={candidate.id}>{candidate.name} - {candidate.party}</li>
        ))}
      </ul>
    </div>
  );
}

export default Candidates;