// backend/server.js
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const voteRoutes = require('./routes/voteRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const db = require('./config/db'); // Database connection
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database connection
db.connect()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/votes', voteRoutes);
app.use('/api/candidates', candidateRoutes);

app.get('/', (req, res) => {
  res.send('VeritasVote Backend is running...');
});

// Error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});