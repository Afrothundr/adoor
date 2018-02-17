const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  matches: [String]
});

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
