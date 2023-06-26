const evento = require("../model/Evento");

const eventoController = {
  getEventos: () => {
    return evento.getEventos();
  },
  getEvento: (id) => {
    return evento.getEvento(id);
  },
  createEvento: (req, res) => {
    const formData = req.body;
    console.log(formData)
    const data = {
      nombre_evento : formData.nombreEvento,
      descripcion : formData.descripcion,
      fecha_evento : formData.fechaInicio,
      hora_evento : formData.hora_evento,
      fecha_cierre : formData.fechaFin,
      ubicacion : formData.ubicacion,
      ruta_imagen  : formData.ruta_imagen,
    };
    evento.createEvent(data);
    res.send(data);
  },
  updateEvento: (id, nuevos_datos) => {
    return evento.updateEvento(id, nuevos_datos);
  },
  deleteEvento: (id) => {
    return evento.deleteEvento(id);
  },
};

module.exports = eventoController;
