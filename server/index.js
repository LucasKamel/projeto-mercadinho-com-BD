const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123123",
  database: "mercadinho",
  port: "3307",
});

//POSTAR NO BANCO DE DADOS
app.post("/item", (req, res) => {
  const { nome, imagemBD, preco, medida, key_item } = req.body;
  let SQL =
    "INSERT INTO itenscarrinho (nome, imagem, preco, medida, key_item) VALUES (?, ?, ?, ?, ?)";

  db.query(SQL, [nome, imagemBD, preco, medida, key_item], (err, result) => {
    console.log(err);
  });
});

//PEGAR DO BANCO DE DADOS
app.get("/item", (req, res) => {
  let SQL = "SELECT * FROM itenscarrinho";

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

//DELETAR DO BANCO DE DADOS

app.delete("/item/:id", (req, res) => {
  const { id } = req.params;
  console.log("Informação: ", id);

  let SQL = "DELETE FROM itenscarrinho WHERE (`id` = ?)";

  db.query(SQL, id, (err, result) => {
    console.log(err);
  });
});

app.listen(3001, () => {
  console.log("rodando servidor");
});
