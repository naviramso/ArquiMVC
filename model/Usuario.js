const { DataTypes, Model } = require("sequelize");
const sequelize = require("./config/database");

class Usuario extends Model {
  getUsuario = async (nombre, contrasenia) => {
    return await Usuario.findOne({
      where: {
        nombre: nombre,
        contrasenia: contrasenia,
      },
    })
      .then((usuario) => {
        console.log(usuario);
        return usuario;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  getUsuarios = async () => {
    await Usuario.findAll().then((usuarios) => {
      return usuarios.map((usuario) => usuario.toJSON());
    }).catch((err) => {
      console.log(err);
      throw err;
    });
  };

  createUsuario = (data) => {
   return Usuario.create(data).then((usuario) => {
     return usuario;
   }).catch((err) => {
     console.log(err);
     throw err;
   });
  };


  updateUsuario = async (id, nuevos_datos) => {
    try {
      const usuario = await Usuario.update(nuevos_datos, {
        where: { id: id },
      });
      return usuario;
    } catch {
      console.log(err);
      throw err;
    }
  };

  deleteUsuario = async (id) => {
    try {
      const usuario = await Usuario.destroy({
        where: { id: id },
      });
      return usuario;
    } catch {
      console.log(err);
      throw err;
    }
  };
}

Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contrasenia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_nacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ruta_imagen: {
      type: DataTypes.STRING,
    },
    tipo_usuario: {
      type: DataTypes.ENUM("administrador", "cliente"),
      defaultValue: "cliente",
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
    modelName: "Usuario",
    tableName: "usuarios",
    createdAt: "fecha_creacion",
    updatedAt: "ultima_actualizacion",
  }
);

const user = new Usuario();
module.exports = new Usuario();
