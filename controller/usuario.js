const user = require("../model/Usuario");

const userController = {
  getUsers: () => {
    return user.getUsers();
  },
  getUser: (req, res) => {
    const nombre = req.body.nombre;
    const pass = req.body.password;
    user
      .getUsuario(nombre, pass)
      .then((usuario) => {
        if (usuario) {
          req.session.usuario = usuario;
          if (user.tipo_usuario === "administrador") {
            res.render("registro");
          } else {
            res.render("index", {
              usuario: usuario,
            });
          }
        } else {
          res.render("login/login", {
            usuario: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  },
  createUser: (req, res) => {
    const data = {
      nombre: req.body.nombre,
      correo: req.body.correo,
      contrasenia: req.body.contrasenia,
      fecha_nacimiento: req.body.fecha,
      ruta_imgen: "ruta",
    };
    user
      .createUsuario(data)
      .then((usuario) => {
        req.session.usuario = usuario.dataValues;
        res.render("index", {
          usuario: usuario,
        });
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  },
  updateUser: (id, name, email, password) => {
    return user.updateUser(id, name, email, password);
  },
  deleteUser: (id) => {
    return user.deleteUser(id);
  },
};

module.exports = userController;
