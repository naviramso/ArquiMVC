const db = require("./db");
class Artista{
    constructor(nombre, email, password){
        this.nombre = nombre;
    }
}

const getArtista = async()=>{
    return await db.query("SELECT * FROM artista");
}

const createArtista = async(nombre)=>{
    return await db.query("INSERT INTO artista (nombre) VALUES (?)", [nombre]);
}

const deleteArtista = async(id)=>{
    return await db.query("DELETE FROM artista WHERE id = ?", [id]);
}

const updateArtista = async(id, nombre)=>{
    return await db.query("UPDATE artista SET nombre = ? WHERE id = ?", [nombre, id]);
}

module.exports = Artista;