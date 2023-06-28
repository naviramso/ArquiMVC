const {event} = require("../model/Evento");

const eventoController = {
  getEventos: () => {
    return event.getEventos();
  },
  getEvento: (id) => {
    return event.getEvento(id);
  },
  createEvento: async (req, res) => {
    const formData = req.body;
    console.log(formData);
    const data = {
      nombre_evento: formData.nombreEvento,
      descripcion: "formData.descripcion", // Quitamos las comillas alrededor de formData.descripcion
      fecha_evento: formData.fechaInicio,
      hora_evento: formData.horaEvento,
      fecha_cierre: formData.fechaFin,
      ubicacion: formData.ubicacion,
      ruta_imagen: "ruta",
    };
    await event.createEvent(data); 
    res.send(data);
  },
  updateEvento: (id, nuevos_datos) => {
    return event.updateEvento(id, nuevos_datos);
  },
  deleteEvento: (id) => {
    return event.deleteEvento(id);
  },
};

module.exports = eventoController;
