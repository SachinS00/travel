const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3001;

app.use(cors());

app.get('/api/itinerary', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data file');
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});