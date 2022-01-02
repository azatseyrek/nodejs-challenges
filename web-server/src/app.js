//nodejs core modulu olana path ile dosya yolunu kullanmamizi sagliyor(path.join)
const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
// console.log(path.join(__dirname, "../public"));

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
app.set("view engine", "hbs");
//bir statik dosyayi app.use(express.static....) ifadesiyle cagirabiliriz
// static olarak html sayfalarimizi cagirdigimizda artik app.get methodu ile(routerlari) cagirmamiza gerek kalmiyor.
app.use(express.static(publicDirectoryPath));



//So there's a views configuration for express. The default value for that is ./views (docs). So if you run the node app from inside the src/ folder, it's looking for src/views/ folder. If you run the Node app from the root of the project, it's looking for views/ which does exist.
// app.set("views", path.join(__dirname, "../views"));
//hbs default olarak views kullaniyor. bunu degistirmek icin ornegin biz views  degilde template yapmak istiyoruz dosyomizin ismini. O zman soyle bir yol izliyoruz
const viewPath = path.join(__dirname, '../templates/views')
app.set('views', viewPath)

//partials path olusturalim
const partialsPath = path.join(__dirname, "../templates/partials")
hbs.registerPartials(partialsPath)


app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Azat Seyrek",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "This is Help Page",
    name: "Miran Ali Seyrek"
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "This is About Page",
    name: "Burcu Seyrek"
  });
});
app.get("/weather", (req, res) => {
  res.send("Weather Page!");
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


//onemli not
//nodemon hbs degistiginde tekrar calismiyor. Bunu ayarlamak icin terminale extension yukleyebiliriz.
// nodemon app.js -e js,hbs  