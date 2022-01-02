//nodejs core modulu olana path ile dosya yolunu kullanmamizi sagliyor(path.join)
const path = require("path");
const express = require("express");

const app = express();
// console.log(path.join(__dirname, "../public"));

const publicDirectoryPath = path.join(__dirname, "../public");
app.set("view engine", "hbs");

//So there's a views configuration for express. The default value for that is ./views (docs). So if you run the node app from inside the src/ folder, it's looking for src/views/ folder. If you run the Node app from the root of the project, it's looking for views/ which does exist.
app.set('views', path.join(__dirname, '../views'))

//bir statik dosyayi app.use(express.static....) ifadesiyle cagirabiliriz
// static olarak html sayfalarimizi cagirdigimizda artik app.get methodu ile(routerlari) cagirmamiza gerek kalmiyor.
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Azat Seyrek"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "This is Help Page",

  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "This is About Page"
  });
});
app.get("/weather", (req, res) => {
  res.send("Weather Page!");
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
