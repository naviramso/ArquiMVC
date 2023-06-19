const db = require("./db");
class Evento{
    constructor(name, email, password) {
        this.name = name;
        this.email = description;
        this.fecha = fecha;
        this.hora = hora;
        this.ubicacion = ubicacion;
        this.fecha_cierre = fecha_cierre;
        this.password = password;
    }
}

const getEventos = async () => {
    return await db.query("SELECT * from evento");
}

const createEvento = async (nombre, descripcion, fecha, hora, fecha_cierre,ubicacion) => {
    return await db.query("INSERT INTO evento (nombre_evento, descripcion, fecha_evento, hora_evento, fecha_cierre, ubicacion) VALUES (?, ?, ?, ?,?,?)", [nombre, descripcion, fecha, hora, fecha_cierre,ubicacion]);
}



module.exports =  createEvento;