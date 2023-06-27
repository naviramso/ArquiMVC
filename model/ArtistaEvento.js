const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const { Evento } = require("./Evento")
const { Artista } = require("./artista")

class ArtistaEvento extends Model{
  getArtistaEvento = async () => {
    try {
      const ArtistaEvento = await ArtistaEvento.findAll();
      return ArtistaEvento;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  createArtistaEvento = async (data) => {
    try {
      const ArtistaEvento = await ArtistaEvento.create(data);
      return ArtistaEvento.toJSON();
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  updateArtistaEvento = async (data) => {
    try {
      const ArtistaEvento = await ArtistaEvento.update(data, {
        where: { id_artista: data.id_artista, id_evento: data.id_evento },
      });
      return ArtistaEvento;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  deleteArtistaEvento = async (data) => {
    try {
      const ArtistaEvento = await ArtistaEvento.destroy({
        where: { id_artista: data.id_artista, id_evento: data.id_evento },
      });
      return ArtistaEvento;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
}

ArtistaEvento.init(
  {
    id_artista: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    id_evento: {
      type: DataTypes.INTEGER.UNSIGNED,
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
    tableName: "artista_eventos",
    createdAt: "fecha_creacion",
    updatedAt: "ultima_actualizacion",
  }
);

ArtistaEvento.belongsTo(Evento, {
  foreignKey: "id_evento",
  targetKey: "id",
  as: "eventos",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

ArtistaEvento.belongsTo(Artista, {
  foreignKey: "id_artista",
  targetKey: "id",
  as: "artistas",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

module.exports = new ArtistaEvento();
