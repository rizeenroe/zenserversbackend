import { status } from 'minecraft-server-util';

export default async function handler(req, res) {
  try {
    const response = await status('mc.zenservers.org', 25565);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
