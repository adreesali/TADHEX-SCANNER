const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3001;

const pool = new Pool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'mydatabase',
  password: '1234',
  port: 5432,
});


app.use(cors());
app.use(bodyParser.json());


async function createWorkersTable() {
    try {
        const client = await pool.connect();
        await client.query(`
            CREATE TABLE IF NOT EXISTS scanner (
                id SERIAL PRIMARY KEY,
                title VARCHAR(100) NOT NULL,
                price VARCHAR(12, 8) UNIQUE NOT NULL,
                imgUrl TEXT NOT NULL
            )
        `);
        console.log('scanner table created successfully');
        client.release();
    } catch (error) {
        console.error('Error creating scanner table:', error);
    }
}

// Get all items
app.get('/items', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM items');
    res.json(result.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Add an item
app.post('/items', async (req, res) => {
  const { title, price, imgUrl } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO items (title, price, imgUrl) VALUES ($1, $2, $3) RETURNING *',
      [title, price, imgUrl]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


