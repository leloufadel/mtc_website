# Guide de Démarrage Rapide - Système d'Actualités

## 🚀 Installation en 5 Minutes

### Étape 1: Configuration de la Base de Données

1. **Créez votre base de données MySQL:**
   ```bash
   mysql -u root -p
   ```
   ```sql
   CREATE DATABASE mtc_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   USE mtc_db;
   ```

2. **Importez le schéma:**
   ```bash
   mysql -u root -p mtc_db < database/schema.sql
   ```

### Étape 2: Configuration de l'Environnement

1. **Créez le fichier `.env.local`** à la racine du projet:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=votre_mot_de_passe
   DB_NAME=mtc_db
   DB_PORT=3306
   ADMIN_SECRET_KEY=votre_cle_secrete
   ```

### Étape 3: Créer un Utilisateur Admin

**Option A - Utiliser le mot de passe par défaut:**

Le schéma SQL crée automatiquement un utilisateur:
- Username: `admin`
- Password: `admin123`

⚠️ **Changez ce mot de passe en production !**

**Option B - Créer votre propre utilisateur:**

```bash
node scripts/create-admin.js
```

### Étape 4: Lancer l'Application

```bash
npm run dev
```

## 📍 Accès aux Pages

- **Site principal:** http://localhost:3000
- **Actualités:** http://localhost:3000/actualites
- **Admin (connexion):** http://localhost:3000/admin
- **Dashboard admin:** http://localhost:3000/admin/dashboard

## 🎯 Utilisation Rapide

### Pour Publier un Article:

1. Allez sur http://localhost:3000/admin
2. Connectez-vous avec vos identifiants
3. Cliquez sur "Nouvel article"
4. Remplissez le formulaire
5. Cochez "Publier immédiatement" (ou laissez en brouillon)
6. Cliquez sur "Créer"

### Pour Voir les Articles:

1. Allez sur http://localhost:3000/actualites
2. Cliquez sur un article pour voir les détails

## 🔧 Commandes Utiles

```bash
# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Démarrer en production
npm start

# Créer un nouvel utilisateur admin
node scripts/create-admin.js
```

## 📦 Dépendances Installées

- `mysql2` - Connexion MySQL
- `bcryptjs` - Hashage des mots de passe
- `@types/bcryptjs` - Types TypeScript pour bcryptjs

## 🎨 Fonctionnalités

### Pages Publiques
- ✅ Liste des actualités avec design moderne
- ✅ Page détail d'un article
- ✅ Design responsive
- ✅ Navigation fluide

### Interface Admin
- ✅ Connexion sécurisée
- ✅ Tableau de bord avec liste des articles
- ✅ Création d'articles
- ✅ Édition d'articles
- ✅ Suppression d'articles
- ✅ Gestion des brouillons/articles publiés

### API
- ✅ REST API complète pour les blogs
- ✅ Routes d'authentification
- ✅ Gestion des erreurs

## 🔐 Sécurité

- Mots de passe hashés avec bcrypt
- Variables d'environnement pour les credentials
- Protection contre les injections SQL (requêtes paramétrées)

## 📝 Notes

- Les fichiers `.env*` sont automatiquement ignorés par Git
- Le mot de passe par défaut dans `schema.sql` doit être changé en production
- Les articles peuvent être sauvegardés en brouillon (non publiés)

## 🆘 Problèmes Courants

### Erreur de connexion à la base de données
- Vérifiez vos credentials dans `.env.local`
- Vérifiez que MySQL est en cours d'exécution
- Vérifiez que la base de données existe

### Impossible de se connecter à l'admin
- Vérifiez que l'utilisateur existe dans la table `users`
- Vérifiez que le mot de passe est correctement hashé

### Les articles ne s'affichent pas
- Vérifiez que les articles sont marqués comme `published = true`
- Vérifiez la connexion à la base de données

## 📚 Documentation Complète

Pour plus de détails, consultez `BLOG_SETUP.md`

