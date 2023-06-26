const { Router } = require("express");
const router = Router();

const evento = require("./model/evento")

//routes
router.get("/", (req, res) => {
  res.render('login');
});
router.get('/register',(req,res)=>{
  res.render('register');
})
router.post('/',(req,res)=>{
  res.render('login')
})

router.get("/index", (req, res) => {
  res.render('index',{title:'mi pagina con ejs'})
});
router.get('/views/evento.ejs',(req,res)=>{
  res.render('evento',{title:'Crear Evento'})
})


// router.get("/evento",(req, res) => {
//     res.send("");
// })
// router.post("/datosEvento",(req,res)=>{
//   const formData = req.body;
//   // res.json(formData);
//   evento(formData.nombreEvento, formData.descripcion, formData.fechaInicio, '8:00', formData.fechaFin, formData.ubicacion)
// })

module.exports = router;