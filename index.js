const express = require('express');
const cors = require('cors');
const { status } = require('minecraft-server-util');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/', async (req, res) => {
  try {
    const response = await status('mc.zenservers.org', 25565);
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
