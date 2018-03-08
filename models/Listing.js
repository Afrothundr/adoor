var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var listingSchema = new Schema({
    address: String,
    city: String,
    zipcode: String,
    latitude: Number,
    longitude: Number,
    bedrooms: Number,
    bathrooms: Number,
    price: Number,
    picturePath: [String],
    community: {
        type: Schema.Types.ObjectId,
        ref: "Community"
      }
});

// This creates our model from the above schema, using mongoose's model method
var Listing = mongoose.model("Listing", listingSchema);

// Export the Note model
module.exports = Listing;
