const {Router} = require('express');
const router = Router();
const usuarioControlador = require('../usuario');

router.get('/product', (req, res) => {
    res.render('product', {
        usuario: req.session.usuario,
    });
})

module.exports = router