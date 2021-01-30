// import mongoose module
const mongoose = require('mongoose');

const formateurSchema = mongoose.Schema(
    {
        nom:String,
        prenom:String,
        adresse:String,
        email:String,
        domaine:String
    }
);
const formateur = mongoose.model('Formateur', formateurSchema );
module.exports = formateur;