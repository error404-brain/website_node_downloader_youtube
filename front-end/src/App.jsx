import React, { useState } from 'react';
import { downloadVideo } from './Api';

function App() {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Processing...');
    try {
      const data = await downloadVideo(url);
      setMessage(data.message || 'Download complete!');
    } catch (error) {
      setMessage('Error downloading video');
    }
  };

  return (
    <div>
      <h1>YouTube Video Downloader</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter YouTube URL"
        />
        <button type="submit">Download</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default App;
