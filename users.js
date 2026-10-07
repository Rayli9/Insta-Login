/* ============================================================
   LISTE DES ÉLÈVES — c'est LE fichier que tu modifies
   ============================================================
   Chaque élève = un bloc { ... }.
   - username : l'identifiant qu'il tape pour se connecter
   - code     : le code que TU lui donnes (ce n'est pas son vrai
                mot de passe d'un autre service, juste un code
                d'accès à ton portail)
   - name     : son prénom (pour l'accueil)
   - courses  : SES cours à lui (chacun a un label + un lien)

   Pour AJOUTER un élève : copie un bloc entre accolades,
   colle-le, mets une virgule entre chaque bloc, et change les infos.

   ⚠️ Important : ce fichier est visible dans le navigateur, donc
   les codes ne sont PAS une vraie sécurité. C'est parfait pour
   apprendre et pour un usage tranquille entre élèves. Pour de
   vrais comptes sécurisés, il faudra un serveur (étape d'après).
   ============================================================ */

const USERS = [
  {
    username: "ilias",
    code: "1234",
    name: "Ilias",
    courses: [
      { label: "Maths — Dérivées",        link: "https://exemple.com/artefact-maths" },
      { label: "Physique — Les forces",   link: "https://exemple.com/artefact-physique" }
    ]
  },
  {
    username: "sarah",
    code: "5678",
    name: "Sarah",
    courses: [
      { label: "Histoire — Guerre froide", link: "https://exemple.com/artefact-histoire" },
      { label: "SVT — La génétique",       link: "https://exemple.com/artefact-svt" }
    ]
  },
  {
    username: "mehdi",
    code: "0000",
    name: "Mehdi",
    courses: [
      { label: "Maths — Probabilités",     link: "https://exemple.com/artefact-probas" }
    ]
  }
];
