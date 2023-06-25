const { Router } = require("express");
const router = Router();

//routes
router.get("/", (req, res) => {
  res.render("index");
});

router.post("/datosEvento",(req,res)=>{
  const formData = req.body;
  res.json(formData);
})

router.get("/artista",(req, res) => {
    
})
module.exports = router;