const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '192.168.78.216' || process.env.DB_HOST,       // Cambia esto según la configuración de tu servidor MySQL
  user: 'root' || process.env.DB_USER,            // Cambia esto según tu usuario de MySQL
  password: '' || process.env.DB_PASSWORD,   
  port: 3306 || process.env.DB_PORT,            // Cambia esto según tu contraseña de MySQL
  database: 'eventos_db' || process.env.DB_NAME,  // Cambia esto según tu nombre de base de datos
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = connection;