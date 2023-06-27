const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');


const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// app.set('views',__dirname, '/views');
app.use(express.static("public"));

//rutas

app.use(require("./rutas"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
