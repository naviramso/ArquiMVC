class artistaRepository {
  constructor(Artista ) {
    this.Artista = Artista;
  }

  getArtista(id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM artista WHERE id = ?", [id]).then((data) => {
        const Artista = new Artista(data[0].id, data[0].nombre, data[0].img);
        resolve(Artista);
        Artistave(data[0]);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  getArtistas() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM artista").then((data) => {
        const Artistas = [];
        data.map((d) => {
          const Artista = new Artista(d.id, d.nombre, d.img);
          Artistas.push(Artista);
        })
        resolve(Artistas);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  createArtista(nombre, img) {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO artista (nombre, img) VALUES (?, ?)", [nombre, img]).then((data) => {
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  updateArtista(id, nombre, img) {
    return new Promise((resolve, reject) => {
      db.query("UPDATE artista SET nombre = ?, img = ? WHERE id = ?", [nombre, img, id]).then((data) => {
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  deleteArtista(id) {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM artista WHERE id = ?", [id]).then((data) => {
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    });
  }
}

module.exports = artistaRepository
