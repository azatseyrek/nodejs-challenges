//nodejs core modulu olana path ile dosya yolunu kullanmamizi sagliyor(path.join)
const path = require("path");
const express = require("express");
const app = express();

// console.log(path.join(__dirname, "../public"));

const publicDirectoryPath = path.join(__dirname, "../public");

//bir statik dosyayi app.use(express.static....) ifadesiyle cagirabiliriz
// static olarak html sayfalarimizi cagirdigimizda artik app.get methodu ile(routerlari) cagirmamiza gerek kalmiyor.
app.use(express.static(publicDirectoryPath));

// app.get("/", (req, res) => {
//   res.send("Hello Home PAge");
// });
// app.get("/help", (req, res) => {
//   res.send("Help Page!");
// });
// app.get("/about", (req, res) => {
//   res.send("About Page!");
// });
app.get("/weather", (req, res) => {
  res.send("Weather Page!");
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
