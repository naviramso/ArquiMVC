const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Evento extends Model {
  static init() {
    return sequelize.define(
      "Evento",
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
          type: DataTypes.TEXT,
        },
        fecha_evento: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        hora_evento: {
          type: DataTypes.TIME,
          allowNull: false,
        },
        fecha_cierre: {
          type: DataTypes.DATEONLY,
        },
        ubicacion: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        ruta_imagen: {
          type: DataTypes.STRING(100),
        },
        ultima_actualizacion: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
          onUpdate: DataTypes.NOW,
        },
      },
      {
        tableName: "eventos",
        timestamps: false,
      }
    );
  }

  static async crearEvento(
    nombre,
    descripcion,
    fecha_evento,
    hora_evento,
    fecha_cierre,
    ubicacion,
    ruta_imagen
  ) {
    try {
      const Evento = await Evento.create({
        nombre_evento: nombre,
        descripcion: descripcion,
        fecha_evento: fecha_evento,
        hora_evento: hora_evento,
        fecha_cierre: fecha_cierre,
        ubicacion: ubicacion,
        ruta_imagen: ruta_imagen,
      });
      console.log("Evento creado: " + Evento.toJSON());
      return Evento;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async getEventos() {
    try {
      const Eventos = await Evento.findAll();
      return Eventos;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async getEvento(id) {
    try {
      const Evento = await Evento.findByPk(id);
      return Evento;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async updateEvento(id, nuevos_datos) {
    try {
      const Evento = await Evento.update(nuevos_datos, {
        where: { id: id },
      });
      return Evento;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async deleteEvento(id) {
    try {
      const Evento = await Evento.destroy({
        where: { id: id },
      });
      return Evento;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

Evento.init();
module.exports = Evento;
