const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class Artista extends Model {
  crearArtista = async (nombre, ruta_imagen) => {
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
  };

  getArtista = async (id) => {
    try {
      const Artista = await Artista.findByPk(id);
      return Artista;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  getArtistas = async () => {
    try {
      const Artistas = await Artista.findAll();
      return Artistas;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  updateArtista = async (id, nuevos_datos) => {
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

  deleteArtista = async (id) => {
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

Artista.init({
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
  fecha_creacion: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  ultima_actualizacion: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
  },
},
{
  sequelize,
  tableName: "artistas",
  createdAt: "fecha_creacion",
  updatedAt: "ultima_actualizacion",
})

const artist = new Artista();
module.exports = {artist, Artista};
