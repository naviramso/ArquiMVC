const { Sequelize } = require("sequelize");

const parametres = {
    db : process.env.DB || "eventos_db",
    host: process.env.HOST || 'localhost' ,// ||"192.168.78.216",
    user: process.env.USER || "root",
    password: process.env.PASSWORD || "",
    port: process.env.PORT || 3306,
    dialect: "mysql",
    logging: false,
}

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize(parametres.db, parametres.user, parametres.password, {
  host: parametres.host,
  port: parametres.port,
  dialect: parametres.dialect,
});

// Prueba de conexión
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión establecida correctamente.");
  })
  .catch((error) => {
    console.error("No se pudo conectar a la base de datos:", error);
  });

module.exports = sequelize;
