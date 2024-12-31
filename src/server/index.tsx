import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../components/App';

const app = express();

// Serve static files
app.use(express.static('public'));

// Handle all routes
app.get('*', (req, res) => {
  const appString = renderToString(<App />);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR App</title>
      </head>
      <body>
        <div id="root">${appString}</div>
        <script src="/bundle.js" defer></script>
      </body>
    </html>
  `;
  res.send(html);
});

// Start the server
const PORT = 3008;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
