// server.js
const express = require('express');
const bodyParser = require('body-parser');
const videoRoutes = require('./Routes/download.routes');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors({
  origin: 'http://localhost:5173', // Only allow requests from this frontend
}));




app.use(bodyParser.json());

app.use('/api', videoRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
