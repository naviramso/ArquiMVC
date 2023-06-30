const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const multer = require("multer");

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("public", path.join(__dirname, "public"));
app.use(express.static("public"));
app.use(session({secret: "secret", resave: true, saveUninitialized: true }));


//rutas
app.use(require("./controller/routes"))
app.use(require("./controller/routes/login"));
app.use(require("./controller/routes/perfil"));
app.use(require("./controller/routes/evento"));
app.use(require("./controller/routes/admin"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
