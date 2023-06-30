const { DataTypes, Model } = require("sequelize");
const sequelize = require("./config/database");
 


class Boleto extends Model {
  createBoleto = async (data) => {
    try {
      const boleto = await Boleto.create(data);
      return boleto.toJSON();
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  updateBoleto = async (id, data) => {
    try {
      const boleto = await Boleto.update(data, {
        where: { id: id },
      });
      return boleto;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  deleteBoleto = async (id) => {
    try {
      const boleto = await Boleto.destroy({
        where: { id: id },
      });
      return boleto;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  getBoleto = (id_evento) => {
    return Boleto.findOne({
      where: { id_evento: id_evento },
    }).then((boleto) => {
      return boleto ? boleto.toJSON() : null;
    }).catch((err) => {
      console.log(err);
      throw err;
    })
  }

  getBoletos = async () => {
    try {
      const boletos = await Boleto.findAll();
      return boletos.map((boleto) => boleto.toJSON());
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  getBoletoById = (id) => {
    return Boleto.findByPk(id)
      .then((boleto) => {
        return boleto ? boleto.toJSON() : null;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };
}

Boleto.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_evento: {
      type: DataTypes.INTEGER,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
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
    modelName: "Boleto",
    tableName: "boletos",
    createdAt: "fecha_creacion",
    updatedAt: "ultima_actualizacion",
  }
);


module.exports =new Boleto ();
