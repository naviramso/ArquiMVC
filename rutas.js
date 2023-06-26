const { Router } = require("express");
const router = Router();
const eventoController = require("./controller/eventoController");
//routes
router.get("/", (req, res) => {
  res.render("index");
});

router.post("/datosEvento", (req, res) => {
  const formData = req.body;
  console.log(formData)
  eventoController.createEvento(
    formData.nombreEvento,
    formData.descripcion,
    formData.fechaInicio,
    "8:00:00",
    formData.fechaFin,
    formData.ubicacion,
    "formData.ruta_imagen"
  ).then(() => {
    res.json(formData);
  }).cacth((err) => {
    console.log(err);
  })
});

router.get("/artista", (req, res) => {});
module.exports = router;
