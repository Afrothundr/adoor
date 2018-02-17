const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sellerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: String,
  listings: [{
    type: Schema.Types.ObjectId,
    ref: "Listing"
  }]
});

const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;