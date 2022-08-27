// Importation du module Moongoose
const mongoose = require("mongoose");
//Importation du module "unique validator" pour ne crer qu'un seul compte avec une seule adress mail
const uniqueValidator = require("mongoose-unique-validator");

const mail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
const password = new RegExp(/^(?=.*[0-9])(?=.*[az])(?=.*[AZ])(?=.*[@#$%^&-+=() ])(?=\\S+$).{8, 15}$/g)

// Création du schéma user avec email et mot de passe
const userSchema = mongoose.Schema({
  email: { type: String.prototype.replace(mail)},
  password: { type: String.prototype.replace(password)}
});

// Appel à la fonction unique validator
userSchema.plugin(uniqueValidator);
//Exportation du schéma utilisateur
module.exports = mongoose.model("User", userSchema);
