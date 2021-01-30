// import mongoose module
const mongoose = require('mongoose');

const participantSchema = mongoose.Schema(
    {
        nom:String,
        prenom:String,
        adresse:String,
        email:String,
        societe:String,
        poste:String
    }
);
const participant = mongoose.model('Participant', participantSchema );
module.exports = participant;