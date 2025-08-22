// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Contact form route
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submitted:', { name, email, message });
  // Here you can integrate email sending if you want
  res.json({ status: 'success', message: 'Message received! Thank you for contacting us.' });
});

// Audit API route
app.post('/audit', (req, res) => {
  const { url } = req.body;
  console.log('Audit requested for URL:', url);

  // Simulated audit data (you can replace with real analysis later)
  const data = {
    performance: Math.floor(Math.random() * 101), // 0-100
    security: Math.floor(Math.random() * 101),
    seo: Math.floor(Math.random() * 101),
    loadTime: (Math.random() * 3 + 1).toFixed(2), // 1-4 sec
    pageSize: Math.floor(Math.random() * 1500 + 200), // 200-1700 KB
    numRequests: Math.floor(Math.random() * 50 + 10), // 10-60
    securityIssues: ['Vulnerability A', 'Vulnerability B'],
    seoIssues: ['Missing meta description', 'Broken link'],
    recommendations: ['Optimize images', 'Fix broken links', 'Add meta tags']
  };

  res.json(data);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
