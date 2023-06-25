const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Artista {
  static init() {
    return sequelize.define(
      "Artista",
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre_artista: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        ruta_imagen: {
          type: DataTypes.STRING(100),
        },
        ultima_actualizacion: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
          onUpdate: DataTypes.NOW,
        },
      },
      {
        tableName: "artistas",
        timestamps: false,
      }
    );
  }

  static async crearArtista(nombre, ruta_imagen) {
    try {
      const Artista = await Artista.create({
        nombre_artista: nombre,
        ruta_imagen: ruta_imagen,
      });
      console.log("Artista creado: " + Artista.toJSON());
      return Artista;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async getArtista(id) {
    try {
      const Artista = await Artista.findByPk(id);
      return Artista;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async getArtistas() {
    try {
      const Artistas = await Artista.findAll();
      return Artistas;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async updateArtista(id, nuevos_datos) {
    try {
      const Artista = await Artista.update(nuevos_datos, {
        where: { id: id },
      });
      return Artista;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async deleteArtista(id) {
    try {
      const Artista = await Artista.destroy({
        where: { id: id },
      });
      return Artista;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

Artista.init();
module.exports = Artista;
