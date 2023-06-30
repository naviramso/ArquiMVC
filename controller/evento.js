const event  = require("../model/Evento");
const  boleto  = require("../model/Boleto");

const eventoController = {
  getEventos: (req, res) => {
    event.getEventos().then((eventos) => {
      res.send(eventos);
    });
  },
  getEvento: async (req, res) => {
    const id = req.params.id;
    boleto.getBoleto(id).then((bol) => {
      event.getEventos().then((eventos) => {
        eventos.forEach((evento) => {
          if (evento.id == id) {
            res.render("evento", {
              id_boleto: bol ? bol.id : '',
              usuario: req.session.usuario,
              titulo: req.params.nombre,
              descripcion: evento.descripcion,
              fecha: evento.fecha_evento,
              hora: evento.hora_evento,
              ubicacion: evento.ubicacion,
              imagen: evento.ruta_imagen,
              cantidad: bol? bol.cantidad : '',
              precio: bol? bol.precio : '',
            });
          }
        });
      });
    });
    
  },
  createEvento: (req, res) => {
    console.log(req.body.nombre_evento);
    try {
      const eventoData = {
        nombre_evento: req.body.nombre_evento,
        descripcion: req.body.descripcion,
        fecha_evento: req.body.fecha_evento,
        hora_evento: req.body.hora_evento,
        fecha_cierre: req.body.fecha_fin,
        ubicacion: req.body.ubicacion,
        ruta_imagen: req.body.ruta_imagen,
        nombre_artista: req.body.nombre_artista,
      };
      event.createEvento(eventoData).then((evento) => {
        event
          .getEventByNombre(eventoData.nombre_evento)
          .then((event) => {
            console.log(event.id + req.body.cantidad + req.body.precio);
            const boletoData = {
              id_evento: event.id,
              cantidad: req.body.cantidad,
              precio: req.body.precio,
            };
            boleto.createBoleto(boletoData);
            res.send("Evento creado correctamente");
          });
        
       
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  updateEvento: (id, nuevos_datos) => {
    return event.updateEvento(id, nuevos_datos);
  },
  deleteEvento: (id) => {
    return event.deleteEvento(id);
  },
};

module.exports = eventoController;
