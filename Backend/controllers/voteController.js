// backend/controllers/voteController.js
const db = require('../config/db');

const castVote = async (req, res, next) => {
  try {
    const { userId, candidateId } = req.body;
    await db.query('INSERT INTO votes (user_id, candidate_id) VALUES ($1, $2)', [userId, candidateId]);
    res.status(201).json({ message: 'Vote cast successfully' });
  } catch (error) {
    next(error);
  }
};

const getVotes = async (req, res, next) => {
    try{
        const result = await db.query('SELECT * FROM votes');
        res.json(result.rows);
    }catch(error){
        next(error);
    }
}

module.exports = {
  castVote,
  getVotes
};