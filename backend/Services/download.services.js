// services/videoService.js
const youtubedl = require('youtube-dl-exec');
const fs = require('fs');

const downloadVideo = async (url) => {
  const outputFile = 'video.mp4';  // Can customize filename or use dynamic names

  return new Promise((resolve, reject) => {
    youtubedl(url, { output: outputFile })
      .then(() => resolve())
      .catch((error) => reject(error));
  });
};

module.exports = { downloadVideo };
