const db = require("../models");

module.exports = {
    findByZipcode: function(req, res) {
        db.Crime.find({"Zip Code" : req.params.zipcode})
        .then(crimes => {
            res.json(crimes);
        })
        .catch(err => console.log(err))
    }
};