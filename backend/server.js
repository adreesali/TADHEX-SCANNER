const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL pool
const pool = new Pool({
  user: 'tadhex-scanner',
  host: 'localhost',
  database: 'tadhex-scanner',
  password: '1234',
  port: 5432,
});

// Routes
app.get('/', (req, res) => {
  res.send('TADHEX Backend API');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = { pool };
