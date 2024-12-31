// controllers/videoController.js
const videoService = require('../Services/download.services');

const downloadVideo = async (req, res) => {
  const { url } = req.body;
  
  try {
    await videoService.downloadVideo(url);
    res.json({ message: 'Download complete!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error downloading video' });
  }
};

module.exports = { downloadVideo };
