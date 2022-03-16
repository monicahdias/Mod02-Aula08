const express = require("express");
const path = require("path");
const app = express();

const port = 3000;
let message = '';

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    const devList = ["Backend", "Frontend", "Fullstack", "DEvSEC"];
    setTimeout(() => {
        message = "";
      }, 3000);
  res.render("index", { titulo: "TESTE aula", nome: "thiago", devList: devList, message });
});

app.post("/", function (req, res) {
    res.send("Hello World via post");
});

app.get("/pagina", function (req, res) {
    res.send("pagina 2");
});

app.post("/subscription", (req, res) => {
    const { nome, email } = req.body;
    if(nome=="leo"){
        message = `Usuário ${nome} já cadastrado!`
    }else{
        message = `Parabéns ${nome}, sua inscrição foi realizada com sucesso! Um e-mail foi enviado para: ${email}`;}
    res.redirect("/");
  });


app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));