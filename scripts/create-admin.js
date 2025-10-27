/**
 * Script pour créer un utilisateur administrateur
 * 
 * Usage:
 * 1. Configurez vos credentials de base de données dans .env.local
 * 2. Exécutez: node scripts/create-admin.js
 */

const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function createAdmin() {
  try {
    // Charger les variables d'environnement
    require('dotenv').config({ path: '.env.local' });

    console.log('🔧 Connexion à la base de données...\n');

    // Connexion à la base de données
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: parseInt(process.env.DB_PORT || '3306')
    });

    console.log('✅ Connecté à la base de données!\n');

    // Demander les informations de l'utilisateur
    const username = await question('Nom d\'utilisateur admin: ');
    const password = await question('Mot de passe: ');

    if (!username || !password) {
      console.error('❌ Nom d\'utilisateur et mot de passe requis!');
      process.exit(1);
    }

    // Vérifier si l'utilisateur existe déjà
    const [existingUsers] = await connection.query(
      'SELECT id FROM users WHERE username = ?',
      [username]
    );

    if (existingUsers.length > 0) {
      console.log('⚠️  Un utilisateur avec ce nom existe déjà.');
      const confirm = await question('Voulez-vous le mettre à jour? (o/n): ');
      
      if (confirm.toLowerCase() !== 'o') {
        console.log('Opération annulée.');
        process.exit(0);
      }

      // Mettre à jour le mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);
      await connection.query(
        'UPDATE users SET password = ? WHERE username = ?',
        [hashedPassword, username]
      );
      
      console.log('\n✅ Utilisateur mis à jour avec succès!');
    } else {
      // Créer un nouvel utilisateur
      console.log('\n🔐 Hashage du mot de passe...');
      const hashedPassword = await bcrypt.hash(password, 10);

      console.log('💾 Création de l\'utilisateur...');
      const [result] = await connection.query(
        'INSERT INTO users (username, password, created_at) VALUES (?, ?, NOW())',
        [username, hashedPassword]
      );

      console.log('\n✅ Utilisateur admin créé avec succès!');
      console.log(`   ID: ${result.insertId}`);
      console.log(`   Username: ${username}`);
    }

    console.log('\n📝 Vous pouvez maintenant vous connecter à /admin\n');

    await connection.end();
    rl.close();
  } catch (error) {
    console.error('\n❌ Erreur:', error.message);
    rl.close();
    process.exit(1);
  }
}

createAdmin();

