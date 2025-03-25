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
    <ul>
      {candidates.map(c => <li key={c.id}>{c.name} - {c.party}</li>)}
    </ul>
  );
}

export default Candidates;
