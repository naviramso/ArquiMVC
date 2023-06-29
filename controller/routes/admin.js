const { Router } = require("express");
const router = Router();

router.get("/admin", (req, res) => {
  const usuario = req.session.usuario;
  if (usuario) {
    usuario.tipo_usuario === "administrador"
      ? res.render("registro", {
          usuario: req.session.usuario,
        })
      : res.redirect("/");
  }else{
    res.redirect('/')
  }
});

module.exports = router;
