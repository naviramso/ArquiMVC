const evento = require("../model/evento");

const eventoController = {
        getEventos: () => {
            return evento.getEventos();
        },
        getEvento: (id) => {
            return evento.getEvento(id);
        },
        createEvento: (nombre, descripcion, fecha_evento, hora_evento, fecha_cierre, ubicacion, ruta_imagen) => {
            return evento.crearEvento(nombre, descripcion, fecha_evento, hora_evento, fecha_cierre, ubicacion, ruta_imagen);
        },
        updateEvento: (id, nuevos_datos) => {
            return evento.updateEvento(id, nuevos_datos);
        },
        deleteEvento: (id) => {
            return evento.deleteEvento(id);
        }
}

module.exports = eventoController;