const express = require("express");
const PORT = process.env.PORT || 8000;
const path = require("path");
const app = express();
const data = require("./data");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const nav = "home";
  res.render("index", { navBar: nav });
});
app.get("/about", (req, res) => {
  const nav = "about";
  res.render("About", { navBar: nav });
});
app.get("/ingredients", (req, res) => {
  const nav = "ingredients";
  const { Oils, Scrubs } = data;
  res.render("ingredients", { navBar: nav, Oils, Scrubs });
});
app.get("/ingredients/:productType/:id", (req, res) => {
  var  {id, productType} = req.params;
  id  = id -1;
  const nav = "ingredients";
  var Product = data.Scrubs;
  if(productType == "oils"){
    Product = data.Oils;
  }
  res.render("seprateProducts", { navBar: nav, id ,  Product , productType});
});
app.get("/sustainability", (req, res) => {
  const nav = "sustainability";
  res.render("sustainability", { navBar: nav });
});

app.get("/contact", (req, res) => {
  const nav = "contact";
  res.render("contact", { navBar: nav });
});

app.get("*", (req, res)=>{
  res.redirect("/")
})


app.listen(PORT, () => {
  console.log(`Trishveda started on Port ${PORT}`);
});
