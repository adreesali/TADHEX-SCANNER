// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { Pool } = require('pg');

// const app = express();
// const port = 3001;

// const pool = new Pool({
//   user: 'postgres', 
//   host: 'localhost',
//   database: 'mydatabase',
//   password: '1234', 
//   port: 5432,
// });

// app.use(cors());
// app.use(bodyParser.json());

// // Function to create the items table if it doesn't exist
// async function createItemsTable() {
//   try {
//     const client = await pool.connect();
//     await client.query(`
//       CREATE TABLE IF NOT EXISTS scanner (
//         id SERIAL PRIMARY KEY,
//         title VARCHAR(100) NOT NULL,
//         price NUMERIC(12, 2) NOT NULL,
//         imgUrl TEXT NOT NULL
//       )
//     `);
//     console.log('Items table created successfully');
//     client.release();
//   } catch (error) {
//     console.error('Error creating items table:', error);
//   }
// }

// createItemsTable();

// app.get('/items', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM items');
//     res.json(result.rows);
//   } catch (error) {
//     console.error('Error fetching items:', error);
//     res.status(500).send(error.message);
//   }
// });

// app.post('/items', async (req, res) => {
//   const { title, price, imgUrl } = req.body;
//   try {
//     const result = await pool.query(
//       'INSERT INTO scanner (title, price, imgUrl) VALUES ($1, $2, $3) RETURNING *',
//       [title, price, imgUrl]
//     );
//     res.json(result.rows[0]);
//   } catch (error) {
//     console.error('Error adding item:', error);
//     res.status(500).send(error.message);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });






const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3001;

const pool = new Pool({
  user: 'postgres', 
  host: 'localhost',
  database: 'mydatabase',
  password: '1234', 
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

async function createScannerTable() {
  try {
    const client = await pool.connect();
    await client.query(`
      CREATE TABLE IF NOT EXISTS scanner (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        price NUMERIC(12, 2) NOT NULL,
        imgUrl TEXT NOT NULL
      )
    `);
    console.log('Scanner table created successfully');
    client.release();
  } catch (error) {
    console.error('Error creating scanner table:', error);
  }
}

createScannerTable();

app.get('/items', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM scanner');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).send(error.message);
  }
});

app.post('/items', async (req, res) => {
  const { title, price, imgUrl } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO scanner (title, price, imgUrl) VALUES ($1, $2, $3) RETURNING *',
      [title, price, imgUrl]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error adding item:', error);
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
