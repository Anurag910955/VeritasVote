// backend/routes/candidateRoutes.js
const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');

router.post('/', candidateController.addCandidate);
router.get('/', candidateController.getCandidates);
// Add other candidate-related routes

module.exports = router;