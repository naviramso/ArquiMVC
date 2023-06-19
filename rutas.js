const { Router } = require("express");
const router = Router();
//const db = require("./baseDeDatos");

//routes
router.get("/", (req, res) => {
  res.send("index");
});

// router.get("/evento",(req, res) => {
//     res.send("");
// })
router.post("/datosEvento",(req,res)=>{
  const formData = req.body;
  res.json(formData);
})

module.exports = router;