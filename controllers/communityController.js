const db = require("../models");

// Defining methods
module.exports = {
  findAll: function(req, res) {
    db.Community
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Community
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    let newListingCommunity = {
        hospitalsCount: req.body.hospitalsCount,
        crimesCount: req.body.crimesCount,
        parksCount: req.body.parksCount,
        groceryStoresCount: req.body.groceryStoresCount,
        bestSchoolRating: req.body.bestSchoolRating
    }
    console.log(req.body);
    db.Community
      .create(newListingCommunity)
      .then(dbModel => {
        return db.Listing.findOneAndUpdate({ _id: req.body.listingId }, { community: dbModel._id }, { new: true });  
        })
      .then(dbListing => {
        res.json(dbListing);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Community
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Community
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};