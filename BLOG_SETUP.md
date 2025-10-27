# Guide de Configuration du Système d'Actualités

## Configuration de la Base de Données

### 1. Créer le fichier .env.local

Créez un fichier `.env.local` à la racine du projet avec les informations suivantes :

```env
# Database Configuration
DB_HOST=localhost
DB_USER=votre_nom_utilisateur
DB_PASSWORD=votre_mot_de_passe
DB_NAME=votre_base_de_donnees
DB_PORT=3306

# Admin Configuration
ADMIN_SECRET_KEY=votre_cle_secrete
```

### 2. Structure de la Base de Données

Vous avez déjà créé les tables suivantes :

#### Table `users`
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Table `blogs`
```sql
CREATE TABLE blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### 3. Créer un Utilisateur Admin

Pour créer un utilisateur administrateur, vous devez hasher le mot de passe. Utilisez ce script Node.js :

```javascript
const bcrypt = require('bcryptjs');

async function createHashedPassword() {
  const password = 'votre_mot_de_passe';
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('Mot de passe hashé:', hashedPassword);
}

createHashedPassword();
```

Ensuite, insérez l'utilisateur dans la base de données :

```sql
INSERT INTO users (username, password) 
VALUES ('admin', 'le_mot_de_passe_hashe');
```

**OU** utilisez ce script SQL direct (mot de passe: `admin123`):

```sql
INSERT INTO users (username, password) 
VALUES ('admin', '$2a$10$YourHashedPasswordHere');
```

## Utilisation du Système

### Pages Publiques

1. **Page des Actualités** : `/actualites`
   - Affiche tous les articles publiés
   - Design moderne et responsive
   - Navigation vers les articles individuels

2. **Page Article Individuel** : `/actualites/[id]`
   - Affiche le contenu complet d'un article
   - Métadonnées (auteur, date de publication, date de mise à jour)
   - Boutons de navigation

### Interface d'Administration

1. **Page de Connexion** : `/admin`
   - Connexion avec nom d'utilisateur et mot de passe
   - Redirection automatique si déjà connecté

2. **Tableau de Bord Admin** : `/admin/dashboard`
   - Voir tous les articles (publiés et brouillons)
   - Créer de nouveaux articles
   - Modifier des articles existants
   - Supprimer des articles
   - Publier/dépublier des articles

### API Routes

Les routes API suivantes sont disponibles :

- `GET /api/blogs` - Récupérer tous les blogs publiés
- `GET /api/blogs?includeUnpublished=true` - Récupérer tous les blogs (y compris brouillons)
- `GET /api/blogs/[id]` - Récupérer un blog spécifique
- `POST /api/blogs` - Créer un nouveau blog
- `PUT /api/blogs/[id]` - Mettre à jour un blog
- `DELETE /api/blogs/[id]` - Supprimer un blog
- `POST /api/auth/login` - Connexion administrateur

## Installation

1. Installez les dépendances :
```bash
npm install
```

2. Créez le fichier `.env.local` avec vos credentials de base de données

3. Créez les tables dans votre base de données MySQL

4. Créez un utilisateur admin avec un mot de passe hashé

5. Lancez le serveur de développement :
```bash
npm run dev
```

6. Accédez à l'interface :
   - Site public : http://localhost:3000
   - Actualités : http://localhost:3000/actualites
   - Admin : http://localhost:3000/admin

## Améliorations Futures Possibles

- [ ] Ajouter un éditeur de texte riche (WYSIWYG) pour le contenu
- [ ] Ajouter la possibilité d'uploader des images pour chaque article
- [ ] Ajouter des catégories/tags pour les articles
- [ ] Ajouter une fonctionnalité de recherche
- [ ] Ajouter la pagination pour les articles
- [ ] Ajouter des métadonnées SEO (title, description, keywords)
- [ ] Ajouter la gestion de plusieurs auteurs
- [ ] Ajouter un système de commentaires

## Sécurité

⚠️ **Important** :
- Ne commitez JAMAIS le fichier `.env.local` dans Git
- Utilisez des mots de passe forts pour vos utilisateurs admin
- En production, utilisez HTTPS
- Considérez l'ajout d'un système de JWT ou de sessions serveur pour l'authentification
- Ajoutez une protection CSRF pour les formulaires
- Limitez les tentatives de connexion (rate limiting)

## Support

Pour toute question ou problème, veuillez consulter la documentation Next.js et MySQL.

