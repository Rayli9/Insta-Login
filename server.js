const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Route de connexion sans aucune sécurité
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  // Affichage des données "volées" dans le terminal
  console.log(`[ALERTE SÉCURITÉ] Identifiant : ${username} | Mot de passe : ${password}`);
  
  // Redirection autorisée à tous les coups, peu importe les identifiants
  res.json({ success: true, message: "Connexion réussie." });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur back-end "vulnérable" démarré sur http://localhost:${PORT}`);
});