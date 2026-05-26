'use strict';

require('dotenv').config();

const express = require('express');
const path = require('path');
const { encrypt, decrypt } = require('./encryption');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and serve static files
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Route: Serve the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route: Encrypt text
app.post('/encrypt', (req, res) => {
  try {
    const { text } = req.body;

    // Validation: check if text is provided
    if (!text || text.trim() === '') {
      return res.status(400).json({ error: 'Please provide text to encrypt.' });
    }

    // Call encrypt function from encryption.js
    const encryptedText = encrypt(text);

    res.json({ result: encryptedText });

  } catch (error) {
    res.status(500).json({ error: 'Encryption failed: ' + error.message });
  }
});

// Route: Decrypt text
app.post('/decrypt', (req, res) => {
  try {
    const { text } = req.body;

    // Validation: check if text is provided
    if (!text || text.trim() === '') {
      return res.status(400).json({ error: 'Please provide text to decrypt.' });
    }

    // Call decrypt function from encryption.js
    const decryptedText = decrypt(text);

    res.json({ result: decryptedText });

  } catch (error) {
    res.status(500).json({ error: 'Decryption failed. Make sure you paste valid encrypted text.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Encryption App is running at http://localhost:${PORT}`);
});
