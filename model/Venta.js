const { DataTypes, Model } = require('sequelize');
const sequelize = require('./config/database');

class Venta extends Model {
  getVenta = (id) => {
    try{
      const venta = Venta.findByPk(id);
      return venta.toJSON();
    }catch{
      console.log(err);
      throw err;
    }
  }

  getVentas = () => {
    try{
      const ventas = Venta.findAll();
      return ventas.map((venta) => venta.toJSON());
    }catch{
      console.log(err);
      throw err;
    }
  }

  createVenta = (data) => {
    try{
      const venta = Venta.create(data);
      return venta.toJSON();
    }catch{
      console.log(err);
      throw err;
    }
  }

  updateVenta = (id, nuevos_datos) => {
    try{
      const venta = Venta.update(nuevos_datos, {
        where: { id: id },
      });
      return venta;
    }catch{
      console.log(err);
      throw err;
    }
  }

  deleteVenta = (id) => {
    try{
      const venta = Venta.destroy({
        where: { id: id },
      });
      return venta;
    }catch{
      console.log(err);
      throw err;
    }
  }
}

Venta.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_usuario: {
    type: DataTypes.INTEGER,
  },
  fecha_venta : {
    type: DataTypes.TIME,
    allowNull: false,
  },
  total_venta: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
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
  modelName: 'Venta',
  tableName: 'ventas',
  createdAt: 'fecha_creacion',
  updatedAt: 'ultima_actualizacion',
})

Venta.belongsTo(Usuario,{
  foreignKey: 'id_usuario',
  keyType:'id',
  as: 'usuario',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE',
})

module.exports = new Venta();
