const boleto = require("../model/Boleto");
const reserva = require("../model/Reserva");

const Reserva = {
  createReserva: (req, res) => {
    const data = {
      id_boleto: req.body.id_boleto,
      id_usuario: req.session.usuario ? req.session.usuario.id : '',
      cant_reserva: req.body.cantidad_reserva,
    };
    console.log(data);
    reserva
      .createReserva(data)
      .then((reserva) => {
        const cant = req.body.cantidad - data.cant_reserva;
        boleto.updateBoleto(data.id_boleto, {
            cantidad: cant,
          })
          .then((boleto) => {
            res.send(cant.toString());
          });
      })
      .catch((err) => {
        console.log(err);

        res.send("Error al reservar");
      });
  },
};

module.exports = Reserva;
