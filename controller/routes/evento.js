const {Router} = require('express');
const router = Router();
const evento = require('../evento')
const reserva = require('../reserva')

router.get('/evento/:nombre/:id', evento.getEvento);
router.post('/reserva', reserva.createReserva);

module.exports = router