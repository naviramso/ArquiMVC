const { Router } = require("express");
const router = Router();
const eventoController = require("./controller/eventoController");
//routes
router.get("/", (req, res) => {
  res.render("index");
});

router.post("/datosEvento", eventoController.createEvento);

router.get("/artista", (req, res) => {});
module.exports = router;
