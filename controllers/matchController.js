const db = require("../models");

// Defining methods
module.exports = {
  findAll: function(req, res) {
    db.Match
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Match
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    let match = {
      history: req.body.match
    }
    db.Match
      .create(match)
      .then(dbModel => {
        return db.User.findOneAndUpdate({ _id: req.body.userId }, { matches: dbModel._id }, { new: true });
        })
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Match
      .findOneAndUpdate({ _id: req.body.id }, {$push: {history: req.body.match}})
      .then(dbModel => res.json({"message": "matches updated"}))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Match
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};