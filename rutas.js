const { Router } = require("express");
const router = Router();

//routes
router.get("/", (req, res) => {
  res.send("index");
});

router.post("/datosEvento",(req,res)=>{
  const formData = req.body;
  res.json(formData);
})


module.exports = router;