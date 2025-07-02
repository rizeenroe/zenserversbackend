const express = require('express');
const cors = require('cors');
const { status } = require('minecraft-server-util');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/mc-status', async (req, res) => {
  try {
    const result = await status('mc.zenservers.org', 25565);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Minecraft API server running on http://localhost:${PORT}`);
});
