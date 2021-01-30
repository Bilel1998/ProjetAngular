//import Express module
const express = require('express');
// create backend application
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path');
//define image folder destination
app.use('/images', express.static(path.join('backend/images')))
const Session = require('./models/session');
const Participant = require('./models/participant');
const Formateur = require('./models/formateur');

// import mongoose module
const mongoose = require('mongoose');



// connect application to DB named soccerDB
// if not exists , create DB , else connect automatically
mongoose.connect('mongodb://localhost:27017/tpAngular', { useNewUrlParser: true, useUnifiedTopology: true });

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
}
app.post('/addSession', (req, res) => {
  console.log("Here in adding", req.body);
  const session = new Session({
    nom: req.body.nom,
    track: req.body.track,
    date: req.body.date,
    localisation: req.body.localisation,
    nbrParticipants:req.body.nbrParticipants
  });
  
  session.save().then(
    result => {
      res.status(200).json({
        message: 'added successfully'
      })
    }
  );
});
app.get('/allSessions', (req, res) => {
  console.log('I am here for allSessions');

  Session.find((err, docs) => {
    if (err) {
      console.log('Error', err);
    }
    else {
      res.status(200).json({
        message: 'Here all objects',
        sessions: docs
      });
    }
  });
});

app.delete('/deletSession/:id', (req, res) => {
  console.log('here in delete', req.params.id);
  Session.deleteOne({ _id: req.params.id }).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'Deleted successfully'
        })
      }
    }
  )
});
app.put('/editSession', (req, res) => {
  console.log('here in edit ');
  const session = new Session({
    _id: req.body._id,
    nom: req.body.nom,
    track: req.body.track,
    date: req.body.date,
    nbrJ: req.body.nbrJ,
    localisation: req.body.localisation,
    nbrParticipants: req.body.nbrParticipants+1

  });
  // update takes 2 params :  1st for search object and 2nd object to replace it
  Session.updateOne({ _id: req.body._id }, session).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'Updated Successfully'
        })
      }
    }
  )
});
app.post('/addParticipant', (req, res) => {
  console.log("Here in adding", req.body);
  const participant = new Participant({
    nom: req.body.nom,
    prenom: req.body.prenom,
    adresse: req.body.adresse,
    email: req.body.email,
    societe:req.body.societe,
    poste:req.body.poste
  });
  
  participant.save().then(
    result => {
      res.status(200).json({
        message: 'added successfully'
      })
    }
  );
});
app.get('/Participants', (req, res) => {
  console.log('I am here for Participants');

  Participant.find((err, docs) => {
    if (err) {
      console.log('Error', err);
    }
    else {
      res.status(200).json({
        message: 'Here all objects',
        participants: docs
      });
    }
  });
});
app.post('/addFormateur', (req, res) => {
  console.log("Here in adding", req.body);
  const formateur = new Formateur({
    nom: req.body.nom,
    prenom: req.body.prenom,
    adresse: req.body.adresse,
    email: req.body.email,
    domaine:req.body.domaine
  });
  
  formateur.save().then(
    result => {
      res.status(200).json({
        message: 'added successfully'
      })
    }
  );
});
app.get('/Formateurs', (req, res) => {
  console.log('I am here for Formateurs');

  Formateur.find((err, docs) => {
    if (err) {
      console.log('Error', err);
    }
    else {
      res.status(200).json({
        message: 'Here all objects',
        formateurs: docs
      });
    }
  });
});
app.delete('/deletParticipant/:id', (req, res) => {
  console.log('here in delete', req.params.id);
  Participant.deleteOne({ _id: req.params.id }).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'Deleted successfully'
        })
      }
    }
  )
});
app.delete('/deletFormateur/:id', (req, res) => {
  console.log('here in delete', req.params.id);
  Formateur.deleteOne({ _id: req.params.id }).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'Deleted successfully'
        })
      }
    }
  )
});
app.put('/editFormateur/:id', (req, res) => {
  console.log('here in edit ', req.params.id);
  const formateur = new Formateur({
    _id: req.params.id,
    nom: req.body.nom,
    prenom: req.body.prenom,
    adresse: req.body.adresse,
    email: req.body.email,
    domaine: req.body.domaine
  });
  // update takes 2 params :  1st for search object and 2nd object to replace it
  Formateur.updateOne({ _id: req.params.id }, formateur).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'Updated Successfully'
        })
      }
    }
  )
});
app.put('/editParticipant/:id', (req, res) => {
  console.log('here in edit  participant', req.params.id);
  const participant = new Participant({
    _id: req.params.id,
    nom: req.body.nom,
    prenom: req.body.prenom,
    adresse: req.body.adresse,
    email: req.body.email,
    societe: req.body.societe,
    poste: req.body.poste

  });
  // update takes 2 params :  1st for search object and 2nd object to replace it
  Participant.updateOne({ _id: req.params.id }, participant).then(
    result => {
      if (result) {
        res.status(200).json({
          message: 'Updated Successfully'
        })
      }
    }
  )
});
module.exports = app;