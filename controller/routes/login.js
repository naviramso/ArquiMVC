const { Router } = require("express");
const router = Router();
const usuarioControlador = require("../usuario");

// Get Login
router.get("/login" , (req, res) => {
    res.render('login/login', {
        usuario: false
    });
});
router.get("/register" , (req, res) => {
    res.render('login/register', {
        usuario: false
    });
});
router.get("/signout", (req, res) => {
    req.session.destroy();
    res.render('index', {
        usuario: false
    });
});

//Post rutas
router.post("/register" , usuarioControlador.createUser);
router.post("/login" , usuarioControlador.getUser);


module.exports = router;