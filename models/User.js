const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: {type:String},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  preferences: {
    type: Schema.Types.ObjectId,
    ref: "Preference"
  },
  matches: {
    type: Schema.Types.ObjectId,
    ref: "Match"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
