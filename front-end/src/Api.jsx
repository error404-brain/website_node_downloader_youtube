// src/api.jsx
const API_URL = 'http://localhost:5000';

export const downloadVideo = async (url) => {
  try {
    const response = await fetch(`${API_URL}/download`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });
    if (!response.ok) {
      throw new Error('Error downloading video');
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
