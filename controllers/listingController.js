const db = require("../models");

// Defining methods
module.exports = {
  findAll: function(req, res) {
    db.Listing
      .find(req.query)
      .populate('community')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Listing
      .findById(req.params.id)
      .populate('community')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    let newListing = {
        address: req.body.address,
        city: req.body.city,
        zipcode: req.body.zipcode,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        price: req.body.price,
        picturePath: req.body.picturePath
    }
    console.log(req.body);
    db.Listing
      .create(newListing)
      .then(dbModel => {
        return db.Seller.findOneAndUpdate({ _id: req.body.sellerId }, { $push:{ listings: dbModel }}, { new: true });  
        })
      .then(dbSeller => {
        res.json(dbSeller);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Listing
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Listing
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};