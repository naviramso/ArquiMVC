const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class ArtistaEvento {
  static init() {
    return sequelize.define(
      "ArtistaEvento",
      {
        id_artista: {
          type: DataTypes.INTEGER.UNSIGNED,
        },
        id_evento: {
          type: DataTypes.INTEGER.UNSIGNED,
        },
        ultima_actualizacion: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
          onUpdate: DataTypes.NOW,
        },
      },
      {
        tableName: "artista_eventos",
        timestamps: false,
      }
    );
  }

  static async associate(){
    // Definir las asociaciones con otros modelos
    ArtistaEvento.belongsTo(Evento, {
      foreignKey: "id_evento",
      targetKey: "id_evento",
      as: "evento",
    });
    ArtistaEvento.belongsTo(Artista, {
      foreignKey: "id_artista",
      targetKey: "id_artista",
      as: "artista",
    })
  }

  static async getArtistaEvento(id_artista, id_evento){
    try {
      const ArtistaEvento = await ArtistaEvento.findByPk(id_artista, id_evento);
      return ArtistaEvento;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async createArtistaEvento(id_artista, id_evento){
    try {
      const ArtistaEvento = await ArtistaEvento.create({
        id_artista: id_artista,
        id_evento: id_evento,
      });
      return ArtistaEvento;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async deleteArtistaEvento(id_artista, id_evento){
    try {
      const ArtistaEvento = await ArtistaEvento.destroy({
        where: {
          id_artista: id_artista,
          id_evento: id_evento,
        },
      });
      return ArtistaEvento;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async updateArtistaEvento(id_artista, id_evento, precio){
    try {
      const ArtistaEvento = await ArtistaEvento.update(
        {
          precio: precio,
        },
        {
          where: {
            id_artista: id_artista,
            id_evento: id_evento,
          },
        }
      );
      return ArtistaEvento;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

ArtistaEvento.init();
ArtistaEvento.associate();
module.exports = ArtistaEvento;
