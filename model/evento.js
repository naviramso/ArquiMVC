const db = require("./db")

class Evento{
    constructor(nombre, descripcion, img, fecha, hora, lugar, fecha_cierre){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
        this.fecha = fecha;
        this.hora = hora;
        this.lugar = lugar;
        this.fecha_cierre = fecha_cierre;
    }

    getEvento(id){
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM evento WHERE id = ?", [id]).then((data) => {
                resolve(data[0]);
            }).catch((err) => {
                reject(err);
            });
        }) 
    }
    
    getEventos(){
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM evento").then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        })
    }

    createEvento(nombre, descripcion, fecha, hora, lugar, fecha_cierre){
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO evento (nombre, descripcion, fecha, hora, ubicacion, fecha_cierre) VALUES (?, ?, ?, ?, ?, ?)", [nombre, descripcion, fecha, hora, lugar, fecha_cierre]).then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            });
        })
    }

    updateEvento(id, nombre, descripcion, fecha, hora, lugar, fecha_cierre){
        return new Promise((resolve, reject) => {
            db.query("UPDATE evento SET nombre = ?, descripcion = ?, fecha = ?, hora = ?, ubicacion = ?, fecha_cierre = ? WHERE id = ?", [nombre, descripcion, fecha, hora, lugar, fecha_cierre, id]).then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            })
        })
    }

    deleteEvento(id){
        return new Promise((resolve, reject) => {
            db.query("DELETE FROM evento WHERE id = ?", [id]).then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err);
            })
        })
    }
}

module.exports = Evento