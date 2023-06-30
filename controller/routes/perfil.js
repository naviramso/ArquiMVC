const {Router} = require('express');
const router = Router();
const usuario = require('../usuario');


router.get('/perfil', (req, res) => {
    res.render('perfil', {usuario: req.session.usuario});
})
router.get('/perfil2', usuario.perfil)

module.exports = router;