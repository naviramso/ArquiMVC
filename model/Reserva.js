const { DataTypes, Model } = require("sequelize");
const sequelize = require("./config/database");

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
  };

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
  };

  getReserva = async (id) => {
    try {
      const reserva = await Reserva.findByPk(id);
      return reserva.toJSON();
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  getReservas = async () => {
    try {
      const reservas = await Reserva.findAll();
      return reservas.map((reserva) => reserva.toJSON());
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  getReservasByUser = async function (idUsuario) {
    try {
      const reservas = await this.sequelize.query(
        'SELECT e.nombre_evento, e.ruta_imagen, e.descripcion, r.cant_reserva, e.fecha_evento, e.hora_evento, r.fecha_creacion, b.precio ' +
        'FROM eventos e, boletos b, reservas r, usuarios u ' +
        'WHERE r.id_usuario = u.id ' +
        'AND r.id_boleto = b.id ' +
        'AND b.id_evento = e.id ' +
        'AND id_usuario = :idUsuario',
        {
          replacements: { idUsuario },
          type: this.sequelize.QueryTypes.SELECT
        }
      );
  
      const r = reservas;
      console.log(r)
      return r;
    } catch (error) {
      throw error;
    }
  }
}

Reserva.init(
  {
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
    cant_reserva: {
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
    },
  },
  {
    sequelize,
    modelName: "reserva",
    tableName: "reservas",
    createdAt: "fecha_creacion",
    updatedAt: "ultima_actualizacion",
  }
);

module.exports = new Reserva();
