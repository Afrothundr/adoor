var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var preferenceSchema = new Schema({
    caresAboutSchools: Boolean,
    caresAboutGroceryStores: Boolean,
    caresAboutCrime: Boolean,
    caresAboutHospitals: Boolean,
    zipcode: Number,
    budget: Number,
    bedrooms: Number,
    bathrooms: Number
});

// This creates our model from the above schema, using mongoose's model method
var Preference = mongoose.model("Preference", preferenceSchema);

// Export the Note model
module.exports = Preference;