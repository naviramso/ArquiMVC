const mysql = require('mysql')

const connection = mysql.createConnection({
    host: process.env.DB_HOST ||  'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'eventos_db',
    port: process.env.DB_PORT || 3306,
})

if (connection) {
    console.log('Conexión exitosa')
} else {
    console.log('Error de conexión')
}

module.exports = connection;