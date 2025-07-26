import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.RIOT_API_KEY;

app.use(cors());

// 🧙 Summoner-Daten abrufen
app.get('/summoner/:name', async (req, res) => {
  const { name } = req.params;
  const url = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURIComponent(name)}`;

  try {
    const riotRes = await fetch(url, {
      headers: { 'X-Riot-Token': API_KEY }
    });

    if (!riotRes.ok) {
      return res.status(riotRes.status).json({ error: 'Fehler bei Riot API' });
    }

    const data = await riotRes.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Serverfehler' });
  }
});

// 🌀 Champion-Rotation abrufen
app.get('/rotation', async (req, res) => {
  const url = 'https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations';

  try {
    const riotRes = await fetch(url, {
      headers: { 'X-Riot-Token': API_KEY }
    });

    if (!riotRes.ok) {
      return res.status(riotRes.status).json({ error: 'Fehler bei Riot API' });
    }

    const data = await riotRes.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Serverfehler bei Champion Rotation' });
  }
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
