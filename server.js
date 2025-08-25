// Importar pacotes/bibliotecas
import express from "express";
import dados from "./src/data/dados.js";

const { bruxos, casas, varinhas, animais, pocoes } = dados;

// Criar aplicação com Express e configurar para aceitar JSON
const app = express();
app.use(express.json());

// Definir constante para porta do servidor
const serverPort = 3000;

// Rota principal GET para "/"
app.get("/", (req, res) => {
    res.send("Vamos de Harry Potter");
});

app.get("/bruxos", (req, res) => {
  if (bruxos.length > 0) {
      res.status(200).json(bruxos);
  } else {
      res.status(404).json({
          mensagem: "Bruxos não encontrados :("
      })
  }
});

app.get("/bruxos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const bruxo = bruxos.find(p => p.id === id);

  if (bruxo) {
      res.status(200).json(bruxo);
  } else {
      res.status(404).json({
          mensagem: "Esse bruxo não existe"
      })
  }
});

app.get("/casas", (req, res) => {
  if (casas.length > 0) {
      res.status(200).json(casas);
  } else {
      res.status(404).json({
          mensagem: "Casas não encontradas :("
      })
  }
});

app.get("/casas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const casa = casas.find(p => p.id === id);

  if (casa) {
      res.status(200).json(casa);
  } else {
      res.status(404).json({
          mensagem: "Esse bruxo não existe"
      })
  }
});

app.get("/varinhas", (req, res) => {
  if (varinhas.length > 0) {
      res.status(200).json(varinhas);
  } else {
      res.status(404).json({
          mensagem: "Varinhas não encontradas :("
      })
  }
});

app.get("/varinhas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const varinha = varinhas.find(p => p.id === id);

  if (varinha) {
      res.status(200).json(varinha);
  } else {
      res.status(404).json({
          mensagem: "Essa varinha não existe"
      })
  }
});

app.get("/animais", (req, res) => {
  if (animais.length > 0) {
      res.status(200).json(animais);
  } else {
      res.status(404).json({
          mensagem: "Animais não encontrados :("
      })
  }
});

app.get("/animais/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const animal = animais.find(p => p.id === id);

  if (animal) {
      res.status(200).json(animal);
  } else {
      res.status(404).json({
          mensagem: "Esse animal não existe"
      })
  }
});

app.get("/pocoes", (req, res) => {
  if (pocoes.length > 0) {
      res.status(200).json(pocoes);
  } else {
      res.status(404).json({
          mensagem: "Poções não encontradas :("
      })
  }
});

app.get("/pocoes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pocao = pocoes.find(p => p.id === id);

  if (pocao) {
      res.status(200).json(pocao);
  } else {
      res.status(404).json({
          mensagem: "Essa poção não existe"
      })
  }
});

// Iniciar servidor escutando na porta definida
app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort} !!!`);
});