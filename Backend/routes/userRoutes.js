// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/test', (req, res) => {
    res.json({message: "User Route Test Successful"});
});
// Add other user-related routes

module.exports = router;