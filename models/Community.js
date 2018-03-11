var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var communitySchema = new Schema({
    hospitalsCount: Number,
    crimesCount: Number,
    parksCount: Number,
    groceryStoresCount: Number,
    schoolsCount: Number
});

// This creates our model from the above schema, using mongoose's model method
var Community = mongoose.model("Community", communitySchema);

// Export the Note model
module.exports = Community;