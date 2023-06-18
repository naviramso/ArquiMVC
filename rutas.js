const { Router } = require("express");
const router = Router();
//const db = require("./baseDeDatos");

//routes
router.get("/", (req, res) => {
  res.send("Arqui!!!");
});

router.get("/evento",(req, res) => {
    res.send("");
})

module.exports = router;