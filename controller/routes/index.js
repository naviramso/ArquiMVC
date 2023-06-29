const {Router} = require('express');
const router = Router()
const evento = require('../evento')

router.get('/', (req, res) => {
    const eventos = evento.getEventos()
    res.render('index', {
        usuario : req.session.usuario,
        eventos : eventos,
        titulo: 'La bole',
    })
})

module.exports = router;