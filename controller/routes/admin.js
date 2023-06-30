const { Router } = require("express");
const router = Router();
const multer = require("multer");
const evento = require("../evento");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Nombre de archivo único
  }
});

const upload = multer({
  storage,
  dest: "public/img",
}).single("image");

router.get("/admin", (req, res) => {
  const usuario = req.session.usuario;
  console.log(usuario);
  if (usuario) {
    console.log(usuario.tipo_usuario);
    usuario.tipo_usuario === "administrador"
      ? res.render("registro", {
          usuario: req.session.usuario,
        })
      : res.redirect("/");
  } else {
    res.redirect("/");
  }
});

router.post("/crearEvento", upload, evento.createEvento);

module.exports = router;
