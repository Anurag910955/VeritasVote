// backend/routes/voteRoutes.js
const express = require('express');
const router = express.Router();
const voteController = require('../controllers/voteController');

router.post('/', voteController.castVote);
router.get('/', voteController.getVotes);
// Add other vote-related routes

module.exports = router;