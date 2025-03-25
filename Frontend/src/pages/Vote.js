import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Vote() {
  const [candidates, setCandidates] = useState([]);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    axios.get('/api/candidates')
      .then(response => setCandidates(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/votes', { userId: 1, candidateId: selected });
      alert('Vote cast successfully!');
    } catch (error) {
      console.error(error);
      alert('Vote failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={e => setSelected(e.target.value)}>
        <option value="">Select Candidate</option>
        {candidates.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
      </select>
      <button type="submit">Vote</button>
    </form>
  );
}

export default Vote;