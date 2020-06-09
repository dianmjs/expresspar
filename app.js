const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "views");

//operación
const array = [];
for (let i = 1; i <= 50; i++) {
  array.push(`${i} Soy ${i % 2 == 0 ? "Par" : "Impar"}!`);
}

app.get("/", (req, res) => {
  res.render("index", { numbers: array });
});

app.listen(3000, () => console.log("Listening on port 3000!"));
