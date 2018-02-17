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
    db.Match
      .create(req.body)
      .then(dbModel => {
        db.User.findOneAndUpdate({ _id: req.body.userId }, { matches: dbModel._id }, { new: true });
        res.json({"message": "match Added"})
        })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Match
      .findOneAndUpdate({ _id: req.body.id }, {$push: {matches: req.body.match}})
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