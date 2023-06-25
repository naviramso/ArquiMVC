const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class Usuario extends Model {
  static init() {
    return sequelize.define(
      "Usuario",
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        fecha_nacimiento: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        ruta_imagen: {
          type: DataTypes.STRING(100),
        },
        tipo_usuario: {
          type: DataTypes.ENUM("administrador", "usuario"),
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
        tableName: "usuarios",
        timestamps: false,
      }
    );
  }

  // Operaciones CRUD
  static async crearUsuario(
    nombre,
    email,
    password,
    fechaNacimiento,
    rutaImagen,
    tipoUsuario
  ) {
    try {
      const usuario = await Usuario.create({
        nombre,
        email,
        password,
        fecha_nacimiento: fechaNacimiento,
        ruta_imagen: rutaImagen,
        tipo_usuario: tipoUsuario,
      });
      console.log("Usuario creado:", usuario.toJSON());
      return usuario;
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      throw error;
    }
  }

  static async getUsuario(id) {
    try {
      const usuario = await Usuario.findByPk(id);
      if (usuario) {
        console.log("Usuario encontrado:", usuario.toJSON());
        return usuario;
      } else {
        console.log("No se encontró ningún usuario con el ID:", id);
        return null;
      }
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
      throw error;
    }
  }

  static async getUsuarios() {
    try {
      const usuarios = await Usuario.findAll();
      return usuarios;
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
      throw error;
    }
  }

  static async actualizarUsuario(id, nuevosDatos) {
    try {
      const usuario = await Usuario.findByPk(id);
      if (usuario) {
        await usuario.update(nuevosDatos);
        console.log("Usuario actualizado:", usuario.toJSON());
        return usuario;
      } else {
        console.log("No se encontró ningún usuario con el ID:", id);
        return null;
      }
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      throw error;
    }
  }

  static async eliminarUsuario(id) {
    try {
      const usuario = await Usuario.findByPk(id);
      if (usuario) {
        await usuario.destroy();
        console.log("Usuario eliminado:", usuario.toJSON());
        return usuario;
      } else {
        console.log("No se encontró ningún usuario con el ID:", id);
        return null;
      }
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
      throw error;
    }
  }
}

Usuario.init();

module.exports = Usuario;
