-- Schéma de base de données pour le système d'actualités MTC
-- Utilisez ce fichier pour créer les tables nécessaires

-- Créer la base de données (si elle n'existe pas)
-- CREATE DATABASE IF NOT EXISTS mtc_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- USE mtc_db;

-- Table des utilisateurs
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_username (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table des blogs/actualités
CREATE TABLE IF NOT EXISTS blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_published (published),
  INDEX idx_created_at (created_at),
  INDEX idx_user_id (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table des médias (images et vidéos) associés aux blogs
CREATE TABLE IF NOT EXISTS blog_media (
  id INT AUTO_INCREMENT PRIMARY KEY,
  blog_id INT NOT NULL,
  url VARCHAR(500) NOT NULL,
  media_type ENUM('image', 'video') NOT NULL,
  file_name VARCHAR(255) NOT NULL,
  file_size INT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (blog_id) REFERENCES blogs(id) ON DELETE CASCADE,
  INDEX idx_blog_id (blog_id),
  INDEX idx_media_type (media_type),
  INDEX idx_display_order (display_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Exemple d'insertion d'un utilisateur admin
-- Le mot de passe ci-dessous est "admin123" hashé avec bcrypt
-- IMPORTANT: Changez ce mot de passe après l'installation!
INSERT INTO users (username, password) 
VALUES ('admin', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi')
ON DUPLICATE KEY UPDATE username=username;

-- Exemple d'insertion d'articles de test
INSERT INTO blogs (user_id, title, content, published) VALUES
(1, 'Bienvenue sur notre page d\'actualités', 'Nous sommes ravis de vous présenter notre nouvelle section actualités. Ici, vous trouverez toutes les dernières nouvelles concernant MTC, nos projets en cours, nos réalisations et nos innovations dans le domaine du BTP.', true),
(1, 'Nouveau projet d\'infrastructure', 'MTC est fier d\'annoncer le démarrage d\'un nouveau projet majeur d\'infrastructure routière dans la région. Ce projet ambitieux comprend la construction de 50 km de routes modernes, respectueuses de l\'environnement et conformes aux normes internationales les plus strictes.', true),
(1, 'Brouillon: Article en préparation', 'Ceci est un exemple d\'article en brouillon qui n\'est pas encore publié.', false)
ON DUPLICATE KEY UPDATE title=title;

-- Vérification des tables créées
SELECT 'Tables créées avec succès!' AS message;

-- Afficher le nombre d'utilisateurs
SELECT COUNT(*) AS nombre_utilisateurs FROM users;

-- Afficher le nombre d'articles
SELECT COUNT(*) AS nombre_articles FROM blogs;

