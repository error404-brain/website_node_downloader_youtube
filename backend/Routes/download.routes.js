// routes/videoRoutes.js
const express = require('express');
const { downloadVideo } = require('../controllers/download.controller');
const router = express.Router();

router.post('/download', downloadVideo);

module.exports = router;
