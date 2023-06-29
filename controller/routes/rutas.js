const { Router } = require("express");
const router = Router();

const eventCont = require("../evento");
const userCont = require("../usuario");

//routes
router.get("/", (req, res) => {
  res.render('login2');
});
router.get('/register',(req,res)=>{
  res.render('register');
})

router.post('/register', userCont.createUser)

router.post('/login', userCont.getUser)

router.get('/boletos',(req,res)=>{
  res.render('reservarBoletos')
})

router.get("/index", (req, res) => {
  res.render('index',{title:'mi pagina con ejs'})
});
router.get('/evento',(req,res)=>{
  res.render('evento',{title:'Crear Evento'})
})

router.get("/perfil", (req, res) => {
  res.render("perfil");
})

router.post('/create_evento' , eventCont.createEvento)


// router.get("/evento",(req, res) => {
//     res.send("");
// })
// router.post("/datosEvento",(req,res)=>{
//   const formData = req.body;
//   // res.json(formData);
//   evento(formData.nombreEvento, formData.descripcion, formData.fechaInicio, '8:00', formData.fechaFin, formData.ubicacion)
// })

router.get("/artista", (req, res) => {});

module.exports = router;
