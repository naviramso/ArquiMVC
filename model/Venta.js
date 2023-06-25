const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Venta extends Model {
  static init() {
    return sequelize.define('Venta', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      id_usuario: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      fecha_venta: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      total_venta: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      ultima_actualizacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
      },
    }, {
      tableName: 'ventas',
      timestamps: false,
    });
  }

  static associate(){
    this.belongsTo(Usuario, {
      foreignKey: 'id_usuario',
      targetKey: 'id',
      as: 'usuario',
    })
  }

  static async getVentas(id_usuario){
    try {
      const Venta = await this.findByPk(id_usuario);
      return Venta;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async getVentasByUsuario(id_usuario){
    try {
      const Venta = await this.findByPk(id_usuario);
      return Venta;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async createVenta(id_usuario, fecha_venta, total_venta) {
    try {
      const Venta = await this.create({
        id_usuario: id_usuario,
        fecha_venta: fecha_venta,
        total_venta: total_venta,
      });
      return Venta;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async deleteVenta(id_usuario){
    try {
      const Venta = await this.destroy({
        where: { id_usuario: id_usuario },
      });
      return Venta;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

}

Venta.init();
Venta.associate();
module.exports = Venta;
