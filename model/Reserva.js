const { DataTypes, Model} = require('sequelize');
const sequelize = require('./config/database');

class Reserva extends Model {
  createReserva = async (data) => {
    try {
      const reserva = await Reserva.create(data);
      return reserva.toJSON();
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  updateReserva = async (id, data) => {
    try {
      const reserva = await Reserva.update(data, {
        where: { id: id },
      });
      return reserva;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  deleteReserva = async (id) => {
    try {
      const reserva = await Reserva.destroy({
        where: { id: id },
      });
      return reserva;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  getReserva = async (id) => {
    try {
      const reserva = await Reserva.findByPk(id);
      return reserva.toJSON();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  getReservas = async () => {
    try {
      const reservas = await Reserva.findAll();
      return reservas.map((reserva) => reserva.toJSON());
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
 
Reserva.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  id_venta: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  id_boleto: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  id_usuario: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  cantidad_reserva : {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
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
  }
},{
  sequelize,
  modelName: 'reserva',
  tableName: 'reservas',
  createdAt: 'fecha_creacion',
  updatedAt: 'ultima_actualizacion',
})

Reserva.belongsTo(Usuario, {
  foreignKey: 'id_usuario',
  targetKey: 'id',
  as: 'usuario',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE',
})

Reserva.belongsTo(Boleto, {
  foreignKey: 'id_boleto',
  targetKey: 'id',
  as: 'boleto',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE',
})

Reserva.belongsTo(Venta, {
  foreignKey: 'id_venta',
  targetKey: 'id',
  as: 'venta',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE',
})


module.exports = new Reserva();