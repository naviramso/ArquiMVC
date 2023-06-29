const {Router} = require('express');
const router = Router();
const usuarioControlador = require('../usuario');

router.get('/perfil', (req, res) => {
    res.render('perfil', {
        usuario: req.session.usuario,
    });
})

module.exports = router;