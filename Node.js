const express = require('express');
const app = express();
app.use(express.json());

app.post('/save-location', (req, res) => {
  const { latitude, longitude } = req.body;
  console.log(`Location received: ${latitude}, ${longitude}`);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
