const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.use(express.json());

// Simulated Lydell API
app.get('/', (req, res) => {
  res.send('✅ Lydell Tech + Lab is now LIVE and accepting clients.');
});

app.get('/status', (req, res) => {
  res.json({ 
    status: 'online', 
    revenue_pipeline: 'active', 
    clients_onboarding: true, 
    version: 'v1.0.0' 
  });
});

app.listen(PORT, () => {
  console.log(`Lydell is live on port ${PORT}`);
});
