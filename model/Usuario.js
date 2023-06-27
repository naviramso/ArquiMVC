const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class Usuario extends Model {
  getUsuario = (id) => {
    try{
      const usuario = Usuario.findByPk(id);
      return usuario.toJSON();
    }catch{
      console.log(err);
      throw err;
    }
  }

  getUsuarios = () => {
    try{
      const usuarios = Usuario.findAll();
      return usuarios.map((usuario) => usuario.toJSON());
    }catch{
      console.log(err);
      throw err;
    }
  }

  createUsuario = (data) => {
    try{
      const usuario = Usuario.create(data);
      return usuario.toJSON();
    }catch{
      console.log(err);
      throw err;
    }
  }

  updateUsuario = (id, nuevos_datos) => {
    try{
      const usuario = Usuario.update(nuevos_datos, {
        where: { id: id },
      });
      return usuario;
    }catch{
      console.log(err);
      throw err;
    }
  }

  deleteUsuario = (id) => {
    try{
      const usuario = Usuario.destroy({
        where: { id: id },
      });
      return usuario;
    }catch{
      console.log(err);
      throw err;
    }
  }
}

Usuario.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contrasenia: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  ruta_imagen: {
    type: DataTypes.STRING,
  },
  tipo_usuario: {
    type: DataTypes.ENUM('administrador', 'cliente'),
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
    onUpdate: DataTypes.NOW
  }
},{
  sequelize,
  modelName: "Usuario",
  tableName: "usuarios",
  createdAt: 'fecha_creacion',
  updatedAt: 'ultima_actualizacion',
})
  
module.exports = new Usuario();
