// Récuperation du module express
const express = require("express");
const app = express();

//Récuperation du module mongoose
const mongoose = require("mongoose");

// Récupération des chemin (GET, POST, PUT, DELETE) pour les sauces
const saucePath = require("./path/saucePath");
//Récuperation des chemins POST pour la connection et la création de comptes
const userPath = require('./path/userPath');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());



mongoose
  .connect("mongodb+srv://TraanUsers:magedeguerre2256@cluster0.yayhpt7.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static('images'))
app.use('/api/sauces', saucePath);
app.use('/api/auth', userPath);


module.exports = app;
