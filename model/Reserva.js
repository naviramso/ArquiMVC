const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Reserva {
  static init() {
    return sequelize.define('Reserva', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      id_venta: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      id_boleto: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      id_usuario: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      cant_reserva: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      fecha_reserva: {
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
    }, {
      tableName: 'reservas',
      timestamps: false,
    });
  }

  static async associate(){
    await this.belongsTo(Venta, {
      foreignKey: 'id_venta',
      targetKey: 'id',
      as: 'venta',
    }); 
    await this.belongsTo(Boleto, {
      foreignKey: 'id_boleto',
      targetKey: 'id',
      as: 'boleto',
    });
    await this.belongsTo(Usuario, {
      foreignKey: 'id_usuario',
      targetKey: 'id',
      as: 'usuario',
    })
  }

  static async createReserva(id_venta, id_boleto, id_usuario, cant_reserva) {
    try {
      const Reserva = await this.create({
        id_venta: id_venta,
        id_boleto: id_boleto,
        id_usuario: id_usuario,
        cant_reserva: cant_reserva,
      });
      return Reserva;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async getReserva(id_venta, id_boleto, id_usuario) {
    try {
      const Reserva = await this.findByPk(id_venta, id_boleto, id_usuario);
      return Reserva;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async deleteReserva(id_venta, id_boleto, id_usuario) {
    try {
      const Reserva = await this.destroy({
        where: {
          id_venta: id_venta,
          id_boleto: id_boleto,
          id_usuario: id_usuario,
        },
      });
      return Reserva;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async updateReserva(id_venta, id_boleto, id_usuario, cant_reserva) {
    try {
      const Reserva = await this.update(
        {
          cant_reserva: cant_reserva,
        },
        {
          where: {
            id_venta: id_venta,
            id_boleto: id_boleto,
            id_usuario: id_usuario,
          },
        }
      );
      return Reserva;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

Reserva.init();
Reserva.associate();
module.exports = Reserva;
