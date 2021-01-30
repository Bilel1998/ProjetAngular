// import mongoose module
const mongoose = require('mongoose');

const sessionSchema = mongoose.Schema(
    {
        nom:String,
        track:String,
        date:Date,
        nbrJ:Number,
        localisation:String,
        nbrParticipants:Number
    }
);
const session = mongoose.model('Session', sessionSchema );
module.exports = session;