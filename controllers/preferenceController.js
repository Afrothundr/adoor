const db = require("../models");

// Defining methods
module.exports = {
  findAll: function(req, res) {
    db.Preference
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Preference
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    let newUserPref = {
      caresAboutSchools: req.body.caresAboutSchools,
      caresAboutGroceryStores: req.body.caresAboutGroceryStores,
      caresAboutCrime: req.body.caresAboutCrime,
      caresAboutHospitals: req.body.caresAboutHospitals,
      zipcode: req.body.zipcode,
      budget: req.body.budget,
      bedrooms: req.body.bedrooms,
      bathrooms: req.body.bathrooms
    }
    console.log(req.body);
    db.Preference
      .create(newUserPref)
      .then(dbModel => {
        return db.User.findOneAndUpdate({ _id: req.body.userId }, { preferences: dbModel._id }, { new: true });  
        })
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Preference
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Preference
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};