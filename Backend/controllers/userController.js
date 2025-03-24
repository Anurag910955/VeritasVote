// backend/controllers/userController.js
const db = require('../config/db');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword]);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    // Implement login logic here
    res.json({ message: 'Login successful' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
};