const { Router } = require("express");
const router = Router();

const evento = require("./model/evento")

//routes
router.get("/", (req, res) => {
  res.send("index");
});

// router.get("/evento",(req, res) => {
//     res.send("");
// })
router.post("/datosEvento",(req,res)=>{
  const formData = req.body;
  // res.json(formData);
  evento(formData.nombreEvento, formData.descripcion, formData.fechaInicio, '8:00', formData.fechaFin, formData.ubicacion)
})

module.exports = router;