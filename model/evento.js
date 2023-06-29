const { DataTypes, Model } = require("sequelize");
const sequelize = require("./config/database");

class Evento extends Model {
  createEvent = async (data) => {
    try {
      await Evento.create(data);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  updateEvent = async (id, data) => {
    try {
      const evento = await Evento.update(data, {
        where: { id: id },
      });
      return evento;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  deleteEvent = async (id) => {
    try {
      const evento = await Evento.destroy({
        where: { id: id },
      });
      return evento;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  getEvent = async (id) => {
    try {
      const evento = await Evento.findByPk(id);
      return evento.toJSON();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  getEventos = async () => {
    try {
      const eventos = await Evento.findAll();
      return eventos.map((evento) => evento.toJSON());
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

Evento.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_evento: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fecha_evento: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
    },
    hora_evento: {
      type: DataTypes.TIME
    },
    fecha_cierre: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
    },
    ubicacion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    ruta_imagen: {
      type: DataTypes.STRING(100),
    },
    fecha_creacion : {
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
  },
  {
    sequelize,
    modelName: "Evento",
    tableName: "eventos",
    createdAt: 'fecha_creacion',
    updatedAt: 'ultima_actualizacion',
  }
);
const event = new Evento();
module.exports = {event, Evento};

