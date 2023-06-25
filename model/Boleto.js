const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class Boleto extends Model {
  static init() {
    return sequelize.define(
      "Boleto",
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        id_evento: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        precio: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
        ultima_actualizacion: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
          onUpdate: DataTypes.NOW,
        },
      },
      {
        tableName: "boletos",
        timestamps: false,
      }
    );
  }

  async createBoleto(id_evento, precio) {
    try {
      const Boleto = await this.create({
        id_evento: id_evento,
        precio: precio,
      });
      return Boleto;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async getBoletos(id_evento) {
    try {
      const Boleto = await this.findByPk(id_evento);
      return Boleto;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async getBoletosByEvento(id_evento) {
    try {
      const Boleto = await this.findAll({
        where: { id_evento: id_evento },
      });
      return Boleto;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async deleteBoleto(id_evento) {
    try {
      const Boleto = await this.destroy({
        where: { id_evento: id_evento },
      });
      return Boleto;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async updateBoleto(id_evento, precio) {
    try {
      const Boleto = await this.update(
        {
          precio: precio,
        },
        {
          where: { id_evento: id_evento },
        }
      );
      return Boleto;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async associate() {
    // Definir las asociaciones con otros modelos
    await this.belongsTo(Evento, {
      foreignKey: "id_evento",
      targetKey: "id",
      as: "evento",
    });
  }
}

Boleto.init();
Boleto.associate();

module.exports = Boleto;
