const user = require("../model/Usuario");

const userController = {
    getUsers: () => {
        return user.getUsers();
    },
    getUser: (req, res) => {
        const nombre = req.params.nombre;
        const pass = req.params.pass;
        const usuario = user.getUsuario(nombre, pass);
        if(usuario.length > 0){
            res.send(usuario)
        }else{
            res.send("Usuario no encontrado")
        }
    },
    createUser: (req, res) => {
        const data = {
            nombre: req.body.nombre,
            correo: req.body.correo,
            contrasenia: req.body.contrasenia,
            fecha_nacimiento: req.body.fecha,
            ruta_imgen: "ruta",

        }
        user.createUsuario(data);
        res.send(data);
    },
    updateUser: (id, name, email, password) => {
        return user.updateUser(id, name, email, password);
    },
    deleteUser: (id) => {
        return user.deleteUser(id);
    }
}


module.exports = userController