const { Router } = require("express");
const router = Router();
//const db = require("./baseDeDatos");

//routes
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/evento",(req, res) => {
    res.send("");
})

module.exports = router;