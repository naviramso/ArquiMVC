const {Router} = require('express');
const router = Router()
const evento = require('../evento')

router.get('/', (req, res)=>{
    res.render('index', {usuario : req.session.usuario})
})

router.get('/eventos', evento.getEventos)

module.exports = router;