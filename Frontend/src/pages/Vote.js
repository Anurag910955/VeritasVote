// frontend/src/pages/Vote.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Vote() {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState('');

  useEffect(() => {
    axios.get('/api/candidates')
      .then(response => setCandidates(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/votes', { userId: 1, candidateId: selectedCandidate }); // Replace userId with actual user id
      console.log(response.data);
      alert('Vote cast successfully!');
    } catch (error) {
      console.error(error);
      alert('Vote failed!');
    }
  };

  return (
    <div>
      <h1>Cast Your Vote</h1>
      <form onSubmit={handleSubmit}>
        <select value={selectedCandidate} onChange={(e) => setSelectedCandidate(e.target.value)}>
          <option value="">Select a Candidate</option>
          {candidates.map(candidate => (
            <option key={candidate.id} value={candidate.id}>{candidate.name}</option>
          ))}
        </select>
        <button type="submit">Vote</button>
      </form>
    </div>
  );
}

export default Vote;