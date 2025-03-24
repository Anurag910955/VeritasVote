// backend/controllers/candidateController.js
const db = require('../config/db');

const addCandidate = async (req, res, next) => {
  try {
    const { name, party } = req.body;
    await db.query('INSERT INTO candidates (name, party) VALUES ($1, $2)', [name, party]);
    res.status(201).json({ message: 'Candidate added successfully' });
  } catch (error) {
    next(error);
  }
};

const getCandidates = async (req, res, next) => {
    try{
        const result = await db.query('SELECT * FROM candidates');
        res.json(result.rows);
    }catch(error){
        next(error);
    }
}

module.exports = {
  addCandidate,
  getCandidates
};